import BasePage from "../../../base.page.js";

class DeclarationEnterFullNamePage extends BasePage {
  get Url() {
    return "/report-data/declaration-enter-full-name";
  }

  get inputEnterYourFullName() {
    return $("input#FullName");
  }

  get txtWarning() {
    return $("span.govuk-warning-text__assistive");
  }

  get btnSubmit() {
    return $("button=Submit file");
  }

  get btnSubmitInWelsh() {
    return $("button=Cyflwyno ffeil");
  }

  get errorBanner() {
    return $("[data-testid='error-banner']");
  }

  get errorBannerText() {
    return $("a[href='#FullName']");
  }

  // get errorBannerTextInWelsh() {
  //   return $("=Rhowch eich enw llawn");
  // }

  get H1HeaderWelsh() {
    return "Datganiad";
  }
}

export default new DeclarationEnterFullNamePage();
