import BasePage from "../base.page.js";

class TelephoneNumberPage extends BasePage {
  get Url() {
    return "/create-account/telephone-number";
  }

  get Title() {
    return "Telephone Number";
  }

  get TitleWelsh() {
    return "Rhif ffôn";
  }

  get H1HeaderWelsh() {
    return "Beth yw’ch rhif ffôn?";
  }

  private get txtTelephoneNumber() {
    return $("#TelephoneNumber");
  }

  async EnterTelephoneNumber(telephoneNumber: string) {
    return (await this.txtTelephoneNumber).setValue(telephoneNumber);
  }
}

export default new TelephoneNumberPage();
