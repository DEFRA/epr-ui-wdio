import BasePage from "../base.page.js";

class RegulatorSearchPage extends BasePage {

    get Url() {
        return "/regulators/regulator-search-page";
    }

    get Title() {
        return "What is the name or ID of the organisation you want to manage? - pEPR: Regulators’ Service - GOV.UK";
    }


}
export default new RegulatorSearchPage();