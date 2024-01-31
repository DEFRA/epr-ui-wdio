import { When } from "@wdio/cucumber-framework";
import DeclarationEnterFullNamePage from "../../../pageobjects/DataUpload/Org_Data_Upload/Producer_Org_Data_Upload/DeclarationEnterFullName.page.js";
import SubmissionDeclarationPagePage from "../../../pageobjects/DataUpload/Packaging_Data_Upload/Producer_Packaging_Data_Upload/SubmissionDeclarationPage.page.js";
import commonPage from "../../../pageobjects/common.page.js";
import { SubmissionDeclarationUserName } from "../../../utils/enums/DataUpload.enum.js";

When(
  /^the user enters a name of 201 characters in the "Enter your full name" field for: "(Organisation|Packaging)" data$/,
  async function (dataType: "Organisation" | "Packaging") {
    const userName = SubmissionDeclarationUserName.TwoHundredOneCharactersName;
    let element: WebdriverIO.Element =
      dataType === "Organisation"
        ? await DeclarationEnterFullNamePage.inputEnterYourFullName
        : await SubmissionDeclarationPagePage.inputEnterYourFullName;
    await element.setValue(userName);
    await commonPage.takeElemScreenshot(element);
  }
);
