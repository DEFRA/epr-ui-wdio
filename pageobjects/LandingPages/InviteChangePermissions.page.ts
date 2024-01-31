import BasePage from "../base.page.js";

class InviteChangePermissionsPage extends BasePage {
  get Url() {
    return "/report-data/invite-change-permissions";
  }

  get Title() {
    return "Invite change permissions";
  }

  private get lnkContinue() {
    return $("*=Continue");
  }

  async clickContinue() {
    await (await this.lnkContinue).click();
  }
}

export default new InviteChangePermissionsPage();
