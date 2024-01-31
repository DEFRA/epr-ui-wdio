import { AccountCreationQuestions } from "../../utils/types/AccountCreation.types.js";
import BasePage from "../base.page.js";

class CheckYourDetails extends BasePage {
  get Url() {
    return "/create-account/check-your-details";
  }

  get Title() {
    return "Your details";
  }

  async GetAnswerFor(question: AccountCreationQuestions) {
    if (question.includes("Address")) {
      return (await this.GetAnswerAddress(question)).getText();
    } else if (question.includes("Organisation details")) {
      return (await this.GetAnswerOrganisationDetails()).getText();
    }
    return (await this.GetAnswer(question)).getText();
  }

  async clickChangeAnswerFor(question: AccountCreationQuestions) {
    if (question.includes("Address")) {
      (await $(`dt*=Address`).nextElement().$("*=Change")).click();
    }
    (await this.GetChangeLink(question)).click();
  }

  private async GetAnswer(question: AccountCreationQuestions) {
    return await $(`dt*=${question}`).nextElement();
  }

  private async GetAnswerAddress(question: AccountCreationQuestions) {
    if (question == "Address1") {
      return await this.GetAddressLine(1);
    } else if (question == "Address2") {
      return await this.GetAddressLine(2);
    }

    return await this.GetAddressLine("last()");
  }

  private async GetAnswerOrganisationDetails() {
    return await $(
      `//dt[contains(text(),'Organisation details')]/following-sibling::dd`
    );
  }

  private async GetChangeLink(question: AccountCreationQuestions) {
    return (await this.GetAnswer(question)).nextElement().$("*=Change");
  }

  private async GetAddressLine(line: number | "last()") {
    return await $(
      `//dt[contains(text(),'Address')]/following-sibling::dd/span[${line}]`
    );
  }
}

export default new CheckYourDetails();
