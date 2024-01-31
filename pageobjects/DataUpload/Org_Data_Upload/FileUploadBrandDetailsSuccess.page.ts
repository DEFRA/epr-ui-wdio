import BasePage from "../../base.page.js";

class FileUploadBrandDetailsSuccessPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-brands-success";
  }

  get H3HeaderWelsh() {
    return "Gwybodaeth brand wedi’i huwchlwytho"
  }

  get lnkReuploadPartnerInformation() {
    return $("=you can re-upload your partner information.");
  }

  get lnkContinue() {
    return $("=Continue");
  }
}

export default new FileUploadBrandDetailsSuccessPage();
