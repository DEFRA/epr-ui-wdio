import { Given, When, Then } from "@wdio/cucumber-framework";
import { waitAndClick, waitUntilPageLoads } from "../../../utils/Waiters.js";
import { LandingPageCards } from "../../../utils/types/LandingPages.types.js";
import CommonPage from "../../../pageobjects/common.page.js";
import CommonDataUploadPage from "../../../pageobjects/DataUpload/CommonDataUpload.page.js";
import ReviewOrganisationDataPage from "../../../pageobjects/DataUpload/Org_Data_Upload/ReviewOrganisationData.page.js";
import ReportOrganisationDetailsPage from "../../../pageobjects/DataUpload/Org_Data_Upload/ReportOrganisationDetails.page.js";
import PoMDataSubLandingPage from "../../../pageobjects/LandingPages/PoMDataSubLanding.page.js";
import UploadNewFileToSubmitPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/UploadNewFileToSubmitPage.page.js";
import ConfirmOrgDataReuploadPage from "../../../pageobjects/DataUpload/Org_Data_Upload/ConfirmOrgDataReupload.page.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import FileUploadCheckFileAndSubmitPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/FileUploadCheckFileAndSubmitPage.page.js";
import CheckWarningsPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/CheckWarningsPage.page.js";

When(
  /^the user uploads without selected data file$/,
  async function (this: CustomWorld) {
    await CommonDataUploadPage.formDataFileUpload.waitForDisplayed();
    await CommonPage.takeElemScreenshot(
      await CommonDataUploadPage.formDataFileUpload
    );
    if (!this.isWelsh) {
      await (await CommonDataUploadPage.btnUploadFile).click();
    } else if (this.isWelsh) {
      await (await CommonDataUploadPage.btnUploadFileInWelsh).click();
    } else {
      throw new Error(`The language option is not defined!`);
    }
    await waitUntilPageLoads();
  }
);

When(
  /^the user clicks the "(continue| go to account home page |confirm)" button$/,
  async function (
    buttonName: " go to account home page " | "continue" | "confirm"
  ) {
    switch (buttonName) {
      // TODO " go to account home page " will be removed after adding data-testid
      case " go to account home page ":
        await waitAndClick(await CommonDataUploadPage.btnGoToAccountHomePage);
        break;
      // TODO we have multiple Continue buttons, because they all have different selectors, will have one when data-testid is added
      case "continue":
        await waitAndClick(await CommonDataUploadPage.btnContinue2);
        break;
      case "confirm":
        await waitAndClick(await CommonDataUploadPage.btnConfirm);
        break;
      default:
        throw new Error(`The ${buttonName} button is not defined!`);
    }
  }
);

When(
  /^the user navigates to "(Report organisation details|Report packaging data)" page as a "(Compliance Scheme|Producer)"$/,
  async function (
    cardName: LandingPageCards,
    userType: "Compliance Scheme" | "Producer"
  ) {
    const fileUploadStatus =
      await CommonDataUploadPage.GetFileUploadStatusFirstPeriod();

    if (userType == "Compliance Scheme") {
      if (cardName == "Report organisation details") {
        await waitAndClick(
          ReportOrganisationDetailsPage.btnReportOrganisationDetailsFirstPeriod
        );
      } else if (cardName == "Report packaging data") {
        await waitAndClick(
          PoMDataSubLandingPage.btnReportPackagingDataFirstPeriod
        );
      }
    } else if (userType == "Producer") {
      if (cardName == "Report organisation details") {
        await waitAndClick(
          ReportOrganisationDetailsPage.btnReportOrganisationDetailsFirstPeriod
        );
      } else if (cardName == "Report packaging data") {
        await waitAndClick(
          PoMDataSubLandingPage.btnReportPackagingDataFirstPeriod
        );
      }
    }

    switch (fileUploadStatus) {
      case "NOT STARTED":
        break;
      case "FILE UPLOADED":
        switch (cardName) {
          case "Report organisation details":
            await waitAndClick(
              await ReviewOrganisationDataPage.lnkChangeFilesUploaded
            );
            break;
          case "Report packaging data":
            const currentUrl = await browser.getUrl();
            if (currentUrl.includes(FileUploadCheckFileAndSubmitPage.Url)) {
              await waitAndClick(
                await ReviewOrganisationDataPage.lnkChangeFilesUploaded
              );
            } else if (currentUrl.includes(CheckWarningsPage.Url)) {
              await expect(
                await CheckWarningsPage.optionUploadNewFileYes
              ).toBeDisplayed();
              await (await CheckWarningsPage.radioYes).click();
              await waitAndClick(await CheckWarningsPage.btnContinue);
            } else {
              throw new Error(`The ${currentUrl} URL is not expected!`);
            }
            break;
          default:
            throw new Error(`The ${cardName} submission card is not defined!`);
        }
        break;
      case "SUBMITTED TO REGULATOR":
        switch (cardName) {
          case "Report organisation details":
            const currentURL = await browser.getUrl();
            if (currentURL.includes(await ConfirmOrgDataReuploadPage.Url)) {
              await waitAndClick(
                await ConfirmOrgDataReuploadPage.btnContinueReUpload
              );
            } else if (
              currentURL.includes(await ReviewOrganisationDataPage.Url)
            ) {
              await waitAndClick(
                await ReviewOrganisationDataPage.lnkChangeFilesUploaded
              );
              await waitAndClick(
                await ConfirmOrgDataReuploadPage.btnContinueReUpload
              );
            } else {
              throw new Error(`The ${currentURL} URL is not defined!`);
            }
            break;
          case "Report packaging data":
            const currentUrl = await browser.getUrl();
            if (currentUrl.includes(FileUploadCheckFileAndSubmitPage.Url)) {
              await waitAndClick(
                await FileUploadCheckFileAndSubmitPage.lnkChangeFilesUploaded
              );
            } else if (currentUrl.includes(UploadNewFileToSubmitPage.Url)) {
              await waitAndClick(
                await UploadNewFileToSubmitPage.btnUploadNewFile
              );
            } else if (currentUrl.includes(CheckWarningsPage.Url)) {
              await expect(
                await CheckWarningsPage.optionUploadNewFileYes
              ).toBeDisplayed();
              await (await CheckWarningsPage.radioYes).click();
              await waitAndClick(await CheckWarningsPage.btnContinue);
            } else {
              throw new Error(`The ${currentUrl} URL is not expected!`);
            }
            break;
          default:
            throw new Error(`The ${cardName} submission card is not defined!`);
        }
        break;
      default:
        throw new Error(
          `The ${fileUploadStatus} submission status is not defined!`
        );
    }
  }
);

When(
  /^the user selects to change files uploaded on the "(review organisation data|check and submit)" page$/,
  async function (pageName: "review organisation data" | "check and submit") {
    switch (pageName) {
      case "review organisation data":
        await waitAndClick(
          await ReviewOrganisationDataPage.lnkChangeFilesUploaded
        );
        break;
      case "check and submit":
        await waitAndClick(
          await FileUploadCheckFileAndSubmitPage.lnkChangeFilesUploaded
        );
        break;
      default:
        throw new Error(`The ${pageName} page is not defined!`);
    }
  }
);

Then(
  /^the "(continue| go to account home page |confirm)" button should be displayed$/,
  async function (
    buttonName: " go to account home page " | "continue" | "confirm"
  ) {
    switch (buttonName) {
      case " go to account home page ":
        await expect(
          await CommonDataUploadPage.btnGoToAccountHomePage
        ).toBeDisplayed();
        break;
      case "continue":
        await expect(await CommonDataUploadPage.btnContinue2).toBeDisplayed();
        break;
      case "confirm":
        await expect(await CommonDataUploadPage.btnConfirm).toBeDisplayed();
        break;
      default:
        throw new Error(`The ${buttonName} button is not defined!`);
    }
  }
);

Then(
  /^the link to change files uploaded should be displayed on the "(review organisation data|check and submit)" page$/,
  async function (pageName: "review organisation data" | "check and submit") {
    switch (pageName) {
      case "review organisation data":
        await expect(
          await ReviewOrganisationDataPage.lnkChangeFilesUploaded
        ).toBeDisplayed();
        break;
      case "check and submit":
        await expect(
          await FileUploadCheckFileAndSubmitPage.lnkChangeFilesUploaded
        ).toBeDisplayed();
        break;
      default:
        throw new Error(`The ${pageName} page is not defined!`);
    }
  }
);
