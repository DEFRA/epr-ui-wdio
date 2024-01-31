import BasePage from "../base.page.js";

class CompaniesHouseNumberPage extends BasePage {

    get Url() {
        return "/create-account/confirm-company-details"
    }

    get Title() {
        return "Confirm Company Details"
    }

    get TitleWelsh() {
        return "Cadarnhau Manylion Cwmni"
    }

    get H1HeaderWelsh() {
        return "Cadarnhau manylion eich sefydliad o Dŷ’r Cwmnïau"
    }    

    private get txtCompaniesHouseNumber() {
        return $("div*=Companies House number:").nextElement()
    }

    private get txtCompanyName() {
        return $("h1*=Confirm your organisation’s details from Companies House").nextElement().$("h2")
    }

    private get txtAddress() {
        return $("div*=Address:").nextElement()
    }

    async CompaniesHouseNumber() {
        return (await this.txtCompaniesHouseNumber).getText()
    }

    async CompanyName() {
        return (await this.txtCompanyName).getText()
    }

    async Address() {
        return (await this.txtAddress).getText()
    }
}

export default new CompaniesHouseNumberPage();
