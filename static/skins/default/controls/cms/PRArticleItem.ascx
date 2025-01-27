<%@ control inherits="CMS.WebUtilities.Components.Controls.GeneralArticleItem" language="C#" %>
<%@ import namespace="CMS.BusinessEntities" %>
<%@ Import Namespace="CMS.WebUtilities" %>

<asp:PlaceHolder runat="server" ID="plhArticle">
    <div class="boxcontainer pr-article">
	    <div class="box">
		    <div class="greyboxbody">
                <% if (!string.IsNullOrEmpty(ImageID) && this.LeadingArticle.DefaultImageID.HasValue)
                   {%>
			    <a href="<%=PageNavigator.GetPublicArticleUrl(LeadingArticle) %>" title="<%= LeadingArticle.Caption %>">
				    <img class="framed3" alt="<%= LeadingArticle.Caption %>" src="<%= getImageURL(ImageID, "31dfe436-e7c5-404f-806f-4d86a2b18dd0") %>" />
			    </a>
                <%} %>
						
			    <h5>
                    <a href="<%=PageNavigator.GetPublicArticleUrl(LeadingArticle) %>" title="<%=LeadingArticle.Caption %>">
                        <%=LeadingArticle.Caption %>
                    </a>
                </h5>
			    <p><%=ControlHelper.CheckMaxLength(LeadingArticle.Lead,203) %></p>
		    </div>
	    </div>
    </div>

    <%if (!string.IsNullOrEmpty(AdvertCode) && !QueryStringParser.Exist("articleWebID"))
      {%>
        <div style="display:none">
            <%=HttpUtility.UrlDecode(AdvertCode).Replace("&quot;", "\"")%>
        </div>  
    <%} %>

    <img src="http://images.hvg.hu/static/skins/default/img/adlabel_horizontal.png" alt="" class="pr-article-caption" />
    <%--<img <%= string.Format("data-href=\"{0}\" src=\"{1}\"",
                    getImageURL(ImageID, "28fbf03d-2149-4967-a312-d54bfda2a105"), getJAILImageUrl()) %>"
                    title="<%= this.LeadingArticle.Caption %>" />               
                <noscript>
                    <img src="<%= getImageURL(ImageID, "28fbf03d-2149-4967-a312-d54bfda2a105") %>"                        
                        title="<%= this.LeadingArticle.Caption %>">
    </noscript> --%>
</asp:PlaceHolder>

<script runat="server">
    public bool IsPREnabled { get; set; }
    public string AdvertCode { get; set; }

    private string getJAILImageUrl()
    {
        return "/skins/default/img/trans.png";//"http://hvg.hu/skins/default/img/hvghulogo.jpg";
    }
    
    private string getImageURL(string imageID, string temViewID)
    {
        string ret = "/skins/default/img/trans.png";
        if (!string.IsNullOrEmpty(imageID))
            ret = PageNavigator.ImageURL(RequestContext.CurrentSite, imageID, temViewID);
        else if (this.LeadingArticle.DefaultImageID.HasValue)
            ret = PageNavigator.ImageURL(RequestContext.CurrentSite, this.LeadingArticle.DefaultImageID.Value.ToString(), temViewID);
        return ret;
    }
    
    protected override void OnPreRender(EventArgs e)
    {
        if (plhArticle != null)
            plhArticle.Visible = this.Visible && this.IsPREnabled && !string.IsNullOrEmpty(ArticleID) && LeadingArticle != null;
        base.OnPreRender(e);
    }
</script>