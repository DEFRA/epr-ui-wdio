import BasePage from "../base.page.js";

class RegulatorSuccessPage extends BasePage {

    get Url() {
        return "/regulators/email-nominated-approved-person";
    }

    get Title() {
        return " - pEPR: Regulators’ Service - GOV.UKK";
    }


}
export default new RegulatorSuccessPage();