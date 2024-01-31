import BasePage from "../base.page.js";
import { ComplianceSchemes } from "../../utils/types/ComplianceSchemes.types.js";

class HomeComplianceSchemePage extends BasePage {
  get Url() {
    return "/report-data/home-compliance-scheme";
  }

  get H1HeaderWelsh() {
    return "Hafan y cyfrif - ";
  }

  get panelWhatDoIReport() {
    return $("span*=What do I report");
    // return $('[data-testid="landing-page-info-panel"]');
  }

  get txtWhatDoIReport() {
    return $("//summary/following-sibling::div");
    // return $('[data-testid="landing-page-info-panel-text"]');
  }

  get CSTabs() {
    return $$("form[action='/report-data/home-compliance-scheme']>li");
  }

  get inActiveTabs() {
    return $$(
      "li:not(.govuk-tabs__list-item--selected).govuk-tabs__list-item button"
    );
    // return $('[data-testid="landing-page-inactive-tab"]');
  }

  get activeTab() {
    return $("li.govuk-tabs__list-item--selected button");
    // return $('[data-testid="landing-page-active-tab"]');
  }

  get textAboveHeadingWithinTab() {
    return $(".scheme-name");
  }

  get headingWithinTab() {
    return $(".govuk-heading-l");
  }

  get lnkViewAndRemoveMembers() {
    return $("=View and remove members");
  }

  get lnkViewMembers() {
    return $("=View members");
  }

  async getNoOfSchemeMembers() {
    let noOfSchemeMembers = await $("//*[@id='compliance-scheme-tabs']/form/div/div[3]/div[1]").getText();  

    if (noOfSchemeMembers.split('\n')[0] == "") {
      noOfSchemeMembers = noOfSchemeMembers.split('\n')[1].trim() + " " + noOfSchemeMembers.split('\n')[2].trim();
    }

    return noOfSchemeMembers;
  }

  get lastUpdatedDate() {
    return $(".last-updated-date");
  }

  get noSchemeMembersParagraph() {
    return $(".members-info");
  }

  async getTabWithName(name: ComplianceSchemes) {
    var selector = "button=" + name;
    
    return $(selector);
  }
}

export default new HomeComplianceSchemePage();
