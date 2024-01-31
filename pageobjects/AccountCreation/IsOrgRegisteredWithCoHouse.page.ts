import BasePage from "../base.page.js";

class IsOrgRegisteredWithCoHousePage extends BasePage {

    get Url() {
        return "/create-account/registered-with-companies-house"
    }

    get Title() {
        return "Registered with Companies House"
    }

    get TitleWelsh() {
        return "Wedi’i gofrestru gyda Thŷ’r Cwmnïau"
    }

    get H1HeaderWelsh() {
        return "Ydy’ch sefydliad wedi’i gofrestru gyda Thŷ’r Cwmnïau?"
    }    

    private get IsRegWithCoHouseYes() {
        return $("#IsTheOrganisationRegistered")
    }
    
    private get IsRegWithCoHouseNo() {
        return $("#IsTheOrganisationRegistered-No")
    }

    async SelectIsRegWithCompaniesHouse(isRegisteredWithCoHouse: "Yes" | "No") {
        isRegisteredWithCoHouse == "Yes" ? 
            await (await this.IsRegWithCoHouseYes).click() 
            : await (await this.IsRegWithCoHouseNo).click()
    }
}

export default new IsOrgRegisteredWithCoHousePage()
