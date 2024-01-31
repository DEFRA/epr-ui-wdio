import BasePage from "../../base.page.js";

class OrganisationDetailsConfirmationPage extends BasePage {
  get Url() {
    return "/report-data/organisation-details-confirmation";
  }

  get H1HeaderWelsh (){
    return "Manylion y sefydliad wedi’u cyflwyno i’r rheoleiddiwr amgylcheddol";
  }

  get lnkPrintThisPage() {
    return $("#printButton");
  }

  get lnkGoToAccountHomePage() {
    return $("=Go to your account homepage");
  }

  get txtOrganisationDetailsSubmitted() {
    return $("h1.govuk-panel__title");
  }
}

export default new OrganisationDetailsConfirmationPage();
