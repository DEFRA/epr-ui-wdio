import CheckYourDetailsPage from "./../pageobjects/AccountCreation/CheckYourDetails.page.js";
import CheckDetailsAndSendInvitePage from "../pageobjects/AccountManagement/CheckDetailsAndSendInvite.page.js";
import { AccountCreationQuestions } from "./types/AccountCreation.types.js";
import { DelegatedUserQuestions } from "./types/AccountMaintenance.types.js";
import SharedCookiesPolicyPage from "../pageobjects/PrivacyAndCookies/SharedCookiesPolicy.page.js";
import {
  SharedPrivacyPolicy,
  RegulatorsPrivacyPolicy,
  PrivacyPolicy,
  EssentialCookieNames,
  SharedEssentialCookieNames,
  RegulatorsEssentialCookieNames,
  AnalyticalCookieNames,
} from "./enums/PrivacyCookiesPolicy.enum.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";
import { ElementArray } from "webdriverio";
import PrivacyPolicyBasePage from "../pageobjects/PrivacyAndCookies/PrivacyPolicyBase.page.js";
const privacyPolicyBasePage = new PrivacyPolicyBasePage();

export default class AssertPageUtils {
  static async AssertCheckYourDetailsPageValue(
    question: AccountCreationQuestions,
    scenarioData: Map<string, string>
  ) {
    console.log(question);
    const expectedValue = scenarioData.get(question);
    if (expectedValue) {
      const actualValue = await CheckYourDetailsPage.GetAnswerFor(question);
      console.log(`ACT: ${actualValue}`);
      console.log(`EXP: ${expectedValue}`);
      await expect(actualValue).toEqual(expectedValue);
    }
  }

  static async AssertCheckDetailsAndSendInvitationPageValue(
    question: DelegatedUserQuestions,
    scenarioData: Map<string, string>
  ) {
    console.log(question);
    const expectedValue = scenarioData.get(question);
    if (expectedValue) {
      const actualValue = await CheckDetailsAndSendInvitePage.GetAnswerFor(
        question
      );
      console.log(`ACT: ${actualValue}`);
      console.log(`EXP: ${expectedValue}`);
      await expect(actualValue).toEqual(expectedValue);
    }
  }

  static async AssertSharedCookiesPolicyEssentialCookiesTableRow(
    expectedValue: EssentialCookieNames | SharedEssentialCookieNames | RegulatorsEssentialCookieNames
  ) {
    await this.AssertSharedCookiesPolicyTableRow(
      expectedValue,
      await SharedCookiesPolicyPage.EssentialCookiesTableRows()
    );
  }

  static async AssertSharedCookiesPolicyAnalyticalCookiesTableRow(
    expectedValue: AnalyticalCookieNames
  ) {
    await this.AssertSharedCookiesPolicyTableRow(
      expectedValue,
      await SharedCookiesPolicyPage.AnalyticalCookiesTableRows()
    );
  }

  static async AssertPrivacyPolicyPageHeaders(
    expectedPage: "Shared" | "Regulators"
  ) {
    await expect(await privacyPolicyBasePage.PageTitle()).toBeDisplayed();
    if (expectedPage == "Shared") {
      await expect(await privacyPolicyBasePage.PageTitle()).toHaveText(
        SharedPrivacyPolicy.PageTitle
      );
    } else {
      await expect(await privacyPolicyBasePage.PageTitle()).toHaveText(
        RegulatorsPrivacyPolicy.PageTitle
      );
    }

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section1(),
      PrivacyPolicy.Section1
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section2(),
      PrivacyPolicy.Section2
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section3(),
      PrivacyPolicy.Section3
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section4(),
      PrivacyPolicy.Section4
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section5(),
      PrivacyPolicy.Section5
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section6(),
      PrivacyPolicy.Section6
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section7(),
      PrivacyPolicy.Section7
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section8(),
      PrivacyPolicy.Section8
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section9(),
      PrivacyPolicy.Section9
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section10(),
      PrivacyPolicy.Section10
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section11(),
      PrivacyPolicy.Section11
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section12(),
      PrivacyPolicy.Section12
    );

    await this.AssertPrivacyPolicyPageHeader(
      await privacyPolicyBasePage.Section13(),
      PrivacyPolicy.Section13
    );
  }

  private static async AssertPrivacyPolicyPageHeader(
    actualHeader: WebdriverIO.Element,
    expectedText: PrivacyPolicy
  ) {
    cucumberJson.attach(
      `Checking for page header, expecting: ${expectedText}`,
      "text/plain"
    );
    await expect(actualHeader).toBeDisplayed();
    await expect(actualHeader).toHaveText(expectedText);
    cucumberJson.attach(
      `Found matching page header, expected: ${expectedText}, actual: ${await actualHeader.getText()}
----------`,
      "text/plain"
    );
  }

  private static async AssertSharedCookiesPolicyTableRow(
    expectedValue: EssentialCookieNames | SharedEssentialCookieNames | RegulatorsEssentialCookieNames | AnalyticalCookieNames,
    elementArray: ElementArray
  ) {
    var matchFound = false;
    cucumberJson.attach(
      `Checking for matching cookie name, expecting: ${expectedValue}`,
      "text/plain"
    );

    for (const row of elementArray) {
      if ((await row.getText()) == expectedValue) {
        cucumberJson.attach(
          `Found matching cookie name, expected: ${expectedValue}, actual: ${await row.getText()}`,
          "text/plain"
        );
        matchFound = true;
        break;
      }
    }
    if (!matchFound) {
      cucumberJson.attach(
        `No matching cookie found, expected: ${expectedValue}`,
        "text/plain"
      );
    }
    await expect(matchFound).toBeTruthy();
  }
}
