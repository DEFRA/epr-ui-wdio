import BasePage from "../base.page.js";

class RegisteredProducersOnNPWDPage extends BasePage {
  get Url() {
    return 'https://npwd.environment-agency.gov.uk/PublicRegisterProducers.aspx';
  }
}

export default new RegisteredProducersOnNPWDPage();