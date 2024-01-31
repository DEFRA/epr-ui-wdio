import BasePage from "../base.page.js";
import { DelegatedUserQuestions } from "../../utils/types/AccountMaintenance.types.js";

class RegulatorsMemberDetailsPage extends BasePage {
  get Url() {
    return "/regulators/manage-account/team-member-details";
  }

  get Title() {
    return "Check invitation details - GOV.UK";
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
}
export default new RegulatorsMemberDetailsPage();
