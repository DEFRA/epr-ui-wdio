import BasePage from "../base.page.js";

class BusinessAddressPostcodePage extends BasePage {
  get Url() {
    return "/create-account/business-address-postcode";
  }

  get Title() {
    return "Business address postcode";
  }

  get TitleWelsh() {
    return "Cod post cyfeiriad busnes";
  }

  get H1HeaderWelsh() {
    return "Beth yw’ch cyfeiriad busnes?";
  }

  private get txtPostcode() {
    return $("#Postcode");
  }

  private get btnFindAddress() {
    return $("button*=Find address");
  }

  private get btnDodOHydIrCyfeiriad() {
    return $("button*=Dod o hyd i’r cyfeiriad");
  }

  async EnterPostcode(postcode: string) {
    return (await this.txtPostcode).setValue(postcode);
  }

  async FindAddress(isWelsh: boolean) {
    if (!isWelsh) {
      (await this.btnFindAddress).click();
    } else {
      (await this.btnDodOHydIrCyfeiriad).click();
    }
  }
}

export default new BusinessAddressPostcodePage();
