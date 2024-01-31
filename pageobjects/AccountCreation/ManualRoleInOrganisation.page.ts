import BasePage from "../base.page.js";

class ManualRoleInOrganisationPage extends BasePage {

    get Url() {
        return "/create-account/manual-input-role-in-organisation"
    }

    get Title() {
        return "Role in organisation"
    }

    get TitleWelsh() {
        return "Rôl yn y sefydliad"
    }

    get H1HeaderWelsh() {
        return "Beth yw’ch rôl chi yn y sefydliad?"
    }

    private get txtRoleInOrganisation() {
        return $("#RoleInOrganisation")
    }

    async EnterRoleInOrganisation(roleInOrganisation: string) {
        await (await this.txtRoleInOrganisation).setValue(roleInOrganisation);
    }
}

export default new ManualRoleInOrganisationPage()
