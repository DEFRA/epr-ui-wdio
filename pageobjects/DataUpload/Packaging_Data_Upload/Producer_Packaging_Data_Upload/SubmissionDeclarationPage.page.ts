import BasePage from "../../../base.page.js";

class SubmissionDeclarationPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-submission-declaration";
  }
  get H1HeaderWelsh() {
    return "Datganiad";
  }
  
  get inputEnterYourFullName() {
    return $("input#DeclarationName");
  }

  get txtWarning() {
    return $("span.govuk-warning-text__assistive");
  }

  get btnSubmit() {
    return $("[data-testid='submission-declaration-button']");
  }

  get errorBanner() {
    return $("[data-testid='error-banner']");
  }

  get errorBannerText() {
    return $("[data-testid='error-banner-text']");
  }
}

export default new SubmissionDeclarationPage();
