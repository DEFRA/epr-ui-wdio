import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../pageobjects/login.page.js";
import CommonDataUploadPage from "../../../pageobjects/DataUpload/CommonDataUpload.page.js";
import { getSecret } from "../../../utils/LoginConf.js";
import CustomWorld from "../../../utils/CustomWorld.js";

When(
  /^the user logs in as a(?:n)? "(approved|basic)" user of "(direct producer|compliance scheme)" with submission status "(not started|file uploaded|submitted to regulator)"$/,
  async function (
    this: CustomWorld,
    userRole: "approved" | "basic",
    userType: "direct producer" | "compliance scheme",
    submissionStatus: "not started" | "file uploaded" | "submitted to regulator"
  ) {
    let userLogin: string;
    let userPassword: string;
    switch (userType) {
      case "direct producer":
        if (submissionStatus === "not started" && userRole === "approved") {
          userLogin = await getSecret(this.secretClient,
            process.env.DIRECT_PRODUCER_APPROVED_SUBMISSION_NOTSTARTED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient, 
            process.env.DIRECT_PRODUCER_APPROVED_SUBMISSION_NOTSTARTED_PASSWORD as string) as string;
        } else if (
          submissionStatus === "file uploaded" &&
          userRole === "approved"
        ) {
          userLogin = await getSecret(this.secretClient, 
            process.env.DIRECT_PRODUCER_APPROVED_SUBMISSION_FILEUPLOADED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient,
            process.env.DIRECT_PRODUCER_APPROVED_SUBMISSION_FILEUPLOADED_PASSWORD as string) as string;
        } else if (
          submissionStatus === "file uploaded" &&
          userRole === "basic"
        ) {
          userLogin = await getSecret(this.secretClient,
            process.env.DIRECT_PRODUCER_BASIC_SUBMISSION_FILEUPLOADED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient, 
            process.env.DIRECT_PRODUCER_BASIC_SUBMISSION_FILEUPLOADED_PASSWORD as string) as string;
        } else if (
          submissionStatus === "submitted to regulator" &&
          userRole === "approved"
        ) {
          userLogin = await getSecret(this.secretClient,
            process.env.DIRECT_PRODUCER_APPROVED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient,
            process.env.DIRECT_PRODUCER_APPROVED_PASSWORD as string) as string;
        } else {
          throw new Error(
            `The ${submissionStatus} submission status is not defined!`
          );
        }
        break;
      case "compliance scheme":
        if (submissionStatus === "not started" && userRole === "approved") {
          userLogin = await getSecret(this.secretClient, process.env
            .COMPLIANCE_SCHEME_APPROVED_SUBMISSION_NOTSTARTED_USERNAME as string) as string; 
          userPassword = await getSecret(this.secretClient, process.env
            .COMPLIANCE_SCHEME_APPROVED_SUBMISSION_NOTSTARTED_PASSWORD as string) as string;
        } else if (
          submissionStatus === "file uploaded" &&
          userRole === "approved"
        ) {
          userLogin = await getSecret(this.secretClient, process.env
            .COMPLIANCE_SCHEME_APPROVED_SUBMISSION_FILEUPLOADED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient, process.env
            .COMPLIANCE_SCHEME_APPROVED_SUBMISSION_FILEUPLOADED_PASSWORD as string) as string;
        } else if (
          submissionStatus === "file uploaded" &&
          userRole === "basic"
        ) {
          userLogin = await getSecret(this.secretClient,process.env
            .COMPLIANCE_SCHEME_BASIC_SUBMISSION_FILEUPLOADED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient, process.env
            .COMPLIANCE_SCHEME_BASIC_SUBMISSION_FILEUPLOADED_PASSWORD as string) as string;
        } else if (
          submissionStatus === "submitted to regulator" &&
          userRole === "approved"
        ) {
          userLogin = await getSecret(this.secretClient, 
            process.env.COMPLIANCE_SCHEME_APPROVED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient, process.env
            .COMPLIANCE_SCHEME_APPROVED_PASSWORD as string) as string;
        } else {
          throw new Error(
            `The ${submissionStatus} submission status is not defined!`
          );
        }
        break;
      default:
        throw new Error(`The ${userType} user type is not defined!`);
    }
    await LoginPage.login(userLogin, userPassword);
  }
);

Then(
  /^the submission status for the first submission period should be "(not started|file uploaded|submitted to regulator)"$/,
  async function (
    submissionStatus: "not started" | "file uploaded" | "submitted to regulator"
  ) {
    const currentSubmissionStatus =
      await CommonDataUploadPage.GetFileUploadStatusFirstPeriod();
    let expectedSubmissionStatus: string;
    if (submissionStatus === "not started") {
      expectedSubmissionStatus = "NOT STARTED";
    } else if (submissionStatus === "file uploaded") {
      expectedSubmissionStatus = "FILE UPLOADED";
    } else if (submissionStatus === "submitted to regulator") {
      expectedSubmissionStatus = "SUBMITTED TO REGULATOR";
    } else {
      throw new Error(
        `The ${submissionStatus} submission status is not defined!`
      );
    }

    await expect(currentSubmissionStatus).toEqual(expectedSubmissionStatus);
  }
);

Then(
  /^the submission status for the second submission period for "(Organisation details|Packaging data)" should be "cannot start yet"$/,
  async function (dataType: "Organisation details" | "Packaging data") {
    let currentSubmissionStatus: string;
    switch (dataType) {
      case "Organisation details":
        currentSubmissionStatus =
          await CommonDataUploadPage.GetFileUploadStatusSecondPeriodOrganisationDetails();
        break;
      case "Packaging data":
        currentSubmissionStatus =
          await CommonDataUploadPage.GetFileUploadStatusSecondPeriodPackagingData();
        break;
      default:
        throw new Error(`The type of data: ${dataType} is not defined!`);
    }

    await expect(currentSubmissionStatus).toEqual("CANNOT START YET");
  }
);
