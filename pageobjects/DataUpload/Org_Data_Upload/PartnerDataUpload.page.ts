import BasePage from "../../base.page.js";

class PartnerDataUploadPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-partnerships";
  }

  get H1HeaderWelsh() {
    return "Uwchlwytho gwybodaeth am bartneriaid";
  }
}

export default new PartnerDataUploadPage();
