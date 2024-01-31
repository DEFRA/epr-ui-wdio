import BasePage from "../base.page.js";

class ConfirmRemovalPage extends BasePage {
  get Url() {
    return "/report-data/confirm-removal";
  }

  get Title() {
    return "Confirm removal - Report packaging data - GOV.UK";
  }

  get H1HeaderWelsh() {
    return "Ydych chi’n siŵr eich bod chi eisiau tynnu ";
  }
  
  async SelectConfirmRemoval(radioButton: string) {
    await (await $(`label*=${radioButton}`)).click()
  }
}

export default new ConfirmRemovalPage();