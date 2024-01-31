import BasePage from "../base.page.js";

class ListOfCSPage extends BasePage {
  get Url() {
    return "/report-data/select-compliance-scheme";
  }

  get H1HeaderWelsh() {
    return "Beth yw enw’r cynllun cydymffurfio rydych chi’n ei ddefnyddio?";
  }

  get listOfComplianceSchemes() {
    return $("form>div>div>fieldset>div");
    // return $('[data-testid="compliance-scheme-list"]');
  }

  get listOfComplianceSchemesItems() {
    return $$("form>div>div>fieldset>div>div");
    // return $('[data-testid="compliance-scheme-list-elem"]');
  }

  get panelMyCSIsNotListed() {
    return $(".govuk-details__summary-text");
    // return $('[data-testid="compliance-scheme-list-info-panel"]');
  }

  get txtMyCSIsNotListed() {
    return $("div.govuk-details__text");
    // return $('[data-testid="compliance-scheme-list-info-panel-text"]');
  }

  async getRandomComplianceScheme() {
    const complianceSchemesListLength = await (
      await this.listOfComplianceSchemesItems
    ).length;
    const randomNum = Math.round(
      0 + Math.random() * (complianceSchemesListLength - 1 - 0)
    );
    const randomComplianceScheme = await (
      await this.listOfComplianceSchemesItems
    )[randomNum];
    return randomComplianceScheme;
  }

  async selectComplianceScheme(complianceScheme: string) {
    await (await $(`label*=${complianceScheme}`)).click();
  }
}
export default new ListOfCSPage();
