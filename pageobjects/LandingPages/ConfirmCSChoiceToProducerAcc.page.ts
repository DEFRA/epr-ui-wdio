import BasePage from "../base.page.js";

class ConfirmCSPage extends BasePage {
  get Url() {
    return "/report-data/confirmation";
  }

  get H1HeaderWelsh() {
    return "Cadarnhau eich dewis cynllun cydymffurfio";
  }
}
export default new ConfirmCSPage();
