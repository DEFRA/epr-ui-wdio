import BasePage from "../base.page.js";

class RegulatorAcceptSubmissionPage extends BasePage{

    get Url(){
        return "/regulators/packaging-data-submission-confirm"
    }

    get Title(){
        return "Accept Submission - pEPR: Regulators’ Service - GOV.UK"
    }

}
export default new RegulatorAcceptSubmissionPage();