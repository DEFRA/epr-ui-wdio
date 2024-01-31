import BasePage from "../base.page.js";

class RegulatorsManageApplicationsPage extends BasePage {
  get Url() {
    return "/regulators/applications";
  }

  get Title() {
    return "ApplicationsTitle - GOV.UK";
  }

  get lnkView() {
    return $("button*=View");
  }

  private get txtOrganisationName() {
    return $("#SearchOrganisationName");
  }

  private get btnApplyFilters() {
    return $("button=Apply filters");
  }

  private get linkTextClearFilters() {
    return $("=Clear filters");
  }

  private get tblApplicationsBody() {
    return $("tbody.govuk-table__body");
  }

  private get tblApplications() {
    return this.tblApplicationsBody.$$("tr");
  }

  private get radioApprovedPerson() {
    return $("#is-approved-user-type-checked-label");
  }

  private get radioDelegatedPerson() {
    return $("#is-delegated-user-type-checked-label");
  }

  async FilterByOrganisationName(organisationName: string) {
    (await this.txtOrganisationName).setValue(organisationName);
  }

  async ClickApplyFilters() {
    (await this.btnApplyFilters).click();
  }

  async ClickClearFilters() {
    (await this.linkTextClearFilters).click();
  }

  async GetOrganisationName() {
    return await this.tblApplications[0].$$("td")[0].getText();
  }

  async ClickOrganisationViewLink() {
    return await this.tblApplications[0].$$("td")[3].click();
  }

  async GetNumberOfApplications() {
    return (await this.tblApplications).length;
  }

  async SelectDelegatedPersonFilter() {
    (await this.radioDelegatedPerson).click();
  }

  async clickView() {
    (await this.lnkView).click();
  }

  async SelectApprovedPersonFilter() {
    (await this.radioApprovedPerson).click();
  }

  async GetApplicationType() {
    return await this.tblApplications.map(async (row) => {
      return (await row.$$("td")[2]) as WebdriverIO.Element;
    });
  }
}

export default new RegulatorsManageApplicationsPage();
