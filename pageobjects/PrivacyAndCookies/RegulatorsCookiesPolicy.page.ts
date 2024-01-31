import CookiesPolicyBasePage from "./CookiesPolicyBase.page.js";

class RegulatorsCookiesPolicyPage extends CookiesPolicyBasePage {
  get Url() {
    return "/regulators/cookies";
  }

  get Title() {
    return "Cookies - GOV.UK";
  }
}

export default new RegulatorsCookiesPolicyPage();