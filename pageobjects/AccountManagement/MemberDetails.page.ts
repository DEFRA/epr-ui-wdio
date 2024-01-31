import BasePage from "../base.page.js";

class MemberDetailsPage extends BasePage {
  get Url() {
    return "/manage-account/team-member-details";
  }

  get Title() {
    return "Check Invitation Details - GOV.UK";
  }

  get H1HeaderWelsh() {
    return "Gwirio manylion gwahoddiad";
  }
}
export default new MemberDetailsPage();
