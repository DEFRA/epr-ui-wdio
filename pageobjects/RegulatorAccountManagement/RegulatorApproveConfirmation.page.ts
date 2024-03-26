import BasePage from "../base.page.js";

class RegulatorApproveConfirmationPage extends BasePage {

  get Url() {
    return "/regulators/approve-confirmation?";
  }

  get Title() {
    return "Has the organisation nominated a new approved person? - pEPR: Regulators’ Service  - GOV.UK";
  }

  private get nominateApprovedPersontrue() {

    return $("#NominationDecision")
  }

  private get nominateApprovedPersonfalse() {
    return $("#NominationDecision-false")
  }

  async SelectNominatedAnAP(nominateApprovedPerson: "true" | "false") {

    nominateApprovedPerson == "true" ?
      await (await this.nominateApprovedPersontrue).click()
      : await (await this.nominateApprovedPersonfalse).click()
  }


}

export default new RegulatorApproveConfirmationPage();