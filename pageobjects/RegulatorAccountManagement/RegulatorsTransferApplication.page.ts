import BasePage from "../base.page.js";

class RegulatorsTransferApplicationPage extends BasePage {
  get Url() {
    return "/regulators/transfer-application";
  }

  get Title() {
    return "Transfer";
  }

  private get rdBtnEnvironmentAgency() {
    return $("#AgencyIndex");
  }

  private get transferReasonNotes() {
    return $("//*[@id='TransferNotes.0-notes']");
  }

  async EnvironmentAgency() {
    return this.rdBtnEnvironmentAgency;
  }

  async TransferReasonNotes() {
    return this.transferReasonNotes;
  }

  async EnterTransferNotes(reason: string) {
    (await this.transferReasonNotes).setValue(reason);
  }
}

export default new RegulatorsTransferApplicationPage();
