import BasePage from "./base.page.js";

class CrownCopyright extends BasePage {
  get Url() {
    return "www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/";
  }

  get Title() {
    return "Crown copyright";
  }
}
export default new CrownCopyright();