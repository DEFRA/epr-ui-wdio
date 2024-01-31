import BasePage from "../base.page.js";

class NameOfComplianceSchemePage extends BasePage {
  get Url() {
    return "/manage-account/name-of-compliance-scheme";
  }

  get Title() {
    return "Name of compliance scheme";
  }

  get H1HeaderWelsh() {
    return "Beth yw enw’r cynllun cydymffurfio maen nhw’n gweithio iddo?";
  }

  private get txtComplianceScheme() {
    return $("#Name")
  }

  async EnterNameOfComplianceScheme(nameOfComplianceScheme: string) {
    return (await this.txtComplianceScheme).setValue(nameOfComplianceScheme)
  }
}

export default new NameOfComplianceSchemePage();
