﻿<%@ Control Language="C#" %>
<div class="boxcontainer">
    <div class="box">
        <div class="boxtitle" id="main-nagyitas">
            <h6><a href="/nagyitas" title="további Nagyítás-sorozataink" style="color: #4B4B4B;">NAGYÍTÁS</a></h6>            
            <a href="#main-nagyitas-1"><img src="<%=System.Configuration.ConfigurationSettings.AppSettings["StaticServer"]%>/skins/default/img/dot1.gif" alt="" /></a>
            <a href="#main-nagyitas-2"><img src="<%=System.Configuration.ConfigurationSettings.AppSettings["StaticServer"]%>/skins/default/img/dot0.gif" alt="" /></a>
            <a href="#main-nagyitas-3"><img src="<%=System.Configuration.ConfigurationSettings.AppSettings["StaticServer"]%>/skins/default/img/dot0.gif" alt="" /></a>
            <a href="#main-nagyitas-4"><img src="<%=System.Configuration.ConfigurationSettings.AppSettings["StaticServer"]%>/skins/default/img/dot0.gif" alt="" /></a>
            <a href="#main-nagyitas-5"><img src="<%=System.Configuration.ConfigurationSettings.AppSettings["StaticServer"]%>/skins/default/img/dot0.gif" alt="" /></a>
        </div>   
        <div id="main-nagyitas-wrapper" style="height: 401px; overflow: hidden; position: relative; z-index:15;">
        <%--<div id="main-nagyitas-wrapper" style="height: 383px; overflow: hidden;">--%>
            <div id="main-nagyitas-scroller" style="position:absolute; z-index:10; width:4000px;">
            <%--<div id="main-nagyitas-scroller" style="width:4000px;">--%>
                <CMSControls:XmlControl DocumentSource="~/cachedData/nagyitas.xml" TransformSource="~/skins/default/xsl/nagyitas.xslt" runat="server" />
            </div>       
        </div>
        <script language="javascript" type="text/javascript">
            $(function() {
                $('#main-nagyitas a').click(function () {
                    $('#main-nagyitas a img').attr("src", "<%=System.Configuration.ConfigurationSettings.AppSettings["StaticServer"]%>/skins/default/img/dot0.gif");
                    $(this).children().attr("src", "<%=System.Configuration.ConfigurationSettings.AppSettings["StaticServer"]%>/skins/default/img/dot1.gif");
                    $("#main-nagyitas-wrapper").scrollTo($($(this).attr("href")), 500);
                    return false;
                });
            });
        </script>
    </div>
</div>