import BasePage from "../base.page.js";

class LargeProducersCookiesPage extends BasePage {
  get Url() {
    return "/large-producers";
  }

  get Title() {
    return $("h1=Cookies");
  }

  get TitleWelsh() {
    return $("h1=Cwcis");
  }
}

export default new LargeProducersCookiesPage();