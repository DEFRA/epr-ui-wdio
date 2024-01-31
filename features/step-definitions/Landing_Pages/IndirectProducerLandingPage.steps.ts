import { Given, When, Then } from "@wdio/cucumber-framework";
import IndirectProducerLandingPage from "../../../pageobjects/LandingPages/IndirectProducer_Landing.page.js";
import ListOfCSPage from "../../../pageobjects/LandingPages/ListOfCS.page.js";
import ChangeCSOptionPage from "../../../pageobjects/LandingPages/ChangeCSOption.page.js";
import BasePage from "../../../pageobjects/base.page.js";
import { waitAndClick } from "../../../utils/Waiters.js";
import CommonPage from "../../../pageobjects/common.page.js";
import CommonDataUploadPage from "../../../pageobjects/DataUpload/CommonDataUpload.page.js";
import AddCSPage from "../../../pageobjects/LandingPages/AddCSToProducerAcc.page.js";
import DirectProducerLandingPage from "../../../pageobjects/LandingPages/DirectProducer_Landing.page.js";
import CustomWorld from "../../../utils/CustomWorld.js";

const basePage = new BasePage();

When(/^the user wants to change Compliance Scheme options$/, async function () {
  await waitAndClick(
    await IndirectProducerLandingPage.lnkChangeComplianceScheme
  );
});

When(
  /^the user chooses "(change compliance scheme|remove compliance scheme)" option$/,
  async function (
    this: CustomWorld,
    optionName: "change compliance scheme" | "remove compliance scheme"
  ) {
    let radioElem: WebdriverIO.Element;
    switch (optionName) {
      case "change compliance scheme":
        radioElem = await ChangeCSOptionPage.changeComplianceSchemeRadio;
        break;
      case "remove compliance scheme":
        radioElem = await ChangeCSOptionPage.removeComplianceSchemeRadio;
        break;
      default:
        throw new Error(`The ${optionName} option is not defined!`);
    }

    await radioElem.click();
    await CommonPage.takeScreenshot();
    await basePage.clickContinue(this.isWelsh);
  }
);

When(
  /^the user selects compliance scheme$/,
  async function (this: CustomWorld) {
    const newComplianceSchemeElem =
      await ListOfCSPage.getRandomComplianceScheme();
    this.scenarioDataLandingPgs.set(
      "newComplianceScheme",
      await newComplianceSchemeElem.getText()
    );

    await newComplianceSchemeElem.click();
    await CommonPage.takeElemScreenshot(newComplianceSchemeElem);
    await basePage.clickContinue(this.isWelsh);
  }
);

When(
  /^the user selects "(.*)" as the compliance scheme$/,
  async function (complianceScheme: string) {
    await ListOfCSPage.selectComplianceScheme(complianceScheme);
    await basePage.clickContinue(this.isWelsh);
  }
);

When(
  /^the user confirms the compliance scheme option "(change|removal)"$/,
  async function (optionName: "change" | "removal") {
    let buttonElem: WebdriverIO.Element;
    switch (optionName) {
      case "change":
        buttonElem = await CommonDataUploadPage.btnConfirm;
        break;
      case "removal":
        buttonElem = await ChangeCSOptionPage.btnRemoveComplianceScheme;
        break;
      default:
        throw new Error(`The ${optionName} option is not defined!`);
    }

    await waitAndClick(buttonElem);
  }
);

When(
  /^the user adds a compliance scheme to the account$/,
  async function (this: CustomWorld) {
    await waitAndClick(
      await IndirectProducerLandingPage.btnAddComplianceScheme
    );
    await (await AddCSPage.usingCSRadio).click();
    await (await DirectProducerLandingPage.btnContinueWithNewCSOption).click();
    const newComplianceSchemeElem =
      await ListOfCSPage.getRandomComplianceScheme();
    await newComplianceSchemeElem.click();
    await basePage.clickContinue(this.isWelsh);
    await waitAndClick(await CommonDataUploadPage.btnConfirm);
  }
);

Then(
  /^the two compliance scheme options should be displayed$/,
  async function () {
    const complianceSchemeOptions =
      await ChangeCSOptionPage.complianceSchemeOptions;
    const changeComplianceSchemeRadio =
      await ChangeCSOptionPage.changeComplianceSchemeRadio;
    const removeComplianceSchemeRadio =
      await ChangeCSOptionPage.removeComplianceSchemeRadio;

    await expect(complianceSchemeOptions[0]).toBeDisplayed();
    await expect(changeComplianceSchemeRadio).not.toBeChecked();
    await expect(complianceSchemeOptions[1]).toBeDisplayed();
    await expect(removeComplianceSchemeRadio).not.toBeChecked();
  }
);

Then(/^the Compliance Scheme name is different$/, async function (this: CustomWorld) {
  const complianceSchemeNameElem =
    await IndirectProducerLandingPage.ComplianceSchemeName(this.isWelsh);
  const complianceSchemeNameText = await complianceSchemeNameElem.getText();

  await expect(complianceSchemeNameElem).toBeDisplayed();
  await expect(complianceSchemeNameText).toContain(
    await this.scenarioDataLandingPgs.get("newComplianceScheme")
  );
});

Then(
  /^the organisation id should be displayed on Indirect producer Landing Page$/,
  async function () {
    await expect(
      await IndirectProducerLandingPage.txtOrganisationId
    ).toBeDisplayed();
    const orgId = await (
      await IndirectProducerLandingPage.txtOrganisationId
    ).getText();
    await expect(orgId).toMatch(/^Organisation ID: \d{3} \d{3}/);
  }
);

Then(
  /^the link "change or remove compliance scheme" should (not )?be displayed$/,
  async function (notDispalyed: string | null) {
    if (notDispalyed) {
      await expect(
        await IndirectProducerLandingPage.lnkChangeComplianceScheme
      ).not.toBeDisplayed();
    } else {
      await expect(
        await IndirectProducerLandingPage.lnkChangeComplianceScheme
      ).toBeDisplayed();
    }
  }
);
