import BasePage from "../base.page.js";
import { ValidOrganisationTypes } from "../../utils/types/AccountCreation.types.js"

class TypeOfOrganisationPage extends BasePage {

    get Url() {
        return "/create-account/type-of-organisation"
    }

    get Title() {
        return "Type of organisation"
    }

    get TitleWelsh() {
        return "Math o sefydliad"
    }

    get H1HeaderWelsh() {
        return "Sut mae’ch sefydliad wedi’i gofrestru?"
    }
    
    async SelectTypeOfOrganisation(typeOfOrganisation: ValidOrganisationTypes) {
        await (await $(`label*=${typeOfOrganisation}`)).click()
    }
}

export default new TypeOfOrganisationPage()
