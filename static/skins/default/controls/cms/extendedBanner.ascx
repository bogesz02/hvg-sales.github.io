<%@ Control Inherits="CMS.WebUtilities.Components.Controls.ExtendedBanner" Language="C#" %>

<asp:PlaceHolder runat="server" ID="plhContainer" Visible="false">
    <div id="bannerContainer" style="text-align:center;">
        <%--<table cellspacing="0" cellpadding="0" class="banner<%=DivID%>">
            <tr>
                <td>
                    <div class="bannerframe">
                        <div class="bannercontainer">
	                        <script type="text/JavaScript"> 
		                        <!--
	                            var ord = Math.round(Math.random() * 100000000);
	                            document.write('<sc' + 'ript language=JavaScript src="http://ad.adverticum.net/js.prm?zona=<%=ZoneID%>&ord=' + ord + '"><\/scr' + 'ipt>');
		                        //-->
	                        </script>
	                        <noscript>
		                        <a href="http://ad.adverticum.net/click.prm?zona=<%=ZoneID%>" target="_top">
			                        <img height="<%=Height%>" alt="Kattintson a hirdetésre!" src="http://ad.adverticum.net/img.prm?zona=<%=ZoneID%>" width="<%=Width%>" border="0" />
		                        </a>
	                        </noscript>
                            <!--<script type="text/javascript" src="http://imgs.adverticum.net/scripts/goa3/goa3.js"></script>

                            <div id="zone<%=ZoneID%>" class="goAdverticum"></div>-->
	                    </div>
	                </div>
                </td>
            </tr>
        </table>--%>
        <div class="banner<%=DivID%>">
            <div id="zone<%=ZoneID%>" class="goAdverticum"></div>
            <a href="/ratecard" title="Hirdetés" class="caption"></a>
        </div>
        <span id="countdown">&nbsp;</span>
    </div>    
    <script type="text/javascript">
        var bannerHaveSeenCookieName = "<%=cookieName %>";
        var countdown;
        var count = <%= ShowTimeLength %>;//20;
        $("#<%=AboveDivID %>").hide();
        $("#bannerContainer").css("width", $("#<%=AboveDivID %>").css("width"));
        $("#bannerContainer").css("height", $("#<%=AboveDivID %>").css("height"));

        function hideBanner() {
            $.cookie(bannerHaveSeenCookieName, "yes", { expires: 1, path: '/' });
            $('#bannerContainer').slideUp(200, function() {
            $("#<%=AboveDivID %>").fadeIn();
            //$("#<%=AboveDivID %>").slideDown(50);
                //$('#bannerContainer').remove();
            });            
            clearInterval(countdown);
        }
        $(function() {
            countdown = setInterval(function() {
                $("span#countdown").html(count + " másodperc a videó indulásáig");
                if (count == 0) {
                    //window.location = 'http://google.com';
                    hideBanner();
                }
                count--;
            }, 1000);
        });
        /*$(function() {
            //$("#<%=AboveDivID %>").hide();
            setTimeout('hideBanner()', <%= ShowTimeLength %>);
            //setTimeout('hideBanner()', 10000);
            //$('#bannerContainer').remove();
        });*/
    </script>
</asp:PlaceHolder>
<%--datum:  <%= DateTime.Now.ToString()%>--%>
<script runat="server">
    private const string cookieName = "BaV";

    protected override void OnPreRender(EventArgs e)
    {
        if ((Request.Cookies == null || Request.Cookies[cookieName] == null) && plhContainer != null)
        {
            plhContainer.Visible = true;
        }
        base.OnPreRender(e);
    }
</script>