import BasePage from "../base.page.js";
import { ValidReasonsForRemoval } from "../../utils/types/CSDissociatesFromProducer.types.js";

class ReasonForRemovalPage extends BasePage {
  get Url() {
    return "/report-data/reason-for-removal";
  }

  get Title() {
    return "Reason for removal - Report packaging data - GOV.UK";
  }

  get H1HeaderWelsh() {
    return "Pam hoffech chi dynnu ";
  }

  async SelectReasonForRemoval(reasonForRemoval: ValidReasonsForRemoval) {
    await (await $(`label*=${reasonForRemoval}`)).click();
  }
}

export default new ReasonForRemovalPage();