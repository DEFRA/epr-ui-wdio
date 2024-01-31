import BasePage from "../../base.page.js";

class ReviewOrganisationDataPage extends BasePage {
  get Url() {
    return "/report-data/review-organisation-data";
  }

  get CSH1HeaderWelsh() {
    return "Gwirio ffeiliau a’u hailgyflwyno";
  }

  get ProducerH1HeaderWelsh() {
    return "Gwirio ffeiliau a’u cyflwyno";
  }

  get lnkChangeFilesUploaded() {
    return $("=Change");
  }

  get btnYesSubmit() {
    return $("input[value='True']");
  }

  get btnNoSubmit() {
    return $("input[value='False']");
  }

  get txtAreYouSureYouWantToReSubmit() {
    return $("h3.govuk-fieldset__heading");
  }

  get btnConfirmSubmission() {
    return $("button*=Confirm");
  }

  get btnConfirmSubmissionInWelsh() {
    return $("button*=Cadarnhau");
  }

  get txtWarning() {
    return $("span.govuk-warning-text__assistive");
  }

  get lnkGoToAccountHomePage() {
    return $("=Go to your account homepage");
  }

  get txtChooseYesOptionError() {
    return $("a[href='#SubmitOrganisationDetailsResponse']");
  }

  private async getFirstTableTitle() {
    return await $$("h2.govuk-summary-card__title")[0];
  }

  private async getFirstTableField(rowNum: number, columnNum: number) {
    const tableField = await $$(`//tbody/tr[${rowNum}]/td[${columnNum}]`)[0];
    return await tableField?.getText();
  }

  async getFilesToSubmitTableTitle() {
    return await this.getFirstTableTitle();
  }

  async getFilesUploadedTableTitle() {
    return await this.getFirstTableTitle();
  }

  async getFilesAlreadySubmittedTableTitle() {
    return await $$("h2.govuk-summary-card__title")[1];
  }

  async getFilesToSubmitTableField(rowNum: number, columnNum: number) {
    return await this.getFirstTableField(rowNum, columnNum);
  }

  async getFilesUploadedTableField(rowNum: number, columnNum: number) {
    return await this.getFirstTableField(rowNum, columnNum);
  }

  async getFilesAlreadySubmittedTableField(rowNum: number, columnNum: number) {
    const tableField = await $$(`//tbody/tr[${rowNum}]/td[${columnNum}]`)[1];
    return await tableField?.getText();
  }
}
export default new ReviewOrganisationDataPage();
