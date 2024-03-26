import { AccountCreationQuestions } from "../../utils/types/AccountCreation.types.js";
import { AddNewApprovedPersonQuestions } from "../../utils/types/Regulator.types.js";
import BasePage from "../base.page.js";

class RegulatorCheckYourDetails extends BasePage {
  get newAPUrl() {
    return "/regulators/invite-new-approved-person/invite-new-approved-person-confirm";
  }

  get newAPTitle() {
    return "Check the details of the nominated approved person before confirming - pEPR: Regulators’ Service - GOV.UK";
  }

  get existingAPUrl() {
    return "/regulators/approve-decision-confirmation";
  }

  get existingAPTitle() {
    return "Check your answers before confirming nominated approved person - pEPR: Regulators’ Service - GOV.UK";
  }

  async GetAnswerFor(question: AddNewApprovedPersonQuestions) {
    return (await this.GetAnswer(question)).getText();

  }

  private async GetAnswer(question: AddNewApprovedPersonQuestions) {
    return await $(
      `//dt[contains(text(),'${question}')]/following-sibling::dd`
    );
  }

}

export default new RegulatorCheckYourDetails();
