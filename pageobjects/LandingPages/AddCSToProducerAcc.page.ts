import BasePage from "../base.page.js";

class AddCSPage extends BasePage {
  get Url() {
    return "/report-data/using-a-compliance-scheme";
  }

  get H1HeaderWelsh() {
    return "Ydych chi’n defnyddio cynllun cydymffurfio?";
  }

  get addComplianceSchemeOptions() {
    return $$("div.govuk-radios__item");
    // return $('[data-testid="add-compliance-scheme-option"]');
  }

  get usingCSRadio() {
    return $("#UsingComplianceScheme");
    // return $('[data-testid="using-compliance-scheme-radio"]');
  }

  get notUsingCSRadio() {
    return $("#UsingComplianceScheme-false");
    // return $('[data-testid="not-using-compliance-scheme-radio"]');
  }

  get panelWhatIsCS() {
    return $(".govuk-details__summary-text");
    // return $('[data-testid="add-compliance-scheme-info-panel"]');
  }

  get txtWhatIsCS() {
    return $("div.govuk-details__text");
    // return $('[data-testid="add-compliance-scheme-info-panel-text"]');
  }
}
export default new AddCSPage();
