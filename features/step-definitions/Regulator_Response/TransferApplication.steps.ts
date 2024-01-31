import { Then, When } from "@wdio/cucumber-framework";
import RegulatorEnrolmentDetailsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorEnrolmentDetails.page.js";
import RegulatorsTransferApplicationPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsTransferApplication.page.js";
import { ValidAgencyNames } from "../../../utils/types/TransferAgency.types.js";

When(/^the user clicks the Transfer application link$/, async function () {
  await RegulatorEnrolmentDetailsPage.clickTransferLink();
});

Then(
  /^the user selects "(Environment Agency|Northern Ireland Environment)" radio button$/,
  async function (
    agencyName: ValidAgencyNames
  ) {
    if (
      agencyName == "Environment Agency" ||
      agencyName == "Northern Ireland Environment"
    ) {
      (await RegulatorsTransferApplicationPage.EnvironmentAgency()).click();
    }
  }
);

Then(
  /^the user enters a reason: "(.*)" in the Transfer Notes$/,
  async function (transferReason: string) {
    await RegulatorsTransferApplicationPage.EnterTransferNotes(transferReason);
  }
);