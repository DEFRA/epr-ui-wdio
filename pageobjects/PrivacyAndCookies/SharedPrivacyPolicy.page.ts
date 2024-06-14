import PrivacyPolicyBasePage from "./PrivacyPolicyBase.page.js";

class SharedPrivacyPolicyPage extends PrivacyPolicyBasePage {
  get Url() {
    return "/report-data/privacy";
  }

  get PRODUrl_English(){
    return "https://www.gov.uk/guidance/extended-producer-responsibility-for-packaging-privacy-policy";
  }

  get PRODUrl_Welsh(){
    return "https://www.gov.uk/guidance/extended-producer-responsibility-for-packaging-privacy-policy.cy";
  }

  get Title() {
    return "Privacy notice - ‘Report packaging data’ service - GOV.UK";
  }
}

export default new SharedPrivacyPolicyPage();
