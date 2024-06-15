import { Given, When, Then } from "@wdio/cucumber-framework";
import {
  waitAndClick,
  waitUntilElemDisplayed,
  waitUntilPageLoads,
  waitUntilPageOpened,
} from "../../../utils/Waiters.js";
import {
  OrgDataFileNames,
  ReviewOrgDataTableFields,
} from "../../../utils/types/DataUpload.types.js";
import { getCurrentFormattedDate } from "../../../utils/Date.js";
import {
  BrandDataUploadResultStatus,
  FileErrorMessageEnum,
  FileErrorMessageEnumInWelsh,
  FileErrorTitleEnum,
  FileErrorTitleEnumInWelsh,
  OrgDataUploadResultStatus,
  PartnerDataUploadResultStatus,
  UploadResultHeader,
} from "../../../utils/enums/DataUpload.enum.js";
import loginPage from "../../../pageobjects/login.page.js";
import { ORGANISATION_TEST_DATA_PATH } from "../../../config/pathconst.js";
import CommonDataUploadPage from "../../../pageobjects/DataUpload/CommonDataUpload.page.js";
import CommonPage from "../../../pageobjects/common.page.js";
import ReviewOrganisationDataPage from "../../../pageobjects/DataUpload/Org_Data_Upload/ReviewOrganisationData.page.js";
import FileUploadCompanyDetailsSuccessPage from "../../../pageobjects/DataUpload/Org_Data_Upload/FileUploadCompanyDetailsSuccess.page.js";
import ReportOrganisationDetailsPage from "../../../pageobjects/DataUpload/Org_Data_Upload/ReportOrganisationDetails.page.js";
import FileUploadBrandDetailsSuccessPage from "../../../pageobjects/DataUpload/Org_Data_Upload/FileUploadBrandDetailsSuccess.page.js";
import FileUploadPartnerDetailsSuccessPage from "../../../pageobjects/DataUpload/Org_Data_Upload/FileUploadPartnerDetailsSuccess.page.js";
import OrganisationDataUploadPage from "../../../pageobjects/DataUpload/Org_Data_Upload/OrganisationDataUpload.page.js";
import BrandDataUploadPage from "../../../pageobjects/DataUpload/Org_Data_Upload/BrandDataUpload.page.js";
import PartnerDataUploadPage from "../../../pageobjects/DataUpload/Org_Data_Upload/PartnerDataUpload.page.js";
import CustomWorld from "../../../utils/CustomWorld.js";

When(
  /^the user selects the "Organisation details" card as "(Compliance Scheme|Producer)"$/,
  async function (userType: "Compliance Scheme" | "Producer") {
    switch (userType) {
      case "Producer":
        await waitAndClick(
          await CommonDataUploadPage.lnkReportOrganisationDetailsAsProducer, 10000
        );
        break;
      case "Compliance Scheme":
        await waitAndClick(
          await CommonDataUploadPage.lnkReportOrganisationDetailsAsCS
        );
        break;
      default:
        throw new Error(`The ${userType} user is not defined!`);
    }
  }
);

When(
  /^the user uploads a(?:n)? (Organisation|Brand|Partner) data (CSV|XLS) file with a name (.*)$/,
  async function (
    this: CustomWorld,
    fileType: "Organisation" | "Brand" | "Partner",
    formatName: "CSV" | "XLS",
    fileName: OrgDataFileNames
  ) {
    let filePath: string;
    switch (formatName) {
      case "CSV":
        filePath = ORGANISATION_TEST_DATA_PATH + `${fileName}.csv`;
        break;
      case "XLS":
        filePath = ORGANISATION_TEST_DATA_PATH + `${fileName}.xls`;
        break;
      default:
        throw new Error(
          `The ${fileType} data file ${fileName} in the ${formatName} format is not defined!`
        );
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

    if (fileType === "Organisation") {
      switch (fileName) {
        case "RegDataFile":
        case "RegData_LLP_secondary":
        case "RegData_PacAct_secondary":
        case "RegData_PacAct_primary":
        case "RegData_OrgType_PAR":
        case "RegData_OrgType_LPA":
        case "RegData_OrgType_LLP":
          await waitUntilPageOpened(FileUploadCompanyDetailsSuccessPage.Url);
          break;
        case "EmptyFile":
        case "OrgDataWrongFormatFile":
        case "OrganisationDetailsLessColumns":
        case "OrganisationDetailsMoreColumns":
          await waitUntilPageOpened(OrganisationDataUploadPage.Url);
          break;
        default:
          throw new Error(`The ${fileName} file is not defined!`);
      }
    } else if (fileType === "Brand") {
      switch (fileName) {
        case "BrandData":
          await waitUntilPageOpened(FileUploadBrandDetailsSuccessPage.Url);
          break;
        case "EmptyFile":
        case "BrandDataWrongFormatFile":
          await waitUntilPageOpened(BrandDataUploadPage.Url);
          break;
        default:
          throw new Error(`The ${fileName} file is not defined!`);
      }
    } else if (fileType === "Partner") {
      switch (fileName) {
        case "PartnerData":
          await waitUntilPageOpened(FileUploadPartnerDetailsSuccessPage.Url);
          break;
        case "EmptyFile":
        case "PartnerDataWrongFormatFile":
          await waitUntilPageOpened(PartnerDataUploadPage.Url);
          break;
        default:
          throw new Error(`The ${fileName} file is not defined!`);
      }
    } else {
      throw new Error(`The ${fileType} data file is not defined!`);
    }
  }
);

When(
  /^the user clicks the "(upload brand information|upload partner information|continue to partner information)" button$/,
  async function (
    buttonName:
      | "upload brand information"
      | "upload partner information"
      | "continue to partner information"
  ) {
    let buttonElem: WebdriverIO.Element;
    switch (buttonName) {
      case "upload brand information":
        buttonElem = await CommonDataUploadPage.btnUploadBrandInfo;
        break;
      case "upload partner information":
        buttonElem = await CommonDataUploadPage.btnUploadPartnerInfo;
        break;
      case "continue to partner information":
        buttonElem = await CommonDataUploadPage.btnContToPartnerInfo;
        break;
      default:
        throw new Error(`The ${buttonName} button is not defined!`);
    }

    await waitAndClick(buttonElem);
  }
);

When(
  /^the user chooses "Continue" on the "upload company details success" page$/,
  async function () {
    await waitAndClick(
      await FileUploadCompanyDetailsSuccessPage.btnContinueToSubmit
    );
  }
);

When(
  /^the user chooses to report organisation details for the first period$/,
  async function () {
    await waitAndClick(
      ReportOrganisationDetailsPage.btnReportOrganisationDetailsFirstPeriod
    );
  }
);

Then(
  /^the Organisation data file upload (.*) should be terminated$/,
  async function (this: CustomWorld, fileName: OrgDataFileNames | "No file") {
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
        case "OrgDataWrongFormatFile":
        case "BrandDataWrongFormatFile":
        case "PartnerDataWrongFormatFile":
          expectedErrorMessage = FileErrorMessageEnum.WrongFormatFile;
          break;
        case "No file":
          expectedErrorMessage = FileErrorMessageEnum.SelectCSVFile;
          break;
        case "OrganisationDetailsLessColumns":
        case "OrganisationDetailsMoreColumns":
          expectedErrorMessage = FileErrorMessageEnum.ColumnHeadingsNotInTheRightPlace;
          break;
        default:
          throw new Error(`The ${fileName} file is not defined!`);
      }
    } else if (this.isWelsh) {
      switch (fileName) {
        case "EmptyFile":
          expectedErrorMessage = FileErrorMessageEnumInWelsh.EmptyFile;
          break;
        case "OrgDataWrongFormatFile":
        case "BrandDataWrongFormatFile":
        case "PartnerDataWrongFormatFile":
          expectedErrorMessage = FileErrorMessageEnumInWelsh.WrongFormatFile;
          break;
        case "No file":
          expectedErrorMessage = FileErrorMessageEnumInWelsh.SelectCSVFile;
          break;
          case "OrganisationDetailsLessColumns":
            case "OrganisationDetailsMoreColumns":
              expectedErrorMessage = FileErrorMessageEnumInWelsh.ColumnHeadingsNotInTheRightPlace;
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
    await expect(errorMessage).toHaveTextContaining(expectedErrorMessage);
  }
);

Then(
  /^the "(Organisation details|Brand information|Partner information)" field should contain (.*) file$/,
  async function (fileType: ReviewOrgDataTableFields, fileName: string) {
    let tableField: string | undefined;
    switch (fileType) {
      case "Organisation details":
        tableField =
          await ReviewOrganisationDataPage.getFilesToSubmitTableField(1, 1);
        await CommonPage.takeScreenshot();
        break;
      case "Brand information":
        tableField =
          await ReviewOrganisationDataPage.getFilesToSubmitTableField(2, 1);
        break;
      case "Partner information":
        tableField =
          await ReviewOrganisationDataPage.getFilesToSubmitTableField(3, 1);
        break;
      default:
        throw new Error(`The ${fileType} field is not defined!`);
    }
    await expect(tableField).toEqual(`${fileName}.csv`);
  }
);

Then(
  /^the uploaded date should be correct for all the (Direct Producer|Compliance Scheme) files$/,
  async function (userType: "Direct Producer" | "Compliance Scheme") {
    const currentFormattedDate = await getCurrentFormattedDate();
    let tableField: string | undefined;
    tableField = await ReviewOrganisationDataPage.getFilesToSubmitTableField(
      1,
      2
    );
    await expect(tableField).toEqual(currentFormattedDate);
    tableField = await ReviewOrganisationDataPage.getFilesToSubmitTableField(
      2,
      2
    );
    await expect(tableField).toEqual(currentFormattedDate);
    tableField = await ReviewOrganisationDataPage.getFilesToSubmitTableField(
      3,
      2
    );
    await expect(tableField).toEqual(currentFormattedDate);
  }
);

Then(
  /^the files should be uploaded by (Direct Producer|Compliance Scheme)$/,
  async function (userType: "Direct Producer" | "Compliance Scheme") {
    const userName = await (await loginPage.userName).getText();
    let tableField: string | undefined;

    tableField = await ReviewOrganisationDataPage.getFilesToSubmitTableField(
      1,
      3
    );
    await expect(tableField).toEqual(userName);
    tableField = await ReviewOrganisationDataPage.getFilesToSubmitTableField(
      2,
      3
    );
    await expect(tableField).toEqual(userName);
    tableField = await ReviewOrganisationDataPage.getFilesToSubmitTableField(
      3,
      3
    );
    await expect(tableField).toEqual(userName);
  }
);

Then(
  /^the "(upload brand information|upload partner information|continue to partner information)" button should be displayed$/,
  async function (
    buttonName:
      | "upload brand information"
      | "upload partner information"
      | "continue to partner information"
  ) {
    let buttonElem: WebdriverIO.Element;
    switch (buttonName) {
      case "upload brand information":
        buttonElem = await CommonDataUploadPage.btnUploadBrandInfo;
        break;
      case "upload partner information":
        buttonElem = await CommonDataUploadPage.btnUploadPartnerInfo;
        break;
      case "continue to partner information":
        buttonElem = await CommonDataUploadPage.btnContToPartnerInfo;
        break;
      default:
        throw new Error(`The ${buttonName} button is not defined!`);
    }

    await expect(buttonElem).toBeDisplayed();
  }
);

Then(
  /^the (Organisation|Brand|Partner) data file (.*) should not be rejected$/,
  async function (
    fileType: "Organisation" | "Brand" | "Partner",
    fileName: OrgDataFileNames
  ) {
    await waitUntilElemDisplayed(
      await CommonDataUploadPage.bannerUploadResult,
      60000
    );
    await CommonPage.takeScreenshot();

    const resultBanner = await CommonDataUploadPage.txtResultBanner;
    const resultBannerTitle = await CommonDataUploadPage.txtResultBannerTitle;
    const resultBannerFileName =
      await CommonDataUploadPage.txtResultBannerFileName;
    let uploadResultStatus: string;

    switch (fileType) {
      case "Organisation":
        uploadResultStatus = OrgDataUploadResultStatus.Uploaded;
        break;
      case "Brand":
        uploadResultStatus = BrandDataUploadResultStatus.Uploaded;
        break;
      case "Partner":
        uploadResultStatus = PartnerDataUploadResultStatus.Uploaded;
        break;
      default:
        throw new Error(`The ${fileType} data file is not defined!`);
    }

    await expect(resultBanner).toHaveText(uploadResultStatus);
    await expect(resultBannerTitle).toHaveText(UploadResultHeader.Success);
    await expect(resultBannerFileName).toHaveText(`${fileName}.csv`);
  }
);

Then(
  /^the "Continue" button should be displayed on the "upload company details success" page$/,
  async function () {
    await expect(
      await FileUploadCompanyDetailsSuccessPage.btnContinueToSubmit
    ).toBeDisplayed();
  }
);
