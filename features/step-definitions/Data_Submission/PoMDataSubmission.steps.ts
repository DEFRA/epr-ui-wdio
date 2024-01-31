import { Given, When, Then } from "@wdio/cucumber-framework";
import { PoMDataFileNames } from "../../../utils/types/DataUpload.types";
import { waitAndClick } from "../../../utils/Waiters.js";
import CommonPage from "../../../pageobjects/common.page.js";
import { getCurrentFormattedDate } from "../../../utils/Date.js";
import loginPage from "../../../pageobjects/login.page.js";
import SubmissionConfirmationPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/SubmissionConfirmationPage.page.js";
import UploadNewFileToSubmitPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/UploadNewFileToSubmitPage.page.js";
import SubmissionDeclarationPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/Producer_Packaging_Data_Upload/SubmissionDeclarationPage.page.js";
import FileUploadCheckFileAndSubmitPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/FileUploadCheckFileAndSubmitPage.page.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import {
  CheckAndSubmitError,
  SubmissionDeclarationError,
  SubmissionDeclarationUserName,
} from "../../../utils/enums/DataUpload.enum.js";

When(
  /^the user clicks the "continue" button on the "check and submit" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await waitAndClick(
        await FileUploadCheckFileAndSubmitPage.btnContinueSubmission
      );
    } else if (this.isWelsh) {
      await waitAndClick(
        await FileUploadCheckFileAndSubmitPage.btnContinueSubmissionInWelsh
      );
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);

When(
  /^the user chooses "(Yes|No)" option on the "check and submit" page$/,
  async function (option: "Yes" | "No") {
    switch (option) {
      case "Yes":
        await (
          await FileUploadCheckFileAndSubmitPage.radioYesIWouldLikeToSubmit
        ).click();
        break;
      case "No":
        await (
          await FileUploadCheckFileAndSubmitPage.radioNoIDoNotWantToSubmitRightNow
        ).click();
        break;
      default:
        throw new Error(
          `The ${option} option is not defined on the "check and submit" page!`
        );
    }
  }
);

When(/^the user submits a Packaging data file$/, async function () {
  await (
    await FileUploadCheckFileAndSubmitPage.radioYesIWouldLikeToSubmit
  ).click();
  await waitAndClick(
    await FileUploadCheckFileAndSubmitPage.btnContinueSubmission
  );
});

When(
  /^the user clicks the "Go to your account homepage" button on the "submission confirmation" page$/,
  async function () {
    await waitAndClick(await SubmissionConfirmationPage.lnkGoToAccountHomePage);
  }
);

When(
  /^the user clicks the "(Upload new file|Cancel)" button on the "upload new file to submit" page$/,
  async function (btnName: "Upload new file" | "Cancel") {
    switch (btnName) {
      case "Upload new file":
        await waitAndClick(await UploadNewFileToSubmitPage.btnUploadNewFile);
        break;
      case "Cancel":
        await waitAndClick(await UploadNewFileToSubmitPage.btnCancel);
        break;
      default:
        throw new Error(
          `The ${btnName} button is not defined on the "upload new file to submit" page!`
        );
    }
  }
);

When(
  /^the user clicks the "Go to your account homepage" link on the "check and submit" page$/,
  async function () {
    await waitAndClick(
      await FileUploadCheckFileAndSubmitPage.lnkGoToAccountHomePage
    );
  }
);

When(
  /^the user clicks the "submit file" button on the "submission declaration" page$/,
  async function () {
    await waitAndClick(await SubmissionDeclarationPage.btnSubmit);
  }
);

When(
  /^the user enters a full name in the "Enter your full name" field on the "submission declaration" page$/,
  async function () {
    const userName = await (await loginPage.userName).getText();
    await (
      await SubmissionDeclarationPage.inputEnterYourFullName
    ).setValue(userName);
    await CommonPage.takeElemScreenshot(
      await SubmissionDeclarationPage.inputEnterYourFullName
    );
  }
);

When(
  /^the user clicks the "continue" button on the "file upload check file and submit" page$/,
  async function () {
    await waitAndClick(
      await FileUploadCheckFileAndSubmitPage.btnContinueSubmission
    );
  }
);

When(
  /^the user chooses "(Yes|No)" option on the "file upload check file and submit" page$/,
  async function (option: "Yes" | "No") {
    switch (option) {
      case "Yes":
        await (
          await FileUploadCheckFileAndSubmitPage.radioYesIWouldLikeToSubmit
        ).click();
        break;
      case "No":
        await (
          await FileUploadCheckFileAndSubmitPage.radioNoIDoNotWantToSubmitRightNow
        ).click();
        break;
      default:
        throw new Error(
          `The ${option} option is not defined on the "file upload check file and submit" page!`
        );
    }
  }
);

Then(
  /^the (.*) file should be in the "(File you're submitting|File already submitted|Last file submitted|File uploaded)" table on the "(check and submit|file upload check file and submit)" page$/,
  async function (
    fileName: PoMDataFileNames,
    tableName:
      | "File you're submitting"
      | "File already submitted"
      | "Last file submitted"
      | "File uploaded",
    pageName: "file upload check file and submit" | "check and submit"
  ) {
    await CommonPage.takeScreenshot();
    let fileNameField: string | undefined;
    switch (tableName) {
      case "File you're submitting":
        fileNameField =
          await FileUploadCheckFileAndSubmitPage.getFileYouAreSubmittingTableField(
            1,
            1
          );
        break;
      case "File already submitted":
        fileNameField =
          await UploadNewFileToSubmitPage.getFileAlreadySubmittedTableField(
            1,
            1
          );
        break;
      case "Last file submitted":
        fileNameField =
          await FileUploadCheckFileAndSubmitPage.getLastFileSubmittedTableField(
            1,
            1
          );
        break;
      case "File uploaded":
        fileNameField =
          await FileUploadCheckFileAndSubmitPage.getLastFileUploadedTableField(
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
  /^the uploaded date should be correct in the "(File you're submitting|File already submitted|Last file submitted|File uploaded)" table on the "(check and submit|file upload check file and submit)" page$/,
  async function (
    tableName:
      | "File you're submitting"
      | "File already submitted"
      | "Last file submitted"
      | "File uploaded",
    pageName: "file upload check file and submit" | "check and submit"
  ) {
    const currentFormattedDate = await getCurrentFormattedDate();
    let dateField: string | undefined;
    switch (tableName) {
      case "File you're submitting":
        dateField =
          await FileUploadCheckFileAndSubmitPage.getFileYouAreSubmittingTableField(
            1,
            2
          );
        break;
      case "File already submitted":
        dateField =
          await UploadNewFileToSubmitPage.getFileAlreadySubmittedTableField(
            1,
            2
          );
        break;
      case "Last file submitted":
        dateField =
          await FileUploadCheckFileAndSubmitPage.getLastFileSubmittedTableField(
            1,
            2
          );
        break;
      case "File uploaded":
        dateField =
          await FileUploadCheckFileAndSubmitPage.getLastFileUploadedTableField(
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
  /^the file in the "(File you're submitting|File already submitted|Last file submitted|File uploaded)" table should be uploaded by the current user on the "(check and submit|file upload check file and submit)" page$/,
  async function (
    tableName:
      | "File you're submitting"
      | "File already submitted"
      | "Last file submitted"
      | "File uploaded",
    pageName: "file upload check file and submit" | "check and submit"
  ) {
    const userName = await (await loginPage.userName).getText();
    let userNameField: string | undefined;
    switch (tableName) {
      case "File you're submitting":
        userNameField =
          await FileUploadCheckFileAndSubmitPage.getFileYouAreSubmittingTableField(
            1,
            3
          );
        break;
      case "File already submitted":
        userNameField =
          await UploadNewFileToSubmitPage.getFileAlreadySubmittedTableField(
            1,
            3
          );
        break;
      case "Last file submitted":
        userNameField =
          await FileUploadCheckFileAndSubmitPage.getLastFileSubmittedTableField(
            1,
            3
          );
        break;
      case "File uploaded":
        userNameField =
          await FileUploadCheckFileAndSubmitPage.getLastFileUploadedTableField(
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
  /^the "Are you sure you want to submit" text should be displayed on the "check and submit" page$/,
  async function () {
    await expect(
      await FileUploadCheckFileAndSubmitPage.txtAreYouSureYouWantToSubmit
    ).toBeDisplayed();
  }
);

Then(
  /^the "(Yes|No)" radio button should be present on the "check and submit" page$/,
  async function (option: "Yes" | "No") {
    switch (option) {
      case "Yes":
        await expect(
          await FileUploadCheckFileAndSubmitPage.radioYesIWouldLikeToSubmit
        ).toBePresent();
        break;
      case "No":
        await expect(
          await FileUploadCheckFileAndSubmitPage.radioNoIDoNotWantToSubmitRightNow
        ).toBePresent();
        break;
      default:
        throw new Error(
          `The ${option} option is not defined on the "check and submit" page!`
        );
    }
  }
);

Then(
  /^the radio buttons should not be checked on the "check and submit" page$/,
  async function () {
    await expect(
      await FileUploadCheckFileAndSubmitPage.radioYesIWouldLikeToSubmit
    ).not.toBeChecked();
    await expect(
      await FileUploadCheckFileAndSubmitPage.radioNoIDoNotWantToSubmitRightNow
    ).not.toBeChecked();
  }
);

Then(
  /^the "continue" button should be displayed on the "check and submit" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await expect(
        await FileUploadCheckFileAndSubmitPage.btnContinueSubmission
      ).toBeDisplayed();
    } else if (this.isWelsh) {
      await expect(
        await FileUploadCheckFileAndSubmitPage.btnContinueSubmissionInWelsh
      ).toBeDisplayed();
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);

Then(
  /^the warning about enforcement action should be displayed on the "check and submit" page$/,
  async function () {
    await expect(
      await FileUploadCheckFileAndSubmitPage.txtWarning
    ).toBeDisplayed();
  }
);

Then(/^the "Packaging data submitted" banner is displayed$/, async function () {
  await expect(
    await SubmissionConfirmationPage.txtPackagingDataSubmitted
  ).toBeDisplayed();
});

Then(
  /^the link to "Print this page" is displayed on the "submission confirmation" page$/,
  async function () {
    await expect(
      await SubmissionConfirmationPage.lnkPrintThisPage
    ).toBeDisplayed();
  }
);

Then(
  /^the button to "Go to your account homepage" is displayed on the "submission confirmation" page$/,
  async function () {
    await expect(
      await SubmissionConfirmationPage.lnkGoToAccountHomePage
    ).toBeDisplayed();
  }
);

Then(
  /^the "(Upload new file|Cancel)" button should be displayed on the "upload new file to submit" page$/,
  async function (btnName: "Upload new file" | "Cancel") {
    switch (btnName) {
      case "Upload new file":
        await expect(
          await UploadNewFileToSubmitPage.btnUploadNewFile
        ).toBeDisplayed();
        break;
      case "Cancel":
        await expect(await UploadNewFileToSubmitPage.btnCancel).toBeDisplayed();
        break;
      default:
        throw new Error(
          `The ${btnName} button is not defined on the "upload new file to submit" page!`
        );
    }
  }
);

Then(
  /^the link to "Go to your account homepage" is displayed on the "(check and submit|file upload check file and submit)" page$/,
  async function (
    pageName: "check and submit" | "file upload check file and submit"
  ) {
    if (pageName === "check and submit") {
      await expect(
        await FileUploadCheckFileAndSubmitPage.lnkGoToAccountHomePage
      ).toBeDisplayed();
    } else if (pageName === "file upload check file and submit") {
      await expect(
        await FileUploadCheckFileAndSubmitPage.lnkGoToAccountHomePage
      ).toBeDisplayed();
    } else {
      throw new Error(`The ${pageName} page is not defined!`);
    }
  }
);

Then(
  /^the "enter your full name" field should be displayed on the "submission declaration" page$/,
  async function () {
    await expect(
      await SubmissionDeclarationPage.inputEnterYourFullName
    ).toBePresent();
  }
);

Then(
  /^the "submit file" button should be displayed on the "submission declaration" page$/,
  async function () {
    await expect(await SubmissionDeclarationPage.btnSubmit).toBePresent();
  }
);

Then(
  /^the "(Enter your full name|Full name must be 200 characters or less)" error message is displayed on the "submission declaration" page$/,
  async function (
    this: CustomWorld,
    errorMessageText:
      | "Enter your full name"
      | "Full name must be 200 characters or less"
  ) {
    await CommonPage.takeElemScreenshot(
      await SubmissionDeclarationPage.inputEnterYourFullName
    );
    const errorBanner = await SubmissionDeclarationPage.errorBanner;
    const errorBannerText = await SubmissionDeclarationPage.errorBannerText;
    await expect(errorBanner).toBeDisplayed();
    await expect(errorBannerText).toBeDisplayed();
    switch (errorMessageText) {
      case "Enter your full name":
        if (!this.isWelsh) {
          await expect(await errorBannerText.getText()).toEqual(
            SubmissionDeclarationError.ErrorNoName
          );
        } else if (this.isWelsh) {
          await expect(await errorBannerText.getText()).toEqual(
            SubmissionDeclarationError.ErrorNoNameInWelsh
          );
        } else {
          throw new Error(`The language option is not defined!`);
        }
        break;
      case "Full name must be 200 characters or less":
        if (!this.isWelsh) {
          await expect(await errorBannerText.getText()).toEqual(
            SubmissionDeclarationError.ErrorLongName
          );
        } else if (this.isWelsh) {
          await expect(await errorBannerText.getText()).toEqual(
            SubmissionDeclarationError.ErrorLongNameInWelsh
          );
        } else {
          throw new Error(`The language option is not defined!`);
        }
        break;
      default:
        throw new Error(`The ${errorMessageText} error message is not defined`);
    }
  }
);

Then(
  /^the "(Yes|No)" radio button should be present on the "file upload check file and submit" page$/,
  async function (option: "Yes" | "No") {
    switch (option) {
      case "Yes":
        await expect(
          await FileUploadCheckFileAndSubmitPage.radioYesIWouldLikeToSubmit
        ).toBePresent();
        break;
      case "No":
        await expect(
          await FileUploadCheckFileAndSubmitPage.radioNoIDoNotWantToSubmitRightNow
        ).toBePresent();
        break;
      default:
        throw new Error(
          `The ${option} option is not defined on the "file upload check file and submit" page!`
        );
    }
  }
);

Then(
  /^the radio buttons should not be checked on the "file upload check file and submit" page$/,
  async function () {
    await expect(
      await FileUploadCheckFileAndSubmitPage.radioYesIWouldLikeToSubmit
    ).not.toBeChecked();
    await expect(
      await FileUploadCheckFileAndSubmitPage.radioNoIDoNotWantToSubmitRightNow
    ).not.toBeChecked();
  }
);

Then(
  /^the "continue" button should be displayed on the "file upload check file and submit" page$/,
  async function () {
    await expect(
      await FileUploadCheckFileAndSubmitPage.btnContinueSubmission
    ).toBeDisplayed();
  }
);

Then(
  /^the warning about enforcement action should be displayed on the "submission declaration" page$/,
  async function () {
    await expect(await SubmissionDeclarationPage.txtWarning).toBeDisplayed();
  }
);

Then(
  /^the warning about enforcement action should be displayed on the "file upload check file and submit" page$/,
  async function () {
    await expect(
      await FileUploadCheckFileAndSubmitPage.txtWarning
    ).toBeDisplayed();
  }
);

Then(
  /^the error message should be displayed on the "check and submit" page$/,
  async function (this: CustomWorld) {
    const errorMessageElem =
      await FileUploadCheckFileAndSubmitPage.txtSelectYesError;
    await expect(errorMessageElem).toBeDisplayed();
    if (!this.isWelsh) {
      await expect(await errorMessageElem.getText()).toEqual(
        CheckAndSubmitError.SelectYes
      );
    } else if (this.isWelsh) {
      await expect(await errorMessageElem.getText()).toEqual(
        CheckAndSubmitError.SelectYesInWelsh
      );
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);

Then(
  /^the "(File uploaded|File you're submitting|File already submitted|Last file submitted)" table should have the corresponding title on the "(check and submit|file upload check file and submit)" page$/,
  async function (
    tableName:
      | "File uploaded"
      | "File you're submitting"
      | "File already submitted"
      | "Last file submitted",
    pageName: "check and submit" | "file upload check file and submit"
  ) {
    let currentTableTitle: WebdriverIO.Element | undefined;
    switch (tableName) {
      case "File uploaded":
        currentTableTitle =
          await FileUploadCheckFileAndSubmitPage.getLastFileUploadedTableTitle();
        break;
      case "File you're submitting":
        currentTableTitle =
          await FileUploadCheckFileAndSubmitPage.getFileYouAreSubmittingTableTitle();
        break;
      case "File already submitted":
        currentTableTitle =
          await UploadNewFileToSubmitPage.getFileAlreadySubmittedTableTitle();
        break;
      case "Last file submitted":
        currentTableTitle =
          await FileUploadCheckFileAndSubmitPage.getLastFileSubmittedTableTitle();
        break;
      default:
        throw new Error(`The ${tableName} is not defined!`);
    }

    if (tableName === "File you're submitting") {
      await expect(currentTableTitle).toHaveTextContaining(
        "File you’re submitting"
      );
    } else {
      await expect(currentTableTitle).toHaveTextContaining(tableName);
    }
  }
);

Then(
  /^the title of the "(file upload check file and submit|upload new file to submit)" page should be correct( for Basic User)?$/,
  async function (
    this: CustomWorld,
    pageName: "file upload check file and submit" | "upload new file to submit",
    isBasicUser: string | undefined
  ) {
    if (!this.isWelsh) {
      switch (pageName) {
        case "file upload check file and submit":
          if (!isBasicUser) {
            await expect(
              await FileUploadCheckFileAndSubmitPage.h1Header
            ).toBeDisplayed();
          } else {
            await expect(
              await FileUploadCheckFileAndSubmitPage.h1HeaderForBasicUser
            ).toBeDisplayed();
          }
          break;
        case "upload new file to submit":
          await expect(
            await UploadNewFileToSubmitPage.h1Header
          ).toBeDisplayed();
          break;
        default:
          throw new Error(`The ${pageName} page is not defined!`);
      }
    } else if (this.isWelsh) {
      switch (pageName) {
        case "file upload check file and submit":
          if (!isBasicUser) {
            await expect(
              await FileUploadCheckFileAndSubmitPage.H1HeaderWelsh
            ).toBeDisplayed();
          } else {
            await expect(
              await FileUploadCheckFileAndSubmitPage.H1HeaderForBasicUserWelsh
            ).toBeDisplayed();
          }
          break;
        case "upload new file to submit":
          await expect(
            await UploadNewFileToSubmitPage.H1HeaderWelsh
          ).toBeDisplayed();
          break;
        default:
          throw new Error(`The ${pageName} page is not defined!`);
      }
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);
