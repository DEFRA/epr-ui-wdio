import BasePage from "../../base.page.js";

class BrandDataUploadPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-brands";
  }

  get H1HeaderWelsh() {
    return "Uwchlwytho gwybodaeth brand";
  }
}

export default new BrandDataUploadPage();
