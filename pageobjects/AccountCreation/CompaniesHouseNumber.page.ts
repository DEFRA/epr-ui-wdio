import BasePage from "../base.page.js";

class CompaniesHouseNumberPage extends BasePage {

    get Url() {
        return "/create-account/companies-house-number"
    }

    get TitleEnglish() {
        return "Companies House number"
    }

    get TitleWelsh() {
        return "Rhif Tŷ’r Cwmnïau"
    }

    get H1HeaderWelsh() {
        return "Beth yw eich rhif Tŷ’r Cwmnïau?"
    }    

    private get txtCompaniesHouseNumber() {
        return $("#CompaniesHouseNumber")
    }
    
    async EnterCompaniesHouseNumber(companiesHouseNumber: string) {
        return (await this.txtCompaniesHouseNumber).setValue(companiesHouseNumber)
    }
}

export default new CompaniesHouseNumberPage()