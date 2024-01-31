import BasePage from "../base.page.js";

class IsOrgRegisteredCharityPage extends BasePage {

    get Url() {
        return "/create-account"
    }

    get Title() {
        return "Registered as charity"
    }

    get TitleWelsh() {
        return "Wedi’i gofrestru fel elusen"
    }

    get H1HeaderWelsh() {
        return "Ydy’ch sefydliad yn elusen gofrestredig?"
    }

    private get IsRegCharityYes() {
        return $("#isTheOrganisationCharity")
    }
    
    private get IsRegCharityNo() {
        return $("#isTheOrganisationCharity-No")
    }

    async SelectIsRegisteredCharity(isRegisteredCharity: "Yes" | "No") {
        isRegisteredCharity == "Yes" ? 
            await (await this.IsRegCharityYes).click() 
            : await (await this.IsRegCharityNo).click()
    }
}

export default new IsOrgRegisteredCharityPage()