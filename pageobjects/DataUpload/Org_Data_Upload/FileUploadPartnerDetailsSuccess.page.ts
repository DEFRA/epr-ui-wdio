import BasePage from "../../base.page.js";

class FileUploadPartnerDetailsSuccessPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-partnerships-success";
  }

  get H3HeaderWelsh(){
    return "Gwybodaeth am bartneriaid wedi’i huwchlwytho";
  }

  get lnkReuploadPartnerInformation() {
    return $("=you can re-upload your partner information.");
  }

  get lnkContinue() {
    return $("=Continue");
  }
}

export default new FileUploadPartnerDetailsSuccessPage();
