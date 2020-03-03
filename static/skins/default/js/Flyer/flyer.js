﻿var cookieName = "FlH";
var whereFlyIn = 0.5;
var upprev_closed = false;
var imgUrl; /* = "http://ghu.hit.gemius.pl/redot.gif?id=ByCQa2cBGwnwpGEN.Mi58oaArfGpEc_SeY5NbbJdRqj.s7/stparam=zgdrholrpp";*/
var kindOfFlyer = 'HVG_flyer';
var recommandationType = '';

/*// google analytic Campaign Tracking

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-776778-49']);
  _gaq.push(['_setAllowAnchor', true]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

// /google analytic Campaign Tracking*/


function flyerBannerCallback(response, pageIID) {
    //alert("na már itt is vagyunk... :)");
    //alert("flyerBannerCallback response->" + response + "<-");
    if (response && /\S/.test(response) && $("#banner_hack_by_category .bannerwrap"))
        $("#banner_hack_by_category .bannerwrap").remove(); //.css("display", "none");
    //$("#banner_hack_by_category").insertBefore('<a class="caption" title="Hirdetés" href="/ratecard"></a>');
    //$("#banner_hack_by_category").prepend($('<a class="caption" title="Hirdetés" href="/ratecard"></a>').fadeIn('slow'));
    if (response && /\S/.test(response))
        $("#banner_hack_by_category").prepend('<a class="caption" title="Hirdetés" href="/ratecard"></a>');
}

function scarabTargetedBanner(scarabCategory) {
    $.ajax({
        type: 'GET',
        url: "/ajax/scarabBanner",
        data: "categoryId=" + scarabCategory + "&cmSkinPath=/skins/default/controls/cms/scarabBanner/",
        cache: false,
        error: function (msg) {
            alert("Hiba történt a kommunikáció folyamán.");
        },
        success: function (msg) {
            /*alert("succes:" + msg);
            alert("we will write it over msg.length :" + msg.length);
            alert("we will write it over /\S/.test(msg) :" + /\S/.test(msg));*/

            //setTimeout(function () {
                if (msg && /\S/.test(msg)) {
                    //console.log("msg", msg);
                    var zonas = msg.split('#');
                    /*console.log("zonas", zonas);
                    console.log("zonas.length", zonas.length);*/
                    $.each(zonas, function (index, value) {
                        //console.log("index", index, "value", value);
                        if (!isNaN(parseInt(value))) {
                            //console.log("index", index, "parseInt(value)", parseInt(value), "it is number");
                            goa3jQuery("#banner_hack_by_category").goa(parseInt(value), {}, flyerBannerCallback);
                        }
                    });
                }
            //}, 5000);
        }
    });
}

function getScrollY() {
    scrOfY = 0;
    if( typeof( window.pageYOffset ) == "number" ) {
        scrOfY = window.pageYOffset;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        scrOfY = document.body.scrollTop;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
        scrOfY = document.documentElement.scrollTop;
    }
    return scrOfY;
}

function closeFlyer() {
    $("#upprev_box").stop().animate({ right: "-400px" });
    upprev_closed = true;
    upprev_hidden = true;
    $.cookie(cookieName, "no", { expires: 1, path: '/' }); // Sample 2
}

$(document).ready(function ($) {
    var upprev_hidden = true;
    if ($.cookie(cookieName)) {
        upprev_closed = true;
    }

    $(window).scroll(function () {
        var lastScreen = getScrollY() + $(window).height() < $(document).height() * whereFlyIn ? false : true;
        if (lastScreen && !upprev_closed) {
            $("#upprev_box").stop().animate({ right: "0px" });
            if (upprev_hidden && imgUrl) {
                var tmp = Math.floor(Math.random() * 1000000000);
                $("#upprev_box").prepend('<img id="flyerAV" style="position:absolute; top:-100px;left:-100px; visibility: hidden;" src="' + imgUrl + '&amp;' + tmp + '" border="0" />');
            }
            if (upprev_hidden) {
                if (recommandationType)
                    _gaq.push(['_trackEvent', kindOfFlyer + '_RT_' + recommandationType, 'showed']);
                else
                    _gaq.push(['_trackEvent', kindOfFlyer, 'showed']);
            }
            upprev_hidden = false;
        }
        /*else if (upprev_closed && getScrollY() == 0) {
        upprev_closed = false;
        }*/
        else if (!upprev_hidden) {
            upprev_hidden = true;
            $("#upprev_box").stop().animate({ right: "-400px" });
            $("#upprev_box img#flyerAV").remove();
        }
    });
    $("#upprev_close").click(function () {
        closeFlyer();
    });

});