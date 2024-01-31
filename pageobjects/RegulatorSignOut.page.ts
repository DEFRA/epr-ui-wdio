import BasePage from "./base.page.js";

class RegulatorSignOut extends BasePage {
  get Url() {
    return "/regulators/signed-out";
  }

  get Title() {
    return "Signed out - GOV.UK";
  }
}
export default new RegulatorSignOut();