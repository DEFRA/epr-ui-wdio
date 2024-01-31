import { Given, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../pageobjects/login.page.js";
import IndirectProducerLandingPage from "../../../pageobjects/LandingPages/IndirectProducer_Landing.page.js";
import ListOfCSPage from "../../../pageobjects/LandingPages/ListOfCS.page.js";
import CustomWorld from "../../../utils/CustomWorld.js";
import DirectProducerLandingPage from "../../../pageobjects/LandingPages/DirectProducer_Landing.page.js";
import { UserRoles, UserType } from "../../../utils/types/UserLogin.types.js";
import commonPage from "../../../pageobjects/common.page.js";
import { getSecret } from "../../../utils/LoginConf.js";

Given(
  /^the user (is logged|logs) in as a(?:n)? "(Direct|Indirect)" Producer with "(Approved|Delegated|Basic)" role$/,
  async function (
    this: CustomWorld,
    state: "is logged" | "logs",
    producerType: "Direct" | "Indirect",
    userRole: UserRoles
  ) {
    let userLogin: string;
    let userPassword: string;
    let user: UserType;
    switch (producerType) {
      case "Direct":
        if (userRole === "Approved") {
          userLogin = await getSecret(this.secretClient, 
            process.env.DIRECT_PRODUCER_APPROVED_USERNAME as string) as string
          userPassword = await getSecret(this.secretClient, 
            process.env.DIRECT_PRODUCER_APPROVED_PASSWORD as string) as string
        } else if (userRole === "Delegated") {
          userLogin = await getSecret(this.secretClient, 
            process.env.DIRECT_PRODUCER_DELEGATED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient, 
            process.env.DIRECT_PRODUCER_DELEGATED_PASSWORD as string) as string;
        } else if (userRole === "Basic") {
          userLogin = await getSecret(this.secretClient,
            process.env.DIRECT_PRODUCER_BASIC_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient,
            process.env.DIRECT_PRODUCER_BASIC_PASSWORD as string) as string;
        } else {
          throw new Error(`The ${userRole} producer role is not defined!`);
        }
        break;
      case "Indirect":
        if (userRole === "Approved") {
          userLogin = await getSecret(this.secretClient,
            process.env.INDIRECT_PRODUCER_APPROVED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient, 
            process.env.INDIRECT_PRODUCER_APPROVED_PASSWORD as string) as string;
        } else if (userRole === "Delegated") {
          userLogin = await getSecret(this.secretClient, 
            process.env.INDIRECT_PRODUCER_DELEGATED_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient,
            process.env.INDIRECT_PRODUCER_DELEGATED_PASSWORD as string) as string;
        } else if (userRole === "Basic") {
          userLogin = await getSecret(this.secretClient,
            process.env.INDIRECT_PRODUCER_BASIC_USERNAME as string) as string;
          userPassword = await getSecret(this.secretClient,
            process.env.INDIRECT_PRODUCER_BASIC_PASSWORD as string) as string;
        } else {
          throw new Error(`The ${userRole} producer role is not defined!`);
        }
        break;
      default:
        throw new Error(`The ${producerType} producer type is not defined!`);
    }

    await LoginPage.login(userLogin, userPassword);

    if (state === "is logged") {
      await expect(browser).toHaveUrlContaining(DirectProducerLandingPage.Url);
    }
  }
);

Then(
  /^the Compliance Scheme name is displayed on the Producer landing page$/,
  async function (this: CustomWorld) {
    // const complianceSchemeNameElem =
    //   await IndirectProducerLandingPage.complianceSchemeName;
    const complianceSchemeNameElem =
      await IndirectProducerLandingPage.ComplianceSchemeName(this.isWelsh);
    const complianceSchemeNameText = await complianceSchemeNameElem.getText();

    await expect(complianceSchemeNameElem).toBeDisplayed();
    const expectedTextRegex = !this.isWelsh
      ? /^Compliance scheme: (.*)$/
      : /^Cynllun cydymffurfio: (.*)$/;
    // await expect(complianceSchemeNameText).toMatch(expectedText);
    await commonPage.takeScreenshot();
    await expect(complianceSchemeNameText).toMatch(expectedTextRegex);
  }
);

Then(/^the list of Compliance Schemes is displayed$/, async function () {
  await expect(await ListOfCSPage.listOfComplianceSchemes).toBeDisplayed();
});
