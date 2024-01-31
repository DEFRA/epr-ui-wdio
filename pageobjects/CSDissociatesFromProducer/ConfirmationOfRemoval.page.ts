import BasePage from "../base.page.js";

class ConfirmationOfRemovalPage extends BasePage {
  get Url() {
    return "/report-data/confirmation-of-removal";
  }

  get Title() {
    return "Confirmation of removal - Report packaging data - GOV.UK";
  }

  get H1HeaderWelsh() {
    return "Rydych chi wedi tynnu ";
  }

  get lnkReturnToViewAllSchemeMembers() {
    return $("=return to view all scheme members");
  }
}

export default new ConfirmationOfRemovalPage();