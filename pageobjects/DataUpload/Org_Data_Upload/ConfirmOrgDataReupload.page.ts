import BasePage from "../../base.page.js";

class ConfirmOrgDataReuploadPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-company-details/confirm-upload";
  }

  get btnContinueReUpload() {
    return $("=Continue");
  }

  get btnCancelReUpload() {
    return $("=Cancel");
  }

  private async getTableTitle() {
    return await $$("h2.govuk-summary-card__title")[0];
  }

  async getFilesAlreadySubmittedTableTitle() {
    return await this.getTableTitle();
  }

  async getFilesYouAreReplacingTableTitle() {
    return await this.getTableTitle();
  }

  async getFilesAlreadySubmittedTableField(rowNum: number, columnNum: number) {
    const tableField = await $$(`//tbody/tr[${rowNum}]/td[${columnNum}]`)[0];
    return await tableField?.getText();
  }
}
export default new ConfirmOrgDataReuploadPage();
