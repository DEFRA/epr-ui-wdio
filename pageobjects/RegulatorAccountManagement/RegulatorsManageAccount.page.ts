import BasePage from "../base.page.js";

class RegulatorsManageAccountPage extends BasePage {
  get Url() {
    return "/regulators/manage-account";
  }

  get Title() {
    return "Manage account details - GOV.UK";
  }

  get txtHeader() {
    return $("h1");
  }

  get txtManage() {
    return $("h2*=Manage your team");
  }
}
export default new RegulatorsManageAccountPage();
