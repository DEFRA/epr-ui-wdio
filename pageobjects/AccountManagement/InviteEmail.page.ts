import BasePage from "../base.page.js";

class InviteEmailPage extends BasePage {
  get Url() {
    return "/manage-account/team-member-email";
  }

  get Title(){
    return "What is your team member’s email? - GOV.UK";
  }

  get H1HeaderWelsh() {
    return "Beth yw cyfeiriad ebost yr aelod o’r tîm?"
  }
}
export default new InviteEmailPage();