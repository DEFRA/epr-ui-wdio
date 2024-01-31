import BasePage from "../base.page.js";

class RegulatorAcceptSubmissionPage extends BasePage{

    get Url(){
        return "/regulators/accept-submission"
    }

    get Title(){
        return "Accept Submission - pEPR: Regulators’ Service - GOV.UK"
    }

}
export default new RegulatorAcceptSubmissionPage();