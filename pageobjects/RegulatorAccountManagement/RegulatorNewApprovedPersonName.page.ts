import BasePage from "../base.page.js";

class regulatorNewApprovedPersonNamePage extends BasePage {

  get Url() {
    return "/regulators/invite-new-approved-person/invite-new-approved-person-name";
  }

  get Title() {
    return "What is the name of the nominated approved person? - pEPR: Regulators’ Service  - GOV.UK";
  }

  private get txtFirstName() {
    return $("#FirstName");
  }

  private get txtLastName() {
    return $("#LastName");
  }

  async EnterFirstName(firstName: string) {
    return (await this.txtFirstName).setValue(firstName);
  }

  async EnterLastName(lastName: string) {
    return (await this.txtLastName).setValue(lastName);
  }
}

export default new regulatorNewApprovedPersonNamePage();