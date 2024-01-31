import BasePage from "../base.page.js";

class NameOfOrganisationPage extends BasePage {
  get Url() {
    return "/manage-account/name-of-organisation";
  }

  get Title() {
    return "Name of organisation";
  }

  get H1HeaderWelsh() {
    return "Beth yw enw’r sefydliad maen nhw’n gweithio iddo?";
  }

  private get txtComplianceScheme() {
    return $("#Name")
  }

  async EnterNameOfOrganisation(nameOfComplianceScheme: string) {
    return (await this.txtComplianceScheme).setValue(nameOfComplianceScheme)
  }
}

export default new NameOfOrganisationPage();
