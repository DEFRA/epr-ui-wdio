import BasePage from "../base.page.js";

class TradingNamePage extends BasePage {
  get Url() {
    return "/create-account/trading-name";
  }

  get Title() {
    return "Trading Name";
  }

  get TitleWelsh() {
    return "Enw Masnachu";
  }

  get H1HeaderWelsh() {
    return "Beth yw’ch enw masnachu?";
  }

  private get txtTradingName() {
    return $("#TradingName");
  }

  async EnterTradingName(tradingName: string) {
    return (await this.txtTradingName).setValue(tradingName);
  }
}

export default new TradingNamePage();
