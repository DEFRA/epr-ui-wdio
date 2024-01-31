import BasePage from "../base.page.js";
import { DelegatedUserQuestions } from "../../utils/types/AccountMaintenance.types.js";

class CheckDetailsAndSendInvitePage extends BasePage {
  get Url() {
    return "/check-details-send-invite";
  }

  get Title() {
    return "Check details send invite";
  }

  get TitleWelsh() {
    return "Gwirio’r manylion ac anfon gwahoddiad";
  }

  get txtFullName() {
    return $("#Fullname");
  }

  get btnSendInvitation() {
    return $("button*=Send invitation");
  }

  private async GetAnswer(question: DelegatedUserQuestions) {
    return await $(`dt*=${question}`).parentElement().nextElement();
  }

  async clickChangeAnswerFor(question: DelegatedUserQuestions) {
    (
      await (await this.GetAnswer(question)).nextElement().$("*=Change")
    ).click();
  }

  async GetAnswerFor(question: DelegatedUserQuestions) {
    return await (await this.GetAnswer(question)).getText();
  }

  async EnterFullName(fullName: string) {
    (await this.txtFullName).setValue(fullName);
  }

  async SendInvitation() {
    (await this.btnSendInvitation).click();
  }
}

export default new CheckDetailsAndSendInvitePage();
