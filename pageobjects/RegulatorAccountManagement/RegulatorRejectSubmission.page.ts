import BasePage from "../base.page.js";

class RegulatorRejectSubmissionPage extends BasePage{

    get Url(){
        return "/regulators/packaging-data-submission-reject";
    }

}
export default new RegulatorRejectSubmissionPage();