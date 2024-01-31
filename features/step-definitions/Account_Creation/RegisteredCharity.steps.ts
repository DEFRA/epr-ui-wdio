import { Then } from "@wdio/cucumber-framework";
import { waitUntilPageLoads } from "../../../utils/Waiters.js";
import DoNotNeedToCreateAccount from "../../../pageobjects/AccountCreation/DoNotNeedToCreateAccount.page.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";

Then(
  /^the text: "(.*)" should display on the not affected page$/,
  async function (expectedText: string) {
    await waitUntilPageLoads();
    await expect(browser).toHaveTitleContaining(DoNotNeedToCreateAccount.Title);
    await expect(await DoNotNeedToCreateAccount.GetHeaderText()).toBe(expectedText);

    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }
);

