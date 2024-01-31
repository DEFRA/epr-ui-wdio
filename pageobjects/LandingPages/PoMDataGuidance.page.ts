import BasePage from "../base.page.js";

class PoMDataGuidance extends BasePage {
  get Url() {
    return "https://www.gov.uk/guidance/how-to-collect-your-packaging-data-for-extended-producer-responsibility";
  }

  get Title() {
    return "Packaging data: what to collect for extended producer responsibility - GOV.UK"
  }
}
export default new PoMDataGuidance();
