import BasePage from "../base.page.js";

class IndirectProducerLandingPage extends BasePage {
  get Url() {
    return "/report-data/manage-compliance-scheme";
  }

  get H1HeaderWelsh() {
    return "Hafan y cyfrif";
  }

  private get complianceSchemeNameEnglish() {
    return $("p*=Compliance scheme: ");
    // return $('[data-testid="producer-home-compliance-scheme-name"]');
  }

  private get complianceSchemeNameWelsh() {
    return $("p*=Cynllun cydymffurfio: ");
  }

  get lnkChangeComplianceScheme() {
    return $('[href="/report-data/change-compliance-scheme-options"]');
    // return $('[data-testid="change-compliance-scheme-option-link"]');
  }

  get lnkAddComplianceScheme() {
    return $('[href*="/report-data/home-self-managed"]');
    // return $('[data-testid="add-compliance-scheme-link"]');
  }

  get btnAddComplianceScheme() {
    return $('form[action*="/report-data/home-self-managed"]>button');
    // return $('[data-testid="add-compliance-scheme-button"]');
  }

  get txtOrganisationId() {
    return $("b*=Organisation ID:");
  }

  async ComplianceSchemeName(isWelsh: boolean) {
    return !isWelsh ? this.complianceSchemeNameEnglish : this.complianceSchemeNameWelsh;
  }
}
export default new IndirectProducerLandingPage();
