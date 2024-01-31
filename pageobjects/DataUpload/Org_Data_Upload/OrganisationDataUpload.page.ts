import BasePage from "../../base.page.js";

class OrganisationDataUploadPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-company-details";
  }

  get CSH1HeaderWelsh() {
    return "Uwchlwytho manylion sefydliad";
  }

  get ProducerH1HeaderWelsh() {
    return "Uwchlwytho manylion y sefydliad i’ch cyfrif";
  }
}

export default new OrganisationDataUploadPage();
