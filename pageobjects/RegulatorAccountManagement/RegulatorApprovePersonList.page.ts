import BasePage from "../base.page.js";

class RegulatorApprovePersonListPage extends BasePage {

  get Url() {
    return "/regulators/approved-person-list-page";
  }

  get Title() {
    return "Who has been nominated to apply as the new approved person? - pEPR: Regulators’ Service  - GOV.UK";
  }

  private get selectSomeoneNewAsAnAP() {
    return $('input[value="00000000-0000-0000-0000-000000000000"]')

  }

  async selectNewUserAsAnAP() {
    
      await (await this.selectSomeoneNewAsAnAP).click()
     
  }
async selectExistingUserNewJourney() {
 
    await (await $('input[value="53bb2605-9b53-45be-82c1-c19c9c00dd94"]')).click()

}

async selectExistingUserExistingJourney() {
 
  await (await $('input[value="f817ad87-1090-4f71-91ac-4481c2383af3"]')).click()

}

}
export default new RegulatorApprovePersonListPage();