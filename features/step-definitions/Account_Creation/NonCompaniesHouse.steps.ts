import { Given } from "@wdio/cucumber-framework";
import { waitUntilPageLoads } from "../../../utils/Waiters.js";
import TypeOfOrganisationPage from "../../../pageobjects/AccountCreation/TypeOfOrganisation.page.js";
import TradingNamePage from "../../../pageobjects/AccountCreation/TradingName.page.js";
import BusinessAddressPostcodePage from "../../../pageobjects/AccountCreation/BusinessAddressPostcode.page.js";
import BusinessAddressPage from "../../../pageobjects/AccountCreation/BusinessAddress.page.js";
import SelectBusinessAddressPage from "../../../pageobjects/AccountCreation/SelectBusinessAddress.page.js";
import ManualRoleInOrganisationPage from "../../../pageobjects/AccountCreation/ManualRoleInOrganisation.page.js";
import { ValidOrganisationTypes } from "../../../utils/types/AccountCreation.types.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";

Given(
  /^the organisation registered type is a: "(.*)"$/,
  async function (
    this: CustomWorld,
    typeOfOrganisation: ValidOrganisationTypes
  ) {
    this.scenarioDataAccCreation.set(
      "Type of organisation",
      typeOfOrganisation
    );
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(TypeOfOrganisationPage.Url);
    await expect(browser).toHaveTitleContaining(TypeOfOrganisationPage.Title);
    await TypeOfOrganisationPage.SelectTypeOfOrganisation(typeOfOrganisation);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await TypeOfOrganisationPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the trading name is: "(.*)"$/,
  async function (this: CustomWorld, tradingName: string) {
    this.scenarioDataAccCreation.set("Trading name", tradingName);
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(TradingNamePage.Url);
    await expect(browser).toHaveTitleContaining(TradingNamePage.Title);
    await TradingNamePage.EnterTradingName(tradingName);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await TradingNamePage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the registered business postcode is: "(.*)"$/,
  async function (postcode: string) {
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(BusinessAddressPostcodePage.Url);
    await expect(browser).toHaveTitleContaining(
      BusinessAddressPostcodePage.Title
    );
    await BusinessAddressPostcodePage.EnterPostcode(postcode);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await BusinessAddressPostcodePage.FindAddress();
  }
);

Given(
  /^the full registered business address is: "(.*)"$/,
  async function (this: CustomWorld, fullAddress: string) {
    const addressSplit = fullAddress.split(",");
    this.scenarioDataAccCreation.set("Address1", addressSplit[0]);
    this.scenarioDataAccCreation.set(
      "Address2",
      `${addressSplit[1].trimStart()} ${addressSplit[2].trimStart()}`
    );
    this.scenarioDataAccCreation.set(
      "AddressPostcode",
      addressSplit[5].trimStart()
    );
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(SelectBusinessAddressPage.Url);
    await expect(browser).toHaveTitleContaining(
      SelectBusinessAddressPage.Title
    );
    await SelectBusinessAddressPage.SelectAnAddress(fullAddress);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await SelectBusinessAddressPage.clickContinue(this.isWelsh);
  }
);

Given(/^the address is not found$/, async function () {
  await waitUntilPageLoads();
  await expect(browser).toHaveUrlContaining(SelectBusinessAddressPage.Url);
  await expect(browser).toHaveTitleContaining(SelectBusinessAddressPage.Title);
  await SelectBusinessAddressPage.ClickCannotFindAddressInList();
});

Given(
  /^the address is entered manually: "(.*)", "(.*)", "(.*)", "(.*)", "(.*)"$/,
  async function (
    this: CustomWorld,
    buildingName: string,
    buildingNumber: string,
    streetName: string,
    townOrCity: string,
    postcode: string
  ) {
    this.scenarioDataAccCreation.set("Address1", buildingName);
    this.scenarioDataAccCreation.set(
      "Address2",
      `${buildingNumber} ${streetName}`
    );
    this.scenarioDataAccCreation.set("AddressPostcode", postcode);
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(BusinessAddressPage.Url);
    await expect(browser).toHaveTitleContaining(BusinessAddressPage.Title);
    await BusinessAddressPage.EnterBuildingNumber(buildingNumber);
    await BusinessAddressPage.EnterBuildingName(buildingName);
    await BusinessAddressPage.EnterStreetName(streetName);
    await BusinessAddressPage.EnterTownOrCity(townOrCity);
    await BusinessAddressPage.EnterPostcode(postcode);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await BusinessAddressPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the role in the organisation is entered manually: "(.*)"$/,
  async function (this: CustomWorld, roleInOrganisation: string) {
    this.scenarioDataAccCreation.set("Role", roleInOrganisation);
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(ManualRoleInOrganisationPage.Url);
    await expect(browser).toHaveTitleContaining(
      ManualRoleInOrganisationPage.Title
    );
    await ManualRoleInOrganisationPage.EnterRoleInOrganisation(
      roleInOrganisation
    );
    await ManualRoleInOrganisationPage.clickContinue(this.isWelsh);
  }
);
