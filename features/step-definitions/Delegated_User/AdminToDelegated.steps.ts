import { Given, When } from "@wdio/cucumber-framework";
import CustomWorld from "../../../utils/CustomWorld.js";
import LoginPage from "../../../pageobjects/login.page.js";
import ManageAccountDetailsPage from "../../../pageobjects/AccountManagement/ManageAccountDetails.page.js";
import ChangeAccountPermissionsPage from "../../../pageobjects/AccountManagement/ChangeAccountPermissions.page.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";
import { getSecret } from "../../../utils/LoginConf.js";

Given(
  /^the user logs in as a(?:n)? (admin|basic) user invited to (delegated|admin)$/,
  async function (
    this: CustomWorld,
    userTypeFrom: "admin" | "basic",
    userTypeTo: "delegated" | "admin"
  ) {
    if (userTypeFrom == "admin" && userTypeTo == "delegated") {
      await LoginPage.login(
        await getSecret(this.secretClient, 
          process.env.ADMIN_TO_DELEGATED_USERNAME as string) as string,
        await getSecret(this.secretClient, 
          process.env.ADMIN_TO_DELEGATED_PASSWORD as string) as string,
      );
    } else if (userTypeFrom == "basic" && userTypeTo == "delegated") {
      await LoginPage.login(
        await getSecret(this.secretClient, 
          process.env.BASIC_TO_DELEGATED_USERNAME as string) as string,
        await getSecret(this.secretClient, 
            process.env.BASIC_TO_DELEGATED_PASSWORD as string) as string
      );
    } else if (userTypeFrom == "basic" && userTypeTo == "admin") {
      await LoginPage.login(
        await getSecret(this.secretClient, 
          process.env.BASIC_TO_ADMIN2_USERNAME as string) as string,
        await getSecret( this.secretClient,
          process.env.BASIC_TO_ADMIN2_PASSWORD as string) as string
      );
    }
  }
);

Given(
  /^I want to change permissions for user: "(.*)" to: "(.*)"$/,
  async function (
    this: CustomWorld,
    usersName: string,
    userPermission: string
  ) {
    if (!this.isWelsh) {
      this.scenarioDataAccManagement.set("Account permissions", userPermission);
    } else {
      this.scenarioDataAccManagement.set("Caniatadau’r cyfrif", userPermission);
    }
    await ManageAccountDetailsPage.ClickChangePermissionsFor(usersName);
    await ChangeAccountPermissionsPage.SelectAccountPermission(userPermission);
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    await ChangeAccountPermissionsPage.clickContinue(this.isWelsh);
  }
);

Given(
  /^the user clicks change permissions for user: "(.*)"$/,
  async function (this: CustomWorld, usersName: string) {
    await ManageAccountDetailsPage.ClickChangePermissionsFor(usersName);
  }
);
