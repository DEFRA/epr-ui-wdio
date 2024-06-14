import BasePage from "./base.page.js";

class AccessibilityStatement extends BasePage {
  get Url() {
    return "/regulators/accessibility";
  }

  get PRODUrl_English(){
    return "https://www.gov.uk/guidance/extended-producer-responsibility-for-packaging-accessibility-statement";
  }

  get PRODUrl_Welsh(){
    return "https://www.gov.uk/guidance/extended-producer-responsibility-for-packaging-accessibility-statement.cy";
  }

  get Title() {
    return "Accessibility - GOV.UK";
  }

}
export default new AccessibilityStatement();