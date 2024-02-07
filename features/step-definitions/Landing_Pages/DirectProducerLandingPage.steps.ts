import { When, Then } from "@wdio/cucumber-framework";
import DirectProducerLandingPage from "../../../pageobjects/LandingPages/DirectProducer_Landing.page.js";
import IndirectProducerLandingPage from "../../../pageobjects/LandingPages/IndirectProducer_Landing.page.js";
import AddCSPage from "../../../pageobjects/LandingPages/AddCSToProducerAcc.page.js";
import ListOfCSPage from "../../../pageobjects/LandingPages/ListOfCS.page.js";
import ChangeCSOptionPage from "../../../pageobjects/LandingPages/ChangeCSOption.page.js";
import CommonLandingPage from "../../../pageobjects/LandingPages/Common_Landing.page.js";
import { waitAndClick, waitUntilPageLoads } from "../../../utils/Waiters.js";
import { LandingPageCards } from "../../../utils/types/LandingPages.types.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import { SelectCSHintText } from "../../../utils/enums/SelectCS.enum.js";

When(
  /^the user navigates to the add compliance scheme page$/,
  async function () {
    await waitUntilPageLoads();
    await waitAndClick(await DirectProducerLandingPage.btnAddCSToYourAccount);
    await waitUntilPageLoads();
  }
);

When(
  /^the user clicks the "(What is a compliance scheme|My compliance scheme is not listed)" panel$/,
  async function (
    elemName:
      | "What is a compliance scheme"
      | "My compliance scheme is not listed"
  ) {
    let panelElem: WebdriverIO.Element;
    switch (elemName) {
      case "What is a compliance scheme":
        panelElem = await AddCSPage.panelWhatIsCS;
        break;
      case "My compliance scheme is not listed":
        panelElem = await ListOfCSPage.panelMyCSIsNotListed;
        break;
      default:
        throw new Error(`The ${elemName} panel is not defined!`);
    }

    await waitAndClick(panelElem);
  }
);

When(
  /^the user selects "(Yes|No)" on the add compliance scheme page$/,
  async function (option: "Yes" | "No") {
    let radioElem: WebdriverIO.Element;
    switch (option) {
      case "Yes":
        radioElem = await AddCSPage.usingCSRadio;
        break;
      case "No":
        radioElem = await AddCSPage.notUsingCSRadio;
        break;
      default:
        throw new Error(`The ${option} option is not defined!`);
    }

    await radioElem.click();
    await (await DirectProducerLandingPage.btnContinueWithNewCSOption).click();
  }
);

When(
  /^the user removes the compliance scheme from the account$/,
  async function () {
    await waitAndClick(
      await IndirectProducerLandingPage.lnkChangeComplianceScheme
    );
    await waitUntilPageLoads();
    await (await ChangeCSOptionPage.removeComplianceSchemeRadio).click();
    await waitAndClick(
      await DirectProducerLandingPage.btnContinueWithNewCSOption
    );
    await waitUntilPageLoads();
    await waitAndClick(await ChangeCSOptionPage.btnRemoveComplianceScheme);
  }
);

Then(
  /^two options are displayed on the add compliance scheme page$/,
  async function () {
    const addCSPageOptions = await AddCSPage.addComplianceSchemeOptions;
    const usingCSRadio = await AddCSPage.usingCSRadio;
    const notUsingCSRadio = await AddCSPage.notUsingCSRadio;

    await expect(addCSPageOptions[0]).toBeDisplayed();
    await expect(usingCSRadio).not.toBeChecked();
    await expect(addCSPageOptions[1]).toBeDisplayed();
    await expect(notUsingCSRadio).not.toBeChecked();
  }
);

Then(
  /^the "(What is a compliance scheme|My compliance scheme is not listed)" panel is displayed$/,
  async function (
    panelName:
      | "What is a compliance scheme"
      | "My compliance scheme is not listed"
  ) {
    let panelElem: WebdriverIO.Element;
    switch (panelName) {
      case "What is a compliance scheme":
        panelElem = await AddCSPage.panelWhatIsCS;
        break;
      case "My compliance scheme is not listed":
        panelElem = await ListOfCSPage.panelMyCSIsNotListed;
        break;
      default:
        throw new Error(`The ${panelName} panel is not defined!`);
    }

    await expect(panelElem).toBeDisplayed();
  }
);

Then(
  /^the expected support text should display on the "(add compliance scheme|list of Compliance Schemes)" page$/,
  async function (
    this: CustomWorld,
    pageName: "add compliance scheme" | "list of Compliance Schemes"
  ) {
    let textElem: WebdriverIO.Element;
    switch (pageName) {
      case "add compliance scheme":
        textElem = await AddCSPage.txtWhatIsCS;
        await expect(textElem).toBeDisplayed();
        break;
      case "list of Compliance Schemes":
        textElem = await ListOfCSPage.txtMyCSIsNotListed;
        await expect(textElem).toBeDisplayed();
        if (!this.isWelsh) {
          await expect(await textElem.getText()).toContain(SelectCSHintText.English);
        } else {
          await expect(await textElem.getText()).toContain(SelectCSHintText.Welsh);
        }
        break;
      default:
        throw new Error(`The ${pageName} page is not defined!`);
    }
  }
);

Then(
  /^the organisation id should be displayed on Direct producer Landing Page$/,
  async function (this: CustomWorld) {
    await expect(
      await DirectProducerLandingPage.txtOrganisationId
    ).toBeDisplayed();
    const orgIdText = await (
      await DirectProducerLandingPage.txtOrganisationId
    ).getText();
    await expect(orgIdText).toMatch(/^Organisation ID: \d{3} \d{3}/);

    const orgIdNum = orgIdText.slice(17,20) + orgIdText.slice(21, 24);
    this.scenarioDataLandingPgs.set("organisationId",orgIdNum)
  }
);

Then(
  /^the button "add a compliance scheme to your account" should (not )?be displayed$/,
  async function (notDisplayed: string | null) {
    if (notDisplayed) {
      await expect(
        await DirectProducerLandingPage.btnAddCSToYourAccount
      ).not.toBeDisplayed();
    } else {
      await expect(
        await DirectProducerLandingPage.btnAddCSToYourAccount
      ).toBeDisplayed();
    }
  }
);

Then(
  /^the "(Report organisation details|Report packaging data|Waste management fee|Packaging waste recovery notes)" card should display on the direct producer landing page$/,
  async function (cardName: LandingPageCards) {
    let cardTitle: WebdriverIO.Element;
    switch (cardName) {
      case "Report organisation details":
      case "Report packaging data":
        cardTitle = await CommonLandingPage.getSubmissionCard(cardName);
        break;
      case "Waste management fee":
      case "Packaging waste recovery notes":
        cardTitle = await CommonLandingPage.getInformationCard(cardName);
        break;
      default:
        throw new Error(`The ${cardName} card is not defined!`);
    }
    await expect(cardTitle).toBeDisplayed();
  }
);
