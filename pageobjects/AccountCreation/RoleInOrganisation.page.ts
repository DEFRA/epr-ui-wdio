import BasePage from "../base.page.js";
import { ValidOrganisationRoles } from "../../utils/types/AccountCreation.types.js"

class RoleInOrganisationPage extends BasePage {

    get Url() {
        return "/create-account/role-in-organisation"
    }

    get Title() {
        return "Role in organisation"
    }

    get TitleWelsh() {
        return ""
    }

    async SelectRoleInOrganisation(roleInOrganisation: ValidOrganisationRoles) {
        await (await $(`label*=${roleInOrganisation}`)).click()
    }
}

export default new RoleInOrganisationPage()
