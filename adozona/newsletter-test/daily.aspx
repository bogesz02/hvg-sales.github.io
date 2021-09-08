<%@ Page Language="C#" %>

<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.Linq" %>
<%@ Import Namespace="CMS.BusinessEntities" %>
<%@ Import Namespace="CMS.BusinessProcess" %>
<%@ Import Namespace="CMS.BusinessProcess.Managers" %>
<%@ Import Namespace="CMS.Utilities" %>
<%@ Import Namespace="CMS.WebUtilities" %>
<%@ Import Namespace="AdozonaComponents" %>
<%@ Import Namespace="ERA_Client" %>
<%@ Import Namespace="ERA_Model" %>
<%@ Import Namespace="CMS.BusinessProcess.Managers.PublicUser" %>
<%@ Import Namespace="CMSClassTemplateLibrary.Services" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Adózóna napi értesítő</title>
</head>
<body style="margin: 0; padding: 0; background: #F0F0F0;">
	<table cellspacing="0" cellpadding="0" style="margin: 0; padding: 0; width: 100%; font: 14px Arial; color: #343434;">
		<tr>
			<td width="570" align="center" style="padding: 10px 0; background: #484848; font-size: 0; border-bottom: 5px solid #C10000;">

					<center>
				<table cellspacing="0" cellpadding="0" style="margin: 0 auto; width: 570px; font-family: 'Arial'; font-size: 14px;">
					<tr>
						<td valign="bottom" style="padding: 0;">
							<a href="#" target="_blank" style="border: none; text-decoration: none">
								<img src="<%=DomainLink %>/skins/default/images/adozonalogo.jpg" alt="" style="border: none" /></a>
						</td>
						<td valign="bottom" style="padding: 0;">
							<p style="margin: 0; font-size: 14px; text-align: right; font-weight: bold;"></p>
						</td>
					</tr>
				</table>
					</center>
			</td>
		</tr>
		<tr>
			<td width="600" align="center">
					<center>

				<table cellspacing="0" cellpadding="0" style="margin: 0 auto; width: 598px; font: 14px Arial; color: #343434; background: #ffffff; border-left: 1px solid #C0C0C0; border-right: 1px solid #C0C0C0;">
					<tr>
						<td style="border-bottom: 1px solid #E9E9E9; padding: 20px;">

							<table cellspacing="0" cellpadding="0" style="margin: 0 auto; width: 560px; font-family: 'Arial'; font-size: 14px; color: #343434;">
								<tr>
									<td>
										<p style="margin: 0; font-size: 16px;"><a style="color: #343434; text-decoration: none;" target="_blank">Tisztelt <span style="font-weight: bold;"><%=UserName %></span>!</a></p>
									</td>

									<td>
										<p style="margin: 0; font-size: 14px; text-align: right;"><a style="color: #7F7F7F; text-decoration: none;" target="_blank"><%=DateTime.Now.ToString("yyyy. MMMM d.") %></a></p>
									</td>
								</tr>
							</table>

							<p style="margin: 15px 0; font-size: 14px;">Személyre szabott Adózóna napi értesítő a frissített kalkulátorokról, a feltett vagy megjelölt kérdéseire érkező válaszokról, az Önnek fontos határidők közeledtéről, valamint arról, ha olyan cikkhez érkezik új komment, amihez korábban hozzászólt.</p>

							<asp:Repeater runat="server" ID="rptEvents">
								<HeaderTemplate>
									<b>Események amelyekre feliratkozott:</b>
									<table style="width: 100%; font-family: 'Arial'; font-size: 12px; color: rgb(52,52,52); margin: 0 0 15px;" cellpadding="0" cellspacing="0" border="0">
								</HeaderTemplate>

								<ItemTemplate>
									<tr>
										<td style="border-bottom: 1px solid #CCCCCC; padding: 15px 0 10px;" width="60" valign="top">


											<table cellpadding="0" cellspacing="0" border="0" width="44" style="font-family: 'Arial'; text-align: center;">
												<tr>
													<td style="background: #AF0909; color: #fff; text-transform: uppercase; padding: 4px 6px; font-size: 11px;">
														<%# ((ArticleEventInfoEntity)Container.DataItem).EventDate.ToString("MMM").TrimEnd('.')%>
													</td>
												</tr>

												<tr>
													<td style="border: 1px solid #DADADA; padding: 5px 0; color: #004276; text-decoration: none; font-size: 18px; font-weight: bold;">
														<%# ((ArticleEventInfoEntity)Container.DataItem).EventDate.Day%>
														</a>
													</td>
												</tr>
											</table>

										</td>

										<td style="border-bottom: 1px solid #CCCCCC; padding: 10px 10px 10px 0;">
											<h2 style="margin: 0 0 5px; font-size: 14px;">
												<a style="color: #004276; text-decoration: none;" href="<%# FullLink(PageNavigator.GetPublicArticleMediatypeUrl(((ArticleEventInfoEntity)Container.DataItem).Article)) %>" title=""><%# ((ArticleEventInfoEntity)Container.DataItem).Article.Caption%></a>
											</h2>
											<p style="margin: 0; color: #929292; font-size: 10px; font-weight: bold; text-transform: uppercase;"><%# ((ArticleEventInfoEntity)Container.DataItem).EventType.Description%></p>
										</td>
									</tr>
								</ItemTemplate>
								<FooterTemplate>
									</table>

								</FooterTemplate>
							</asp:Repeater>
							<asp:Repeater runat="server" ID="rptInterestedQuestions">
								<HeaderTemplate>
									<table style="width: 100%; font: 14px 'Arial'; color: #343434;" cellpadding="0" cellspacing="0" border="0">
										<tr>
											<td width="60" valign="top">
												<img src="<%=DomainLink %>/skins/default/images/icon-szakerto.jpg" alt="Kérdés ikon" style="border: 0;" border="0" />
											</td>
											<td style="padding: 0 0 15px;">
								</HeaderTemplate>

								<ItemTemplate>
									<table style="width: 100%; font: 14px 'Arial'; color: #343434;" cellpadding="0" cellspacing="0" border="0">
										<tr>
											<td style="padding: 0 0 15px;">
												<b><%# ((GrouppedQuestion)Container.DataItem).Title %></b><br />
												<asp:Repeater runat="server" ID="rptQuestionGroup" DataSource="<%# ((GrouppedQuestion)Container.DataItem).GroupedComments %>">
													<ItemTemplate>
														<a style="color: #c10000; text-decoration: none;" href="<%# FullLink("/kerdesek/" + ((GrouppedComment)Container.DataItem).Article.WebID ) %>">
															<%# ((GrouppedComment)Container.DataItem).Article.Caption %></a>
														<asp:PlaceHolder runat="server" Visible="<%# ((GrouppedComment)Container.DataItem).Count > 0 %>">&mdash;
							                 <%# ((GrouppedComment)Container.DataItem).Count %> db hozzászólás                             
														</asp:PlaceHolder>
														<br />
													</ItemTemplate>

													<FooterTemplate>
														</td>
								                </tr>
							                </table>
													</FooterTemplate>
												</asp:Repeater>
								</ItemTemplate>

								<FooterTemplate>
									</td>
								</tr>
							</table>
								</FooterTemplate>
							</asp:Repeater>
						</td>
					</tr>
					<tr>
						<td style="background: #333333; padding: 10px 20px; color: #D9D9D9;">
							<p style="margin: 10px 0; font-size: 12px;">Jelen üzenet címzettje: <a style="color: #f5f5f5; text-decoration: none;" href="mailto:<%=EraUser.Email %>"><%=EraUser.Email %></a>. Ezt az értesítőt az <a style="color: #f5f5f5; text-decoration: none;" href="<%=FullLink("/") %>" target="_blank">Adózóna.hu</a> oldalon történt korábbi regisztrációjával összefüggésben küldtük Önnek.</p>

							<p style="margin: 10px 0; font-size: 12px;">Ez egy automatikusan generált e-mail üzenet, kérjük, ne válaszoljon rá.</p>

							<p style="margin: 10px 0; font-size: 12px;">© Minden jog fenntartva! 2009 - <%=DateTime.Now.ToString("yyyy") %> HVG Kiadó Zrt.</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>

<script runat="server">

    string DomainLink = "";
    PublicUserEntity EraUser = null;
    string UserName = "Felhasználónk";
    private CacheService cacheService;


    /// <summary>
    /// For Events and Calculator (and any list in the future where the 'release date' can be set)
    /// </summary>
    DateTime day { get; set; }

    /// <summary>
    /// For answered question and comments on date (and any list in the future where the a creation date is
    /// set to 'now', when the content is acually created
    /// </summary>
    DateTime yesterday
    {
        get
        {
            return day.AddDays(-1);
        }
    }

    class GrouppedQuestion
    {
        public string Title { get; set; }
        public List<GrouppedComment> GroupedComments { get; set; }
    }

    class GrouppedComment
    {
        public string ID;
        public ArticleEntity Article;
        public int Count;

        public GrouppedComment(string id, ArticleEntity article, int count)
        {
            this.ID = id;
            this.Article = article;
            this.Count = count;
        }
    }

    protected string FullLink(string relativeUrl)
    {
        return string.Format("{0}{1}", DomainLink, relativeUrl + "{@campaign}");
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        cacheService = new CacheService("daily_newletter_");

        try
        {
            int shiftDays = 0;
            int.TryParse(Request["shiftDays"], out shiftDays);

            day = DateTime.Now.Date.AddDays(shiftDays);

            DomainLink = "http://" + Request.Url.Host;

            string userID = Request["uid"] ?? ERAHelper.GetCurrentUserID();

            var provider = ManagerFactory.PublicUserProvider;

            /* //ez is lehetne jó megoldás, de ez nem token alapu vizsgálat... a ticketben pedig az szerpelt (http://jira.hvg.hu/browse/AZ-152)
			string role = ConfigurationManager.AppSettings["ERARole_FizetosUser"];
			if (!RequestContext.IsUserInRole(role, new Guid(userID)))
			{
				return;
			}*/

            string roleId = CMSClassTemplateLibrary.Configuration.Constans.SubcribleRoleId; //ConfigurationManager.AppSettings["ERARole_FizetosUser_Role_ID"];

            var roleGuid = new Guid(roleId);
            var userIdGuid = new Guid(userID);

            var tokens = provider.GetUserTokens(userIdGuid, roleGuid).ToList();

            tokens = tokens.Where(t=>
                !t.IsDeleted && t.StartDate.HasValue && t.ExpireDate.HasValue
                && t.ExpireDate.Value > DateTime.Now && t.StartDate.Value < DateTime.Now)
                .ToList();

            if (!tokens.Any())
            {
                Response.End();
                return;
            }

            EraUser = provider.GetUserByID(userID);

            if (EraUser != null && !String.IsNullOrEmpty(EraUser.LastName) && !String.IsNullOrEmpty(EraUser.FullName))
            {
                UserName = EraUser.LastName + " " + EraUser.FirstName;
            }


            int itemCount = 0;

            //
            // Feliratkozott esemenyek
            //
            List<ArticleEventInfoEntity> events = AlertHelper.GetEventAlertsForDailyEmail(userID, day);
            if (events != null)
            {
                itemCount += events.Count;
            }

            List<string> followedQuestions = SubscriptionHelper.GetSubscribedQuestions(userID);
            if (followedQuestions == null)
            {
                followedQuestions = new List<string>();
            }

            List<QuestionEntity> allAnsweredQuestion = QAHelper.GetAnsweredQuestionsOnDate(yesterday);

            List<CommentEntity> commentsThisDay = QAHelper.GetQuestionCommentsOnDate(yesterday);

            List<string> commentedArticlesList = QAHelper.GetQuestionsCommentedByUser(userID);
            List<string> askedQuestionsList = QAHelper.GetQuestionsAskedByUser(userID);

            Guid? userGuid = new Guid(userID);


            #region Questions and their comments

            //
            // Kovetett kerdesek: amikre valasz erkezett
            //
            List<GrouppedComment> followedAnswered = allAnsweredQuestion
                .Where(q => followedQuestions.Contains(q.QuestionArticleID))
                .Select(q => new GrouppedComment(q.QuestionArticleID, q.QuestionArticle, 0))
                .ToList();

            itemCount += followedAnswered.Count;

            List<string> skipIDs = new List<string>();

            //
            // Aznapi kommentek -> amit kerdezett
            //
            List<GrouppedComment> askedQuestionsComments = (from c in commentsThisDay
                                                            where askedQuestionsList.Contains(c.ArticleID)
                                                            group c by c.ArticleID into g
                                                            select new GrouppedComment(
                                                                g.Key,
                                                                ManagerFactory.ContentManagerProvider.GetArticle(RequestContext.CurrentSite, g.Key),
                                                                g.Count()
                                                             )).ToList();

            foreach (GrouppedComment grp in askedQuestionsComments)
            {
                DateTime? lastComment = (from c in commentsThisDay
                                         where c.ArticleID == grp.ID && c.HVGUserId == userGuid
                                         select c.cDate).Max();

                if (lastComment != null)
                {
                    grp.Count = (from c in commentsThisDay
                                 where c.ArticleID == grp.ID && c.cDate > lastComment.Value
                                 select c.cDate).Count();
                }
            }

            askedQuestionsComments.RemoveAll(g => g.Count == 0);

            itemCount += askedQuestionsComments.Count;

            skipIDs.AddRange(from obj in askedQuestionsComments select obj.ID);

            //
            // Aznapi kommentek -> amit kovet
            //
            List<GrouppedComment> followedArticlesComments = (from c in commentsThisDay
                                                              where followedQuestions.Except(skipIDs).Contains(c.ArticleID)
                                                              group c by c.ArticleID into g
                                                              select new GrouppedComment(
                                                                g.Key,
                                                                ManagerFactory.ContentManagerProvider.GetArticle(RequestContext.CurrentSite, g.Key),
                                                                g.Count()
                                                              )).ToList();

            foreach (GrouppedComment grp in followedArticlesComments)
            {
                DateTime? lastComment = (from c in commentsThisDay
                                         where c.ArticleID == grp.ID && c.HVGUserId == userGuid
                                         select c.cDate).Max();

                if (lastComment != null)
                {
                    grp.Count = (from c in commentsThisDay
                                 where c.ArticleID == grp.ID && c.cDate > lastComment.Value
                                 select c.cDate).Count();
                }
            }

            followedArticlesComments.RemoveAll(g => g.Count == 0);

            itemCount += followedArticlesComments.Count;

            skipIDs.AddRange(from obj in followedArticlesComments select obj.ID);

            //
            // Aznapi kommentek -> amire kommentelt
            //
            List<GrouppedComment> commentedArticlesComments = (from c in commentsThisDay
                                                               where commentedArticlesList.Except(skipIDs).Contains(c.ArticleID)
                                                               group c by c.ArticleID into g
                                                               select new GrouppedComment(
                                                                  g.Key,
                                                                  ManagerFactory.ContentManagerProvider.GetArticle(RequestContext.CurrentSite, g.Key),
                                                                  g.Count()
                                                               )).ToList();

            foreach (GrouppedComment grp in commentedArticlesComments)
            {
                DateTime? lastComment = (from c in commentsThisDay
                                         where c.ArticleID == grp.ID && c.HVGUserId == userGuid
                                         select c.cDate).Max();

                if (lastComment != null)
                {
                    grp.Count = (from c in commentsThisDay
                                 where c.ArticleID == grp.ID && c.cDate > lastComment.Value
                                 select c.cDate).Count();
                }
            }

            commentedArticlesComments.RemoveAll(g => g.Count == 0);

            itemCount += commentedArticlesComments.Count;

            if (itemCount == 0)
            {
                // ures response
                Response.End();
                return;
            }
            #endregion Questions and their comments


            if (events.Count > 0)
            {
                rptEvents.DataSource = events;
                rptEvents.DataBind();
            }
            else
            {
                rptEvents.Visible = false;
            }

            List<GrouppedQuestion> interestedQuestions = new List<GrouppedQuestion>();
            if (followedAnswered.Count > 0)
            {
                interestedQuestions.Add(new GrouppedQuestion()
                {
                    Title = "Követett kérdései amelyekre válasz érkezett:",
                    GroupedComments = followedAnswered
                });
            }
            if (askedQuestionsComments.Count > 0)
            {
                interestedQuestions.Add(new GrouppedQuestion()
                {
                    Title = "Feltett kérdései amelyekre új hozzászólás érkezett:",
                    GroupedComments = askedQuestionsComments
                });
            }
            if (followedArticlesComments.Count > 0)
            {
                interestedQuestions.Add(new GrouppedQuestion()
                {
                    Title = "Követett kérdései amelyekre új hozzászólás érkezett:",
                    GroupedComments = followedArticlesComments
                });
            }
            if (commentedArticlesComments.Count > 0)
            {
                interestedQuestions.Add(new GrouppedQuestion()
                {
                    Title = "Kommentált kérdései amelyekre új hozzászólás érkezett:",
                    GroupedComments = commentedArticlesComments
                });
            }
            if (interestedQuestions.Count > 0)
            {
                rptInterestedQuestions.DataSource = interestedQuestions;
                rptInterestedQuestions.DataBind();
            }
        }
        catch (Exception ex)
        {
            Response.End();
        }
    }
</script>
