import BasePage from "../../base.page.js";

class SubmissionConfirmationPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-submission-confirmation";
  }

  get H1HeaderWelsh() {
    return "Data pecynwaith wedi’i gyflwyno i’r rheoleiddiwr amgylcheddol";
  }

  get lnkPrintThisPage() {
    return $("#printButton");
  }

  get lnkGoToAccountHomePage() {
    return $("=Go to your account homepage");
  }

  get txtPackagingDataSubmitted() {
    return $("h1.govuk-panel__title");
  }
}

export default new SubmissionConfirmationPage();
