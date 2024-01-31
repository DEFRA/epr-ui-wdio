
import BasePage from "../base.page.js";

class RegulatorsHomePage extends BasePage {
  get Url() {
    return "/regulators/home";
  }

  get Title() {
    return "pEPR: Regulators’ Service - GOV.UK";
  }
  
  get Header() {
    return $("h1");
  }

  get UserHeader() {
    return $("h3");
  }

  get basicUser() {
    return $("[value='Regulator.Basic']") 
  }
  
  get lnkManageAccount() {
    return $("*=Manage your account");
  }

  get lnkManageApplications() {
    return $("*=Manage applications");
  }

  get lnkManagePackagingSubmissions() {
    return $("*=Manage packaging");
  }

  async GetNationHeader(expectedText: string) {
    return $(`h2*=${expectedText}`);
  }


}
export default new RegulatorsHomePage();