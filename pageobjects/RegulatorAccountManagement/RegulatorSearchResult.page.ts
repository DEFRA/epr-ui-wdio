import BasePage from "../base.page.js";

class RegulatorSearchResultPage extends BasePage{

    get Url(){
        return "/regulators/regulator-search-results";
    }

    get Title() {
        return "Results - pEPR: Regulators’ Service - GOV.UK";
      }
    

}
export default new RegulatorSearchResultPage();