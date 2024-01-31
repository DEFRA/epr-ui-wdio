import BasePage from "../base.page.js";

class DoNotNeedToCreateAccount extends BasePage {
  get Url() {
    return "/create-account/not-affected";
  }

  get Title() {
    return "Not Affected - Report packaging data - GOV.UK";
  }

  get TitleWelsh() {
    return "Heb ei Effeithio - Rhoi gwybodaeth am ddata pecynwaith - GOV.UK";
  }  

  get H1HeaderWelsh() {
    return "Ar sail yr atebion rydych chi wedi’u rhoi, does dim angen ichi greu cyfrif";
  }    

  private get HeaderText() {
    return $("h1");
  }

  async GetHeaderText() {
    return (await this.HeaderText).getText();
}
}

export default new DoNotNeedToCreateAccount();
