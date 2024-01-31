import BasePage from "../base.page.js";

class TellUsMorePage extends BasePage {
  get Url() {
    return "/report-data/tell-us-more";
  }

  get Title() {
    return "Tell us more - Report packaging data - GOV.UK";
  }

  get H1HeaderWelsh() {
    return "Dywedwch ragor am pam rydych chi’n tynnu’r aelod yma";
  }

  get txtTellUsMoreInfo() {
    return $("#TellUsMore");
  }

  async EnterTellUsMoreInfo(tellUsMoreInfo: string) {
    await (await this.txtTellUsMoreInfo).setValue(tellUsMoreInfo);
  }
}

export default new TellUsMorePage();