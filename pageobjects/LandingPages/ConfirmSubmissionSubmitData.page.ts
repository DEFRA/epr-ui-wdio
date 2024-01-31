import BasePage from "../base.page.js";

class ConfirmSubmissionSubmitDataPage extends BasePage {
  get Url() {
    return "/report-data/confirm-permission-submit-data";
  }

  get Title() {
    return "Confirm permission submit data";
  }

  private get txtFullName() {
    return $("#NomineeFullName");
  }
  
  private get btnConfirm() {
    return $("button*=Confirm");
  }

  async EnterFullName(fullName: string) {
    (await this.txtFullName).setValue(fullName);
  }

  async clickConfirm() {
    (await this.btnConfirm).click();
  }
}

export default new ConfirmSubmissionSubmitDataPage();
