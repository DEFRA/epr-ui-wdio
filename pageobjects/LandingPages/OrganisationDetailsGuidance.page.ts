import BasePage from "../base.page.js";

class OrganisationDetailsGuidancePage extends BasePage {
  get Url() {
    return "https://www.gov.uk/government/publications/organisation-details-how-to-create-your-file-for-extended-producer-responsibility-epr-for-packaging";
  }

  get Title() {
    return "Organisation details: how to create your file for extended producer responsibility (EPR) for packaging - GOV.UK";
  }
}
export default new OrganisationDetailsGuidancePage();
