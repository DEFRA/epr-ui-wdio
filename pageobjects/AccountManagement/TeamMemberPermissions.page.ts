import BasePage from "../base.page.js";

class TeamMemberPermissionsPage extends BasePage {
    get Url() {
      return "/manage-account/team-member-permissions";
    }
  
    get Title(){
      return "What do you want them to do? - GOV.UK";
    }

    get H1HeaderWelsh() {
      return "Beth hoffech chi iddyn nhw ei wneud?"
    }

    async SelectUserAccountPermission(userPermission: string) {
        return (await $(`label*=${userPermission}`)).click()
      }
}
export default new TeamMemberPermissionsPage();