import { Given, Then, When } from "@wdio/cucumber-framework";
import RegulatorsManageApplicationsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsManageApplications.page.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import RegulatorEnrolmentDetailsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorEnrolmentDetails.page.js";
import RegulatorsManagePackagingSubmissionsPage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsManagePackagingSubmissions.page.js";

Given(/^init filter applications context/, async function (this: CustomWorld) {
  this.scenarioDataFilterAppications = new Map<string, number>();
});

When(
  /^the user enters the Organisation Name: "(.*)"$/,
  async function (organisationName: string) {
    await RegulatorsManageApplicationsPage.FilterByOrganisationName(
      organisationName
    );
  }
);

When(
  /^the user selects (approved person|delegated person|Pending|Accepted|Rejected|Direct producer|Compliance scheme) filter box/,
  async function (
    filterToSelect:
      | "approved"
      | "delegated"
      | "Pending"
      | "Accepted"
      | "Rejected"
      | "Direct producer"
      | "Compliance scheme"
  ) {
    switch (filterToSelect) {
      case "approved":
        await RegulatorsManageApplicationsPage.SelectApprovedPersonFilter();
        break;
      case "delegated":
        await RegulatorsManageApplicationsPage.SelectDelegatedPersonFilter();
        break;
      case "Pending":
        await RegulatorsManagePackagingSubmissionsPage.SelectPendingFilterBox();
        break;
      case "Accepted":
        await RegulatorsManagePackagingSubmissionsPage.SelectAcceptedFilterBox();
        break;
      case "Rejected":
        await RegulatorsManagePackagingSubmissionsPage.SelectRejectedFilterBox();
        break;
      case "Direct producer":
        await RegulatorsManagePackagingSubmissionsPage.SelectDirectProducerFilterBox();
        break;
      case "Compliance scheme":
        await RegulatorsManagePackagingSubmissionsPage.SelectComplianceSchemeFilterBox();
        break;
    }
  }
);

When(/^the user clicks on apply filter button$/, async function () {
  await RegulatorsManageApplicationsPage.ClickApplyFilters();
});

When(/^the user click on Clear filter/, async function () {
  await RegulatorsManageApplicationsPage.ClickClearFilters();
});

When(
  /^get number of applications from the applications page/,
  async function (this: CustomWorld) {
    this.scenarioDataFilterAppications.set(
      "NumberOfApplications",
      await RegulatorsManageApplicationsPage.GetNumberOfApplications()
    );
  }
);

Then(
  /^the organisation with name: "(.*)" should display$/,
  async function (organisationName: string) {
    await expect(
      await RegulatorsManageApplicationsPage.GetOrganisationName()
    ).toContain(organisationName);
  }
);

Then(
  /^organisations with "(Approved person|Delegated person|Approved person Delegated person)" request pending should display$/,
  async (
    personType:
      | "Approved person"
      | "Delegated person"
      | "Approved person Delegated person"
  ) => {
    const cellValues: string[] = [];
    for (let applicationType of await RegulatorsManageApplicationsPage.GetApplicationType()) {
      const text = (await applicationType.getText()).trim();
      cellValues.push(text);
    }
    if (personType === "Approved person Delegated person") {
      await expect(
        cellValues.some((value) =>
          value.includes("Approved person\nDelegated person")
        )
      ).toBeTruthy();
    } else {
      await expect(
        cellValues.some((value) => value.includes(personType))
      ).toBeTruthy();
    }
  }
);

Then(
  /^the number of applications should be (less than|equal to) the original number of applications$/,
  async function (this: CustomWorld, expectedCount: "less than" | "equal to") {
    let originalNumberOfapplications = this.scenarioDataFilterAppications.get(
      "NumberOfApplications"
    ) as number;
    let numberOfApplications =
      await RegulatorsManageApplicationsPage.GetNumberOfApplications();

    switch (expectedCount) {
      case "less than":
        await expect(numberOfApplications).toBeLessThan(
          originalNumberOfapplications
        );
        break;
      case "equal to":
        await expect(numberOfApplications).toEqual(
          originalNumberOfapplications
        );
        break;
    }
  }
);

Then(
  /^the Companies house number should be displayed as "(Not listed|07699232)"$/,
  async function (companiesHouseNumber: string) {
    expect(await RegulatorEnrolmentDetailsPage.getCompaniesHouseNumber()).toBe(
      companiesHouseNumber
    );
  }
);
