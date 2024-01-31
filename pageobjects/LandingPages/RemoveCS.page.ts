import BasePage from "../base.page.js";

class RemoveCSPage extends BasePage {
  get Url() {
    return "/report-data/stop";
  }

  get H1HeaderWelsh() {
    return "Dwi ddim yn defnyddio cynllun cydymffurfio mwyach";
  }
}

export default new RemoveCSPage();
