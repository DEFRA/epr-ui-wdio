import { Given, When, Then } from "@wdio/cucumber-framework";
import CustomWorld from "../../../utils/CustomWorld.js";
import AssertPageUtils from "../../../utils/Assert.utils.js";
import { waitUntilPageLoads } from "../../../utils/Waiters.js";
import IsOrgRegisteredCharityPage from "../../../pageobjects/AccountCreation/IsOrgRegisteredCharity.page.js";
import IsOrgRegisteredWithCoHousePage from "../../../pageobjects/AccountCreation/IsOrgRegisteredWithCoHouse.page.js";
import UkNationPage from "../../../pageobjects/AccountCreation/UkNation.page.js";
import FullNamePage from "../../../pageobjects/AccountCreation/FullName.page.js";
import TelephoneNumberPage from "../../../pageobjects/AccountCreation/TelephoneNumber.page.js";
import CheckYourDetailsPage from "../../../pageobjects/AccountCreation/CheckYourDetails.page.js";
import DeclarationPage from "../../../pageobjects/AccountCreation/Declaration.page.js";
import { AccountCreationQuestions } from "../../../utils/types/AccountCreation.types.js";
import { ValidBusinessBasedCountries } from "../../../utils/types/AccountCreation.types.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";

Given(
  /^init Account Creation scenario context/,
  async function (this: CustomWorld) {
    this.scenarioDataAccCreation = new Map<AccountCreationQuestions, string>();
  }
);


Given(
  /^the organisation is a registered charity: "(.*)"$/,
  async function (this: CustomWorld, isRegisteredCharity: "Yes" | "No") {
    await waitUntilPageLoads();
    this.scenarioDataAccCreation.set(
      "A registered charity?",
      isRegisteredCharity
    );
    await expect(browser).toHaveUrlContaining(IsOrgRegisteredCharityPage.Url);
    await expect(browser).toHaveTitleContaining(
      IsOrgRegisteredCharityPage.Title
    );
    await IsOrgRegisteredCharityPage.SelectIsRegisteredCharity(
      isRegisteredCharity
    );
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await IsOrgRegisteredCharityPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the organisation is registered with companies house: "(.*)"$/,
  async function (this: CustomWorld, isRegisteredWithCoHouse: "Yes" | "No") {
    this.scenarioDataAccCreation.set(
      "Registered with Companies House?",
      isRegisteredWithCoHouse
    );
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(
      IsOrgRegisteredWithCoHousePage.Url
    );
    await expect(browser).toHaveTitleContaining(
      IsOrgRegisteredWithCoHousePage.Title
    );
    await IsOrgRegisteredWithCoHousePage.SelectIsRegWithCompaniesHouse(
      isRegisteredWithCoHouse
    );
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await IsOrgRegisteredWithCoHousePage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the business or organisation is based in: "(.*)"$/,
  async function (this: CustomWorld, ukNation: ValidBusinessBasedCountries) {
    this.scenarioDataAccCreation.set("UK nation", ukNation);
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(UkNationPage.Url);
    await expect(browser).toHaveTitleContaining(UkNationPage.Title);
    await UkNationPage.SelectWhereBusinessBased(ukNation);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await UkNationPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the name is: "(.*)" "(.*)"$/,
  async function (this: CustomWorld, firstName: string, lastName: string) {
    this.scenarioDataAccCreation.set("Name", `${firstName} ${lastName}`);
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(FullNamePage.Url);
    if (!this.isWelsh) {
      await expect(browser).toHaveTitleContaining(FullNamePage.Title);
    } else {
      await expect(browser).toHaveTitleContaining(FullNamePage.TitleWelsh);
    }
    await FullNamePage.EnterFirstName(firstName);
    await FullNamePage.EnterLastName(lastName);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await FullNamePage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the telephone number is: "(.*)"$/,
  async function (this: CustomWorld, telephoneNumber: string) {
    this.scenarioDataAccCreation.set("Telephone", telephoneNumber);
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(TelephoneNumberPage.Url);
    if (!this.isWelsh) {
      await expect(browser).toHaveTitleContaining(TelephoneNumberPage.Title);
    } else {
      await expect(browser).toHaveTitleContaining(
        TelephoneNumberPage.TitleWelsh
      );
    }
    await TelephoneNumberPage.EnterTelephoneNumber(telephoneNumber);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await TelephoneNumberPage.clickContinue(this.isWelsh);
  }
);

When(
  /^checked the details are correct for an account creation journey$/,
  async function (this: CustomWorld) {
    await waitUntilPageLoads();
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await expect(browser).toHaveUrlContaining(CheckYourDetailsPage.Url);
    await expect(browser).toHaveTitleContaining(CheckYourDetailsPage.Title);

    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "A registered charity?",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Registered with Companies House?",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Type of organisation",
      this.scenarioDataAccCreation
    );

    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Companies House number",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Organisation details",
      this.scenarioDataAccCreation
    );

    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Trading name",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Address1",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Address2",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "AddressPostcode",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "UK nation",
      this.scenarioDataAccCreation
    );

    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Role",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Name",
      this.scenarioDataAccCreation
    );
    await AssertPageUtils.AssertCheckYourDetailsPageValue(
      "Telephone",
      this.scenarioDataAccCreation
    );

    await CheckYourDetailsPage.clickContinue(this.isWelsh);
  }
);

When(/^confirm and submit details$/, async function () {
  await waitUntilPageLoads();
  await expect(browser).toHaveUrlContaining(DeclarationPage.Url);
  await expect(browser).toHaveTitleContaining(DeclarationPage.Title);
  cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  await DeclarationPage.ConfirmDetailsandCreateAccount();
});

// Then(/^the account should have been created$/, async function() {

// })
