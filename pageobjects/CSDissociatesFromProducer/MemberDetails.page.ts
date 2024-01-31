import BasePage from "../base.page.js";

class MemberDetailsPage extends BasePage {
  get Url() {
    return "/report-data/member-details";
  }

  get Title() {
    return "Member details - Report packaging data - GOV.UK";
  }

  get lnkRemoveMember() {
    return $("=Remove member");
  }

  get lnkRemoveMemberWelsh() {
    return $("=Tynnu aelodau");
  }

  get summaryListHeadingOnThirdRow() {
    return $("//*[@class='govuk-summary-list']/div[3]/dt");
  }
}

export default new MemberDetailsPage();