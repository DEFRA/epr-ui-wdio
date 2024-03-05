import BasePage from "../base.page.js";

class LargeProducersAccessibilityPage extends BasePage {
  get Url() {
    return "/large-producers";
  }

  get Title() {
    return $("h1=Accessibility statement - large producers on the ‘report packaging data’ service");
  }

  get TitleWelsh() {
    return $("h1=Datganiad Hygyrchedd - Cynhyrchwyr mawr ar y gwasanaeth ‘Rhoi gwybod am ddata pecynwaith’");
  }
}

export default new LargeProducersAccessibilityPage();