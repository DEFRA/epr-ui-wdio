import { Given, Then, When } from "@wdio/cucumber-framework";
import RegulatorsManagePackagingSubmissionsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsManagePackagingSubmissions.page.js";

Then(
  /^organisations with the "(Direct producer|Compliance scheme)" organisation type should display only$/,
  async (organisationType: "Direct producer" | "Compliance scheme") => {
    const cellValues: string[] = [];
    for (let applicationType of await RegulatorsManagePackagingSubmissionsPage.getAllSubmissionNames()) {
      const text = (await applicationType.getText()).trim();
      cellValues.push(text);
    }
 if (organisationType == "Direct producer") {
      await expect(
        cellValues.some((value) => value.includes("Compliance Scheme"))
      ).toBeFalsy();
    } else {
      await expect(
        cellValues.some((value) => value.includes("Direct Producer"))
      ).toBeFalsy();
    }
  }
);

Then(
  /^all the submissions with the organisation name: "(.*)" should display$/,
  async function (organisationName: string) {
    const cellValues: string[] = [];
    for (let orgType of await RegulatorsManagePackagingSubmissionsPage.getAllSubmissionNames()) {
      const text = (await orgType.getText()).trim();
      cellValues.push(text);
    }
    await expect(
      cellValues.some((value) => value.includes(organisationName))
    ).toBeTruthy();
  }
);

When(
  /^the user enters the Organisation Id: "(.*)"$/,
  async function (organisationId: string) {
    await RegulatorsManagePackagingSubmissionsPage.FilterByOrganisationId(
      organisationId
    );
  }
);

Then(
  /^all the submissions with the organisation ID: "(.*)" should display$/,
  async function (organisationId: string) {
    const cellValues: string[] = [];
    for (let orgId of await RegulatorsManagePackagingSubmissionsPage.getAllOrgIds()) {
      const text = (await orgId.getText()).trim();
      cellValues.push(text);
    }
    await expect(
      cellValues.some((value) => value.includes(organisationId))
    ).toBeTruthy();
  }
);
