import BasePage from "../../base.page.js";

class FileUploadFailurePage extends BasePage {
  get Url() {
    return "/report-data/file-upload-failure";
  }

  get h1HeaderErrorsOnly() {
    return $("h1=Packaging data not uploaded – fix the errors and try again");
  }

  get h1HeaderErrorsOnlyWelsh() {
    return $(
      "h1=Data pecynwaith heb ei uwchlwytho – trwsiwch y gwallau a rhowch gynnig arall arni"
    );
  }

  get h1HeaderErrorsAndWarnings() {
    return $("h1=Packaging data not uploaded – fix the errors and check the warnings");
  }

  get h1HeaderErrorsErrorsAndWarnings() {
    return $(
      "h1=Data pecynwaith heb ei uwchlwytho – trwsiwch y gwallau a gwiriwch y rhybuddion"
    );
  }

  get lnkFileSpecification() {
    return $(
      'a[href="https://www.gov.uk/government/publications/packaging-data-how-to-create-your-file-for-extended-producer-responsibility/packaging-data-file-specification-for-extended-producer-responsibility"]'
    );
  }

  get lnkErrorReport() {
    return $('a[href^="/report-data/file-upload-error-report/"]');
  }

  get btnUploadYourFileAgain() {
    return $('a.govuk-button[href="/report-data/file-upload"]');
  }
}

export default new FileUploadFailurePage();
