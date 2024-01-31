import BasePage from "../base.page.js";

class FullNamePage extends BasePage {
  get Url() {
    return "/create-account/full-name";
  }

  get Title() {
    return "Full name";
  }

  get TitleWelsh() {
    return "Enw llawn";
  }

  get H1HeaderWelsh() {
    return "Beth yw’ch enw chi?";
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

export default new FullNamePage();
