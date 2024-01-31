import BasePage from "../../base.page.js";

class FileUploadCompanyDetailsSuccessPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-company-details-success";
  }

  get H3HeaderWelsh(){
    return "Manylion y sefydliad wedi’u huwchlwytho";
  }

  get btnContinueToSubmit() {
    return $("=Continue")
  }
}

export default new FileUploadCompanyDetailsSuccessPage();
