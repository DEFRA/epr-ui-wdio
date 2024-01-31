import BasePage from "../base.page.js";

class SchemeMembersPage extends BasePage {
  get Url() {
    return "/report-data/scheme-members";
  }

  get Title() {
    return "Scheme members (page 1 of 1) - Report packaging data - GOV.UK";
  }

  get H1HeaderWelsh() {
    return "Aelodau’r cynllun ar gyfer ";
  }

  get lnkClearSearch() {
    return $("=Clear search");
  }

  get lnkViewAndRemoveMembers() {
    return $("=View and remove members");
  }

  get lnkViewMembers() {
    return $("=View members");
  }

  async ClickOrganisationNameLink(organisationName: string) {
    var selector = "=" + organisationName;
    
    await $(selector).click();
  }

  private get btnSearchEnglish() {
    return $("//*[@value='Search']");
  }

  private get btnSearchWelsh() {
    return $("//*[@value='Chwilio']");
  }

  get txtSearch() {
    return $("#search");
  }

  get noOfSchemeMembers() {
    return $("//*[@id='main-content']/div/div/div/div[1]");
  }

  get lastUpdatedDate() {
    return $("//*[@id='main-content']/div/div/div/div[2]");
  }

  async getNoOfResults() {
    let noOfResults = (await $("//*[@id='main-content']/div/div/p[1]").getText()).trim();

    if (noOfResults[0] != 'T' && noOfResults.split('\n')[1] != null) {
      noOfResults = noOfResults.split('\n')[0] + " " + noOfResults.split('\n')[1].trim();
    }

    return noOfResults;
  }

  async EnterSearchValue(searchValue: string) {
    return await (await this.txtSearch).setValue(searchValue);
  }

  async clickSearch(isWelsh: boolean) {
    !isWelsh
      ? await (await this.btnSearchEnglish).click()
      : await (await this.btnSearchWelsh).click();
  }
}

export default new SchemeMembersPage();