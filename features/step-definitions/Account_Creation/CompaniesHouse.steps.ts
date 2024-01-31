import { Given } from "@wdio/cucumber-framework";
import CompaniesHouseNumberPage from "../../../pageobjects/AccountCreation/CompaniesHouseNumber.page.js";
import CompaniesHouseConfirmPage from "../../../pageobjects/AccountCreation/CompaniesHouseConfirm.page.js";
import RoleInOrganisationPage from "../../../pageobjects/AccountCreation/RoleInOrganisation.page.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import { waitUntilPageLoads } from "../../../utils/Waiters.js";
import { ValidOrganisationRoles } from "../../../utils/types/AccountCreation.types.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";

Given(
  /^the organisation's companies house number is: "(.*)"$/,
  async function (this: CustomWorld, companiesHouseNumber: string) {
    this.scenarioDataAccCreation.set(
      "Companies House number",
      companiesHouseNumber
    );
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(CompaniesHouseNumberPage.Url);
    if (!this.isWelsh) {
      await expect(browser).toHaveTitleContaining(
        CompaniesHouseNumberPage.TitleEnglish
      );
    } else {
      await expect(browser).toHaveTitleContaining(
        CompaniesHouseNumberPage.TitleWelsh
      );
    }

    await CompaniesHouseNumberPage.EnterCompaniesHouseNumber(
      companiesHouseNumber
    );
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await CompaniesHouseNumberPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the organisation's companies house number is confirmed$/,
  async function (this: CustomWorld) {
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(CompaniesHouseConfirmPage.Url);
    await expect(browser).toHaveTitleContaining(
      CompaniesHouseConfirmPage.Title
    );
    const actualCoHouseNumber =
      await CompaniesHouseConfirmPage.CompaniesHouseNumber();
    await expect(actualCoHouseNumber).toEqual(
      this.scenarioDataAccCreation.get("Companies House number")
    );

    const orgDetails = `${await CompaniesHouseConfirmPage.CompanyName()}\n${await CompaniesHouseConfirmPage.Address()}`;
    this.scenarioDataAccCreation.set("Organisation details", orgDetails);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await CompaniesHouseConfirmPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the role in the organisation is: "(.*)"$/,
  async function (
    this: CustomWorld,
    roleInOrganisation: ValidOrganisationRoles
  ) {
    this.scenarioDataAccCreation.set("Role", roleInOrganisation);
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(RoleInOrganisationPage.Url);
    await expect(browser).toHaveTitleContaining(RoleInOrganisationPage.Title);
    await RoleInOrganisationPage.SelectRoleInOrganisation(roleInOrganisation);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await RoleInOrganisationPage.clickContinue(this.isWelsh);
  }
);
