import BasePage from "../../base.page.js";

class UploadNewFileToSubmitPage extends BasePage {
  get Url() {
    return "/report-data/upload-new-file-to-submit";
  }

  get h1Header() {
    return $("h1=Upload new file to submit to environmental regulator");
  }

  get H1HeaderWelsh() {
    return $(
      "h1=Uwchlwytho ffeil newydd i’w chyflwyno i reoleiddiwr amgylcheddol"
    );
  }

  get btnUploadNewFile() {
    return $("=Upload new file");
  }

  get btnCancel() {
    return $("=Cancel");
  }

  async getFileAlreadySubmittedTableTitle() {
    return await $$("h2.govuk-summary-card__title")[0];
  }

  async getFileAlreadySubmittedTableField(rowNum: number, columnNum: number) {
    const tableField = await $$(`//tbody/tr[${rowNum}]/td[${columnNum}]`)[0];
    return await tableField?.getText();
  }
}

export default new UploadNewFileToSubmitPage();
