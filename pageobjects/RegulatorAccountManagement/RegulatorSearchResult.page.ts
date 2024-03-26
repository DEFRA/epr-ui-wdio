import BasePage from "../base.page.js";

class RegulatorSearchResultPage extends BasePage {

  get Url() {
    return "/regulators/regulator-search-results";
  }

  get Title() {
    return "Results - pEPR: Regulators’ Service - GOV.UK";
  }

  get lnkCompanyName() {
    return $("#organisationIdCell0")
  }
}
export default new RegulatorSearchResultPage();