import BasePage from "../base.page.js";

class RegulatorEnrolmentDecisionPage extends BasePage {
  get Url() {
    return "/regulators/enrolment-decision";
  }

  get Title() {
    return "Enrolment Rejection - GOV.UK";
  }

  private get decisionTextBox() {
    return $("#Comments");
  }
  private get enrolmentDecisionErrorTitle() {
    return $("#error-summary-title");
  }

  private get enrolmentDecisionErrorContent() {
    return $("[data-testid='error-banner-text']");
  }

  private get enrolmentDecisionBannerTitle() {
    return $("#govuk-notification-banner-title");
  }

  private get enrolmentDecisionBannerContent() {
    return $("//p[@class='govuk-notification-banner__heading']");
  }

  async getDecisionTextInputBox() {
    return await this.decisionTextBox;
  }

  async enterEnrolmentRejectionReason(reason: string) {
    (await this.decisionTextBox).setValue(reason);
  }
  async getEnrolmentDecisionErrorTitle() {
    return await this.enrolmentDecisionErrorTitle.getText();
  }

  async getEnrolmentDecisionErrorContent() {
    return await this.enrolmentDecisionErrorContent.getText();
  }
  async clickEnrolmentDecisionErrorContent() {
    return await (await this.enrolmentDecisionErrorContent).click();
  }
}
export default new RegulatorEnrolmentDecisionPage();
