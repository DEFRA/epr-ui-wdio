import BasePage from "../base.page.js";

class RegulatorsManagePackagingSubmissionsPage extends BasePage {
  get Url() {
    return "/regulators/manage-packaging-data-submissions";
  }

  get Title() {
    return "Manage packaging data submissions - pEPR: Regulators’ Service - GOV.UK";
  }

  get txtOrganisationId(){
    return $("#SearchOrganisationId")
  }

  private get tblApplicationsBody() {
    return $("tbody.govuk-table__body");
  }

 private get directProducerButton(){
    return $("#is-direct-producer-type-checked-check")
  }

 private get complianceSchemeButton(){
    return $("#is-compliance-scheme-type-checked-check")
  }


  get pendingRadioButton() {
    return $("#is-pending-submission-type-checked-check");
  }

  get acceptedRadioButton() {
    return $("#is-accepted-submission-type-checked-check");
  }

  get rejectedRadioButton() {
    return $("#is-rejected-submission-type-checked-check");
  }

  get applyFilterButton() {
    return $("button*=Apply filters");
  }

  async FilterByOrganisationId(organisationId: string) {
    (await this.txtOrganisationId).setValue(organisationId);
  }
  private get tblApplications() {
    return this.tblApplicationsBody.$$("tr");
  }

  private get pendingSubmissionStatus() {
    return $(".govuk-tag--blue");
  }

  private get acceptedSubmissionStatus() {
    return $(".govuk-tag--green");
  }

  private get rejectedSubmissionStatus() {
    return $(".govuk-tag--red");
  }

  async getSubmissionId(){
    return await this.tblApplications[0].$$("td")[1].getText();
  }

  async getOrgId(){
    return await this.tblApplications[1].$$("td")[1].getText();
  }
  
  async getAllOrgIds(){
    return await this.tblApplications.map(async (row) => {
      return (await row.$$("td")[1]) as WebdriverIO.Element;
    });
  }

  async getSubmissionName() {
    return await this.tblApplications[0].$$("td")[0].getText();
  }

  async getAllSubmissionNames(){
    return await this.tblApplications.map(async (row) => {
      return (await row.$$("td")[0]) as WebdriverIO.Element;
    });
  
  }

  async getPendingSubmissionStatus() {
    return (await this.pendingSubmissionStatus).getText();
  }

  async getAcceptedSubmissionStatus() {
    return (await this.acceptedSubmissionStatus).getText();
  }

  async getRejectedSubmissionStatus() {
    return (await this.rejectedSubmissionStatus).getText();
  }

  async clickFirstSubmissionNameLink() {
    (await this.tblApplications[0].$$("td")[0].$("form").$("button")).click();
  }

  async clickSecondSubmissionNameLink() {
    (await this.tblApplications[1].$$("td")[0].$("form").$("button")).click();
  }

  async SelectPendingFilterBox() {
    (await this.pendingRadioButton).click();
  }

  async SelectAcceptedFilterBox() {
    (await this.acceptedRadioButton).click();
  }

  async SelectRejectedFilterBox() {
    (await this.rejectedRadioButton).click();
  }

  async SelectDirectProducerFilterBox(){
    (await this.directProducerButton).click();
  }

  async SelectComplianceSchemeFilterBox(){
    (await this.complianceSchemeButton).click();
  }
}

export default new RegulatorsManagePackagingSubmissionsPage();
