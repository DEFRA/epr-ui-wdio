import BasePage from "../../base.page.js";

class PackagingDataHowToCreatePage extends BasePage {
  get Url() {
    return "https://www.gov.uk/government/publications/packaging-data-how-to-create-your-file-for-extended-producer-responsibility";
  }

  get Title() {
    return "Packaging data: how to create your file for extended producer responsibility - GOV.UK"
  }
}

export default new PackagingDataHowToCreatePage();
