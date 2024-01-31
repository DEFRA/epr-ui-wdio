import BasePage from "../base.page.js";

class RegulatorUserPermission extends BasePage {
  get Url() {
    return "/regulators/manage-account/team-member-permissions";
  }

  get Title() {
    return "Which type of account user do you want them to be? - GOV.UK";
  }
}
export default new RegulatorUserPermission();
