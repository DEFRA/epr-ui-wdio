import PrivacyPolicyBasePage from "./PrivacyPolicyBase.page.js";

class RegulatorsPrivacyPolicyPage extends PrivacyPolicyBasePage {
  get Url() {
    return "/regulators/privacy";
  }

  get Title() {
    return "Privacy notice - pEPR: Regulators’ service - GOV.UK";
  }
}

export default new RegulatorsPrivacyPolicyPage();
