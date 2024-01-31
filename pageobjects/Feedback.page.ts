import BasePage from "./base.page.js";

class Feedback extends BasePage {
  get Url() {
    return "/https://defragroup.eu.qualtrics.com/jfe/form/SV_a2Bm7vw3cht5B6C";
  }

  get Title() {
    return "Qualtrics Survey | Qualtrics Experience Management";
  }
}
export default new Feedback();
