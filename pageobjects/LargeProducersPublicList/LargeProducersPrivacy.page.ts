import BasePage from "../base.page.js";

class LargeProducersPrivacyPage extends BasePage {
  get Url() {
    return "/large-producers";
  }

  get Title() {
    return $("h1=Privacy notice - large producers on the ‘report packaging data’ service");
  }

  get TitleWelsh() {
    return $("h1=Hysbysiad preifatrwydd - Cynhyrchwyr mawr ar y gwasanaeth ‘Rhoi gwybod am ddata pecynwaith‘");
  }
}

export default new LargeProducersPrivacyPage();