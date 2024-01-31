import PrivacyPolicyBasePage from "./PrivacyPolicyBase.page.js";

class SharedPrivacyPolicyPage extends PrivacyPolicyBasePage {
  get Url() {
    return "/report-data/privacy";
  }

  get Title() {
    return "Privacy notice - ‘Report packaging data’ service - GOV.UK";
  }
}

export default new SharedPrivacyPolicyPage();
