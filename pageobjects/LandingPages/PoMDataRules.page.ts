import BasePage from "../base.page.js";

class PoMDataRules extends BasePage {
  get Url() {
    return "https://www.gov.uk/government/publications/packaging-data-how-to-create-your-file-for-extended-producer-responsibility/packaging-data-file-specification-for-extended-producer-responsibility";
  }

  get Title() {
    return "Packaging data file specification for extended producer responsibility - GOV.UK"
  }
}
export default new PoMDataRules();
