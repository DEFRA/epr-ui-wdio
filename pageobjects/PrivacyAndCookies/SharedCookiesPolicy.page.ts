import CookiesPolicyBasePage from "./CookiesPolicyBase.page.js";

class SharedCookiesPolicyPage extends CookiesPolicyBasePage {
  get Url() {
    return "/report-data/cookies";
  }

  get Title() {
    return "Cookies - GOV.UK";
  }
}

export default new SharedCookiesPolicyPage();
