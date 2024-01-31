import BasePage from "../base.page.js";

class CommonLandingPage extends BasePage {
  private get HomePageCards() {
    return $$("div.govuk-card-body");
    // return $('[data-testid="sub-landing-submission-cards"]');
    // TODO move to CommonLandingPage
  }

  private get txtInvitedToChgPerms() {
    return $(
      "p*=You’ve been invited to change your account permission, so you can submit data to the environmental regulator."
    );
  }

  async getSubmissionCard(expectedText: string) {
    return await $(`*=${expectedText}`);
  }

  async getInformationCard(expectedText: string) {
    return await $(`h2*=${expectedText}`);
  }

  async InvitationToChgPermsText() {
    return await this.txtInvitedToChgPerms;
  }

  async ViewInvitationLink() {
    return await (
      await (await this.txtInvitedToChgPerms).nextElement()
    ).$("=View invitation");
  }
}

export default new CommonLandingPage();
