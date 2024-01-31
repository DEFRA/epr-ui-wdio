import { Given, When, Then } from "@wdio/cucumber-framework";
import {
  PoMDataFileNames,
  PoMDataUploadContextElems,
} from "../../../utils/types/DataUpload.types";
import {
  waitUntilPageLoads,
  waitUntilElemDisplayed,
  waitAndClick,
  waitUntilPageOpened,
} from "../../../utils/Waiters.js";
import {
  compareCSVFiles,
  replaceTestDataPlaceholderWithOrganisationId,
  replaceTestDataOrganisationIdWithPlaceholder,
  replaceExistReportPlaceholderWithOrganisationId,
  replaceExistReportOrganisationIdWithPlaceholder,
} from "../../../utils/CompareCSV.js";
import {
  POM_TEST_DATA_PATH,
  POM_DATA_ERROR_REPORTS_PATH,
  DOWNLOAD_FOLDER_PATH,
} from "../../../config/pathconst.js";
import {
  UploadResultHeader,
  PoMDataUploadResultStatus,
  FileErrorTitleEnum,
  FileErrorMessageEnum,
  FileErrorMessageEnumInWelsh,
  FileErrorTitleEnumInWelsh,
  CheckWarningsError,
} from "../../../utils/enums/DataUpload.enum.js";
import { PageTitles, Pages } from "../../../utils/Pages.js";
import CustomWorld from "../../../utils/CustomWorld";
import CommonPage from "../../../pageobjects/common.page.js";
import CommonDataUploadPage from "../../../pageobjects/DataUpload/CommonDataUpload.page.js";
import FileUploadCheckFileAndSubmitPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/FileUploadCheckFileAndSubmitPage.page.js";
import FileUploadPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/FileUploadPage.page.js";
import FileUploadFailurePage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/FileUploadFailurePage.page.js";
import PoMDataSubLandingPage from "../../../pageobjects/LandingPages/PoMDataSubLanding.page.js";
import CheckWarningsPage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/CheckWarningsPage.page.js";
import { getSecret } from "../../../utils/LoginConf.js";

Given(
  /^init PoM Data Upload scenario context/,
  async function (this: CustomWorld) {
    this.scenarioDataPoMDataUpload = new Map<
      PoMDataUploadContextElems,
      string
    >();
  }
);

When(
  /^the user selects the "Report packaging data" card as "(Compliance Scheme|Producer)"$/,
  async function (userType: "Compliance Scheme" | "Producer") {
    await waitAndClick(await CommonDataUploadPage.lnkReportPackagingData);
  }
);

When(
  /^the (Producer|Compliance Scheme) user uploads a PoM data (CSV|XLS) file with a name (.*)$/,
  async function (
    this: CustomWorld,
    userType: "Producer" | "Compliance Scheme",
    formatName: "CSV" | "XLS",
    fileName: PoMDataFileNames
  ) {
    let filePath: string;

    if (userType === "Producer") {
      switch (fileName) {
        case "ProducerInvalidDataCombinationUpload":
        case "ProducerSmallInvalidFile":
        case "ProducerInvalidDataCombinationUploadWelsh":
        case "ProducerSmallValidFile":
        case "ProducerValidDataUpload":
        case "ProducerSmallFileContainingWarning60":
        case "ProducerSmallFileContainingWarning60Welsh":
          await replaceTestDataPlaceholderWithOrganisationId(
            fileName,
            this.scenarioDataLandingPgs.get("organisationId") as string
          );
          break;
        default:
      }
    } else if (userType === "Compliance Scheme") {
      switch (fileName) {
        case "CSInvalidDataCombinationUpload":
        case "CSInvalidOrganisationId":
        case "CSInvalidOrganisationIdAnotherCompany":
        case "CSInvalidDataCombinationUploadWelsh":
        case "CSInvalidOrganisationIdWelsh":
        case "CSInvalidOrganisationIdAnotherCompanyWelsh":
        case "CSSmallFileContainingWarning60":
        case "CSSmallFileContainingWarning60Welsh":
        case "CSSmallInvalidFile":
        case "CSSmallValidFile":
        case "CSValidDataUpload":
          await replaceTestDataPlaceholderWithOrganisationId(
            fileName,
            await getSecret(this.secretClient, process.env.COMPLIANCE_SCHEME_ORGANISATION_ID as string)
          );
          break;
        default:
      }
    }

    switch (fileName) {
      case "CSInvalidDataCombinationUpload":
      case "CSInvalidOrganisationId":
      case "CSInvalidOrganisationIdAnotherCompany":
      case "CSSmallInvalidFile":
      case "CSInvalidDataCombinationUploadWelsh":
      case "CSInvalidOrganisationIdWelsh":
      case "CSInvalidOrganisationIdAnotherCompanyWelsh":
      case "CSSmallValidFile":
      case "CSValidDataUpload":
      case "CSSmallFileContainingWarning60":
      case "CSSmallFileContainingWarning60Welsh":
        filePath = POM_TEST_DATA_PATH + `ComplianceScheme/${fileName}.csv`;
        break;
      case "ProducerInvalidDataCombinationUpload":
      case "ProducerSmallInvalidFile":
      case "ProducerInvalidDataCombinationUploadWelsh":
      case "ProducerSmallValidFile":
      case "ProducerValidDataUpload":
      case "ProducerInvalidOrganisationId":
      case "ProducerInvalidOrganisationIdAnotherCompany":
      case "ProducerSmallFileContainingWarning60":
      case "ProducerSmallFileContainingWarning60Welsh":
        filePath = POM_TEST_DATA_PATH + `DirectProducer/${fileName}.csv`;
        break;
      case "EmptyFile":
      case "EmptyFileFromExcel":
      case "InvalidFileIncorrectColumnName":
      case "InvalidFileLessColumns":
      case "InvalidFileMissingHeaders":
        filePath = POM_TEST_DATA_PATH + `Common/${fileName}.csv`;
        break;
      case "WrongFormatFile":
        filePath = POM_TEST_DATA_PATH + `Common/${fileName}.xls`;
        break;
      default:
        console.log(1);
        throw new Error(`The ${fileName} file is not defined!`);
    }

    await CommonDataUploadPage.formDataFileUpload.waitForDisplayed();
    await (await CommonDataUploadPage.btnAddFile).setValue(filePath);
    await browser.pause(200);
    await CommonPage.takeElemScreenshot(await CommonDataUploadPage.btnAddFile);

    if (!this.isWelsh) {
      await (await CommonDataUploadPage.btnUploadFile).click();
    } else if (this.isWelsh) {
      await (await CommonDataUploadPage.btnUploadFileInWelsh).click();
    } else {
      throw new Error(`The language option is not defined!`);
    }
    await waitUntilPageLoads();

    if (userType === "Producer") {
      switch (fileName) {
        case "ProducerInvalidDataCombinationUpload":
        case "ProducerSmallInvalidFile":
        case "ProducerInvalidDataCombinationUploadWelsh":
        case "ProducerSmallValidFile":
        case "ProducerValidDataUpload":
        case "CSSmallFileContainingWarning60":
        case "CSSmallFileContainingWarning60Welsh":
        case "ProducerSmallFileContainingWarning60":
        case "ProducerSmallFileContainingWarning60Welsh":
          await replaceTestDataOrganisationIdWithPlaceholder(
            fileName,
            this.scenarioDataLandingPgs.get("organisationId") as string
          );
          break;
        default:
      }
    } else if (userType === "Compliance Scheme") {
      switch (fileName) {
        case "CSInvalidDataCombinationUpload":
        case "CSInvalidDataCombinationUploadWelsh":
        case "CSInvalidOrganisationIdWelsh":
        case "CSInvalidOrganisationIdAnotherCompanyWelsh":
        case "CSInvalidOrganisationId":
        case "CSInvalidOrganisationIdAnotherCompany":
        case "CSSmallFileContainingWarning60":
        case "CSSmallFileContainingWarning60Welsh":
        case "CSSmallInvalidFile":
        case "CSSmallValidFile":
        case "CSValidDataUpload":
          await replaceTestDataOrganisationIdWithPlaceholder(
            fileName,
            await getSecret(this.secretClient, process.env.COMPLIANCE_SCHEME_ORGANISATION_ID as string)
          );
          break;
        default:
      }
    }

    switch (fileName) {
      case "CSValidDataUpload":
      case "ProducerValidDataUpload":
      case "CSSmallValidFile":
      case "ProducerSmallValidFile":
        await waitUntilPageOpened(FileUploadCheckFileAndSubmitPage.Url);
        break;
      case "CSInvalidDataCombinationUpload":
      case "CSInvalidOrganisationId":
      case "CSInvalidOrganisationIdAnotherCompany":
      case "CSSmallInvalidFile":
      case "ProducerInvalidDataCombinationUpload":
      case "ProducerSmallInvalidFile":
      case "CSInvalidDataCombinationUploadWelsh":
      case "CSInvalidOrganisationIdWelsh":
      case "CSInvalidOrganisationIdAnotherCompanyWelsh":
      case "ProducerInvalidDataCombinationUploadWelsh":
        await waitUntilPageOpened(FileUploadFailurePage.Url);
        break;
      case "EmptyFile":
      case "WrongFormatFile":
        await waitUntilPageOpened(FileUploadPage.Url);
        break;
      case "InvalidFileLessColumns":
      case "InvalidFileMissingHeaders":
      case "InvalidFileIncorrectColumnName":
      case "EmptyFileFromExcel":
      case "ProducerInvalidOrganisationId":
      case "ProducerInvalidOrganisationIdAnotherCompany":
        await waitUntilPageLoads();
        await waitUntilPageOpened(FileUploadPage.Url);
        break;
      case "CSSmallFileContainingWarning60":
      case "CSSmallFileContainingWarning60Welsh":
      case "ProducerSmallFileContainingWarning60":
      case "ProducerSmallFileContainingWarning60Welsh":
        await waitUntilPageOpened(CheckWarningsPage.Url);
        break;
      default:
        throw new Error(`The ${fileName} file is not defined!`);
    }
  }
);

When(/^the user uploads without selected PoM data file$/, async function () {
  await FileUploadPage.formDataFileUpload.waitForDisplayed();
  await CommonPage.takeElemScreenshot(await FileUploadPage.btnAddPoMDataFile);
  await (await FileUploadPage.btnUploadPoMDataFile).click();
  await waitUntilPageLoads();
});

When(
  /^the user opens the "how to upload packaging data as a CS" guidance$/,
  async function () {
    await waitAndClick(await FileUploadPage.lnkUploadPackagingDataAsCS);
  }
);

When(
  /^the user chooses to report packaging data for the first period$/,
  async function () {
    await waitAndClick(PoMDataSubLandingPage.btnReportPackagingDataFirstPeriod);
  }
);

When(
  /^the user clicks the dropdown on the "check warnings" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await waitAndClick(await CheckWarningsPage.dropdownHowToCheckWarnings);
    } else if (this.isWelsh) {
      await waitAndClick(
        await CheckWarningsPage.dropdownHowToCheckWarningsWelsh
      );
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);

When(
  /^the user clicks the file specification link on the "check warnings" page$/,
  async function () {
    await waitAndClick(await CheckWarningsPage.lnkFileSpecification);
  }
);

When(
  /^the user clicks the "continue" button on the "check warnings" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await waitAndClick(await CheckWarningsPage.btnContinue);
    } else if (this.isWelsh) {
      await waitAndClick(await CheckWarningsPage.btnContinueInWelsh);
    } else {
      throw new Error(`This button is not defined!`);
    }
  }
);

When(
  /^the user clicks the "upload your file again" button on the "file upload failure" page$/,
  async function () {
    await waitAndClick(await FileUploadFailurePage.btnUploadYourFileAgain);
  }
);

When(
  /^the user chooses "(Yes|No)" option on the "check warnings" page$/,
  async function (option: "Yes" | "No") {
    if (option === "Yes") {
      await expect(
        await CheckWarningsPage.optionUploadNewFileYes
      ).toBeDisplayed();
      await (await CheckWarningsPage.radioYes).click();
    } else if (option === "No") {
      await expect(
        await CheckWarningsPage.optionUploadNewFileNo
      ).toBeDisplayed();
      await (await CheckWarningsPage.radioNo).click();
    } else {
      throw new Error(`The ${option} radio option is not defined!`);
    }
  }
);

Then(
  /^the PoM data file with errors (and warnings )?should be rejected$/,
  async function (this: CustomWorld, withWarnings: string | undefined) {
    if (withWarnings) {
      await waitUntilElemDisplayed(
        await FileUploadFailurePage.h1HeaderErrorsAndWarnings,
        60000
      );
    } else {
      await waitUntilElemDisplayed(
        await FileUploadFailurePage.h1HeaderErrorsOnly,
        60000
      );
    }

    await CommonPage.takeScreenshot();

    if (withWarnings) {
      await expect(
        await FileUploadFailurePage.h1HeaderErrorsAndWarnings
      ).toBeDisplayed();
    } else {
      await expect(
        await FileUploadFailurePage.h1HeaderErrorsOnly
      ).toBeDisplayed();
    }
  }
);

Then(
  /^the (error|warning) report can be downloaded$/,
  async function (reportType: "error" | "warning") {
    if (reportType === "error") {
      await waitAndClick(await FileUploadFailurePage.lnkErrorReport);
    } else if (reportType === "warning") {
      await waitAndClick(await CheckWarningsPage.lnkDownloadWarningReport);
    } else {
      throw new Error(`The ${reportType} report is not defined!`);
    }
    await browser.pause(300);
  }
);

Then(
  /^the (error|warning) report "(.*)" for (Producer|Compliance Scheme) should contain all the issue information$/,
  async function (
    this: CustomWorld,
    reportType: "error" | "warning",
    fileName: PoMDataFileNames,
    userType: "Producer" | "Compliance Scheme"
  ) {
    let existingReport: string;
    let downloadedReport: string;

    if (reportType === "error") {
      downloadedReport = DOWNLOAD_FOLDER_PATH + `/${fileName} error report.csv`;
    } else if (reportType === "warning") {
      downloadedReport =
        DOWNLOAD_FOLDER_PATH + `/${fileName} warning report.csv`;
    } else {
      throw new Error(`The ${reportType} report is not defined!`);
    }

    switch (fileName) {
      case "CSInvalidDataCombinationUpload":
      case "CSInvalidOrganisationId":
      case "CSInvalidOrganisationIdAnotherCompany":
      case "CSSmallInvalidFile":
      case "CSInvalidDataCombinationUploadWelsh":
      case "CSInvalidOrganisationIdWelsh":
      case "CSInvalidOrganisationIdAnotherCompanyWelsh":
      case "CSSmallFileContainingWarning60":
      case "CSSmallFileContainingWarning60Welsh":
        existingReport =
          POM_DATA_ERROR_REPORTS_PATH + `ComplianceScheme/${fileName}.csv`;
        break;
      case "ProducerInvalidDataCombinationUpload":
      case "ProducerSmallInvalidFile":
      case "ProducerInvalidDataCombinationUploadWelsh":
      case "ProducerSmallFileContainingWarning60":
      case "ProducerSmallFileContainingWarning60Welsh":
        existingReport =
          POM_DATA_ERROR_REPORTS_PATH + `DirectProducer/${fileName}.csv`;
        break;
      default:
        console.log(fileName);
        throw new Error(`The ${fileName} file is not defined!`);
    }

    if (userType === "Producer") {
      await replaceExistReportPlaceholderWithOrganisationId(
        fileName,
        this.scenarioDataLandingPgs.get("organisationId") as string
      );
    } else if (userType === "Compliance Scheme") {
      await replaceExistReportPlaceholderWithOrganisationId(
        fileName,
        await getSecret(this.secretClient, process.env.COMPLIANCE_SCHEME_ORGANISATION_ID as string)
      );
    }

    await expect(
      await compareCSVFiles(existingReport, downloadedReport, [])
    ).toEqual(true);

    if (userType === "Producer") {
      await replaceExistReportOrganisationIdWithPlaceholder(
        fileName,
        this.scenarioDataLandingPgs.get("organisationId") as string
      );
    } else if (userType === "Compliance Scheme") {
      await replaceExistReportOrganisationIdWithPlaceholder(
        fileName,
        await getSecret(this.secretClient, process.env.COMPLIANCE_SCHEME_ORGANISATION_ID as string)
      );
    }
  }
);

Then(
  /^the PoM data file upload (.*) should be terminated$/,
  async function (this: CustomWorld, fileName: PoMDataFileNames | "No file") {
    await waitUntilElemDisplayed(
      await CommonDataUploadPage.txtErrorSummary,
      60000
    );
    await CommonPage.takeScreenshot();
    const errorSummary = await CommonDataUploadPage.txtErrorSummary;
    const errorSummaryTitle = await CommonDataUploadPage.txtErrorSummaryTitle;
    const errorMessage = await CommonDataUploadPage.txtErorMessage;
    let expectedErrorMessage: string;

    if (!this.isWelsh) {
      switch (fileName) {
        case "EmptyFile":
          expectedErrorMessage = FileErrorMessageEnum.EmptyFile;
          break;
        case "EmptyFileFromExcel":
          expectedErrorMessage = FileErrorMessageEnum.EmptyFile;
          break;
        case "WrongFormatFile":
          expectedErrorMessage = FileErrorMessageEnum.WrongFormatFile;
          break;
        case "InvalidFileLessColumns":
        case "InvalidFileMissingHeaders":
        case "InvalidFileIncorrectColumnName":
          expectedErrorMessage = FileErrorMessageEnum.ColumnNamesMightBeMissing;
          break;
        case "No file":
          expectedErrorMessage = FileErrorMessageEnum.SelectCSVFile;
          break;
        case "ProducerInvalidOrganisationId":
        case "ProducerInvalidOrganisationIdAnotherCompany":
          expectedErrorMessage = FileErrorMessageEnum.SameOrganisationId;
          break;
        default:
          throw new Error(`The ${fileName} file is not defined!`);
      }
    } else if (this.isWelsh) {
      switch (fileName) {
        case "EmptyFile":
          expectedErrorMessage = FileErrorMessageEnumInWelsh.EmptyFile;
          break;
        case "EmptyFileFromExcel":
          expectedErrorMessage = FileErrorMessageEnumInWelsh.EmptyFile;
          break;
        case "WrongFormatFile":
          expectedErrorMessage = FileErrorMessageEnumInWelsh.WrongFormatFile;
          break;
        case "InvalidFileLessColumns":
        case "InvalidFileMissingHeaders":
        case "InvalidFileIncorrectColumnName":
          expectedErrorMessage =
            FileErrorMessageEnumInWelsh.ColumnNamesMightBeMissing;
          break;
        case "No file":
          expectedErrorMessage = FileErrorMessageEnumInWelsh.SelectCSVFile;
          break;
        case "ProducerInvalidOrganisationId":
        case "ProducerInvalidOrganisationIdAnotherCompany":
          expectedErrorMessage = FileErrorMessageEnumInWelsh.SameOrganisationId;
          break;
        default:
          throw new Error(`The ${fileName} file is not defined!`);
      }
    } else {
      throw new Error(`The language option is not defined!`);
    }

    await expect(errorSummary).toBeDisplayed();
    await expect(errorSummaryTitle).toBeDisplayed();
    if (!this.isWelsh) {
      await expect(errorSummaryTitle).toHaveText(FileErrorTitleEnum.Problem);
    } else if (this.isWelsh) {
      await expect(errorSummaryTitle).toHaveText(
        FileErrorTitleEnumInWelsh.Problem
      );
    } else {
      throw new Error(`The language option is not defined!`);
    }
    await expect(errorMessage).toBeDisplayed();
    await expect(errorMessage).toHaveText(expectedErrorMessage);
  }
);

Then(
  /^the "(how to upload packaging data as a CS)" page should display in a new tab$/,
  async function (pageName: "how to upload packaging data as a CS") {
    const title = PageTitles[pageName];
    const baseBage = await browser.getUrl();
    await browser.switchWindow(Pages[pageName]);
    await waitUntilPageLoads();
    await CommonPage.takeScreenshot();
    await expect(browser).toHaveTitle(title);
    await browser.switchWindow(baseBage);
  }
);

Then(/^the url is saved in the scenario context$/, async function () {
  this.scenarioDataPoMDataUpload.set(
    "uploadSuccessURL",
    await browser.getUrl()
  );
});

Then(/^the submission id is used from the previous upload$/, async function () {
  const currentURL = await browser.getUrl();
  await expect(currentURL).toEqual(
    await this.scenarioDataPoMDataUpload.get("uploadSuccessURL")
  );
});

Then(
  /^the content should be correct on the (Compliance Scheme|Direct Producer) file upload page$/,
  async function (
    this: CustomWorld,
    userType: "Compliance Scheme" | "Direct Producer"
  ) {
    if (!this.isWelsh) {
      await expect(FileUploadPage.txtOnceWeHaveValidated).toBeDisplayed();
      await expect(FileUploadPage.txtIfThereIsAProblem).toBeDisplayed();
      await expect(FileUploadPage.txtYouNeedToFixErrors).toBeDisplayed();
      await expect(FileUploadPage.txtWarningsAreUnusualEntries).toBeDisplayed();
      await expect(FileUploadPage.txtUploadYourFile).toBeDisplayed();
      await expect(FileUploadPage.txtItMayTakeAFewMinutes).toBeDisplayed();
      switch (userType) {
        case "Compliance Scheme":
          await expect(
            FileUploadPage.txtUploadYourMembersPackagingData
          ).toBeDisplayed();
          break;
        case "Direct Producer":
          await expect(
            FileUploadPage.txtUploadYourOrganisationsPackagingData
          ).toBeDisplayed();
          break;
        default:
          throw new Error(`The ${userType} user is not defined!`);
      }
    } else if (this.isWelsh) {
      await expect(FileUploadPage.txtOnceWeHaveValidatedWelsh).toBeDisplayed();
      await expect(FileUploadPage.txtIfThereIsAProblemWelsh).toBeDisplayed();
      await expect(FileUploadPage.txtYouNeedToFixErrorsWelsh).toBeDisplayed();
      await expect(
        FileUploadPage.txtWarningsAreUnusualEntriesWelsh
      ).toBeDisplayed();
      await expect(FileUploadPage.txtUploadYourFileWelsh).toBeDisplayed();
      await expect(FileUploadPage.txtItMayTakeAFewMinutesWelsh).toBeDisplayed();
      switch (userType) {
        case "Compliance Scheme":
          await expect(
            FileUploadPage.txtUploadYourMembersPackagingDataWelsh
          ).toBeDisplayed();
          break;
        case "Direct Producer":
          await expect(
            FileUploadPage.txtUploadYourOrganisationsPackagingDataWelsh
          ).toBeDisplayed();
          break;
        default:
          throw new Error(`The ${userType} user is not defined!`);
      }
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);

Then(
  /^the content should be correct on the (Compliance Scheme|Direct Producer) "check warnings" page$/,
  async function (
    this: CustomWorld,
    userType: "Compliance Scheme" | "Direct Producer"
  ) {
    if (!this.isWelsh) {
      await expect(CheckWarningsPage.h1Header).toBeDisplayed();
      await expect(
        CheckWarningsPage.txtYourFileHasBeenUploaded
      ).toBeDisplayed();
      await expect(CheckWarningsPage.txtThereAreSomeWarnings).toBeDisplayed();
      await expect(CheckWarningsPage.txtDownloadWarningReport).toBeDisplayed();
      await expect(CheckWarningsPage.txtWeCanOnlyShow).toBeDisplayed();
      await expect(
        CheckWarningsPage.dropdownHowToCheckWarnings
      ).toBeDisplayed();
      await expect(CheckWarningsPage.btnContinue).toBeDisplayed();
    } else if (this.isWelsh) {
      await expect(CheckWarningsPage.h1HeaderWelsh).toBeDisplayed();
      await expect(
        CheckWarningsPage.txtYourFileHasBeenUploadedWelsh
      ).toBeDisplayed();
      await expect(
        CheckWarningsPage.txtThereAreSomeWarningsWelsh
      ).toBeDisplayed();
      await expect(
        CheckWarningsPage.txtDownloadWarningReportWelsh
      ).toBeDisplayed();
      await expect(CheckWarningsPage.txtWeCanOnlyShowWelsh).toBeDisplayed();
      await expect(
        CheckWarningsPage.dropdownHowToCheckWarningsWelsh
      ).toBeDisplayed();
      await expect(CheckWarningsPage.btnContinueInWelsh).toBeDisplayed();
    } else {
      throw new Error(`The language option is not defined!`);
    }

    await expect(CheckWarningsPage.optionUploadNewFileYes).toBeDisplayed();
    await expect(CheckWarningsPage.optionUploadNewFileNo).toBeDisplayed();
  }
);

Then(
  /^the content of the "check warnings" dropdown should be displayed$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await expect(CheckWarningsPage.txtUseTheReport).toBeDisplayed();
      await expect(CheckWarningsPage.txtDecideIfWantToUpdate).toBeDisplayed();
      await expect(CheckWarningsPage.txtUploadNewFile).toBeDisplayed();
    } else if (this.isWelsh) {
      await expect(CheckWarningsPage.txtUseTheReportWelsh).toBeDisplayed();
      await expect(
        CheckWarningsPage.txtDecideIfWantToUpdateWelsh
      ).toBeDisplayed();
      await expect(CheckWarningsPage.txtUploadNewFileWelsh).toBeDisplayed();
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);

Then(
  /^the file specification should be opened from the "check warnings" page$/,
  async function () {
    await browser.switchWindow(CheckWarningsPage.titleFileSpecificationPage);
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(
      CheckWarningsPage.urlFileSpecificationPage
    );
  }
);

Then(
  /^the content should be correct on the "file upload failure" page where the file contains only errors$/,
  async function () {
    await expect(await FileUploadFailurePage.lnkErrorReport).toBeDisplayed();
    await expect(
      await FileUploadFailurePage.lnkFileSpecification
    ).toBeDisplayed();
    await expect(
      await FileUploadFailurePage.btnUploadYourFileAgain
    ).toBeDisplayed();
  }
);

Then(
  /^the header in Welsh should be correct on the "file upload failure" page$/,
  async function () {
    await expect(
      await FileUploadFailurePage.h1HeaderErrorsOnlyWelsh
    ).toBeDisplayed();
  }
);

Then(
  /^the "upload your file again" button should be displayed on the "file upload failure" page$/,
  async function () {
    await expect(
      await FileUploadFailurePage.btnUploadYourFileAgain
    ).toBeDisplayed();
  }
);

Then(
  /^the user error message should be displayed on the "check warnings" page$/,
  async function (this: CustomWorld) {
    const errorMessage = await CheckWarningsPage.txtErrorMessage;
    await expect(errorMessage).toBeDisplayed();
    if (!this.isWelsh) {
      await expect(errorMessage).toHaveTextContaining(
        CheckWarningsError.SelectYes
      );
    } else if (this.isWelsh) {
      await expect(errorMessage).toHaveTextContaining(
        CheckWarningsError.SelectYesInWelsh
      );
    } else {
      throw new Error(`The language option is not defined!`);
    }
  }
);
