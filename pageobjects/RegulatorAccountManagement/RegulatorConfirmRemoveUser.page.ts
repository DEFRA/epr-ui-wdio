import BasePage from "../base.page.js";

class RegulatorConfirmRemoveUserPage extends BasePage{

    get Url(){
        return "/regulators/confirm-remove-user";
    }

    get Title() {
        return "You have selected Jason Wallacee to be removed from Cake Place account - pEPR: Regulators’ Service  - GOV.UK";
      }
    

}
export default new RegulatorConfirmRemoveUserPage();