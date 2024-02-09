import { Then, When } from "@wdio/cucumber-framework";
import RegulatorEnrolmentDecisionPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorEnrolmentDecision.page.js";
import RegulatorEnrolmentDetailsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorEnrolmentDetails.page.js";
import RegulatorsManageApplicationsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsManageApplications.page.js";
import { ValidAgencyNames } from "../../../utils/types/TransferAgency.types.js";
import { waitUntilPageLoads } from "../../../utils/Waiters.js";

When(
  /^the user navigates to enrolment request details page of an organisation$/,
  async function () {
    await RegulatorsManageApplicationsPage.clickOrganisationViewLink();
  }
);

Then(
  /^the "(Accept|Reject)" button for "(Approved|Delegated)" person is (not )?displayed$/,
  async function (
    decision: "Accept" | "Reject",
    decsionType: "Approved" | "Delegated",
    isNotDisplayed: string | undefined
  ) {
    await waitUntilPageLoads();
    let button: WebdriverIO.Element;

    if (decision === "Accept") {
      if (decsionType === "Approved") {
        button =
          await RegulatorEnrolmentDetailsPage.AcceptButtonForApprovedPerson();
      } else {
        button =
          await RegulatorEnrolmentDetailsPage.AcceptButtonForDelegatedPerson();
      }
    } else {
      if (decsionType === "Approved") {
        button =
          await RegulatorEnrolmentDetailsPage.RejectButtonForApprovedPerson();
      } else {
        button =
          await RegulatorEnrolmentDetailsPage.RejectButtonForDelegatedPerson();
      }
    }

    !isNotDisplayed
      ? await expect(button).toBeDisplayed()
      : await expect(button).not.toBeDisplayed();
  }
);

Then(
  /^the user clicks "(Accept|Reject)" for "(Approved|Delegated)" person$/,
  async function (
    decision: "Accept" | "Reject",
    decsionType: "Approved" | "Delegated"
  ) {
    switch (decision) {
      case "Accept":
        if (decsionType === "Approved") {
          await RegulatorEnrolmentDetailsPage.clickAcceptButtonForApprovedPerson();
        } else {
          await RegulatorEnrolmentDetailsPage.clickAcceptButtonForDelegatedPerson();
        }
        break;
      case "Reject":
        if (decsionType === "Approved") {
          await RegulatorEnrolmentDetailsPage.clickRejectButtonForApprovedPerson();
        } else {
          await RegulatorEnrolmentDetailsPage.clickRejectButtonForDelegatedPerson();
        }
        break;
      default:
        throw new Error("Invalid decision");
    }
  }
);

Then(
  /^the transferred "(Success)" banner is displayed for Org Name: "(.*)", Agency: "(Environment Agency|Scottish Environment Protection Agency|Natural Resources Wales|Northern Ireland Environment)"$/,
  async function (
    bannerTitle: "Success",
    organisationName: string,
    agencyName: ValidAgencyNames
  ) {
    const transferBannerTitle =
      await RegulatorsManageApplicationsPage.TransferBannerTitle();
    await expect(transferBannerTitle).toBe(bannerTitle);

    const transferBannerText =
      await RegulatorsManageApplicationsPage.TransferBannerContent();
    await expect(transferBannerText).toContain(organisationName);
    await expect(transferBannerText).toContain(agencyName);
  }
);

Then(
  /^the "(Accepted|Success)" banner is displayed for: (Approved|approved|Delegated|delegated) person$/,
  async function (
    bannerTitle: "Accepted" | "Success",
    acceptedDelegated: "Approved" | "approved" | "Delegated" | "delegated"
  ) {
    await waitUntilPageLoads();
    const transferBannerTitle =
      await RegulatorsManageApplicationsPage.TransferBannerTitle();
    await expect(transferBannerTitle).toBe(bannerTitle);

    const transferBannerText =
      await RegulatorsManageApplicationsPage.TransferBannerContent();
    await expect(transferBannerText).toContain(acceptedDelegated);
  }
);

Then(
  /^the transferred "(Important)" banner is displayed, from Agency: "(Environment Agency|Scottish Environment Protection Agency|Natural Resources Wales|Northern Ireland Environment)", to Agency: "(Environment Agency|Scottish Environment Protection Agency|Natural Resources Wales|Northern Ireland Environment)"$/,
  async function (
    bannerTitle: "Important",
    fromAgencyName: ValidAgencyNames,
    toAgencyName: ValidAgencyNames
  ) {
    const transferBannerTitle =
      await RegulatorEnrolmentDetailsPage.TransferBannerTitle();
    await expect(transferBannerTitle).toBe(bannerTitle);

    const transferSuccessBannerText =
      await RegulatorEnrolmentDetailsPage.TransferBannerContent();
    await expect(transferSuccessBannerText).toContain(fromAgencyName);
    await expect(transferSuccessBannerText).toContain(toAgencyName);
  }
);

When(
  /^the user enters reason for rejection: "(.*)" in the text box$/,
  async function (rejectReason: string) {
    await RegulatorEnrolmentDecisionPage.enterEnrolmentRejectionReason(
      rejectReason
    );
  }
);

Then(/^the text box for rejection reason is displayed$/, async function () {
  await expect(
    await RegulatorEnrolmentDecisionPage.getDecisionTextInputBox()
  ).toBeDisplayed();
});

Then(
  /^the "(Approved|Delegated)" person header is (not )?displayed$/,
  async function (
    headerType: "Approved" | "Delegated",
    isNotDisplayed: string | undefined
  ) {
    await waitUntilPageLoads();
    let header: WebdriverIO.Element;

    if (headerType === "Approved") {
      header = await RegulatorEnrolmentDetailsPage.getApprovedPersonHeader();
    } else {
      header = await RegulatorEnrolmentDetailsPage.getDelegatedPersonHeader();
    }

    !isNotDisplayed
      ? await expect(header).toBeDisplayed()
      : await expect(header).not.toBeDisplayed();
  }
);
