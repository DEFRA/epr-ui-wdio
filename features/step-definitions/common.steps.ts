import { Given, When, Then } from "@wdio/cucumber-framework";
import { Pages, PageTitles, PageH1HeadersWelsh } from "../../utils/Pages.js";
import { waitAndClick, waitUntilPageLoads } from "../../utils/Waiters.js";
import CustomWorld from "../../utils/CustomWorld.js";
import { Environment } from "../../utils/types/Environment.types.js";
import {
  CREATE_ACCOUNT_BASE_PAGE,
  REPORT_DATA_BASE_PAGE,
  MANAGE_ACCOUNT_BASE_PAGE,
  REGULATORS_HOME_PAGE,
  REGULATORS_ACCOUNT_MANAGE_PAGE,
  REGULATORS_APPLICATIONS_PAGE,
  ENV_CONFIG_FILE,
  LARGE_PRODUCERS_PUBLIC_LIST,
} from "../../config/pathconst.js";
import CommonPage from "../../pageobjects/common.page.js";
import { AccountCreationQuestions } from "../../utils/types/AccountCreation.types.js";
import { DelegatedUserQuestions } from "../../utils/types/AccountMaintenance.types.js";
import LoginPage from "../../pageobjects/login.page.js";
import CheckYourDetailsPage from "../../pageobjects/AccountCreation/CheckYourDetails.page.js";
import CheckDetailsAndSendInvitePage from "../../pageobjects/AccountManagement/CheckDetailsAndSendInvite.page.js";
import BasePage from "../../pageobjects/base.page.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";
import "dotenv/config";
import * as dotenv from "dotenv";
import commonPage from "../../pageobjects/common.page.js";
import RegulatorEnrolmentDetailsPage from "../../pageobjects/RegulatorAccountManagement/RegulatorEnrolmentDetails.page.js";
import DatabaseConnection from "../../utils/Database/DatabaseConnection.js";
import { GetSecretClient, getSecret } from "../../utils/LoginConf.js";
import { AddNewApprovedPersonQuestions } from "../../utils/types/Regulator.types.js";

const basePage = new BasePage();
let mainPageWindowHandle:string;
Given(/^init common scenario context/, async function (this: CustomWorld) {

  const keyVaultUrl = process.argv[process.argv.indexOf("-secrets") + 1];
  this.secretClient = await GetSecretClient(keyVaultUrl);

  this.environment = browser.options.baseUrl
    ?.slice(browser.options.baseUrl.indexOf("-"))
    .slice(1)
    .split(".")
    .at(-4) as Environment;

  this.databaseName = `${this.environment}_accounts`;
  this.isMobile = browser.isMobile;
  this.isWelsh = false;
  dotenv.config({ path: ENV_CONFIG_FILE(this.environment) });
});

Given(
  /^the (?:registered )?user is on the "(create account|report data|manage account|regulators home|regulators manage account|regulators application|large producers public list)" page$/,
  async function (
    mainPage:
      | "create account"
      | "report data"
      | "manage account"
      | "regulators home"
      | "regulators manage account"
      | "regulators application"
      | "large producers public list"
  ) {
    switch (mainPage) {
      case "create account":
        await basePage.open(CREATE_ACCOUNT_BASE_PAGE);
        break;
      case "report data":
        await basePage.open(REPORT_DATA_BASE_PAGE);
        break;
      case "manage account":
        await basePage.open(MANAGE_ACCOUNT_BASE_PAGE);
        break;
      case "regulators home":
        await basePage.open(REGULATORS_HOME_PAGE);
        break;
      case "regulators manage account":
        await basePage.open(REGULATORS_ACCOUNT_MANAGE_PAGE);
        break;
      case "regulators application":
        await basePage.open(REGULATORS_APPLICATIONS_PAGE);
        break;
      case "large producers public list":
        await basePage.open(LARGE_PRODUCERS_PUBLIC_LIST);
        break;
    }
  }
);

Given(/^the user goes to home page$/, async function (this: CustomWorld) {
  await basePage.clickHome(this.isMobile);
});

Given(/^the user signs out$/, async function (this: CustomWorld) {
  await basePage.signOut(this.isMobile, this.isWelsh);

  // Need to reset the language variable to English as this is what the application does when the user signs out.
  this.isWelsh = false;
});

Given(
  /^the user logs in as an automation test user for: "(Account Creation|Accept Cookies|Reject Cookies|Regulator|Regulator - ENG|Regulator - NI|Regulator - SCO|Regulator Basic|End to End Ltd Co. Org|End to End Ltd Co. PoM|End to End Non Ltd Co. Org|End to End Non Ltd Co. PoM|End to End CS|End to End Reject)"$/,
  async function (
    this: CustomWorld,
    user:
      | "Account Creation"
      | "Accept Cookies"
      | "Reject Cookies"
      | "Regulator"
      | "Regulator - ENG"
      | "Regulator - NI"
      | "Regulator - SCO"
      | "Regulator Basic"
      | "End to End Ltd Co. Org"
      | "End to End Ltd Co. PoM"
      | "End to End Non Ltd Co. Org"
      | "End to End Non Ltd Co. PoM"
      | "End to End CS"
      | "End to End Reject"
  ) {
    switch (user) {
      case "Account Creation":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.ACC_CREATE_APPROVED_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.ACC_CREATE_APPROVED_PASSWORD as string
          )) as string
        );
        break;
      case "Accept Cookies":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.ACC_CREATE_APPROVED_USERNAME_ACCEPT_COOKIES as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.ACC_CREATE_APPROVED_PASSWORD_ACCEPT_COOKIES as string
          )) as string
        );
        break;
      case "Reject Cookies":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.ACC_CREATE_APPROVED_USERNAME_REJECT_COOKIES as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.ACC_CREATE_APPROVED_PASSWORD_REJECT_COOKIES as string
          )) as string
        );
        break;
      case "Regulator":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_PASSWORD as string
          )) as string
        );
        break;
      case "Regulator - ENG":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_ENG_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_ENG_PASSWORD as string
          )) as string
        );
        break;
      case "Regulator - NI":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_NI_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_NI_PASSWORD as string
          )) as string
        );
        break;
      case "Regulator - SCO":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_SCO_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_SCO_PASSWORD as string
          )) as string
        );
        break;
      case "Regulator Basic":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_BASIC_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.REGULATOR_BASIC_PASSWORD as string
          )) as string
        );
        break;
      case "End to End Ltd Co. Org":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.E2E_LTD_CO_ORG_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.E2E_LTD_CO_ORG_PASSWORD as string
          )) as string
        );
        break;
      case "End to End Ltd Co. PoM":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.E2E_LTD_CO_POM_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.E2E_LTD_CO_POM_PASSWORD as string
          )) as string
        );
        break;
      case "End to End Non Ltd Co. Org":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.E2E_NON_LTD_CO_ORG_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.E2E_NON_LTD_CO_ORG_PASSWORD as string
          )) as string
        );
        break;
      case "End to End Non Ltd Co. PoM":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.E2E_NON_LTD_CO_POM_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.E2E_NON_LTD_CO_POM_PASSWORD as string
          )) as string
        );
        break;
      case "End to End CS":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.E2E_COMPLIANCE_SCHEME_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.E2E_COMPLIANCE_SCHEME_PASSWORD as string
          )) as string
        );
        break;
      case "End to End Reject":
        await LoginPage.login(
          (await getSecret(
            this.secretClient,
            process.env.E2E_REJECT_USERNAME as string
          )) as string,
          (await getSecret(
            this.secretClient,
            process.env.E2E_REJECT_PASSWORD as string
          )) as string
        );
        break;
    }
  }
);

Given(
  /^cookies "(Accept|Reject)" button should display$/,
  async function (
    this: CustomWorld,
    acceptOrRejectCookies: "Accept" | "Reject"
  ) {
    if (!this.isWelsh) {
      acceptOrRejectCookies == "Accept"
        ? await expect(await basePage.btnAcceptCookies).toBeDisplayed()
        : await expect(await basePage.btnRejectCookies).toBeDisplayed();
    } else {
      acceptOrRejectCookies == "Accept"
        ? await expect(await basePage.btnAcceptCookiesWelsh).toBeDisplayed()
        : await expect(await basePage.btnRejectCookiesWelsh).toBeDisplayed();
    }
  }
);

Given(
  /^cookies are "(Accepted|Rejected)"$/,
  async function (
    this: CustomWorld,
    acceptOrRejectCookies: "Accepted" | "Rejected"
  ) {
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    if (!this.isWelsh) {
      acceptOrRejectCookies == "Accepted"
        ? (await basePage.btnAcceptCookies).click()
        : (await basePage.btnRejectCookies).click();
    } else {
      acceptOrRejectCookies == "Accepted"
        ? (await basePage.btnAcceptCookiesWelsh).click()
        : (await basePage.btnRejectCookiesWelsh).click();
    }
  }
);

Given(
  /^the Hide cookie message button should display$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await expect(await basePage.btnHideCookiesMessage).toBeDisplayed();
    } else {
      await expect(await basePage.btnHideCookiesMessageWelsh).toBeDisplayed();
    }
  }
);

When(
  /^the Hide cookie message button is clicked$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await waitAndClick(await basePage.btnHideCookiesMessage);
    } else {
      await waitAndClick(await basePage.btnHideCookiesMessageWelsh);
    }
  }
);

When(
  /^the user clicks on the "(Gov.uk|pEPR: Regulators Service|Cookies|View cookies|Privacy|Accessibility statement|Crown copyright|Open Government Licence|Feedback|log in to Power-BI)" link$/,
  async function (
    this: CustomWorld,
    elementName:
      | "Gov.uk"
      | "pEPR: Regulators Service"
      | "Cookies"
      | "View cookies"
      | "Privacy"
      | "Accessibility statement"
      | "Crown copyright"
      | "Open Government Licence"
      | "Feedback"
      | "log in to Power-BI"
  ) {
    if (!this.isWelsh) {
      switch (elementName) {
        case "Gov.uk":
          await waitAndClick(await basePage.govUkLink);
          break;
        case "pEPR: Regulators Service":
          await waitAndClick(await basePage.pEPRRegulatorsServiceLink);
          break;
        case "Cookies":
          await waitAndClick(await basePage.lnkCookiesPolicy);
          break;
        case "View cookies":
          await waitAndClick(await basePage.lnkViewCookies);
          break;
        case "Privacy":
          await waitAndClick(await basePage.lnkPrivacyPolicy);
          break;
        case "Accessibility statement":
          await waitAndClick(await basePage.accessibilityStatementLink);
          break;
        case "Crown copyright":
          await waitAndClick(await basePage.crownCopyrightLink);
          break;
        case "Open Government Licence":
          await waitAndClick(await basePage.openGovernmentLicenceLink);
          break;
        case "Feedback":
          await waitAndClick(await basePage.feedbackLink);
          break;
        case "log in to Power-BI":
          await waitAndClick(await basePage.lnkLogInToPowerBI);
          break;
        default:
          throw new Error(`Unknown element name: ${elementName}`);
      }
    } else {
      switch (elementName) {
        case "View cookies":
          await waitAndClick(await basePage.lnkViewCookiesWelsh);
          break;
        default:
          throw new Error(`Unknown element name: ${elementName}`);
      }
    }
  }
);

When(
  /^the user switches to the "(.*)" page tab$/,
  async function (elementName: string) {
    const title = PageTitles[elementName];
    await browser.switchWindow(title);
    await waitUntilPageLoads();
    await commonPage.takeScreenshot();
  }
);

When(
  /^the user switches back to the "(.*)" tab$/,
  async function (previousTabUrl: string) {
    const pageURL = Pages[previousTabUrl];
    await browser.switchWindow(pageURL);
  }
);

When(/^the user clicks the (?:home )?back link$/, async function () {
  await waitAndClick(await basePage.lnkBack);
});

When(/^the user clicks the browser back button$/, async function () {
  await browser.back();
});

When(/^the user clicks the back to home link$/, async function () {
  await waitAndClick(await basePage.lnkBackToHome);
});

When(
  /^the user clicks the "(English|Welsh)" toggle$/,
  async function (this: CustomWorld, toggleName: "English" | "Welsh") {
    if (toggleName == "English") {
      await waitAndClick(await basePage.lnkEnglish);
      this.isWelsh = false;
    } else {
      await waitAndClick(await basePage.lnkWelsh);
      this.isWelsh = true;
    }
  }
);

When(
  /^the user clicks the "(Continue|Confirm)" button$/,
  async function (buttonName: "Continue" | "Confirm") {
    switch (buttonName) {
      case "Continue":
        await basePage.clickContinue(this.isWelsh);
        break;
      case "Confirm":
        await basePage.clickConfirm(this.isWelsh);
        break;
      default:
        throw new Error(`The ${buttonName} button is not defined!`);
    }
  }
);

When(
  /^the change link for: "(.*)" is clicked in the Account (Creation|Management) journey$/,
  async function (
    question: AccountCreationQuestions | DelegatedUserQuestions,
    journey: string
  ) {
    await waitUntilPageLoads();
    if (journey == "Creation") {
      await CheckYourDetailsPage.clickChangeAnswerFor(
        question as AccountCreationQuestions
      );
    } else {
      await CheckDetailsAndSendInvitePage.clickChangeAnswerFor(
        question as DelegatedUserQuestions
      );
    }
  }
);

Then(/^the back link should be displayed$/, async function () {
  await expect(await basePage.lnkBack).toBeDisplayed();
});

Then(
  /^the "(English|Welsh)" toggle should be displayed$/,
  async function (toggleName: "English" | "Welsh") {
    toggleName == "English"
      ? await expect(await basePage.lnkEnglish).toBeDisplayed()
      : await expect(await basePage.lnkWelsh).toBeDisplayed();
  }
);

Then(
  /^there should (not )?be a cookie created with name: "(.*)"$/,
  async function (
    this: CustomWorld,
    cookieNotCreated: string | undefined,
    cookieName: string
  ) {
    await waitUntilPageLoads();
    const cookies = await browser.getCookies(cookieName);
    if (cookieNotCreated) {
      cucumberJson.attach(
        `Cookie name: ${cookieName} should not exist`,
        "text/plain"
      );
      await expect(cookies.length).toBe(0);
    } else {
      cucumberJson.attach(
        `Cookie name: ${cookieName} should exist`,
        "text/plain"
      );
      await expect(cookies.length).toBe(1);
      const cookie = cookies[0];
      await expect(cookie.name).toBe(cookieName);
      this.cookies.set(cookie.name, cookie);
    }
  }
);

Then(
  /^cookie with name: "(.*)" should have value: "(.*)"$/,
  async function (this: CustomWorld, cookieName: string, cookieValue: string) {
    const cookie = this.cookies.get(cookieName);
    if (!cookie) {
      throw new Error(`The cookie ${cookieName} is not defined in context!`);
    } else {
      cucumberJson.attach(
        `Cookie: ${cookieName} should have value: ${cookieValue}`,
        "text/plain"
      );
      await expect(cookie.value).toBe(cookieValue);
    }
  }
);

Then(
  /^the user should be on the "(.*)" page$/,
  async function (pageName: string) {
    await waitUntilPageLoads();
    await waitUntilPageLoads();
    const pageElem = Pages[pageName];
    if (!pageElem) {
      throw new Error(`The page ${pageName} is not defined!`);
    }
    
    await expect(browser).toHaveUrlContaining(pageElem);
    await CommonPage.takeScreenshot();
  }
);


Then(
  /^the user should be on the "(.*)" page in new Tab$/,
  async function (pageName: string) {
    await waitUntilPageLoads();
    const pageElem = Pages[pageName];
    if (!pageElem) {
      throw new Error(`The page ${pageName} is not defined!`);
    }
    mainPageWindowHandle = (await browser.getWindowHandle()).toString();
    await browser.switchWindow(pageElem)
    await expect(browser).toHaveUrlContaining(pageElem);
    await CommonPage.takeScreenshot();
  }
);

Then(
  /^the user closes the "(.*)" page and returns to main page$/,
  async function (pageName: string) {
    await waitUntilPageLoads();
    const pageElem = Pages[pageName];
    if (!pageElem) {
      throw new Error(`The page ${pageName} is not defined!`);
    }
    await browser.switchToWindow(mainPageWindowHandle);
    await CommonPage.takeScreenshot();
  }
);


Then(
  /^the page title should be correct for the "(.*)" page$/,
  async function (pageTitle: string) {
    await waitUntilPageLoads();
    const pageElem = PageTitles[pageTitle];
    if (!pageElem) {
      throw new Error(`The page title ${pageTitle} is not defined!`);
    }

    await expect(browser).toHaveTitleContaining(pageElem);
  }
);

Then(
  /^the Welsh page H1 header should be correct for the "(.*)" page$/,
  async function (pageName: string) {
    await waitUntilPageLoads();
    const pageH1Header = PageH1HeadersWelsh[pageName];
    if (!pageH1Header) {
      throw new Error(`The page ${pageH1Header} is not defined!`);
    }
    await expect(await basePage.PageH1Header()).toContain(pageH1Header);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }
);

Then(
  /^the Welsh page H3 header should be correct for the "(.*)" page$/,
  async function (pageName: string) {
    await waitUntilPageLoads();
    const pageH1Header = PageH1HeadersWelsh[pageName];
    if (!pageH1Header) {
      throw new Error(`The page ${pageH1Header} is not defined!`);
    }
    await expect(await basePage.PageH3Header()).toContain(pageH1Header);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }
);

Then(
  /^the "(Gov.uk|pEPR: Regulators Service|Cookies|View cookies|Privacy|Accessibility statement|Crown copyright|Open Government Licence|Feedback|View on Companies House register)" link should be displayed$/,
  async function (
    this: CustomWorld,
    elementName:
      | "Gov.uk"
      | "pEPR: Regulators Service"
      | "Cookies"
      | "View cookies"
      | "Privacy"
      | "Accessibility statement"
      | "Crown copyright"
      | "Open Government Licence"
      | "Feedback"
      | "View on Companies House register"
  ) {
    if (!this.isWelsh) {
      switch (elementName) {
        case "Gov.uk":
          await expect(await basePage.govUkLink).toBeDisplayed();
          break;
        case "pEPR: Regulators Service":
          await expect(
            await basePage.pEPRRegulatorsServiceLink
          ).toBeDisplayed();
          break;
        case "Cookies":
          await expect(await basePage.lnkCookiesPolicy).toBeDisplayed();
          break;
        case "View cookies":
          await expect(await basePage.lnkViewCookies).toBeDisplayed();
          break;
        case "Privacy":
          await expect(await basePage.lnkPrivacyPolicy).toBeDisplayed();
          break;
        case "Accessibility statement":
          await expect(
            await basePage.accessibilityStatementLink
          ).toBeDisplayed();
          break;
        case "Crown copyright":
          await expect(await basePage.crownCopyrightLink).toBeDisplayed();
          break;
        case "Open Government Licence":
          await expect(
            await basePage.openGovernmentLicenceLink
          ).toBeDisplayed();
          break;
        case "Feedback":
          await expect(await basePage.feedbackLink).toBeDisplayed();
          break;
        case "View on Companies House register":
          await expect(
            await RegulatorEnrolmentDetailsPage.companiesHouseRegisterLink
          ).toBeDisplayed();
          break;
        default:
          throw new Error(`Unknown element name: ${elementName}`);
      }
    } else {
      switch (elementName) {
        case "View cookies":
          await expect(await basePage.lnkViewCookiesWelsh).toBeDisplayed();
          break;
        default:
          throw new Error(`Unknown element name: ${elementName}`);
      }
    }
  }
);

Then(
  /^the user clicks the continue button$/,
  async function (this: CustomWorld) {
    await basePage.clickContinue(this.isWelsh);
  }
);

Then(
  /^the user clicks on the "(Add team member)" link in manage account page$/,
  async function (linkName: "Add team member") {
    await waitUntilPageLoads();
    switch (linkName) {
      case "Add team member":
        await waitAndClick(await basePage.lnkAddTeamMember);
        break;
    }
  }
);

Then(
  /^the user enters email address: "(.*)"$/,
  async function (emailAddress: string) {
    await basePage.EnterEmailAddress(emailAddress);
  }
);

Then(
  /^the user type or permission "(Upload data only|Manage team and upload data|Basic user|Admin user)" is selected$/,
  async function (
    userType:
      | "Upload data only"
      | "Manage team and upload data"
      | "Basic user"
      | "Admin user"
  ) {
    await waitUntilPageLoads();
    await basePage.SelectUserAccountPermission(userType);
  }
);

Then(/^the invitation is sent to the member$/, async function () {
  await waitUntilPageLoads();
  await basePage.SendInvite();
});

Then(
  /^the user remove account data for "(Accept Cookies|Reject Cookies)" from the database$/,
  async function (
    this: CustomWorld,
    script: "Accept Cookies" | "Reject Cookies"
  ) {
    const username = process.argv[process.argv.indexOf("-username") + 1];
    const password = process.argv[process.argv.indexOf("-password") + 1];

    const sqlScriptFile =
      script == "Accept Cookies"
        ? "RollbackUser_AcceptCookies.sql"
        : "RollbackUser_RejectCookies.sql";

    await DatabaseConnection.ExecuteDatabaseQuery(
      this.databaseName,
      sqlScriptFile,
      username,
      password
    );
  }
);

Then(
  /^the user "(seeds|removes)" application data from the database$/,
  async function (this: CustomWorld, script: "seeds" | "removes") {
    const username = process.argv[process.argv.indexOf("-username") + 1];
    const password = process.argv[process.argv.indexOf("-password") + 1];

    const sqlScriptFile =
      script == "seeds"
        ? "SeedApplicationForRegReview.sql"
        : "RemoveApplicationForRegReview.sql";

    await DatabaseConnection.ExecuteDatabaseQuery(
      this.databaseName,
      sqlScriptFile,
      username,
      password
    );
  }
);

Then(/^cookies cleared from browser$/, async function () {
  await browser.deleteAllCookies();
});

When(
    /^the user enter search query: "(.*)"$/,
    async function (searchQuery: string) {
      await waitUntilPageLoads();
      await basePage.enterSearchQuery(searchQuery);
    }
);

Then(
  /^the user clicks on the "(Cookies|Privacy|Accessibility|Accessibility statement)" link in the footer$/,
  async function (
    this: CustomWorld,
    btnName: "Cookies" | "Privacy" | "Accessibility" |"Accessibility statement"
  ) {
    if (!this.isWelsh) {
      switch (btnName) {
        case "Cookies":
          await expect(
            await basePage.cookiesLnk
          ).toBeDisplayed();
          await waitAndClick(await basePage.cookiesLnk);
          break;
        case "Privacy":
          await expect(
            await basePage.privacyLnk
          ).toBeDisplayed();
          await waitAndClick(await basePage.privacyLnk);
          break;
        case "Accessibility statement":
        case "Accessibility":
          await expect(
            await basePage.accessibilityStatementLink
          ).toBeDisplayed();
          await waitAndClick(await basePage.accessibilityStatementLink);
          break;
        default:
          throw new Error(`The ${btnName} button is not defined!`);
      }
    } else {
      switch (btnName) {
        case "Cookies":
          await expect(
            await basePage.cookiesLinkWelsh
          ).toBeDisplayed();
          await waitAndClick(await basePage.cookiesLinkWelsh);
          break;
        case "Privacy":
          await expect(
            await basePage.privacyLnkWelsh
          ).toBeDisplayed();
          await waitAndClick(await basePage.privacyLnkWelsh);
          break;
        case "Accessibility statement":
        case "Accessibility":
          await expect(
            await basePage.accessibilityStatementLinkWelsh
          ).toBeDisplayed();
          await waitAndClick(await basePage.accessibilityStatementLinkWelsh);
          break;
        default:
          throw new Error(`The ${btnName} button is not defined!`);
      }
    }
  }
);

Then(
  /^the user should see "Get help" details in the "(.*)" footer$/,
  async function (this: CustomWorld, context) {
    const tag =
      context.includes("create account") || context.includes("regulators home")
        ? "li"
        : "p";
    if (!this.isWelsh) {
      //check "Get help" header
      await expect(basePage.getHelpHeader).toBeDisplayed();
      await expect(basePage.getHelpHeader).toHaveText("Get help");

      // check email
      await expect(basePage.email(tag)).toHaveText("Email: eprcustomerservice@defra.gov.uk");
      await expect(basePage.emailLink).toBeDisplayed();
  
      // check phone number
      await expect(basePage.phoneNumber(tag)).toBeDisplayed();
      await expect(basePage.phoneNumber(tag)).toHaveText(
        "Telephone: 0300 060 0002"
      );

      // check opening times
      await expect(basePage.openingTimes(tag)).toBeDisplayed();
      await expect(basePage.openingTimes(tag)).toHaveText(
        "Monday to Friday, 8:30am to 4:30pm"
      );
    } else {
      await expect(basePage.getHelpHeader).toBeDisplayed();
      await expect(basePage.getHelpHeader).toHaveText("Cael help");

      // check email
      await expect(basePage.emailWelsh(tag)).toHaveText("Ebost: eprcustomerservice@defra.gov.uk");
      await expect(basePage.emailLink).toBeDisplayed();

      await expect(basePage.phoneNumberWelsh(tag)).toBeDisplayed();
      await expect(basePage.phoneNumberWelsh(tag)).toHaveText(
        "Ffôn: 0300 060 0002"
      );

      // check opening times
      await expect(basePage.openingTimesWelsh(tag)).toBeDisplayed();
      await expect(basePage.openingTimesWelsh(tag)).toHaveText(
        "Dydd Llun i ddydd Gwener, 8:30am i 4:30pm"
      );
    }
  }
);
