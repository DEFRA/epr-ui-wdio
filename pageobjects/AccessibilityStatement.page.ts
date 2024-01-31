import BasePage from "./base.page.js";

class AccessibilityStatement extends BasePage {
  get Url() {
    return "/regulators/accessibility";
  }

  get Title() {
    return "Accessibility - GOV.UK";
  }
}
export default new AccessibilityStatement();