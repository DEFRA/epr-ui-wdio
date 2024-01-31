import BasePage from "../base.page.js";

class PoMCSVExample extends BasePage {
  get Url() {
    return "https://www.gov.uk/government/publications/extended-producer-responsibility-for-packaging-example-file-for-packaging-data";
  }

  get Title() {
    return "Extended producer responsibility for packaging: example file for packaging data - GOV.UK";
  }
}
export default new PoMCSVExample();
