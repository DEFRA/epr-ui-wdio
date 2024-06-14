import CookiesPolicyBasePage from "./CookiesPolicyBase.page.js";

class SharedCookiesPolicyPage extends CookiesPolicyBasePage {
  get Url() {
    return "/cookies";
  }

  get Title() {
    return "Cookies - GOV.UK";
  }

  get RPDProdURL_English(){
    return "https://report-packaging-data.defra.gov.uk/report-data/cookies";
  }
}

export default new SharedCookiesPolicyPage();
