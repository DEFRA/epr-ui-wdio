import BasePage from "../base.page.js";

class RelationshipWithOrganisationPage extends BasePage {
  get Url() {
    return "/manage-account/relationship-with-organisation";
  }

  get Title() {
    return "Relationship with organisation";
  }

  get H1HeaderWelsh() {
    return "Sut maen nhw’n gweithio gyda’ch sefydliad?";
  }

  get txtRelationshipWithOrganisation() {
    return $("#AdditionalRelationshipInformation");
  }

  async SelectRelationshipWithOrganisation(
    relationshipWithOrganisation: string
  ) {
    await (await $(`label*=${relationshipWithOrganisation}`)).click();
  }

  async EnterRelationshipWithOrganisation(
    relationshipWithOrganisation: string
  ) {
    (await this.txtRelationshipWithOrganisation).setValue(
      relationshipWithOrganisation
    );
  }
}
export default new RelationshipWithOrganisationPage();
