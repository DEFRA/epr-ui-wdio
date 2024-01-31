import BasePage from "../base.page.js";

class BusinessAddressPage extends BasePage {
  get Url() {
    return "/create-account/business-address";
  }

  get Title() {
    return "Business Address";
  }

  get TitleWelsh() {
    return "Cyfeiriad Busnes";
  }

  get H1HeaderWelsh() {
    return "Beth yw’ch cyfeiriad busnes?";
  }

  private get txtBuildingName() {
    return $("#BuildingName");
  }

  private get txtFlatNumber() {
    return $("#SubBuildingName");
  }

  private get txtBuildingNumber() {
    return $("#BuildingNumber");
  }

  private get txtStreet() {
    return $("#Street");
  }

  private get txtTownOrCity() {
    return $("#Town");
  }

  private get txtCounty() {
    return $("#County");
  }

  private get txtPostcode() {
    return $("#Postcode");
  }

  async EnterBuildingName(buildingName: string) {
    return (await this.txtBuildingName).setValue(buildingName);
  }

  async EnterFlatNumber(flatNumber: string) {
    return (await this.txtFlatNumber).setValue(flatNumber);
  }

  async EnterBuildingNumber(buildingNumber: string) {
    return (await this.txtBuildingNumber).setValue(buildingNumber);
  }

  async EnterStreetName(street: string) {
    return (await this.txtStreet).setValue(street);
  }

  async EnterTownOrCity(townOrCity: string) {
    return (await this.txtTownOrCity).setValue(townOrCity);
  }

  async EnterCounty(county: string) {
    return (await this.txtCounty).setValue(county);
  }

  async EnterPostcode(postcode: string) {
    return (await this.txtPostcode).setValue(postcode);
  }

  async RemovePostcode() {
    (await this.txtPostcode).clearValue();
  }
}

export default new BusinessAddressPage();
