import BasePage from "../base.page.js";

class RegulatorRejectSubmissionPage extends BasePage{

    get Url(){
        return "/regulators/reject-submission";
    }

}
export default new RegulatorRejectSubmissionPage();