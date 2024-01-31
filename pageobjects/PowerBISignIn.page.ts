import BasePage from "./base.page.js";

class PowerBISignInPage extends BasePage {
  get Url() {
    return "https://app.powerbi.com/singleSignOn?clientSideAuth=0&ru=https:%2f%2fapp.powerbi.com%2f%3fclientSideAuth%3d0%26noSignUpCheck%3d1";
  }

  get Title() {
    return "Power BI Sign in";
  }
}
export default new PowerBISignInPage();
