import BasePage from "./base.page.js";

class OpenGoveLicence extends BasePage {
  get Url() {
    return "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/";
  }

  get Title(){
    return "Welcome to GOV.UK";
  }
}
export default new OpenGoveLicence();