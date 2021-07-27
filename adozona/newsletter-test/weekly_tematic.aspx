<%@ Page Language="C#" Inherits="CMSClassTemplateLibrary.Controls.Newsletter" %>

<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.Linq" %>
<%@ Import Namespace="CMS.BusinessEntities" %>
<%@ Import Namespace="CMS.BusinessProcess" %>
<%@ Import Namespace="CMS.BusinessProcess.Managers" %>
<%@ Import Namespace="CMS.Utilities" %>
<%@ Import Namespace="CMS.WebUtilities" %>
<%@ Import Namespace="AdozonaComponents" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>
		<CMSControls:PageLayoutControl ID="PageLayoutControl3" runat="server" PageID="9371" Visible="True" TemplateItemName="pageLayout" IsCachingEnabled="true" CacheSeconds="5" />  
	</title>
	<meta name="Keywords" content="{@sid}"/>
</head>
<body style="margin:0;padding:0;background:#F0F0F0;">
	<table cellspacing="0" cellpadding="0" style="margin:0;padding:0;width:100%;font-family:'Arial';font-size:14px;color:#343434;">
	<tr>
		<td style="padding:10px;background:#484848;font-size:0;border-bottom:5px solid #C10000;">
			<center>
				<table cellspacing="0" cellpadding="0" style="margin:0 auto;width:570px;font-family:'Arial';font-size:14px;text-align:left;">
				<tr>
					<td valign="bottom" style="padding:0px;">
						<a href="<%=FullLink("/") %>" target="_blank" style="border:none;text-decoration:none"><img src="http://adozona.hu/skins/default/images/adozonalogo.jpg" alt="" style="border:none" /></a>
					</td>
					<td valign="bottom" style="padding:0px;">
						<p style="margin:0;font-size:18px;text-align:right;font-weight:bold;color:#D9D9D9">Fontos tudnivaló</p>
					</td>
				</tr>
				</table>
			</center>
		</td>
	</tr>
	<tr>
		<td style="">
			<center>
				<table cellspacing="0" cellpadding="0" style="margin:0 auto;width:610px;font-family:'Arial';font-size:14px;color:#343434;background:#ffffff;border-left:1px solid #C0C0C0;border-right:1px solid #C0C0C0;text-align:left;">

				<%-- Heti hirlevel fejlec --%>
				<CMSControls:PageLayoutControl ID="PageLayoutControl1" runat="server" PageID="9230" Visible="True" TemplateItemName="pageLayout" IsCachingEnabled="true" CacheSeconds="5" />  
				<tr>
					<td style="border-bottom:1px solid #E9E9E9;padding:0 15px;">
						<%-- Heti hirlevel --%>
						<CMSControls:PageLayoutControl ID="PageLayoutControl2" runat="server" PageID="9231" Visible="True" TemplateItemName="pageLayout" IsCachingEnabled="true" CacheSeconds="5" />  
					</td>
				</tr>
				<%-- Heti hirlevel lablec --%>
				<tr>
				<td style="background:#333333;padding:10px 15px;color:#D9D9D9;border-top:5px solid #C10000;">

					<p style="margin:10px 0;font-size:12px;">Jelen üzenet címzettje: <a style="color:#f5f5f5;text-decoration:none;" href="mailto:{@email}">{@email}</a>. Ezt az értesítőt az <a style="color:#f5f5f5;text-decoration:none;" href="<%=FullLink("/") %>" target="_blank">Adózóna.hu</a> oldalon történt korábbi regisztrációjával összefüggésben küldtük Önnek.</p>
					<p style="margin:10px 0;font-size:12px;">Ha még nincs feliratkozva, <a style="color:#f5f5f5;text-decoration:none;font-weight:bold;" href="https://kulcs.hvg.hu/Register.aspx#{@campaign}" target="_blank">itt megteheti</a>.</p>

					<p style="margin:10px 0;font-size:12px;">Leiratkozáshoz <a style="color:#f5f5f5;text-decoration:none;font-weight:bold;" href="https://kulcs.hvg.hu/nlConf/tem_hirlevel_ado_le/{@sid}{@campaign}" target="_blank">kattintson ide</a>!</p>
					<p style="margin:10px 0;font-size:12px;">© Minden jog fenntartva! 2009 - <%=DateTime.Now.Year %> HVG Kiadó Zrt.</p>
				</td>
				</tr>
				</table>
			</center>
		</td>
	</tr>
	</table>
</body>
</html>

<script runat="server">
    protected override void OnPreLoad(EventArgs e)
    {
        ManualNewsletterId = new Guid("90b0826d-99fd-4da3-bf02-3e9f239cfd99");
        AutoNewsletterId = new Guid("c26bd775-cc77-4be1-9926-57835348a778");
        NewsletterLeadPageItemId = 9231;

        CheckSouldBeResponse();
    }
</script>