import { Given, When, Then } from "@wdio/cucumber-framework";
import CustomWorld from "../../../utils/CustomWorld.js";
import AssertPageUtils from "../../../utils/Assert.utils.js";
import LoginPage from "../../../pageobjects/login.page.js";
import ManageAccountDetailsPage from "../../../pageobjects/AccountManagement/ManageAccountDetails.page.js";
import RelationshipWithOrganisationPage from "../../../pageobjects/AccountManagement/RelationshipWithOrganisation.page.js";
import NameOfComplianceSchemePage from "../../../pageobjects/AccountManagement/NameOfComplianceScheme.page.js";
import JobTitlePage from "../../../pageobjects/AccountManagement/JobTitle.page.js";
import NameOfConsultancyPage from "../../../pageobjects/AccountManagement/NameOfConsultancy.page.js";
import NameOfOrganisationPage from "../../../pageobjects/AccountManagement/NameOfOrganisation.page.js";
import CheckDetailsAndSendInvitePage from "../../../pageobjects/AccountManagement/CheckDetailsAndSendInvite.page.js";
import InvitationToChangeSentPage from "../../../pageobjects/AccountManagement/InvitationToChangeSent.page.js";
import CommonLandingPage from "../../../pageobjects/LandingPages/Common_Landing.page.js";
import TelephoneNumberPage from "../../../pageobjects/LandingPages/TelephoneNumber.page.js";
import InviteChangePermissionsPage from "../../../pageobjects/LandingPages/InviteChangePermissions.page.js";
import ConfirmSubmissionSubmitDataPage from "../../../pageobjects/LandingPages/ConfirmSubmissionSubmitData.page.js";
import { DelegatedUserQuestions } from "../../../utils/types/AccountMaintenance.types.js";
import { InvitationToChangePermissionsResult } from "../../../utils/enums/DelegatedUser.enum.js";
import { waitUntilPageLoads } from "../../../utils/Waiters.js";
import { capitaliseFirstLetter } from "../../../utils/String.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";
import ConfirmChangePermissionPage from "../../../pageobjects/AccountManagement/ConfirmChangePermission.page.js";
import { getSecret } from "../../../utils/LoginConf.js";

Given(
  /^init Account Management scenario context/,
  async function (this: CustomWorld) {
    this.scenarioDataAccManagement = new Map<DelegatedUserQuestions, string>();
  }
);

Given(
  /^the user logs in as an approved user with (admin|basic)$/,
  async function (this: CustomWorld, userType: "admin" | "basic") {
    switch (userType) {
      case "admin":
        await LoginPage.login(
          await getSecret(this.secretClient,
            process.env.APPROVED_WITH_ADMIN_USERNAME as string) as string,
          await getSecret(this.secretClient,
            process.env.APPROVED_WITH_ADMIN_PASSWORD as string) as string
        );
        break;
      case "basic":
        await LoginPage.login(
          await getSecret(this.secretClient,
            process.env.APPROVED_WITH_BASIC_USERNAME as string) as string,
          await getSecret(this.secretClient,
            process.env.APPROVED_WITH_BASIC_PASSWORD as string) as string
          );
          break;
      default:
        throw new Error(`The ${userType} user type is not defined!`);
    }
  }
);

Given(
  /^the user logs in as a(?:n)? (admin|delegated) user$/,
  async function (this: CustomWorld, userType: "admin" | "delegated") {
    let userName: string;
    switch (userType) {
      case "admin":
        await LoginPage.login(
          await getSecret(this.secretClient, process.env.ADMIN_USERNAME as string) as string,
          await getSecret(this.secretClient, process.env.ADMIN_PASSWORD as string) as string
        );
        break;
      case "delegated":
        await LoginPage.login(
          await getSecret(this.secretClient, process.env.DELEGATED_USERNAME as string) as string,
          await getSecret(this.secretClient, process.env.DELEGATED_PASSWORD as string) as string
        );
        break;
      default:
        throw new Error(`The ${userType} user type is not defined!`);
    }    
  }
);

Given(
  /^the relationship with the organisation is( as a:| as an:| fel:|:) "(.*)"$/,
  async function (
    this: CustomWorld,
    somethingElse: string,
    relationshipWithOrganisation: string
  ) {
    // Remove 'Name of compliance scheme' from context if we are changing the relationshipWithOrganisation
    // and the relationshipWithOrganisation is NOT 'consultant from a compliance scheme'
    if (
      relationshipWithOrganisation != "consultant from a compliance scheme" &&
      this.scenarioDataAccManagement.has("Name of compliance scheme")
    ) {
      this.scenarioDataAccManagement.delete("Name of compliance scheme");
    }

    // Remove 'Job title' from context if we are changing the relationshipWithOrganisation
    // and the relationshipWithOrganisation is NOT 'employee'
    if (
      relationshipWithOrganisation != "employee" &&
      this.scenarioDataAccManagement.has("Job title")
    ) {
      this.scenarioDataAccManagement.delete("Job title");
    }

    // Make first letter a capital so that the casing is correct for asserting
    if (!this.isWelsh) {
      this.scenarioDataAccManagement.set(
        "How they work with your organisation",
        await capitaliseFirstLetter(relationshipWithOrganisation)
      );
    } else {
      this.scenarioDataAccManagement.set(
        "Sut maen nhw’n gweithio gyda’ch sefydliad",
        await capitaliseFirstLetter(relationshipWithOrganisation)
      );
    }

    if (somethingElse != ":") {
      somethingElse = somethingElse.replace(":", "");

      relationshipWithOrganisation = `${await capitaliseFirstLetter(
        somethingElse
      )} ${relationshipWithOrganisation}`;
    }

    await RelationshipWithOrganisationPage.SelectRelationshipWithOrganisation(
      relationshipWithOrganisation
    );

    if (
      relationshipWithOrganisation != "Something else" &&
      relationshipWithOrganisation != "Rhywbeth arall"
    ) {
      await RelationshipWithOrganisationPage.clickContinue(this.isWelsh);
    }
  }
);

Given(
  /^the relationship with the organisation is entered manually: "(.*)"$/,
  async function (this: CustomWorld, relationshipWithOrganisation: string) {
    if (!this.isWelsh) {
      this.scenarioDataAccManagement.set(
        "How they work with your organisation",
        relationshipWithOrganisation
      );
    } else {
      this.scenarioDataAccManagement.set(
        "Sut maen nhw’n gweithio gyda’ch sefydliad",
        relationshipWithOrganisation
      );
    }

    await RelationshipWithOrganisationPage.EnterRelationshipWithOrganisation(
      relationshipWithOrganisation
    );

    await RelationshipWithOrganisationPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the name of the compliance scheme is: "(.*)"$/,
  async function (this: CustomWorld, nameOfComplianceScheme: string) {
    if (!this.isWelsh) {
      this.scenarioDataAccManagement.set(
        "Name of compliance scheme",
        nameOfComplianceScheme
      );
    } else {
      this.scenarioDataAccManagement.set(
        "Enw’r cynllun cydymffurfio",
        nameOfComplianceScheme
      );
    }
    await NameOfComplianceSchemePage.EnterNameOfComplianceScheme(
      nameOfComplianceScheme
    );
    await NameOfOrganisationPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the job title is: "(.*)"$/,
  async function (this: CustomWorld, jobTitle: string) {
    if (!this.isWelsh) {
      this.scenarioDataAccManagement.set("Job title", jobTitle);
    } else {
      this.scenarioDataAccManagement.set("Teitl swydd", jobTitle);
    }
    await JobTitlePage.EnterJobTitle(jobTitle);
    await JobTitlePage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the name of the consultancy is: "(.*)"$/,
  async function (this: CustomWorld, nameOfConsultancy: string) {
    this.scenarioDataAccManagement.set(
      "Name of consultancy",
      nameOfConsultancy
    );

    if (!this.isWelsh) {
      this.scenarioDataAccManagement.set(
        "Name of consultancy",
        nameOfConsultancy
      );
    } else {
      this.scenarioDataAccManagement.set(
        "Enw’r ymgynghoriaeth",
        nameOfConsultancy
      );
    }
    await NameOfConsultancyPage.EnterNameOfConsultancy(nameOfConsultancy);
    await NameOfConsultancyPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the name of the organisation is: "(.*)"$/,
  async function (this: CustomWorld, nameOfOrganisation: string) {
    if (!this.isWelsh) {
      this.scenarioDataAccManagement.set(
        "Name of organisation",
        nameOfOrganisation
      );
    } else {
      this.scenarioDataAccManagement.set("Enw’r sefydliad", nameOfOrganisation);
    }
    await NameOfOrganisationPage.EnterNameOfOrganisation(nameOfOrganisation);
    await NameOfComplianceSchemePage.clickContinue(this.isWelsh);
  }
);

When(
  /^checked the details are correct for a delegated user journey$/,
  async function (this: CustomWorld) {
    await waitUntilPageLoads();
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await expect(browser).toHaveUrlContaining(
      CheckDetailsAndSendInvitePage.Url
    );

    if (!this.isWelsh) {
      await expect(browser).toHaveTitleContaining(
        CheckDetailsAndSendInvitePage.Title
      );
    } else {
      await expect(browser).toHaveTitleContaining(
        CheckDetailsAndSendInvitePage.TitleWelsh
      );
    }

    if (!this.isWelsh) {
      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Account permissions",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "How they work with your organisation",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Name of compliance scheme",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Job title",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Name of consultancy",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Name of organisation",
        this.scenarioDataAccManagement
      );
    } else {
      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Caniatadau’r cyfrif",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Sut maen nhw’n gweithio gyda’ch sefydliad",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Enw’r cynllun cydymffurfio",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Teitl swydd",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Enw’r ymgynghoriaeth",
        this.scenarioDataAccManagement
      );

      await AssertPageUtils.AssertCheckDetailsAndSendInvitationPageValue(
        "Enw’r sefydliad",
        this.scenarioDataAccManagement
      );
    }
  }
);

When(
  /^the full name of the approved user with admin is entered: "(.*)"$/,
  async function (fullName: string) {
    await CheckDetailsAndSendInvitePage.EnterFullName(fullName);
  }
);

When(/^the invitation is sent$/, async function () {
  await CheckDetailsAndSendInvitePage.SendInvitation();

  const actualResultBanner =
    await InvitationToChangeSentPage.InvitationResultBanner();
  const expectedResultBanner = InvitationToChangePermissionsResult.InviteSent;
  await expect(actualResultBanner).toHaveText(expectedResultBanner);
  await InvitationToChangeSentPage.ReturnToAccountDetails();
});

When(
  /^the user accepts the invitation, name: "(.*)", number: "(.*)"$/,
  async function (fullName: string, telephoneNumber: string) {
    await (await CommonLandingPage.ViewInvitationLink()).click();
    await waitUntilPageLoads();
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");

    await InviteChangePermissionsPage.clickContinue();
    await TelephoneNumberPage.EnterTelephoneNumber(telephoneNumber);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");

    await TelephoneNumberPage.clickContinue(this.isWelsh);
    await ConfirmSubmissionSubmitDataPage.EnterFullName(fullName);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");

    await ConfirmSubmissionSubmitDataPage.clickConfirm();
  }
);

When(
  /^I want to cancel the invite: "(Yes|No)"$/,
  async function (cancelInvite: "Yes" | "No") {
    await waitUntilPageLoads();
    await ConfirmChangePermissionPage.CancelInvite(cancelInvite);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await ConfirmChangePermissionPage.clickConfirmAndContinue();
  }
);

Then(
  /^the status of the invitation for user: "(.*)" is: "(.*)"$/,
  async function (usersName: string, invitiationStatus: string) {
    const permissionStatus =
      await ManageAccountDetailsPage.PermissionsStatusFor(usersName);
    await expect(permissionStatus).toHaveText(invitiationStatus.toUpperCase());
  }
);

Then(
  /^the permissions for user: "(.*)" is: "(.*)"$/,
  async function (usersName: string, userPermission: string) {
    const permissions = await ManageAccountDetailsPage.PermissionsFor(
      usersName
    );
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await expect(await permissions.getText()).toContain(userPermission);
  }
);

Then(/^the user should be able to view the invitation$/, async function () {
  await waitUntilPageLoads();
  await expect(await CommonLandingPage.InvitationToChgPermsText()).toBeDisplayed();
  await expect(await CommonLandingPage.ViewInvitationLink()).toBeDisplayed();
  cucumberJson.attach(await browser.takeScreenshot(), "image/png");
});
