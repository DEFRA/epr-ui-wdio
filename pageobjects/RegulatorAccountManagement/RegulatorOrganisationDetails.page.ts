import BasePage from "../base.page.js";

class RegulatorOrganisationDetailsPage extends BasePage {

  get Url() {
    return "/regulators/regulator-company-detail";
  }

  get Title() {
    return "Organisation Details - pEPR: Regulators’ Service  - GOV.UK";
  }


  get lnkRemoveAP() {

    return $("a=Remove")

  }

  get lnkNominateAnewAP() {
    return $("#nominateNewApprovedPersonButton")
  }
}
export default new RegulatorOrganisationDetailsPage();