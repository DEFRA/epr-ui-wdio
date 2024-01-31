import { Then, When } from "@wdio/cucumber-framework";
import RegulatorsHomePage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsHome.page.js";
import { waitAndClick, waitUntilPageLoads } from "../../../utils/Waiters.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";

Then(
  /^the user should be able to view the "(.*)" details for the Regulator$/,
  async function (expectedHeader: string) {
    await waitUntilPageLoads();
    await expect(await (await RegulatorsHomePage.Header).getText()).toBe(
      expectedHeader
    );
  }
);

Then(
  /^the user should be expected to view the "(.*)" nation details$/,
  async function (expectedNationDetails: string) {
    await waitUntilPageLoads();
    const expectedNation = await RegulatorsHomePage.GetNationHeader(
      expectedNationDetails
    );
    await expect(await expectedNation.getText()).toBe(expectedNationDetails);
  }
);

Then(
  /^the user should be able to view the logged in User name "(.*)" for the nation$/,
  async function (expectedNationDetails: string) {
    await waitUntilPageLoads();
    await expect(await (await RegulatorsHomePage.UserHeader).getText()).toBe(
      expectedNationDetails
    );
  }
);

Then(
  /^the manage "(account|applications|packaging data submissions)" link should be displayed$/,
  async function (
    linkName: "account" | "applications" | "packaging data submissions"
  ) {
    let elem: WebdriverIO.Element;
    switch (linkName) {
      case "account":
        elem = await RegulatorsHomePage.lnkManageAccount;
        break;
      case "applications":
        elem = await RegulatorsHomePage.lnkManageApplications;
        break;
      case "packaging data submissions":
        elem = await RegulatorsHomePage.lnkManagePackagingSubmissions;
        break;
    }
    await expect(elem).toBeDisplayed();
    cucumberJson.attach(
      await browser.takeElementScreenshot(elem.elementId),
      "image/png"
    );
  }
);

Then(
  /^the user clicks the manage "(account|applications|packaging data submissions)" link$/,
  async function (
    linkName: "account" | "applications" | "packaging data submissions"
  ) {
    switch (linkName) {
      case "account":
        await waitAndClick(await RegulatorsHomePage.lnkManageAccount);
        break;
      case "applications":
        await waitAndClick(await RegulatorsHomePage.lnkManageApplications);
        break;
      case "packaging data submissions":
        await waitAndClick(
          await RegulatorsHomePage.lnkManagePackagingSubmissions
        );
        break;
    }
    await waitUntilPageLoads();
  }
);
