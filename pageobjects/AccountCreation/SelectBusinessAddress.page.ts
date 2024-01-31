import BasePage from "../base.page.js";

class SelectBusinessAddress extends BasePage {
  get Url() {
    return "/create-account/select-business-address";
  }

  get Title() {
    return "Select business address";
  }

  get TitleWelsh() {
    return "Dewis cyfeiriad busnes";
  }

  get H1HeaderWelsh() {
    return "Beth yw’ch cyfeiriad busnes?";
  }

  private get lnkChange() {
    return $("=Change");
  }

  private get selectAnAddressDropdown() {
    return $("#SelectedListIndex");
  }

  private get lnkCannotFindAddressInList() {
    return $("*=t find my address in the list");
  }

  async ChangePostcode() {
    return (await this.lnkChange).click();
  }

  async SelectAnAddress(address: string) {
    await (await this.selectAnAddressDropdown).selectByVisibleText(address);
  }

  async ClickCannotFindAddressInList() {
    return (await this.lnkCannotFindAddressInList).click();
  }
}

export default new SelectBusinessAddress();
