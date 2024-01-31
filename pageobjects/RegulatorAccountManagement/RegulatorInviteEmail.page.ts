import BasePage from "../base.page.js";

class RegulatorsInviteEmail extends BasePage {
  get Url() {
    return "/regulators/manage-account/team-member-email";
  }

  get Title(){
    return "What is their email address? - GOV.UK";
  }
}
export default new RegulatorsInviteEmail();