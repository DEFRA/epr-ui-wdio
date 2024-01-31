import BasePage from "../base.page.js";

class ChangeCSOptionPage extends BasePage {
  get UrlChangeCSOptions() {
    return "/report-data/change-compliance-scheme-options";
  }

  get H1HeaderWelsh() {
    return "Beth hoffech chi ddweud wrthon ni amdano?";
  }

  get complianceSchemeOptions() {
    return $$(".govuk-radios__item");
    // return $('[data-testid="change-compliance-scheme-option"]');
  }

  get changeComplianceSchemeRadio() {
    return $("#ChangeComplianceSchemeOptions");
    // return $('[data-testid="change-compliance-scheme-radio"]');
  }

  get removeComplianceSchemeRadio() {
    return $("#ChangeComplianceSchemeOptions-StopComplianceScheme");
    // return $('[data-testid="remove-compliance-scheme-radio"]');
  }

  get btnRemoveComplianceScheme() {
    return $("button*=Remove compliance scheme");
    // return $('[data-testid="remove-compliance-scheme-button"]');
  }
}

export default new ChangeCSOptionPage();
