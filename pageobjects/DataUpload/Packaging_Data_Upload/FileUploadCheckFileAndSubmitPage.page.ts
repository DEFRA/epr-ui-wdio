import BasePage from "../../base.page.js";

class FileUploadCheckFileAndSubmitPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-check-file-and-submit";
  }

  get h1Header() {
    return $("h1=Packaging data uploaded – check and submit");
  }

  get h1HeaderForBasicUser() {
    return $("h1=Packaging data uploaded");
  }

  get H1HeaderWelsh() {
    return $("h1=Data pecynwaith wedi’i uwchlwytho – gwiriwch a chyflwynwch");
  }

  get H1HeaderForBasicUserWelsh() {
    return $("h1=Data pecynwaith wedi’i uwchlwytho");
  }

  get txtSelectYesError() {
    return $("[data-testid='error-banner-text']");
  }

  get lnkChangeFilesUploaded() {
    return $("=Change");
  }

  get txtAreYouSureYouWantToSubmit() {
    return $("h1.govuk-fieldset__heading");
  }

  get radioYesIWouldLikeToSubmit() {
    return $("input[value='True']");
  }

  get radioNoIDoNotWantToSubmitRightNow() {
    return $("input[value='False']");
  }

  get btnContinueSubmission() {
    return $("button*=Continue");
  }

  get btnContinueSubmissionInWelsh() {
    return $("button*=Parhau");
  }

  get lnkGoToAccountHomePage() {
    return $("=Go to your account homepage");
  }

  get txtWarning() {
    return $("span.govuk-warning-text__assistive");
  }

  async getLastFileUploadedTableTitle(){
    return await $$("h2.govuk-summary-card__title")[0];
  }

  async getLastFileUploadedTableField(rowNum: number, columnNum: number) {
    const tableField = await $$(`//tbody/tr[${rowNum}]/td[${columnNum}]`)[0];
    return await tableField?.getText();
  }

  async getFileYouAreSubmittingTableTitle() {
    return await $$("h2.govuk-summary-card__title")[0];
  }

  async getLastFileSubmittedTableTitle() {
    return await $$("h2.govuk-summary-card__title")[1];
  }

  async getFileYouAreSubmittingTableField(rowNum: number, columnNum: number) {
    const tableField = await $$(`//tbody/tr[${rowNum}]/td[${columnNum}]`)[0];
    return await tableField?.getText();
  }

  async getLastFileSubmittedTableField(rowNum: number, columnNum: number) {
    const tableField = await $$(`//tbody/tr[${rowNum}]/td[${columnNum}]`)[1];
    return await tableField?.getText();
  }
}

export default new FileUploadCheckFileAndSubmitPage();