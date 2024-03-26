import BasePage from "../base.page.js";

class regulatorNewApprovedPersonEmailPage extends BasePage {

  get Url() {
    return "/regulators/invite-new-approved-person/invite-new-approved-person-email";
  }

  get Title() {
    return "What is their email address? - pEPR: Regulators’ Service  - GOV.UK";
  }

  private get txtEmail() {
    return $("#Email");
  }

  async EnterEmail(firstName: string) {
    return (await this.txtEmail).setValue(firstName);
  }


}

export default new regulatorNewApprovedPersonEmailPage();