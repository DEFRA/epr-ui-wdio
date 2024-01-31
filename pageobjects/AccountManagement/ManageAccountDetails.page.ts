import BasePage from "../base.page.js";

class ManageAccountDetailsPage extends BasePage {
  get Url() {
    return "/manage-account";
  }

  get Title() {
    return "Manage account details";
  }

  get H1HeaderWelsh() {
    return "Rheoli manylion y cyfrif";
  }

  private async getTeamMemberLocator(userType: string) {
    return await $(`b*=${userType}`);
  }

  async ClickAddTeamMember() {
    (await this.lnkAddTeamMember).click();
  }

  async ClickChangePermissionsFor(usersName: string) {
    return (
      await (
        await (await this.getTeamMemberLocator(usersName)).parentElement()
      ).parentElement()
    )
      .parentElement()
      .$("td.govuk-table__cell p a")
      .click();
  }

  async PermissionsStatusFor(userType: string) {
    return (
      await (
        await (await this.getTeamMemberLocator(userType)).parentElement()
      ).parentElement()
    )
      .parentElement()
      .$("td.govuk-table__cell p strong");
  }

  async PermissionsFor(userType: string) {
    return (
      await (
        await (await this.getTeamMemberLocator(userType)).parentElement()
      ).parentElement()
    )
      .parentElement()
      .$("td.govuk-table__cell p");
  }
}

export default new ManageAccountDetailsPage();
