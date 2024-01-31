import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../pageobjects/login.page.js";
import HomeComplianceSchemePage from "../../../pageobjects/LandingPages/HomeComplianceScheme.page.js";
import CommonLandingPage from "../../../pageobjects/LandingPages/Common_Landing.page.js";
import {
  DocumentsLinks,
  LandingPageCards,
  LandingPageContextElems,
  PoMDataDocumentsLinks,
} from "../../../utils/types/LandingPages.types.js";
import { waitAndClick, waitUntilPageLoads } from "../../../utils/Waiters.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import PoMDataSubLandingPage from "../../../pageobjects/LandingPages/PoMDataSubLanding.page.js";
import { PageTitles, Pages } from "../../../utils/Pages.js";
import CommonPage from "../../../pageobjects/common.page.js";
import CommonDataUploadPage from "../../../pageobjects/DataUpload/CommonDataUpload.page.js";
import { getSecret } from "../../../utils/LoginConf.js";
import { ComplianceSchemes } from "../../../utils/types/ComplianceSchemes.types.js";

Given(
  /^init Landing Pages scenario context/,
  async function (this: CustomWorld) {
    this.scenarioDataLandingPgs = new Map<LandingPageContextElems, string>();
  }
);

Given(
  /^the user (is logged|logs) in as a Compliance Scheme "(Approved|Delegated|Basic)" user$/,
  async function (
    this: CustomWorld,
    state: "is logged" | "logs",
    userRole: "Approved" | "Delegated" | "Basic"
  ) {
    let userLogin: string;
    let userPassword: string;

    if (userRole === "Approved") {
      userLogin = await getSecret(this.secretClient, 
        process.env.COMPLIANCE_SCHEME_APPROVED_USERNAME as string) as string;
      userPassword = await getSecret(this.secretClient, 
        process.env.COMPLIANCE_SCHEME_APPROVED_PASSWORD as string) as string;
    } else if (userRole === "Delegated") {
      userLogin = await getSecret(this.secretClient, 
        process.env.COMPLIANCE_SCHEME_DELEGATED_USERNAME as string) as string;
      userPassword = await getSecret(this.secretClient, 
        process.env.COMPLIANCE_SCHEME_DELEGATED_PASSWORD as string) as string;
    } else if (userRole === "Basic") {
      userLogin = await getSecret(this.secretClient, 
        process.env.COMPLIANCE_SCHEME_BASIC_USERNAME as string) as string;
      userPassword = await getSecret(this.secretClient, 
        process.env.COMPLIANCE_SCHEME_BASIC_PASSWORD as string) as string;
    } else {
      throw new Error(`The ${userRole} role is not defined!`);
    }

    await LoginPage.login(userLogin, userPassword);

    if (state === "is logged") {
      await expect(browser).toHaveUrlContaining(HomeComplianceSchemePage.Url);
    }
  }
);

Given(
  /^the user (is logged|logs) in as a(?:n)? "(Approved|Delegated|Admin|Basic)" user of a Compliance Scheme operating in "(England and Northern Ireland|Wales|Scotland)"$/,
  async function (
    this: CustomWorld,
    state: "is logged" | "logs",
    userRole: "Approved" | "Delegated" | "Admin" | "Basic",
    nation: "England and Northern Ireland" | "Wales" | "Scotland"
  ) {
    let userLogin: string;
    let userPassword: string;

    if (userRole != "Approved" && nation != "England and Northern Ireland") {
      throw new Error(
        `The ${userRole} role for a Compliance Scheme operating within ${nation} is not defined!`
      );
    }

    if (userRole === "Approved") {
      if (nation === "England and Northern Ireland") {
        userLogin = await getSecret(this.secretClient, 
          process.env.CS_ENGLISH_AND_NORTHERN_IRISH_APPROVED_USERNAME as string) as string;
        userPassword = await getSecret(this.secretClient, 
          process.env.CS_ENGLISH_AND_NORTHERN_IRISH_APPROVED_PASSWORD as string) as string;
      }
      else if (nation === "Wales") {
        userLogin = await getSecret(this.secretClient, 
          process.env.CS_WELSH_APPROVED_USERNAME as string) as string;
        userPassword = await getSecret(this.secretClient, 
          process.env.CS_WELSH_APPROVED_PASSWORD as string) as string;
      }
      else if (nation === "Scotland") {
        userLogin = await getSecret(this.secretClient, 
          process.env.CS_SCOTTISH_APPROVED_USERNAME as string) as string;
        userPassword = await getSecret(this.secretClient, 
          process.env.CS_SCOTTISH_APPROVED_PASSWORD as string) as string;
      }
      else {
        throw new Error(`The ${nation} nation is not defined!`);
      }
    }
    else if (userRole === "Delegated") {
      userLogin = await getSecret(this.secretClient, 
        process.env.CS_ENGLISH_AND_NORTHERN_IRISH_DELEGATED_USERNAME as string) as string;
      userPassword = await getSecret(this.secretClient, 
        process.env.CS_ENGLISH_AND_NORTHERN_IRISH_DELEGATED_PASSWORD as string) as string;
    }
    else if (userRole === "Admin") {
      userLogin = await getSecret(this.secretClient, 
        process.env.CS_ENGLISH_AND_NORTHERN_IRISH_ADMIN_USERNAME as string) as string;
      userPassword = await getSecret(this.secretClient, 
        process.env.CS_ENGLISH_AND_NORTHERN_IRISH_ADMIN_PASSWORD as string) as string;
    }
    else if (userRole === "Basic") {
      userLogin = await getSecret(this.secretClient, 
        process.env.CS_ENGLISH_AND_NORTHERN_IRISH_BASIC_USERNAME as string) as string;
      userPassword = await getSecret(this.secretClient, 
        process.env.CS_ENGLISH_AND_NORTHERN_IRISH_BASIC_PASSWORD as string) as string;      
    }
    else {
      throw new Error(`The ${userRole} role is not defined!`);
    }

    await LoginPage.login(userLogin, userPassword);

    if (state === "is logged") {
      await expect(browser).toHaveUrlContaining(HomeComplianceSchemePage.Url);
    }
  }
);

When(
  /^the user clicks the "What do I report" panel on the home compliance scheme page$/,
  async function () {
    await waitAndClick(await HomeComplianceSchemePage.panelWhatDoIReport);
  }
);

When(
  /^the user opens the "Organisation details Guidance" on the report members organisation details page$/,
  async function () {
    await waitAndClick(
      await CommonDataUploadPage.lnkHowToReportOrgDetailsGuidance
    );
  }
);

When(
  /^the user opens the "(PoM data Guidance|PoM data rules|PoM CSV example|PoM GOV.UK guidance)" on the packaging data sub landing page$/,
  async function (documentType: PoMDataDocumentsLinks) {
    let linkElem: WebdriverIO.Element;
    switch (documentType) {
      case "PoM data Guidance":
        linkElem = await PoMDataSubLandingPage.lnkPackagingDataGuidance;
        break;
      case "PoM data rules":
        linkElem = await PoMDataSubLandingPage.lnkPoMDataRules;
        break;
      case "PoM CSV example":
        linkElem = await PoMDataSubLandingPage.lnkCSVExample;
        break;
      case "PoM GOV.UK guidance":
        linkElem = await PoMDataSubLandingPage.lnkCheckGuidance;
        break;
      default:
        throw new Error(`The ${documentType} link is not defined!`);
    }

    await waitAndClick(linkElem);
  }
);

When(
  /^the user clicks on an inactive Compliance Scheme tab on the home compliance scheme page$/,
  async function (this: CustomWorld) {
    const tabs = await HomeComplianceSchemePage.CSTabs;
    if (tabs.length > 1) {
      const inactiveTabs = await HomeComplianceSchemePage.inActiveTabs;
      if (inactiveTabs.length >= 1) {
        const inactiveTab = inactiveTabs[0];
        this.scenarioDataLandingPgs.set(
          "firstInactiveTabText",
          await inactiveTab.getText()
        );
        await CommonPage.takeElemScreenshot(inactiveTab);
        await waitAndClick(inactiveTab);
      }
    } else {
      console.log("This account has only 1 Compliance scheme");
    }
  }
);

Then(/^the old inactive tab becomes active$/, async function () {
  const tabs = await HomeComplianceSchemePage.CSTabs;
  if (tabs.length > 1) {
    const newActiveTab = await HomeComplianceSchemePage.activeTab;
    await CommonPage.takeElemScreenshot(newActiveTab);
    const newActiveTabText = await newActiveTab.getText();
    await expect(newActiveTabText).toEqual(
      this.scenarioDataLandingPgs.get("firstInactiveTabText")
    );
  } else {
    console.log("This account has only 1 Compliance scheme");
  }
});

Then(
  /^the "(.*)" tab should be displayed/,
  async function (name: ComplianceSchemes) {
    await expect(
      await HomeComplianceSchemePage.getTabWithName(name)
    ).toBeDisplayed();
  }
);

When(
  /^the user clicks the "(.*)" tab/,
  async function (name: ComplianceSchemes) {
    await (await HomeComplianceSchemePage.getTabWithName(name)).click();
  }
);

Then(
  /^cards for different submission periods should be displayed$/,
  async function () {
    const submissionPeriodCards =
      await CommonDataUploadPage.getSubmissionPeriodCards();
    await expect(submissionPeriodCards).toBeDisplayed();
    await expect(submissionPeriodCards.length).toBeGreaterThanOrEqual(1);
  }
);

Then(
  /^the "(Report your members’ organisation details|Report your members’ packaging data)" card should display on the home compliance scheme page$/,
  async function (cardName: LandingPageCards) {
    var actualCard = await CommonLandingPage.getSubmissionCard(cardName);
    await expect(actualCard).toBeDisplayed();
  }
);

Then(
  /^the expected support text should display on the home compliance scheme page$/,
  async function () {
    await expect(
      await HomeComplianceSchemePage.txtWhatDoIReport
    ).not.toBeNull();
  }
);

Then(
  /^the "(Organisation details Guidance|PoM data Guidance|PoM data rules|PoM CSV example|PoM GOV.UK guidance)" page should display in a new tab$/,
  async function (pageName: DocumentsLinks) {
    const title = PageTitles[pageName];
    const baseBage = await browser.getUrl();
    await browser.switchWindow(Pages[pageName]);
    await waitUntilPageLoads();
    await CommonPage.takeScreenshot();
    await expect(browser).toHaveTitle(title);
    await browser.switchWindow(baseBage);
  }
);

Then(
  /^the content should be correct on the "packaging data sub landing" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await expect(await PoMDataSubLandingPage.h1Header).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.txtBeforeYouStart
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.txtReadTheGuidance
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.lnkPackagingDataGuidance
      ).toBeDisplayed();
      await expect(await PoMDataSubLandingPage.lnkPoMDataRules).toBeDisplayed();
      await expect(await PoMDataSubLandingPage.lnkCSVExample).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.txtIfYouMissedDeadline
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.txtYouStillBeAbleToReport
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.lnkCheckGuidance
      ).toBeDisplayed();
    } else if (this.isWelsh) {
      await expect(await PoMDataSubLandingPage.H1HeaderWelsh).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.txtBeforeYouStartWelsh
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.txtReadTheGuidanceWelsh
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.lnkPackagingDataGuidanceWelsh
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.lnkPoMDataRulesWelsh
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.lnkCSVExampleWelsh
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.txtIfYouMissedDeadlineWelsh
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.txtYouStillBeAbleToReportWelsh
      ).toBeDisplayed();
      await expect(
        await PoMDataSubLandingPage.lnkCheckGuidanceWelsh
      ).toBeDisplayed();
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);
