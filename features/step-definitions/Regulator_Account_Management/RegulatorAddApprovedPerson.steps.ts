import { Given, Then, When } from "@wdio/cucumber-framework";
import RegulatorsHomePage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsHome.page.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import { waitAndClick, waitUntilPageLoads } from "../../../utils/Waiters.js";
import BasePage from "../../../pageobjects/base.page.js";
import RegulatorSearchResultPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorSearchResult.page.js";
import RegulatorOrganisationDetailsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorOrganisationDetails.page.js";
import RegulatorApproveConfirmationPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorApproveConfirmation.page.js";
import RegulatorApprovePersonListPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorApprovePersonList.page.js";
import commonPage from "../../../pageobjects/common.page.js";
import regulatorNewApprovedPersonNamePage from "../../../pageobjects/RegulatorAccountManagement/RegulatorNewApprovedPersonName.page.js";
import regulatorNewApprovedPersonEmailPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorNewApprovedPersonEmail.page.js";
import RegulatorCheckYourDetailsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorCheckYourDetails.page.js";
import AssertPageUtils from "../../../utils/Assert.utils.js";
import { AddNewApprovedPersonQuestions } from "../../../utils/types/Regulator.types.js";


const basePage = new BasePage();

Given(
  /^init Add New Approved Person scenario context/,
  async function (this: CustomWorld) {
    this.scenarioAddNewApprovedPerson = new Map<AddNewApprovedPersonQuestions, string>();
  }
);

Then(
  /^the user clicks on "(.*)" link and search for "(.*)" organisation$/,
  async function (linkName: string, companyName: string) {
    await waitAndClick(await RegulatorsHomePage.lnkManageOrganisations);
    await waitUntilPageLoads();
    let pageElem = await commonPage.verifyPage("regulator search");

    await expect(browser).toHaveUrlContaining(pageElem);
    await basePage.enterSearchQuery(companyName);

    await basePage.clickContinue(this.isWelsh);
    pageElem = await commonPage.verifyPage("regulator search result");
    await waitAndClick(await RegulatorSearchResultPage.lnkCompanyName);
    pageElem = await commonPage.verifyPage("regulator organisation details");
    await expect(browser).toHaveUrlContaining(pageElem);
  }
);

Then(
  /^the user "(removes the existing approved person|Nominate New Approved Person)" on cake place company details page$/,
  async function (linkName: "removes the existing approved person" | "Nominate New Approved Person") {

    switch (linkName) {
      case "removes the existing approved person":

        await waitAndClick(await RegulatorOrganisationDetailsPage.lnkRemoveAP);
        break;
      case "Nominate New Approved Person":
        await waitAndClick(await RegulatorOrganisationDetailsPage.lnkNominateAnewAP);
        break;
    }
    if (linkName == "removes the existing approved person") {
      let pageElem = await commonPage.verifyPage("regulator confirm remove user");

      await expect(browser).toHaveUrlContaining(pageElem);

      await basePage.clickContinue(this.isWelsh);
    }
  }
);

Then(
  /^the "(.*)" page should be displayed$/,
  async function (SuccessPage: string) {
    var pageElem = await commonPage.verifyPage("regulator success page");
    await expect(browser).toHaveUrlContaining(pageElem);
    await basePage.clickContinue(this.isWelsh);

  }
);

Then(
  /^the user answers "(.*)" to organisation nominated a new approved person question$/,
  async function (this: CustomWorld, hasNominatedNewAP: "true" | "false") {
    this.scenarioAddNewApprovedPerson.set(
      "Has a new approved person been nominated?",
      hasNominatedNewAP
    );
    await waitUntilPageLoads();

    let pageElem = await commonPage.verifyPage("regulator approve confirmation");
    await expect(browser).toHaveUrlContaining(pageElem);

    await RegulatorApproveConfirmationPage.SelectNominatedAnAP("true");

    await basePage.clickContinue(this.isWelsh);
  }
);

Then(
  /^the user enters "(.*)" "(.*)" "(.*)" and confirms the answers$/,
  async function (this: CustomWorld, firstName: string, lastName: string, emailAddress: string) {

    await waitUntilPageLoads();
    this.scenarioAddNewApprovedPerson.set("Name", `${firstName} ${lastName}`);
    this.scenarioAddNewApprovedPerson.set("Email", `${emailAddress}`);

    let pageElem = await commonPage.verifyPage("regulator new approved person name");
    await expect(browser).toHaveUrlContaining(pageElem);
    await regulatorNewApprovedPersonNamePage.EnterFirstName(firstName);
    await regulatorNewApprovedPersonNamePage.EnterLastName(lastName);

    await basePage.clickContinue(this.isWelsh);

    pageElem = await commonPage.verifyPage("regulator new approved person email");
    await expect(browser).toHaveUrlContaining(pageElem);
    await regulatorNewApprovedPersonEmailPage.EnterEmail(emailAddress);

    await basePage.clickContinue(this.isWelsh);
    await waitUntilPageLoads();

    await expect(browser).toHaveUrlContaining(RegulatorCheckYourDetailsPage.newAPUrl);
    await expect(browser).toHaveTitleContaining(RegulatorCheckYourDetailsPage.newAPTitle);

    await AssertPageUtils.AssertRegulatorCheckYourDetailsPageValue(
      "Has a new approved person been nominated?",
      this.scenarioAddNewApprovedPerson
    );
    await AssertPageUtils.AssertRegulatorCheckYourDetailsPageValue(
      "Name",
      this.scenarioAddNewApprovedPerson
    );

    await AssertPageUtils.AssertRegulatorCheckYourDetailsPageValue(
      "Email",
      this.scenarioAddNewApprovedPerson
    );

    // await CheckYourDetailsPage.clickContinue(this.isWelsh);
  }
);

Then(
  /^the user confirms the answers as a part of the "(new journey|existing journey)"$/,
  async function (this: CustomWorld, journey:"new journey"|"existing journey") {

   await waitUntilPageLoads();

    await expect(browser).toHaveUrlContaining(RegulatorCheckYourDetailsPage.existingAPUrl);
    await expect(browser).toHaveTitleContaining(RegulatorCheckYourDetailsPage.existingAPTitle);
    switch (journey) {
      case "existing journey":
    await AssertPageUtils.AssertRegulatorCheckYourDetailsPageValue(
      "Has a new approved person been nominated?",
      this.scenarioAddNewApprovedPerson
    );
    }
    await AssertPageUtils.AssertRegulatorCheckYourDetailsPageValue(
      "Name",
      this.scenarioAddNewApprovedPerson
    );

    // await CheckYourDetailsPage.clickContinue(this.isWelsh);
  }
);


Then(
  /^the user selects the option "(someone new|existing user)" as an approved person for the "(new journey|existing journey)"$/,
  async function (this: CustomWorld,user: "someone new" | "existing user",journey:"new journey"|"existing journey") {

    let pageElem = await commonPage.verifyPage("regulator approve person list");

    await expect(browser).toHaveUrlContaining(pageElem);
    switch (user) {
      case "someone new":
        
        await RegulatorApprovePersonListPage.selectNewUserAsAnAP();
        break;
      case "existing user":
        if(journey=="new journey"){
          this.scenarioAddNewApprovedPerson.set("Name", `prod chadmin\nswetha.palreddy.external+prodchadmin@atos.net`);
     
             await RegulatorApprovePersonListPage.selectExistingUserNewJourney();
             break;
        }else{
          this.scenarioAddNewApprovedPerson.set("Name", `prdadmin existingjour\nswetha.palreddy.external+prodnewusradmin-existingJour@atos.net`);
     
             await RegulatorApprovePersonListPage.selectExistingUserExistingJourney();
             break;
        }
    
    }
    await basePage.clickContinue(this.isWelsh);
  }
);
