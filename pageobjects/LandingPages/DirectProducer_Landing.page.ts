import BasePage from "../base.page.js";

class DirectProducerLandingPage extends BasePage {
  get Url() {
    return "/report-data/home-self-managed";
  }

  get H1HeaderWelsh() {
    return "Hafan y cyfrif";
  }

  get btnContinueWithNewCSOption() {
    return $("button*=Continue");
    // return $('[data-testid="continue-button"]');
  }

  get txtOrganisationId() {
    return $('p*=Organisation ID:');
  }

  get btnAddCSToYourAccount() {
    return $('button*=Add a compliance scheme to your account')
  }
}

export default new DirectProducerLandingPage();
