import BasePage from "../base.page.js";

class RegulatorsSubmissionDetailsPage extends BasePage {
  get Url() {
    return "/regulators/submission-details";
  }

  get Title() {
    return "Manage packaging data submissions - pEPR: Regulators’ Service - GOV.UK";
  }

  get acceptButton() {
    return $("button*=Accept");
  }

  get rejectButton() {
    return $("button*=Reject");
  }

  get goBackToAllSubmissionsButton(){
    return $("=Go back to all submissions")
  }

  get pendingStatusTag() {
    return $(".govuk-tag--blue");
  }

  get resubmittedByHeader() {
    return $("//dt[normalize-space()='Resubmitted by']");
  }

  get previousSubmissionReasonHeader() {
    return $("//dt[normalize-space()='Reason for rejection of previous submission']");
  }

  get acceptStatusTag() {
    return $(".govuk-tag--green");
  }

  get rejectStatusTag() {
    return $(".govuk-tag--red");
  }

  async clickAcceptButton() {
    await this.acceptButton.click();
  }

  async clickRejectButton() {
    await this.rejectButton.click();
  }

  async getAcceptButton() {
    return await this.acceptButton;
  }

  async getRejectButton() {
    return await this.rejectButton;
  }

  async getPendingStatusTag() {
    return await this.pendingStatusTag.getText();
  }

  async getAcceptStatusTag() {
    return await this.acceptStatusTag.getText();
  }

  async getRejectStatusTag() {
    return await this.rejectStatusTag.getText();
  }

  async getResubmittedByHeader() {
    return await this.resubmittedByHeader;
  }

  async getReasonForRejectionHeader() {
    return await this.previousSubmissionReasonHeader;
  }

  async clickGoBackToAllSubmissions(){
    await this.goBackToAllSubmissionsButton.click()
  }
}

export default new RegulatorsSubmissionDetailsPage();