import BasePage from "./base.page.js";

class AccessDeniedPage extends BasePage {
  get Url() {
    return "/AccessDenied";
  }

  get Title(){
    return "Page not found - pEPR : Regulators’ Service - GOV.UK";
  }
}
export default new AccessDeniedPage();