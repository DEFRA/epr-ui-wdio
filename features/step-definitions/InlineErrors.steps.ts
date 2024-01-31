import { Given, Then } from "@wdio/cucumber-framework";
import { waitAndClick, waitUntilPageLoads } from "../../utils/Waiters.js";
import { en_GB, faker } from "@faker-js/faker";
import BusinessAddressPage from "../../pageobjects/AccountCreation/BusinessAddress.page.js";
import BusinessAddressPostcodePage from "../../pageobjects/AccountCreation/BusinessAddressPostcode.page.js";
import FullNamePage from "../../pageobjects/AccountCreation/FullName.page.js";
import ManualRoleInOrganisationPage from "../../pageobjects/AccountCreation/ManualRoleInOrganisation.page.js";
import TradingNamePage from "../../pageobjects/AccountCreation/TradingName.page.js";
import BasePage from "../../pageobjects/base.page.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";
import CustomWorld from "../../utils/CustomWorld.js";
import RegulatorsTransferApplicationPage from "../../pageobjects/RegulatorAccountManagement/RegulatorsTransferApplication.page.js";
import RegulatorEnrolmentDecisionPage from "../../pageobjects/RegulatorAccountManagement/RegulatorEnrolmentDecision.page.js";
import RelationshipWithOrganisationPage from "../../pageobjects/AccountManagement/RelationshipWithOrganisation.page.js";
import JobTitlePage from "../../pageobjects/AccountManagement/JobTitle.page.js";
import NameOfConsultancyPage from "../../pageobjects/AccountManagement/NameOfConsultancy.page.js";
import NameOfOrganisationPage from "../../pageobjects/AccountManagement/NameOfOrganisation.page.js";
import TellUsMorePage from "../../pageobjects/CSDissociatesFromProducer/TellUsMore.page.js";
import ConfirmRemovalPage from "../../pageobjects/CSDissociatesFromProducer/ConfirmRemoval.page.js";


var basePage = new BasePage();


Given(
  /^a value isn't selected or entered on the (.*) page$/,
  async function (this: CustomWorld, page: string) {
    await waitUntilPageLoads();

    page = page.replace(/['"]+/g, "");

    if (page === BusinessAddressPostcodePage.Title) {
      await BusinessAddressPostcodePage.FindAddress(this.isWelsh);
    } 
    else if (ConfirmRemovalPage.Title.toLowerCase().includes(page)) {
      await basePage.clickConfirm(this.isWelsh);
    } 
    else {
      await basePage.clickContinue(this.isWelsh);
    }
  }
);

Given(
  /^the (trading name|first name|last name|flat number|building number|building name|street name|town|county|postcode|role in the organisation|reason for transfer|reason for rejection|relationship with organisation|job title|name of consultancy|name of organisation|tell us more info) is: "(.*)" characters long$/,
  async function (
    this: CustomWorld,
    field:
      | "trading name"
      | "first name"
      | "last name"
      | "flat number"
      | "building number"
      | "building name"
      | "street name"
      | "town"
      | "county"
      | "postcode"
      | "role in the organisation"
      | "reason for transfer"
      | "reason for rejection"
      | "relationship with organisation"
      | "job title"
      | "name of consultancy"
      | "name of organisation"
      | "tell us more info",
    fieldLength: number
  ) {
    const fieldData = "a".repeat(fieldLength);
    switch (field) {
      case "trading name":
        await TradingNamePage.EnterTradingName(fieldData);
        break;
      case "first name":
        await FullNamePage.EnterFirstName(fieldData);
        await FullNamePage.EnterLastName(faker.person.lastName());
        break;
      case "last name":
        await FullNamePage.EnterFirstName(faker.person.firstName());
        await FullNamePage.EnterLastName(fieldData);
        break;
      case "flat number":
        await BusinessAddressPage.EnterFlatNumber(fieldData);
        await BusinessAddressPage.EnterBuildingNumber(
          faker.location.buildingNumber()
        );
        await BusinessAddressPage.EnterStreetName(faker.location.street());
        await BusinessAddressPage.EnterTownOrCity(faker.location.city());
        break;
      case "building number":
        await BusinessAddressPage.EnterBuildingNumber(fieldData);
        await BusinessAddressPage.EnterStreetName(faker.location.street());
        await BusinessAddressPage.EnterTownOrCity(faker.location.city());
        break;
      case "building name":
        await BusinessAddressPage.EnterBuildingNumber(
          faker.location.buildingNumber()
        );
        await BusinessAddressPage.EnterBuildingName(fieldData);
        await BusinessAddressPage.EnterStreetName(faker.location.street());
        await BusinessAddressPage.EnterTownOrCity(faker.location.city());
        break;
      case "street name":
        await BusinessAddressPage.EnterBuildingNumber(
          faker.location.buildingNumber()
        );
        await BusinessAddressPage.EnterStreetName(fieldData);
        await BusinessAddressPage.EnterTownOrCity(faker.location.city());
        break;
      case "town":
        await BusinessAddressPage.EnterBuildingNumber(
          faker.location.buildingNumber()
        );
        await BusinessAddressPage.EnterStreetName(faker.location.street());
        await BusinessAddressPage.EnterTownOrCity(fieldData);
        break;
      case "county":
        await BusinessAddressPage.EnterBuildingNumber(
          faker.location.buildingNumber()
        );
        await BusinessAddressPage.EnterStreetName(faker.location.street());
        await BusinessAddressPage.EnterTownOrCity(faker.location.city());
        await BusinessAddressPage.EnterCounty(fieldData);
        break;
      case "postcode":
        await BusinessAddressPage.EnterBuildingNumber(
          faker.location.buildingNumber()
        );
        await BusinessAddressPage.EnterStreetName(faker.location.street());
        await BusinessAddressPage.EnterTownOrCity(faker.location.city());
        await BusinessAddressPage.RemovePostcode();
        await BusinessAddressPage.EnterPostcode(fieldData);
        break;
      case "role in the organisation":
        await ManualRoleInOrganisationPage.EnterRoleInOrganisation(fieldData);
        break;
      case "reason for transfer":
        await RegulatorsTransferApplicationPage.EnterTransferNotes(fieldData);
        break;
      case "reason for rejection":
        await RegulatorEnrolmentDecisionPage.enterEnrolmentRejectionReason(
          fieldData
        );
        break;
      case "relationship with organisation":
        await RelationshipWithOrganisationPage.EnterRelationshipWithOrganisation(
          fieldData
        );
        break;
      case "job title":
        await JobTitlePage.EnterJobTitle(fieldData);
        break;
      case "name of consultancy":
        await NameOfConsultancyPage.EnterNameOfConsultancy(fieldData);
        break;
      case "name of organisation":
        await NameOfOrganisationPage.EnterNameOfOrganisation(fieldData);
        break;
      case "tell us more info":
        await TellUsMorePage.EnterTellUsMoreInfo(fieldData);
        break;
      default:
        throw new Error(`The field ${field} is not defined!`);
    }
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await basePage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the address is entered manually without a building number$/,
  async function (this: CustomWorld) {
    await BusinessAddressPage.EnterStreetName(faker.location.street());
    await BusinessAddressPage.EnterTownOrCity(faker.location.city());
    await BusinessAddressPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the address is entered manually without a street name$/,
  async function (this: CustomWorld) {
    await BusinessAddressPage.EnterBuildingNumber(
      faker.location.buildingNumber()
    );
    await BusinessAddressPage.EnterTownOrCity(faker.location.city());
    await BusinessAddressPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the address is entered manually without a town or city$/,
  async function (this: CustomWorld) {
    await BusinessAddressPage.EnterBuildingNumber(
      faker.location.buildingNumber()
    );
    await BusinessAddressPage.EnterStreetName(faker.location.street());
    await BusinessAddressPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the address is entered manually without a postcode$/,
  async function (this: CustomWorld) {
    await BusinessAddressPage.EnterBuildingNumber(
      faker.location.buildingNumber()
    );
    await BusinessAddressPage.EnterStreetName(faker.location.street());
    await BusinessAddressPage.EnterTownOrCity(faker.location.city());
    await BusinessAddressPage.RemovePostcode();
    await BusinessAddressPage.clickContinue(this.isWelsh);
  }
);

Then(
  /^error message: "(.*)" should (display|contain)$/,
  async function (errorMessage: string, assert: "display" | "contain") {
    const actualFieldErrorMessage = await basePage.FieldErrorMessage();

    // Where we are checking the condition where somebody has already been invited,
    // we only check for the Field Error Message, because there is no Summary Error Message locator
    if (!errorMessage.includes("An invitation has already been sent to")) {
      const actualSummaryErrorMessage = await (
        await basePage.SummaryErrorMessage()
      ).getText();

      assert == "display"
        ? await expect(actualSummaryErrorMessage).toEqual(errorMessage)
        : await expect(actualSummaryErrorMessage).toContain(errorMessage);
    }

    assert == "display"
      ? await expect(actualFieldErrorMessage).toEqual(errorMessage)
      : await expect(actualFieldErrorMessage).toContain(errorMessage);
  }
);

Then(/^the user clicks on the error body$/, async function () {
  await waitAndClick(await basePage.SummaryErrorMessage());
});

Then(
  /^the user should see the (first radio button|transfer notes input box|reject decision input box) highlighted$/,
  async function (
    element:
      | "first radio button"
      | "transfer notes input box"
      | "reject decision input box"
  ) {
    let focusedElement: WebdriverIO.Element;
    switch (element) {
      case "first radio button":
        focusedElement =
          await RegulatorsTransferApplicationPage.EnvironmentAgency();
        break;
      case "transfer notes input box":
        focusedElement =
          await RegulatorsTransferApplicationPage.TransferReasonNotes();
        break;
      case "reject decision input box":
        focusedElement =
          await RegulatorEnrolmentDecisionPage.getDecisionTextInputBox();
        break;
    }
    expect(focusedElement.isFocused());
  }
);
