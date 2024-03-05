import { Given, When, Then } from "@wdio/cucumber-framework";
import LargeProducersPublicListPage from "../../../pageobjects/LargeProducersPublicList/LargeProducersPublicList.page.js";
import {
  waitAndClick,
  waitUntilPageLoads,
  waitUntilPageOpened,
} from "../../../utils/Waiters.js";
import { DOWNLOAD_FOLDER_PATH } from "../../../config/pathconst.js";
import { promises as fs } from "fs";
import {
  Nations,
  ReportHeaders,
} from "../../../utils/types/LargeProducersPublicList.types.js";
import {
  HeadersInEnglish,
  HeadersInWelsh,
} from "../../../utils/enums/LargeProducersPublicList.enum.js";
import CustomWorld from "../../../utils/CustomWorld";
import LargeProducersCookiesPage from "../../../pageobjects/LargeProducersPublicList/LargeProducersCookies.page.js";
import LargeProducersPrivacyPage from "../../../pageobjects/LargeProducersPublicList/LargeProducersPrivacy.page.js";
import LargeProducersAccessibilityPage from "../../../pageobjects/LargeProducersPublicList/LargeProducersAccessibility.page.js";
import HowToUsePublicListPage from "../../../pageobjects/LargeProducersPublicList/HowToUsePublicList.page.js";
import RegisteredProducersOnNPWDPage from "../../../pageobjects/LargeProducersPublicList/RegisteredProducersOnNPWD.page.js";

When(
  /^the user clicks the large producers report for (England|Wales|Scotland|Northern Ireland|all nations) link$/,
  async function (nation: Nations | "all nations") {
    switch (nation) {
      case "England":
        await waitAndClick(await LargeProducersPublicListPage.lnkEnglandReport);
        break;
      case "Wales":
        await waitAndClick(await LargeProducersPublicListPage.lnkWalesReport);
        break;
      case "Scotland":
        await waitAndClick(
          await LargeProducersPublicListPage.lnkScotlandReport
        );
        break;
      case "Northern Ireland":
        await waitAndClick(
          await LargeProducersPublicListPage.lnkNorthIrelandReport
        );
        break;
      case "all nations":
        await waitAndClick(
          await LargeProducersPublicListPage.lnkAllNationsReport
        );
        break;
      default:
        throw new Error(`The ${nation} nation is not defined!`);
    }

    await browser.pause(300);
  }
);

When(
  /^the user clicks the "(how to use public list|registered producers on NPWD)" link on the "public list of large producers" page$/,
  async function (
    linkName: "how to use public list" | "registered producers on NPWD"
  ) {
    switch (linkName) {
      case "how to use public list":
        await waitAndClick(
          await LargeProducersPublicListPage.lnkHowToUsePublicList
        );
        break;
      case "registered producers on NPWD":
        await waitAndClick(
          await LargeProducersPublicListPage.lnkRegisteredProducersOnNPWD
        );
        break;
      default:
        throw new Error(`The ${linkName} nation is not defined!`);
    }
  }
);

When(
  /^the user clicks on the "(Cookies|Privacy|Accessibility)" button in the footer of "public list of large producers" page$/,
  async function (
    this: CustomWorld,
    btnName: "Cookies" | "Privacy" | "Accessibility"
  ) {
    if (!this.isWelsh) {
      switch (btnName) {
        case "Cookies":
          await waitAndClick(await LargeProducersPublicListPage.btnCookies);
          break;
        case "Privacy":
          await waitAndClick(await LargeProducersPublicListPage.btnPrivacy);
          break;
        case "Accessibility":
          await waitAndClick(
            await LargeProducersPublicListPage.btnAccessibility
          );
          break;
        default:
          throw new Error(`The ${btnName} button is not defined!`);
      }
    } else {
      switch (btnName) {
        case "Cookies":
          await waitAndClick(
            await LargeProducersPublicListPage.btnCookiesWelsh
          );
          break;
        case "Privacy":
          await waitAndClick(
            await LargeProducersPublicListPage.btnPrivacyWelsh
          );
          break;
        case "Accessibility":
          await waitAndClick(
            await LargeProducersPublicListPage.btnAccessibilityWelsh
          );
          break;
        default:
          throw new Error(`The ${btnName} button is not defined!`);
      }
    }
  }
);

Then(
  /^the "(how to use public list|registered producers on NPWD)" page should be opened from the "public list of large producers" page$/,
  async function (
    pageName: "how to use public list" | "registered producers on NPWD"
  ) {
    await waitUntilPageLoads();

    switch (pageName) {
      case "how to use public list":
        await expect(await browser.getUrl()).toBe(HowToUsePublicListPage.Url);
        break;
      case "registered producers on NPWD":
        await expect(await browser.getUrl()).toBe(
          RegisteredProducersOnNPWDPage.Url
        );
        break;
      default:
        throw new Error(`The ${pageName} nation is not defined!`);
    }
  }
);

Then(
  /^the file for (England|Wales|Scotland|Northern Ireland|all nations) should be downloaded and the headers should be correct in the report$/,
  async function (this: CustomWorld, nation: Nations | "all nations") {
    let path: string;

    if (!this.isWelsh) {
      switch (nation) {
        case "England":
          path = DOWNLOAD_FOLDER_PATH + `/large-producers-ea-2023.csv`;
          break;
        case "Wales":
          path = DOWNLOAD_FOLDER_PATH + `/large-producers-nrw-2023.csv`;
          break;
        case "Scotland":
          path = DOWNLOAD_FOLDER_PATH + `/large-producers-sepa-2023.csv`;
          break;
        case "Northern Ireland":
          path = DOWNLOAD_FOLDER_PATH + `/large-producers-niea-2023.csv`;
          break;
        case "all nations":
          path =
            DOWNLOAD_FOLDER_PATH + `/large-producers-all-regulators-2023.csv`;
          break;
        default:
          throw new Error(`The ${nation} nation is not defined!`);
      }
    } else {
      switch (nation) {
        case "England":
          path = DOWNLOAD_FOLDER_PATH + `/cynhyrchwyr-mawr-ea-2023.csv`;
          break;
        case "Wales":
          path = DOWNLOAD_FOLDER_PATH + `/cynhyrchwyr-mawr-nrw-2023.csv`;
          break;
        case "Scotland":
          path = DOWNLOAD_FOLDER_PATH + `/cynhyrchwyr-mawr-sepa-2023.csv`;
          break;
        case "Northern Ireland":
          path = DOWNLOAD_FOLDER_PATH + `/cynhyrchwyr-mawr-niea-2023.csv`;
          break;
        case "all nations":
          path =
            DOWNLOAD_FOLDER_PATH + `/cynhyrchwyr-mawr-pob-rheolydd-2023.csv`;
          break;
        default:
          throw new Error(`The ${nation} nation is not defined!`);
      }
    }

    await browser.waitUntil(async () => await fs.open(path), { timeout: 5000 });

    const downloadedReport = (await fs.readFile(path as string, "utf-8"))
      .trim()
      .split("\n");

    const reportTitle = downloadedReport[0];
    const reportHeadersRow = downloadedReport[2].split(",");
    let expectedHeaders: ReportHeaders;

    if (!this.isWelsh) {
      expectedHeaders = HeadersInEnglish;
    } else {
      expectedHeaders = HeadersInWelsh;
    }

    switch (nation) {
      case "England":
        await expect(reportTitle).toContain(expectedHeaders.TitleEngland);
        break;
      case "Wales":
        await expect(reportTitle).toContain(expectedHeaders.TitleWales);
        break;
      case "Scotland":
        await expect(reportTitle).toContain(expectedHeaders.TitleScotland);
        break;
      case "Northern Ireland":
        await expect(reportTitle).toContain(
          expectedHeaders.TitleNorthernIreland
        );
        break;
      case "all nations":
        await expect(reportTitle).toContain(expectedHeaders.TitleAllNations);
        break;
      default:
        throw new Error(`The ${nation} nation is not defined!`);
    }

    await expect(reportHeadersRow[0]).toContain(expectedHeaders.Header1);
    await expect(reportHeadersRow[1]).toContain(expectedHeaders.Header2);
    await expect(reportHeadersRow[2]).toContain(expectedHeaders.Header3);
    await expect(reportHeadersRow[3]).toContain(expectedHeaders.Header4);
    await expect(reportHeadersRow[4]).toContain(expectedHeaders.Header5);
    await expect(reportHeadersRow[5]).toContain(expectedHeaders.Header6);
    await expect(reportHeadersRow[6]).toContain(expectedHeaders.Header7);
    await expect(reportHeadersRow[7]).toContain(expectedHeaders.Header8);
    await expect(reportHeadersRow[8]).toContain(expectedHeaders.Header9);
    await expect(reportHeadersRow[9]).toContain(expectedHeaders.Header10);
    await expect(reportHeadersRow[10]).toContain(expectedHeaders.Header11);
    await expect(reportHeadersRow[11]).toContain(expectedHeaders.Header12);
    await expect(reportHeadersRow[12]).toContain(expectedHeaders.Header13);
    await expect(reportHeadersRow[13]).toContain(expectedHeaders.Header14);
    await expect(reportHeadersRow[14]).toContain(expectedHeaders.Header15);
    await expect(reportHeadersRow[15]).toContain(expectedHeaders.Header16);
    await expect(reportHeadersRow[16]).toContain(expectedHeaders.Header17);
  }
);

Then(
  /^the cookies banner on large producers page should be displayed, with text: "(.*)"$/,
  async function (expectedText: string) {
    await waitUntilPageLoads();
    await expect(
      await LargeProducersPublicListPage.cookiesBanner
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtCookiesBannerText
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtCookiesBannerText
    ).toHaveTextContaining(expectedText);
  }
);

Then(
  /^the content should be correct on the "public list of large producers" page$/,
  async function () {
    await expect(await LargeProducersPublicListPage.Title).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtBeforeYouStart
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtForAnythingBeforeReportingYear
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.h2ListOfLargeProducers
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtTheInformationIsInCSVFiles
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtThisInformationIsUsually
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.h2Disclaimer
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtThisListShowsTheInformation
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtSomeFieldsMayBeBlank
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtIfYouAreUnsure
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkEnglandReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkScotlandReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkWalesReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkNorthIrelandReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkAllNationsReport
    ).toBeDisplayed();
    await expect(await LargeProducersPublicListPage.btnCookies).toBeDisplayed();
    await expect(await LargeProducersPublicListPage.btnPrivacy).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.btnAccessibility
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkEnglandReport
    ).toHaveTextContaining("Environment Agency - England");
    await expect(
      await LargeProducersPublicListPage.lnkScotlandReport
    ).toHaveTextContaining("Scottish Environment Protection Agency");
    await expect(
      await LargeProducersPublicListPage.lnkWalesReport
    ).toHaveTextContaining("Natural Resources Wales");
    await expect(
      await LargeProducersPublicListPage.lnkNorthIrelandReport
    ).toHaveTextContaining("Northern Ireland Environment Agency");
    await expect(
      await LargeProducersPublicListPage.lnkAllNationsReport
    ).toHaveTextContaining("All four regulators");
    await expect(
      await LargeProducersPublicListPage.lnkHowToUsePublicList
    ).toHaveTextContaining("find out what this list is for and how to use it");
    await expect(
      await LargeProducersPublicListPage.lnkRegisteredProducersOnNPWD
    ).toHaveTextContaining(
      "Public Register of Registered Producers on the National Packaging Waste Database (NPWD)"
    );
  }
);

Then(
  /^the content in Welsh should be correct on the "public list of large producers" page$/,
  async function () {
    await expect(await LargeProducersPublicListPage.TitleWelsh).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtBeforeYouStartWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtForAnythingBeforeReportingYearWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.h2ListOfLargeProducersWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtTheInformationIsInCSVFilesWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtThisInformationIsUsuallyWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.h2DisclaimerWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtThisListShowsTheInformationWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtSomeFieldsMayBeBlankWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.txtIfYouAreUnsureWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkEnglandReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkScotlandReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkWalesReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkNorthIrelandReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkAllNationsReport
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.btnCookiesWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.btnPrivacyWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.btnAccessibilityWelsh
    ).toBeDisplayed();
    await expect(
      await LargeProducersPublicListPage.lnkEnglandReport
    ).toHaveTextContaining("Asiantaeth yr Amgylchedd (Lloegr)");
    await expect(
      await LargeProducersPublicListPage.lnkScotlandReport
    ).toHaveTextContaining("Asiantaeth Diogelu Amgylchedd yr Alban");
    await expect(
      await LargeProducersPublicListPage.lnkWalesReport
    ).toHaveTextContaining("Cyfoeth Naturiol Cymru");
    await expect(
      await LargeProducersPublicListPage.lnkNorthIrelandReport
    ).toHaveTextContaining("Asiantaeth Amgylchedd Gogledd Iwerddon");
    await expect(
      await LargeProducersPublicListPage.lnkAllNationsReport
    ).toHaveTextContaining("Pob un o’r pedwar rheoleiddiwr");
    await expect(
      await LargeProducersPublicListPage.lnkHowToUsePublicList
    ).toHaveTextContaining("darllenwch beth yw’r rhestr a sut i’w defnyddio");
    await expect(
      await LargeProducersPublicListPage.lnkRegisteredProducersOnNPWD
    ).toHaveTextContaining(
      "Gofrestr Gyhoeddus o Gynhyrchwyr Cofrestredig ar y Gronfa Ddata Gwastraff Pecynwaith Genedlaethol (NPWD)"
    );
  }
);

Then(
  /^"Cookies page" title should be displayed on the "Cookies of Large Producers" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await expect(await LargeProducersCookiesPage.Title).toBeDisplayed();
    } else {
      await expect(await LargeProducersCookiesPage.TitleWelsh).toBeDisplayed();
    }
  }
);

Then(
  /^"Privacy notice" title should be displayed on the "Privacy of Large Producers" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await expect(await LargeProducersPrivacyPage.Title).toBeDisplayed();
    } else {
      await expect(await LargeProducersPrivacyPage.TitleWelsh).toBeDisplayed();
    }
  }
);

Then(
  /^"Accessibility statement" title should be displayed on the "Accessibility of Large Producers" page$/,
  async function (this: CustomWorld) {
    if (!this.isWelsh) {
      await expect(await LargeProducersAccessibilityPage.Title).toBeDisplayed();
    } else {
      await expect(
        await LargeProducersAccessibilityPage.TitleWelsh
      ).toBeDisplayed();
    }
  }
);

Then(
  /^the "(Cookies|Privacy|Accessibility)" button should be displayed in the footer of "public list of large producers" page$/,
  async function (
    this: CustomWorld,
    btnName: "Cookies" | "Privacy" | "Accessibility"
  ) {
    if (!this.isWelsh) {
      switch (btnName) {
        case "Cookies":
          await expect(
            await LargeProducersPublicListPage.btnCookies
          ).toBeDisplayed();
          break;
        case "Privacy":
          await expect(
            await LargeProducersPublicListPage.btnPrivacy
          ).toBeDisplayed();
          break;
        case "Accessibility":
          await expect(
            await LargeProducersPublicListPage.btnAccessibility
          ).toBeDisplayed();
          break;
        default:
          throw new Error(`The ${btnName} button is not defined!`);
      }
    } else {
      switch (btnName) {
        case "Cookies":
          await expect(
            await LargeProducersPublicListPage.btnCookiesWelsh
          ).toBeDisplayed();
          break;
        case "Privacy":
          await expect(
            await LargeProducersPublicListPage.btnPrivacyWelsh
          ).toBeDisplayed();
          break;
        case "Accessibility":
          await expect(
            await LargeProducersPublicListPage.btnAccessibilityWelsh
          ).toBeDisplayed();
          break;
        default:
          throw new Error(`The ${btnName} button is not defined!`);
      }
    }
  }
);
