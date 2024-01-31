import { Given, When, Then } from "@wdio/cucumber-framework";
import { waitAndClick, waitUntilPageLoads } from "../../../utils/Waiters.js";
import BasePage from "../../../pageobjects/base.page.js";
import RegulatorsHomePage from "../../../pageobjects/RegulatorAccountManagement/RegulatorsHome.page.js";
import SharedCookiesPolicyPage from "../../../pageobjects/PrivacyAndCookies/SharedCookiesPolicy.page.js";
import {
  SharedCookiesPolicy,
  EssentialCookieNames,
  SharedEssentialCookieNames,
  RegulatorsEssentialCookieNames,
  AnalyticalCookieNames,
} from "../../../utils/enums/PrivacyCookiesPolicy.enum.js";
import AssertPageUtils from "../../../utils/Assert.utils.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import { Cookie } from "@wdio/protocols";
const basePage = new BasePage();

Given(/^init Cookies scenario context/, async function (this: CustomWorld) {
  this.cookies = new Map<string, Cookie>();
});

Then(
  /^the cookies banner should be displayed, with header: "(.*)"$/,
  async function (expectedHeader: string) {
    await expect(await basePage.cookiesBanner).toBeDisplayed();
    await expect(await basePage.txtCookiesBannerHeader).toBeDisplayed();
    await expect(await (await basePage.txtCookiesBannerHeader).getText()).toBe(
      expectedHeader
    );
  }
);

Then(
  /^the cookies banner should be displayed, with text: "(.*)"$/,
  async function (expectedText: string) {
    await waitUntilPageLoads();
    await expect(await basePage.cookiesBanner).toBeDisplayed();
    await expect(await basePage.txtCookiesBannerText).toBeDisplayed();
    await expect(await basePage.txtCookiesBannerText.getText()).toContain(
      expectedText
    );
  }
);

Then(/^the cookies banner should not be displayed$/, async function () {
  await expect(await basePage.cookiesBanner).not.toBeDisplayed();
});

When(
  /^the user clicks the "(Manage your account)" link$/,
  async function (linkName: "Manage your account") {
    switch (linkName) {
      case "Manage your account":
        await waitAndClick(await RegulatorsHomePage.lnkManageAccount);
        break;
      default:
        throw new Error(`The ${linkName} link is not defined!`);
    }
  }
);

When(/^the user saves their cookie settings$/, async function () {
  await SharedCookiesPolicyPage.SaveCookieSettings();
});

Then(
  /^the content of the (Shared|Regulators) "(Privacy|Cookies)" policy page should be correct$/,
  async function (
    type: "Shared" | "Regulators",
    pageName: "Privacy" | "Cookies"
  ) {
    switch (pageName) {
      case "Privacy":
        await AssertPageUtils.AssertPrivacyPolicyPageHeaders(type);
        break;
      case "Cookies":
        await expect(await SharedCookiesPolicyPage.PageTitle()).toBeDisplayed();
        await expect(await SharedCookiesPolicyPage.PageTitle()).toHaveText(
          SharedCookiesPolicy.PageTitle
        );
        await expect(
          await SharedCookiesPolicyPage.EssentialCookiesHeader()
        ).toBeDisplayed();
        await expect(
          await SharedCookiesPolicyPage.EssentialCookiesHeader()
        ).toHaveText(SharedCookiesPolicy.EssentialCookiesHeader);
        await expect(
          await SharedCookiesPolicyPage.EssentialCookiesTable()
        ).toBeDisplayed();

        await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
          EssentialCookieNames.xmscpim
        );
        await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
          EssentialCookieNames.TSxxxxxxxx
        );
        await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
          EssentialCookieNames.epr_session
        );
        await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
          EssentialCookieNames.epr_auth
        );
        await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
          EssentialCookieNames.epr_anti_forgery
        );
        await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
          EssentialCookieNames.epr_temp
        );

        switch (type) {
          case "Shared":
            await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
              SharedEssentialCookieNames.epr_cookies_policy
            );
            await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
              SharedEssentialCookieNames.epr_correlation
            );
            await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
              SharedEssentialCookieNames.epr_openid_nonce
            );
            break;
          case "Regulators":
            await AssertPageUtils.AssertSharedCookiesPolicyEssentialCookiesTableRow(
              RegulatorsEssentialCookieNames.epr_regulator_cookies_policy
            );
            break;
        }

        await expect(
          await SharedCookiesPolicyPage.AnalyticalCookiesHeader()
        ).toBeDisplayed();
        await expect(
          await SharedCookiesPolicyPage.AnalyticalCookiesHeader()
        ).toHaveText(SharedCookiesPolicy.OptionalCookiesHeader);
        await expect(
          await SharedCookiesPolicyPage.AnalyticalCookiesTable()
        ).toBeDisplayed();

        await AssertPageUtils.AssertSharedCookiesPolicyAnalyticalCookiesTableRow(
          AnalyticalCookieNames._ga
        );
        await AssertPageUtils.AssertSharedCookiesPolicyAnalyticalCookiesTableRow(
          AnalyticalCookieNames._ga_VMDE8PW9W7
        );

        await expect(
          await SharedCookiesPolicyPage.AcceptAnalyticalCookiesQuestion()
        ).toBeDisplayed();
        await expect(
          await SharedCookiesPolicyPage.rdoBtnAcceptAnalyticalCookiesYes
        ).toBePresent();
        await expect(
          await SharedCookiesPolicyPage.rdoBtnAcceptAnalyticalCookiesNo
        ).toBePresent();
        await expect(
          await SharedCookiesPolicyPage.btnSaveCookieSettings
        ).toBeDisplayed();
        break;
      default:
        throw new Error(`The ${pageName} page is not defined!`);
    }
  }
);

When(
  /^the user selects the "(Accept|Reject)" cookies radio button$/,
  async function (acceptOrReject: "Accept" | "Reject") {
    switch (acceptOrReject) {
      case "Accept":
        await (
          await SharedCookiesPolicyPage.rdoBtnAcceptAnalyticalCookiesYes
        ).click();
        break;
      case "Reject":
        await (
          await SharedCookiesPolicyPage.rdoBtnAcceptAnalyticalCookiesNo
        ).click();
        break;
      default:
        throw new Error(
          `The ${acceptOrReject} cookies radio button is not defined!`
        );
    }
  }
);
