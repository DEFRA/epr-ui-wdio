import BasePage from "./base.page.js";

class GovUk extends BasePage {
  get Url() {
    return "www.gov.uk";
  }

  get Title() {
    return "Welcome to GOV.UK";
  }
}
export default new GovUk();