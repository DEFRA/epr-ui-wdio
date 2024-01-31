import { Given, When, Then } from "@wdio/cucumber-framework";
import { PoMDataFileNames } from "../../../utils/types/DataUpload.types";
import CommonPage from "../../../pageobjects/common.page.js";
import ReviewOrganisationDataPage from "../../../pageobjects/DataUpload/Org_Data_Upload/ReviewOrganisationData.page.js";
import { getCurrentFormattedDate } from "../../../utils/Date.js";
import loginPage from "../../../pageobjects/login.page.js";
import { waitAndClick } from "../../../utils/Waiters.js";
import OrganisationDetailsConfirmationPage from "../../../pageobjects/DataUpload/Org_Data_Upload/OrganisationDetailsConfirmation.page.js";
import ConfirmOrgDataReuploadPage from "../../../pageobjects/DataUpload/Org_Data_Upload/ConfirmOrgDataReupload.page.js";
import DeclarationEnterFullNamePage from "../../../pageobjects/DataUpload/Org_Data_Upload/Producer_Org_Data_Upload/DeclarationEnterFullName.page.js";
import {
  SubmissionDeclarationError,
  ReviewOrganisationDetailsError,
} from "../../../utils/enums/DataUpload.enum.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import CommonDataUploadPage from "../../../pageobjects/DataUpload/CommonDataUpload.page.js";

When(
  /^the user chooses "(Yes|No)" option on the "review organisation data" page$/,
  async function (option: "Yes" | "No") {
    switch (option) {
      case "Yes":
        await (await ReviewOrganisationDataPage.btnYesSubmit).click();
        break;
      case "No":
        await (await ReviewOrganisationDataPage.btnNoSubmit).click();
        break;
      default:
        throw new Error(
          `The ${option} option is not defined on the "review organisation data" page!`
        );
    }
  }
);

When(
  /^the user clicks the "confirm" button on the "review organisation data" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await waitAndClick(await CommonDataUploadPage.btnConfirm);
    } else {
      await waitAndClick(
        await ReviewOrganisationDataPage.btnConfirmSubmissionInWelsh
      );
    }
  }
);

When(/^the user submits an Organisation details file$/, async function () {
  await (await ReviewOrganisationDataPage.btnYesSubmit).click();
  await waitAndClick(await ReviewOrganisationDataPage.btnConfirmSubmission);
});

When(
  /^the user clicks the "Go to your account homepage" button on the "organisation details confirmation" page$/,
  async function () {
    await waitAndClick(
      await OrganisationDetailsConfirmationPage.lnkGoToAccountHomePage
    );
  }
);

When(
  /^the user clicks the "(Continue|Cancel)" button on the "confirm organisation data re upload" page$/,
  async function (btnName: "Continue" | "Cancel") {
    switch (btnName) {
      case "Continue":
        await waitAndClick(
          await ConfirmOrgDataReuploadPage.btnContinueReUpload
        );
        break;
      case "Cancel":
        await waitAndClick(await ConfirmOrgDataReuploadPage.btnCancelReUpload);
        break;
      default:
        throw new Error(
          `The ${btnName} button is not defined on the "upload new file to submit" page!`
        );
    }
  }
);

When(
  /^the user clicks the "Go to your account homepage" link on the "review organisation data" page$/,
  async function () {
    await waitAndClick(await ReviewOrganisationDataPage.lnkGoToAccountHomePage);
  }
);

When(
  /^the user clicks the "submit file" button on the "declaration enter full name" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await waitAndClick(await DeclarationEnterFullNamePage.btnSubmit);
    } else if (this.isWelsh) {
      await waitAndClick(await DeclarationEnterFullNamePage.btnSubmitInWelsh);
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);

When(
  /^the user enters a full name in the "Enter your full name" field on the "declaration enter full name" page$/,
  async function () {
    const userName = await (await loginPage.userName).getText();
    await (
      await DeclarationEnterFullNamePage.inputEnterYourFullName
    ).setValue(userName);
    await CommonPage.takeElemScreenshot(
      await DeclarationEnterFullNamePage.inputEnterYourFullName
    );
  }
);

Then(
  /^the "(Files to submit|Files you’ve already submitted|Files already submitted|Files you’ve uploaded and are replacing|Files uploaded)" table should have the corresponding title on the "(review organisation data|confirm organisation data re upload)" page$/,
  async function (
    tableName:
      | "Files to submit"
      | "Files you’ve already submitted"
      | "Files already submitted"
      | "Files you’ve uploaded and are replacing"
      | "Files uploaded",
    pageName: "confirm organisation data re upload" | "review organisation data"
  ) {
    let currentTableTitle: WebdriverIO.Element | undefined;
    switch (tableName) {
      case "Files to submit":
        currentTableTitle =
          await ReviewOrganisationDataPage.getFilesToSubmitTableTitle();
        break;
      case "Files uploaded":
        currentTableTitle =
          await ReviewOrganisationDataPage.getFilesUploadedTableTitle();
        break;
      case "Files already submitted":
        currentTableTitle =
          await ReviewOrganisationDataPage.getFilesAlreadySubmittedTableTitle();
        break;
      case "Files you’ve already submitted":
        currentTableTitle =
          await ConfirmOrgDataReuploadPage.getFilesAlreadySubmittedTableTitle();
        break;
      case "Files you’ve uploaded and are replacing":
        currentTableTitle =
          await ConfirmOrgDataReuploadPage.getFilesYouAreReplacingTableTitle();
        break;
      default:
        throw new Error(`The ${tableName} is not defined!`);
    }

    await expect(currentTableTitle).toHaveTextContaining(tableName);
  }
);

Then(
  /^the (.*) file should be in the "(Files to submit|Files you’ve already submitted|Files already submitted|Files uploaded)" table on the "(review organisation data|confirm organisation data re upload)" page$/,
  async function (
    fileName: PoMDataFileNames,
    tableName:
      | "Files to submit"
      | "Files you’ve already submitted"
      | "Files already submitted"
      | "Files uploaded",
    pageName: "confirm organisation data re upload" | "review organisation data"
  ) {
    await CommonPage.takeScreenshot();
    let fileNameField: string | undefined;
    switch (tableName) {
      case "Files to submit":
        fileNameField =
          await ReviewOrganisationDataPage.getFilesToSubmitTableField(1, 1);
        break;
      case "Files uploaded":
        fileNameField =
          await ReviewOrganisationDataPage.getFilesUploadedTableField(1, 1);
        break;
      case "Files already submitted":
        fileNameField =
          await ReviewOrganisationDataPage.getFilesAlreadySubmittedTableField(
            1,
            1
          );
        break;
      case "Files you’ve already submitted":
        fileNameField =
          await ConfirmOrgDataReuploadPage.getFilesAlreadySubmittedTableField(
            1,
            1
          );
        break;
      default:
        throw new Error(`The ${tableName} table is not defined!`);
    }
    await expect(fileNameField).toEqual(`${fileName}.csv`);
  }
);

Then(
  /^the uploaded date should be correct in the "(Files to submit|Files already submitted|Files you’ve already submitted|Files uploaded)" table on the "(review organisation data|confirm organisation data re upload)" page$/,
  async function (
    tableName:
      | "Files to submit"
      | "Files you’ve already submitted"
      | "Files already submitted"
      | "Files uploaded",
    pageName: "confirm organisation data re upload" | "review organisation data"
  ) {
    const currentFormattedDate = await getCurrentFormattedDate();
    let dateField: string | undefined;
    switch (tableName) {
      case "Files to submit":
        dateField = await ReviewOrganisationDataPage.getFilesToSubmitTableField(
          1,
          2
        );
        break;
      case "Files uploaded":
        dateField = await ReviewOrganisationDataPage.getFilesUploadedTableField(
          1,
          2
        );
        break;
      case "Files already submitted":
        dateField =
          await ReviewOrganisationDataPage.getFilesAlreadySubmittedTableField(
            1,
            2
          );
        break;
      case "Files you’ve already submitted":
        dateField =
          await ConfirmOrgDataReuploadPage.getFilesAlreadySubmittedTableField(
            1,
            2
          );
        break;
      default:
        throw new Error(`The ${tableName} table is not defined!`);
    }

    await expect(dateField).toEqual(currentFormattedDate);
  }
);

Then(
  /^the file in the "(Files to submit|Files you’ve already submitted|Files already submitted|Files uploaded)" table should be uploaded by the current user on the "(review organisation data|confirm organisation data re upload)" page$/,
  async function (
    tableName:
      | "Files to submit"
      | "Files you’ve already submitted"
      | "Files already submitted"
      | "Files uploaded",
    pageName: "confirm organisation data re upload" | "review organisation data"
  ) {
    const userName = await (await loginPage.userName).getText();
    let userNameField: string | undefined;
    switch (tableName) {
      case "Files to submit":
        userNameField =
          await ReviewOrganisationDataPage.getFilesToSubmitTableField(1, 3);
        break;
      case "Files uploaded":
        userNameField =
          await ReviewOrganisationDataPage.getFilesUploadedTableField(1, 3);
        break;
      case "Files already submitted":
        userNameField =
          await ReviewOrganisationDataPage.getFilesAlreadySubmittedTableField(
            1,
            3
          );
        break;
      case "Files you’ve already submitted":
        userNameField =
          await ConfirmOrgDataReuploadPage.getFilesAlreadySubmittedTableField(
            1,
            3
          );
        break;
      default:
        throw new Error(`The ${tableName} table is not defined!`);
    }
    await expect(userNameField).toEqual(userName);
  }
);

Then(
  /^the "Are you sure you want to re-submit" text should be displayed on the "review organisation data" page$/,
  async function () {
    await expect(
      await ReviewOrganisationDataPage.txtAreYouSureYouWantToReSubmit
    ).toBeDisplayed();
  }
);

Then(
  /^the "(Yes|No)" radio button should be present on the "review organisation data" page$/,
  async function (option: "Yes" | "No") {
    switch (option) {
      case "Yes":
        await expect(
          await ReviewOrganisationDataPage.btnYesSubmit
        ).toBePresent();
        break;
      case "No":
        await expect(
          await ReviewOrganisationDataPage.btnNoSubmit
        ).toBePresent();
        break;
      default:
        throw new Error(
          `The ${option} option is not defined on the "review organisation data" page!`
        );
    }
  }
);

Then(
  /^the radio buttons should not be checked on the "review organisation data" page$/,
  async function () {
    await expect(
      await ReviewOrganisationDataPage.btnYesSubmit
    ).not.toBeChecked();
    await expect(
      await ReviewOrganisationDataPage.btnNoSubmit
    ).not.toBeChecked();
  }
);

Then(
  /^the "confirm" button should be displayed on the "review organisation data" page$/,
  async function () {
    await expect(
      await ReviewOrganisationDataPage.btnConfirmSubmission
    ).toBeDisplayed();
  }
);

Then(
  /^the warning about enforcement action should be displayed on the "review organisation data" page$/,
  async function () {
    await expect(await ReviewOrganisationDataPage.txtWarning).toBeDisplayed();
  }
);

Then(
  /^the "Organisation details submitted" banner is displayed$/,
  async function () {
    await expect(
      await OrganisationDetailsConfirmationPage.txtOrganisationDetailsSubmitted
    ).toBeDisplayed();
  }
);

Then(
  /^the link to "Print this page" is displayed on the "organisation details confirmation" page$/,
  async function () {
    await expect(
      await OrganisationDetailsConfirmationPage.lnkPrintThisPage
    ).toBeDisplayed();
  }
);

Then(
  /^the button to "Go to your account homepage" is displayed on the "organisation details confirmation" page$/,
  async function () {
    await expect(
      await OrganisationDetailsConfirmationPage.lnkGoToAccountHomePage
    ).toBeDisplayed();
  }
);

Then(
  /^the "(Continue|Cancel)" button should be displayed on the "confirm organisation data re upload" page$/,
  async function (btnName: "Continue" | "Cancel") {
    switch (btnName) {
      case "Continue":
        await expect(
          await ConfirmOrgDataReuploadPage.btnContinueReUpload
        ).toBeDisplayed();
        break;
      case "Cancel":
        await expect(
          await ConfirmOrgDataReuploadPage.btnCancelReUpload
        ).toBeDisplayed();
        break;
      default:
        throw new Error(
          `The ${btnName} button is not defined on the "confirm organisation data re upload" page!`
        );
    }
  }
);

Then(
  /^the link to "Go to your account homepage" is displayed on the "review organisation data" page$/,
  async function () {
    await expect(
      await ReviewOrganisationDataPage.lnkGoToAccountHomePage
    ).toBeDisplayed();
  }
);

Then(
  /^the "enter your full name" field should be displayed on the "declaration enter full name" page$/,
  async function () {
    await expect(
      await DeclarationEnterFullNamePage.inputEnterYourFullName
    ).toBePresent();
  }
);

Then(
  /^the warning about enforcement action should be displayed on the "declaration enter full name" page$/,
  async function () {
    await expect(await DeclarationEnterFullNamePage.txtWarning).toBeDisplayed();
  }
);

Then(
  /^the "submit file" button should be displayed on the "declaration enter full name" page$/,
  async function () {
    await expect(await DeclarationEnterFullNamePage.btnSubmit).toBeDisplayed();
  }
);

Then(
  /^the "(Enter your full name|Full name must be 200 characters or less)" error message is displayed on the "declaration enter full name" page$/,
  async function (
    this: CustomWorld,
    expectedErrorMessageText:
      | "Enter your full name"
      | "Full name must be 200 characters or less"
  ) {
    await CommonPage.takeElemScreenshot(
      await DeclarationEnterFullNamePage.inputEnterYourFullName
    );
    const errorBanner = await DeclarationEnterFullNamePage.errorBanner;
    await expect(errorBanner).toBeDisplayed();
    const errorBannerText = await DeclarationEnterFullNamePage.errorBannerText;
    await expect(errorBannerText).toBeDisplayed();
    const actualErrorMessageText = await errorBannerText.getText();

    switch (expectedErrorMessageText) {
      case "Enter your full name":
        !this.isWelsh
          ? await expect(actualErrorMessageText).toEqual(
              SubmissionDeclarationError.ErrorNoName
            )
          : await expect(actualErrorMessageText).toEqual(
              SubmissionDeclarationError.ErrorNoNameInWelsh
            );
        break;
      case "Full name must be 200 characters or less":
        !this.isWelsh
          ? await expect(actualErrorMessageText).toEqual(
              SubmissionDeclarationError.ErrorLongName
            )
          : await expect(actualErrorMessageText).toEqual(
              SubmissionDeclarationError.ErrorLongNameInWelsh
            );
        break;
      default:
        throw new Error(
          `The ${expectedErrorMessageText} error message is not defined`
        );
    }
  }
);

Then(
  /^the error message should be displayed on the "review organisation data" page for "(Compliance Scheme|Producer)"$/,
  async function (
    this: CustomWorld,
    userType: "Compliance Scheme" | "Producer"
  ) {
    const errorMessageElem =
      await ReviewOrganisationDataPage.txtChooseYesOptionError;
    await expect(errorMessageElem).toBeDisplayed();
    if (!this.isWelsh) {
      switch (userType) {
        case "Compliance Scheme":
          await expect(await errorMessageElem.getText()).toEqual(
            ReviewOrganisationDetailsError.CSChooseYesOption
          );
          break;
        case "Producer":
          await expect(await errorMessageElem.getText()).toEqual(
            ReviewOrganisationDetailsError.ProducerChooseYesOption
          );
          break;
        default:
          throw new Error(`The ${userType} user is not defined!`);
      }
    } else if (this.isWelsh) {
      switch (userType) {
        case "Compliance Scheme":
          await expect(await errorMessageElem.getText()).toEqual(
            ReviewOrganisationDetailsError.CSChooseYesOptionInWelsh
          );
          break;
        case "Producer":
          await expect(await errorMessageElem.getText()).toEqual(
            ReviewOrganisationDetailsError.ProducerChooseYesOptionInWelsh
          );
          break;
        default:
          throw new Error(`The ${userType} user is not defined!`);
      }
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);
