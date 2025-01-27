function blink(time, interval) {
    var timer = window.setInterval(function () {
        $('div.articlelist li img').animate({ opacity: 0.6 }, 400);

        window.setTimeout(function () {
            $('div.articlelist li img').animate({ opacity: 1 }, 400);
        }, 0);
    }, interval);

    window.setTimeout(function () { clearInterval(timer); }, time);
}
blink(1000000000, 13000);

// vim: set et :
function isiPad(){
    return (navigator.platform.indexOf("iPad") != -1);
}
function isAndroid() {
    return (navigator.userAgent.indexOf("Android") != -1);
}
var hvgScroll,
    RightSlider = {
        maxRight: null,
        startRight: null,
        startPos: null,
        currentPos: null,
        currentRight: null,
        wrapper: null,
        slider: null,
        sliding: false
    },
    Fresh = {
        button: null,
        container: null
    };
/*
if (isiPad()) {
    function initScroll() {
        //document.getElementById('pagewrapper').style.height = (window.innerHeight - 75) + 'px';
        hvgScroll = new iScroll('pagewrapper');
    }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false)
    document.addEventListener('DOMContentLoaded', initScroll, false);
}*/

    jQuery(document).ready(function () {
        jQuery.each(jQuery.browser, function (i, val) {
            jQuery('body').addClass(i);
        });
        if (!jQuery.browser.webkit) jQuery('body').addClass('non-webkit');
        if (isiPad()) jQuery('body').addClass('ipad');

        /* Lazy load JAIL */
        //$('.zoompicitem img').asynchImageLoader({ effect: "fadeIn", speed: 1600 });
        if ($('img[data-href]') && $('img[data-href]').length > 0) {
            $('img[data-href]').asynchImageLoader({ effect: "fadeIn", speed: 1600 });
            //alert('.zoompicitem img: ' + $('.zoompicitem img').length);
        }
        //    if ($('.picture img') && $('.picture img').length > 0) {
        //        $('.picture img').asynchImageLoader({ effect: "fadeIn", speed: 1600 });
        //        //alert('.picture img: ' + $('.picture img').length);
        //    }

        /* Fixed header with hash (anchor) navigation fix.  */
        if (location.hash.length > 1 && location.hash == "#c") {
            /* Scrooling immediately after page load may results incorrect position, because Adverts 
            rendered a bit later by dynamic linked, external javascript.
            Possible soultions:
            1. Listen to a complete event of a advert-lazy-load plugin
            2. Wait for some miliseconds until when the Advert prospectively already rendered (KT 2011.12.04.)*/
            var _timer = window.setTimeout(function () {
                $.scrollTo($("#comments"), { offset: { top: -100} });
            }, 1000);
        }
        $("._jqScroll").bind('click', function () {
            $.scrollTo($(this).attr('href'), { duration: 300, offset: { top: -100} });
        });

        function inMenu(el, id) {
            var p = el.parent();
            while ((p.attr('nodeName') != 'BODY' || p.attr('id') != id)) {
                p = p.parent();
            }
            return p.attr('id') == id;
        }

        function closeClick(el, fade, cb) {
            jQuery(document).one('click.close', function (ev) {
                if (!(ev.target instanceof HTMLInputElement)) {
                    checkOpened("")
                    if (cb) cb();
                } else {
                    closeClick(el, fade, cb);
                }
            });
        }

        var opened = '';
        function checkOpened(current) {
            if (opened && opened != current) jQuery(opened).click();
        }
        function clearOpened() {
            opened = '';
        }
        // menu
        jQuery('#menu_control').click(function (ev) {
            checkOpened('#menu_close');
            ev.preventDefault();
            var menu = jQuery('#menu');
            menu.slideToggle('fast', function (e) {
                if (menu.attr('style').indexOf('block') != -1) {
                    opened = '#menu_close';
                    closeClick(menu);
                }
            });
        });
        jQuery('#menu_close').click(function (ev) {
            clearOpened();
            ev.preventDefault();
            jQuery('#menu').slideUp();
            jQuery(window).unbind('click.close');
        });

        // user control
        jQuery('#user_control').click(function (ev) {
            checkOpened('#cancel');
            ev.preventDefault();
            var menu = jQuery('#user_dropdown');
            menu.slideToggle('fast', function () {
                if (menu.attr('style').indexOf('block') != -1) {
                    opened = '#cancel';
                    closeClick(menu);
                }
            });
        });
        jQuery('#cancel').click(function (ev) {
            clearOpened();
            ev.preventDefault();
            jQuery('#user_dropdown').slideUp();
            jQuery(window).unbind('click.close');
        });

        // fresh box
        jQuery('#icon_fresh').click(function (ev) {
            checkOpened('#fresh_close');
            ev.preventDefault();
            var link = jQuery(this);
            link.addClass('selected');
            var menu = jQuery('#fresh_container');
            menu.fadeToggle(300, function () {
                if (menu.attr('style').indexOf('block') != -1) {
                    opened = '#fresh_close';
                    closeClick(menu, true, function () { link.removeClass('selected'); });
                }
            });
        });
        jQuery('#fresh_close').click(function (ev) {
            clearOpened();
            ev.preventDefault();
            jQuery('#icon_fresh').removeClass('selected');
            $("#icon_fresh .badge").hide(500, function () {
                jQuery('#icon_fresh').html('');
            });
            jQuery('#fresh_container').fadeOut(300);
            jQuery(window).unbind('click.close');
        });

        if (isAndroid() && window.innerHeight < 600) jQuery('body').addClass('small');

        if (isiPad()) {

            jQuery('#page_2top').click(function (e) { e.preventDefault(); hvgScroll.scrollTo(0, 0); });
            function setRightbar() {
                document.getElementById('rightwrapper').style.right = window.innerHeight < window.innerWidth ?
                (document.body.className.indexOf('norightbar') != -1 ? '-360px' : '0px') :
                (document.body.className.indexOf('norightbar') != -1 ? '-360px' : '-360px');
                //rotationFunctions();
            }
            function setHeight() {
                var headerH = document.getElementById('header_wrapper').offsetHeight,
                    footerH = 0, // document.getElementById('footer').offsetHeight,
                    wrapperH = window.innerHeight; // - headerH - footerH;
                if (window.orientation == 0) {
                    document.getElementById('rightwrapper').style.height = document.getElementById('pagescroller').offsetHeight + 'px';
                }
                document.getElementById('pagewrapper').style.height = wrapperH + 'px';
                setRightbar();
            }
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            setTimeout(function () {
                setHeight();
                hvgScroll = new iScroll('pagescroller', { desktopCompatibility: true });
                window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function () {
                    setHeight();
                    hvgScroll.refresh();
                }, false);
            }, 100);
            //setTimeout(function() {
            //hvgScroll = new iScroll('pagewrapper', { hScrollbar: false });
            //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false)
            //document.onunload = function() { hvgScroll.destroy(); hvgScroll = null; }
            //window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function() { 
            //    document.getElementById('pagewrapper').style.height = window.innerHeight + 'px';
            //    hvgScroll.refresh();
            //}, false);
            //}, 100);
        } else {
            //hackForFixBanner();
        }
        RightSlider.wrapper = jQuery('#rightwrapper');
        RightSlider.slider = jQuery('#rightbar_slider');
        RightSlider.maxRight = RightSlider.currentRight = -360; //parseInt( RightSlider.wrapper.css( 'right' ) );
        RightSlider.slider.click(function (e) { e.preventDefault(); })
        //    .mousedown( slide_start )
    .bind('touchstart', slide_start);
    });

function hackForFixBanner() {
    var contentHeight = 0;
    jQuery('#contentwrapper > *').each(function (i, e) {
        contentHeight += e.offsetHeight;
    });
    if (jQuery('#rightbar').prop('offsetHeight') < contentHeight) {
        // fixed script
        var fixbar = jQuery('#fixbar');
        var headerWrapper = jQuery('#header_wrapper');
        if (fixbar.length && headerWrapper.length) {
            var windowInnerHeight = jQuery(window).height();
            var pos = fixbar.offset().top;
            var headerHeight = headerWrapper.prop('offsetHeight');
            var rightbarAdBox = jQuery('#fixbar').children('#rightbar_ad');
            var rightBoxes = rightbarAdBox.siblings('.box');
            if (rightBoxes.length > 0) {
                var firstBoxPos = headerWrapper.prop('offsetHeight') + rightbarAdBox.prop('offsetHeight');
                var firstBoxHeight = jQuery(rightBoxes[0]).outerHeight(true);
                var headerBoxesHeight = firstBoxHeight + firstBoxHeight;

                for (var hidden = 1; hidden < rightBoxes.length; ++hidden) {
                    headerBoxesHeight += jQuery(rightBoxes[hidden]).outerHeight(true);
                    if (headerBoxesHeight > windowInnerHeight) { break; }

                }
                for (var i = hidden; i < rightBoxes.length; ++i) {
                    jQuery(rightBoxes[i]).hide();
                }
                if (firstBoxPos + firstBoxHeight > windowInnerHeight) {
                    var firstBoxList = jQuery(rightBoxes[0]).children();
                    if (firstBoxList.length > 0) {
                        var firstBoxItems = firstBoxList.children();
                        for (var i = 0; i < firstBoxItems.length; ++i) {
                            firstBoxPos += jQuery(firstBoxItems[i]).outerHeight(true);
                            if (firstBoxPos > windowInnerHeight) { break; }
                        }
                        for (; i < firstBoxItems.length; ++i) {
                            jQuery(firstBoxItems[i]).hide();
                        }
                    }
                }
            }
            jQuery(window).scroll(function (ev) {
                var scrollPos = jQuery(window).scrollTop() + headerHeight;
                if (!fixbar.hasClass('fixedbar') && (scrollPos > pos)) {
                    fixbar.addClass('fixedbar');
                    fixbar.css('top', headerHeight);
                } else {
                    if (fixbar.hasClass('fixedbar') && (scrollPos < pos)) {
                        fixbar.removeClass('fixedbar');
                        fixbar.css('top', pos);
                    }
                }
            });
        }
        // fixed script END
    }
}

function slide_click(e) {
    if (!jQuery(e.target).parents('#rightwrapper').length && jQuery('#rightbar_slider').height()) {
        RightSlider.wrapper.animate({ right: RightSlider.maxRight + 'px' });
        RightSlider.currentRight = RightSlider.maxRight;
        jQuery(document).unbind('click', slide_click);
    }
}
function slide_stop(e) {
    if (RightSlider.currentPos == RightSlider.startPos) {
        RightSlider.currentRight = RightSlider.currentRight > RightSlider.maxRight ? RightSlider.maxRight : 0;
        RightSlider.wrapper.animate({ right: RightSlider.currentRight + 'px' }, { complete: function() { RightSlider.sliding = false; } });
    }
    else RightSlider.sliding = false;
    jQuery(document)[(RightSlider.currentRight > RightSlider.maxRight ? '' : 'un') + 'bind']('click', slide_click);
    jQuery(document)
    //    .unbind( 'mousemove', slide_move ).unbind( 'mouseup', slide_stop )
    .unbind('touchmove', slide_move).unbind('touchend', slide_stop).unbind('touchcancel', slide_stop);
}
function slide_start(e) {
    RightSlider.sliding = true;
    RightSlider.startPos = RightSlider.currentPos = e.pageX;
    RightSlider.startRight = parseInt(RightSlider.wrapper.css('right'));
    jQuery(document)
    //    .mousemove( slide_move ).mouseup( slide_stop )
    .bind('touchmove', slide_move).bind('touchend', slide_stop).bind('touchcancel', slide_stop);
}
function slide_move(e) {
    if (e.pageX != RightSlider.currentPos) {
        RightSlider.currentRight = Math.min(Math.max(RightSlider.startRight + RightSlider.startPos - e.pageX, RightSlider.maxRight), 0);
        RightSlider.wrapper.css('right', RightSlider.currentRight + 'px');
        RightSlider.currentPos = e.pageX;
    }
}