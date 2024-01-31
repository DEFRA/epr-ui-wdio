import BasePage from "../base.page.js";

class NameOfConsultancyPage extends BasePage {
  get Url() {
    return "/manage-account/name-of-consultancy";
  }

  get Title() {
    return "Name of consultancy";
  }

  get H1HeaderWelsh() {
    return "Beth yw enw’r ymgynghoriaeth maen nhw’n gweithio iddi?";
  }

  private get txtNameOfConsultancy() {
    return $("#Name");
  }

  async EnterNameOfConsultancy(nameOfConsultancy: string) {
    return (await this.txtNameOfConsultancy).setValue(nameOfConsultancy);
  }
}

export default new NameOfConsultancyPage();
