import BasePage from "../base.page.js";

class TelephoneNumberPage extends BasePage {

    get Url() {
        return "report-data/telephone-number"
    }

    get Title() {
        return "Telephone Number"
    }
    
    private get txtTelephoneNumber() {
        return $("#TelephoneNumber")
    }
    
    async EnterTelephoneNumber(telephoneNumber: string) {
        return (await this.txtTelephoneNumber).setValue(telephoneNumber);
    }
}

export default new TelephoneNumberPage()
