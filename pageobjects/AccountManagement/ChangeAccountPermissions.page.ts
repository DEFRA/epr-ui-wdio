import BasePage from "../base.page.js";

class ChangeAccountPermissionsPage extends BasePage {
  get Url() {
    return "/manage-account/change-account-permissions";
  }

  get Title() {
    return "Change account permissions";
  }

  get H1HeaderWelsh() {
    return "Beth fydd angen iddyn nhw ei wneud yn y cyfrif?"
  }

  async SelectAccountPermission(userPermission: string) {
    return (await $(`label*=${userPermission}`)).click()
  }
}

export default new ChangeAccountPermissionsPage();
