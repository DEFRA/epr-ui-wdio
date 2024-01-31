import BasePage from "../base.page.js";

class NameOfOrganisationPage extends BasePage {
  get Url() {
    return "/confirm-change-permission";
  }

  get Title() {
    return "Confirm change permission";
  }

  get btnConfirmAndContinue() {
    return $("button*=Confirm and continue");
  }

  async CancelInvite(cancelInvite: "Yes" | "No") {
    await (await $(`label*=${cancelInvite}`)).click();
  }

  async clickConfirmAndContinue() {
    (await this.btnConfirmAndContinue).click();
  }
}

export default new NameOfOrganisationPage();
