import { Given, When, Then } from "@wdio/cucumber-framework";
import CustomWorld from "../../../utils/CustomWorld.js";
import HomeComplianceSchemePage from "../../../pageobjects/LandingPages/HomeComplianceScheme.page.js";
import { waitAndClick, waitUntilPageLoads } from "../../../utils/Waiters.js";
import SchemeMembersPage from "../../../pageobjects/CSDissociatesFromProducer/SchemeMembers.page.js";
import MemberDetailsPage from "../../../pageobjects/CSDissociatesFromProducer/MemberDetails.page.js";
import ReasonForRemovalPage from "../../../pageobjects/CSDissociatesFromProducer/ReasonForRemoval.page.js";
import { ValidReasonsForRemoval } from "../../../utils/types/CSDissociatesFromProducer.types.js";
import { ComplianceSchemes } from "../../../utils/types/ComplianceSchemes.types.js";
import TellUsMorePage from "../../../pageobjects/CSDissociatesFromProducer/TellUsMore.page.js";
import ConfirmRemovalPage from "../../../pageobjects/CSDissociatesFromProducer/ConfirmRemoval.page.js";
import ConfirmationOfRemovalPage from "../../../pageobjects/CSDissociatesFromProducer/ConfirmationOfRemoval.page.js";
import LoginPage from "../../../pageobjects/login.page.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";
import { getSecret } from "../../../utils/LoginConf.js";

Given(
  /^init CS Dissociates From Producers scenario context/,
  async function (this: CustomWorld) {
    this.scenarioDataCSDissociatesFromProducers = new Number;
  }
);

Then(
  /^"(.*)" should be displayed above the heading within the tab/,
  async function (complianceScheme: ComplianceSchemes) {
    await expect(await HomeComplianceSchemePage.textAboveHeadingWithinTab.getText()).toEqual(complianceScheme);
  }
);

Then(
  /^"(.*)" should be displayed as the heading within the tab/,
  async function (environmentAgency: string) {
    await expect(await HomeComplianceSchemePage.headingWithinTab.getText()).toEqual(environmentAgency);
  }
);

When(
  /^the Compliance Scheme account is linked to a certain number of members/,
  async function () {
    this.scenarioDataCSDissociatesFromProducers = (await HomeComplianceSchemePage.getNoOfSchemeMembers()).split(' ')[5];
  }
);

Then(
  /^the Compliance Scheme account should be linked to "(the same number of members as was displayed on the home page|1 more member than was displayed on the home page|1 less member than was displayed on the home page|0 members)" on the "(home compliance scheme|scheme members)" page/,
  async function (noOfMembers: "the same number of members as was displayed on the home page" | "1 more member than was displayed on the home page" | "1 less member than was displayed on the home page" | "0 members", page: "home compliance scheme" | "scheme members") {
    var expectedResult = "";
    var expectedNoOfMembers = this.scenarioDataCSDissociatesFromProducers;

    if (noOfMembers == "1 more member than was displayed on the home page") {
      expectedNoOfMembers += 1;
    }
    else if (noOfMembers == "1 less member than was displayed on the home page") {
      expectedNoOfMembers -= 1;
    }
    else if (noOfMembers == "0 members") {
      expectedNoOfMembers = 0;
    }

    expectedResult = "Your account is linked to " + expectedNoOfMembers + " member";

    if (expectedNoOfMembers != 1) {
      expectedResult += "s"
    }

    if (page == "home compliance scheme") {
      expectedResult += "."
    }

    await waitUntilPageLoads();

    if (page == "home compliance scheme") {
      await expect(await HomeComplianceSchemePage.getNoOfSchemeMembers()).toEqual(expectedResult);
    }
    else {
      await expect((await SchemeMembersPage.noOfSchemeMembers.getText()).trim()).toEqual(expectedResult);
    }
  }
);

Then(
  /^the last updated date on the "(home compliance scheme|scheme members)" page should be the current date/,
  async function (page: "home compliance scheme" | "scheme members") {
    var actualLastUpdatedDate = "";
    var currentDate = new Date().getDate() + " " + new Date().toLocaleString('default', {month: 'long'}) + " " + new Date().getFullYear();

    switch (page) {
      case "home compliance scheme":
        actualLastUpdatedDate = (await HomeComplianceSchemePage.lastUpdatedDate.getText()).split(':')[1].trim();
        break;
      case "scheme members":
        actualLastUpdatedDate = (await SchemeMembersPage.lastUpdatedDate.getText()).split(':')[1].trim();
        break;
      default:
        throw new Error(`The ${page} page is not defined!`);
    }

    await expect(actualLastUpdatedDate).toEqual(currentDate);
  }
);

Then(
  /^the following content should be displayed underneath the number of linked members: "(.*)"/,
  async function (content) {
    await expect(await HomeComplianceSchemePage.noSchemeMembersParagraph.getText()).toEqual(content);
  }
);

Then(
  /^the "(View and remove members|View members|Remove member|Tynnu aelodau)" link should (not )?be displayed$/,
  async function (linkName: "View and remove members" | "View members" | "Remove member" | "Tynnu aelodau", linkNotDisplayed: string | undefined) {
    await waitUntilPageLoads();
    switch (linkName) {
      case "View and remove members":
        if (linkNotDisplayed) {
          await expect(await HomeComplianceSchemePage.lnkViewAndRemoveMembers).not.toBeDisplayed();
        } else {
          await expect(await HomeComplianceSchemePage.lnkViewAndRemoveMembers).toBeDisplayed();
        }
        break;
      case "View members":
        if (linkNotDisplayed) {
          await expect(await HomeComplianceSchemePage.lnkViewMembers).not.toBeDisplayed();
        } else {
          await expect(await HomeComplianceSchemePage.lnkViewMembers).toBeDisplayed();
        }
        break;
      case "Remove member":
        if (linkNotDisplayed) {
          await expect(await MemberDetailsPage.lnkRemoveMember).not.toBeDisplayed();
        } else {
          await expect(await MemberDetailsPage.lnkRemoveMember).toBeDisplayed();
        }
        break;
        case "Tynnu aelodau":
          if (linkNotDisplayed) {
            await expect(await MemberDetailsPage.lnkRemoveMemberWelsh).not.toBeDisplayed();
          } else {
            await expect(await MemberDetailsPage.lnkRemoveMemberWelsh).toBeDisplayed();
          }
          break;
      default:
        throw new Error(`The ${linkName} link is not defined!`);
    }
  }
);

When(
  /^the user clicks the "(View and remove members|View members|Remove member|return to view all scheme members)" link$/,
  async function (linkName: "View and remove members" | "View members" | "Remove member" | "return to view all scheme members") {
    switch (linkName) {
      case "View and remove members":
        await waitAndClick(await HomeComplianceSchemePage.lnkViewAndRemoveMembers);
        break;
      case "View members":
        await waitAndClick(await HomeComplianceSchemePage.lnkViewMembers);
        break;
      case "Remove member":
        await waitAndClick(await MemberDetailsPage.lnkRemoveMember);
        break;
      case "return to view all scheme members":
        await waitAndClick(await ConfirmationOfRemovalPage.lnkReturnToViewAllSchemeMembers);
        break;
      default:
        throw new Error(`The ${linkName} link is not defined!`);
    }
  }
);

When(
  /^the user searches for an organisation: "(.*)"$/,
  async function (organisationName: string) {
    await waitUntilPageLoads();
    await SchemeMembersPage.EnterSearchValue(organisationName);
    await SchemeMembersPage.clickSearch(this.isWelsh);
  }
);

Then(
  /^(.*) organisation(?:s)? (is|are)? displayed$/,
  async function (noOfResults: number, _singularOrPlural: "is"|"are") {
    var expectedResult = "";

    if (noOfResults == 0) {
      expectedResult = this.isWelsh ? "Does dim canlyniadau cyfatebol." : "There are no matching results.";
    }
    else if (noOfResults == 1) {
      expectedResult = this.isWelsh ? noOfResults + " o ganlyniad" : noOfResults + " result";
    }
    else {
      expectedResult = this.isWelsh ? noOfResults + " o ganlyniadau" : noOfResults + " results";
    }

    await waitUntilPageLoads();
    await expect(await SchemeMembersPage.getNoOfResults()).toEqual(expectedResult);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }
);

When(
  /^the user clicks the "(.*)" organisation name link$/,
  async function (organisationName: string) {
    await waitUntilPageLoads();
    await SchemeMembersPage.ClickOrganisationNameLink(organisationName);
  }
);

Then(
  /^the "(.*)" field should be displayed$/,
  async function (fieldName: "Companies House number" | "Type of organisation") {
    await waitUntilPageLoads();
    await expect((await MemberDetailsPage.summaryListHeadingOnThirdRow.getText()).trim()).toEqual(fieldName);
  }
);

When(
  /^the user selects the "(.*)" radio button as the reason for removal/,
  async function (reasonForRemoval: ValidReasonsForRemoval) {
    await ReasonForRemovalPage.SelectReasonForRemoval(reasonForRemoval);
  }
);

When(
  /^the user enters more information about why they are removing this member: "(.*)"/,
  async function (tellUsMoreInfo) {
    await TellUsMorePage.EnterTellUsMoreInfo(tellUsMoreInfo);
  }
);

When(
  /^the user selects the "(Yes, remove this member|No, cancel)" radio button when confirming removal/,
  async function (radioButton: "Yes, remove this member" | "No, cancel") {
    await ConfirmRemovalPage.SelectConfirmRemoval(radioButton);
  }
);

When(
  /^the user logs in as a "(Limited Company|Non-Companies House)" producer who has been dissociated from a compliance scheme/,
  async function (this: CustomWorld, producerType: "Limited Company" | "Non-Companies House") {
    switch (producerType) {
      case "Limited Company":
        await LoginPage.login(
          await getSecret(this.secretClient,
            process.env.LIMITED_COMPANY_PRODUCER_FOR_CS_DISSOCIATES_JOURNEY_USERNAME as string) as string,
          await getSecret(this.secretClient,
            process.env.LIMITED_COMPANY_PRODUCER_FOR_CS_DISSOCIATES_JOURNEY_PASSWORD as string) as string
        );
        break;
      case "Non-Companies House":
        await LoginPage.login(
          await getSecret(this.secretClient,
            process.env.NON_COMPANIES_HOUSE_PRODUCER_FOR_CS_DISSOCIATES_JOURNEY_USERNAME as string) as string,
          await getSecret(this.secretClient,
            process.env.NON_COMPANIES_HOUSE_PRODUCER_FOR_CS_DISSOCIATES_JOURNEY_PASSWORD as string) as string
        );
        break;
      default:
        throw new Error(`The ${producerType} producer type is not defined!`);
    }
  }
);