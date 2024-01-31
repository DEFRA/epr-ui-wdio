import { Then, When } from "@wdio/cucumber-framework";
import RegulatorsSubmissionDetailsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsSubmissionDetails.page.js";
import RegulatorsManagePackagingSubmissionsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsManagePackagingSubmissions.page.js";

When(
  /^the user navigates to "(submission|resubmission)" request details page$/,
  async function (submissionType: "submission" | "resubmission") {
    switch (submissionType) {
      case "submission":
        await RegulatorsManagePackagingSubmissionsPage.clickFirstSubmissionNameLink();
        break;
      case "resubmission":
        await RegulatorsManagePackagingSubmissionsPage.clickSecondSubmissionNameLink();
        break;
      default:
        throw new Error("Invalid decision");
    }
  }
);

Then(
  /^the user clicks "(Accept|Reject)" for pending submission$/,
  async function (decision: "Accept" | "Reject") {
    switch (decision) {
      case "Accept":
        await RegulatorsSubmissionDetailsPage.clickAcceptButton();
        break;
      case "Reject":
        await RegulatorsSubmissionDetailsPage.clickRejectButton();
        break;
      default:
        throw new Error("Invalid decision");
    }
  }
);

Then(
  /^the submissions with "(PENDING|ACCEPTED|REJECTED)" status should be displayed$/,
  async function (status: "PENDING" | "ACCEPTED" | "REJECTED") {
    switch (status) {
      case "PENDING":
        await expect(
          await RegulatorsManagePackagingSubmissionsPage.getPendingSubmissionStatus()
        ).toBe("PENDING");
        break;
      case "ACCEPTED":
        await expect(
          await RegulatorsManagePackagingSubmissionsPage.getAcceptedSubmissionStatus()
        ).toBe("ACCEPTED");
        break;
      case "REJECTED":
        await expect(
          await RegulatorsManagePackagingSubmissionsPage.getRejectedSubmissionStatus()
        ).toBe("REJECTED");
        break;
      default:
        throw new Error("Invalid status");
    }
  }
);

When(
  /^the user selects "(Pending|Accepted|Rejected)" filter box$/,
  async function (status: "Pending" | "Accepted" | "Rejected") {
    switch (status) {
      case "Pending":
        await RegulatorsManagePackagingSubmissionsPage.SelectPendingFilterBox();
        break;
      case "Accepted":
        await RegulatorsManagePackagingSubmissionsPage.SelectAcceptedFilterBox();
        break;
      case "Rejected":
        await RegulatorsManagePackagingSubmissionsPage.SelectRejectedFilterBox();
        break;
      default:
        throw new Error("Invalid status");
    }
  }
);

Then(
  /^a "(PENDING|ACCEPTED|REJECTED)" status tag should be displayed$/,
  async function (status: "PENDING" | "ACCEPTED" | "REJECTED") {
    switch (status) {
      case "PENDING":
        await expect(
          await RegulatorsSubmissionDetailsPage.getPendingStatusTag()
        ).toBe("PENDING");
        break;
      case "ACCEPTED":
        await expect(
          await RegulatorsSubmissionDetailsPage.getAcceptStatusTag()
        ).toBe("ACCEPTED");
        break;
      case "REJECTED":
        await expect(
          await RegulatorsSubmissionDetailsPage.getRejectStatusTag()
        ).toBe("REJECTED");
        break;
      default:
        throw new Error("Invalid status");
    }
  }
);

When(
  /^the "(Accept|Reject)" button should be displayed$/,
  async function (button: "Accept" | "Reject") {
    switch (button) {
      case "Accept":
        await expect(
          await RegulatorsSubmissionDetailsPage.getAcceptButton()
        ).toBeDisplayed();
        break;
      case "Reject":
        await expect(
          await RegulatorsSubmissionDetailsPage.getRejectButton()
        ).toBeDisplayed();
        break;
      default:
        throw new Error("Invalid decision");
    }
  }
);

Then(
  /^a "(Resubmitted By|Reason for rejection)" header should be displayed$/,
  async function (header: "Resubmitted By" | "Reason for rejection") {
    switch (header) {
      case "Resubmitted By":
        await expect(
          await RegulatorsSubmissionDetailsPage.getResubmittedByHeader()
        ).toBeDisplayed();
        break;
      case "Reason for rejection":
        await expect(
          await RegulatorsSubmissionDetailsPage.getReasonForRejectionHeader()
        ).toBeDisplayed();
        break;
      default:
        throw new Error("Invalid decision");
    }
  }
);

When(/^the user clicks the Go back to all submission link$/, async function () {
  await RegulatorsSubmissionDetailsPage.clickGoBackToAllSubmissions();
});