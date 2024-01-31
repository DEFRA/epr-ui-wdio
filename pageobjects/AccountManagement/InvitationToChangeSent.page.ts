import BasePage from "../base.page.js";

class InvitationToChangeSentPage extends BasePage {
  get Url() {
    return "/invitation-to-change-sent";
  }

  get Title() {
    return "Invitation to change sent";
  }

  private get btnReturnToAccountDetails() {
    return $("*=Return to account details");
  }

  private get invitationResultBanner() {
    return $(".govuk-panel--confirmation h1");
  }

  async ReturnToAccountDetails() {
    return (await this.btnReturnToAccountDetails).click();
  }

  async InvitationResultBanner() {
    return await this.invitationResultBanner;
  }
}

export default new InvitationToChangeSentPage();
