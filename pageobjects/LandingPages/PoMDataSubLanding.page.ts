import BasePage from "../base.page.js";

class PoMDataSubLandingPage extends BasePage {
  get Url() {
    return "/report-data/file-upload-sub-landing";
  }

  get h1Header() {
    return $("h1=Report packaging data");
  }

  get H1HeaderWelsh() {
    return $("h1=Rhoi gwybod am ddata pecynwaith");
  }

  get txtBeforeYouStart() {
    return $("h2=Before you start");
  }

  get txtBeforeYouStartWelsh() {
    return $("h2=Cyn ichi ddechrau");
  }

  get txtReadTheGuidance() {
    return $("p=Read the guidance on:");
  }

  get txtReadTheGuidanceWelsh() {
    return $("p=Darllenwch y canllawiau ar y canlynol:");
  }

  get lnkPackagingDataGuidance() {
    return $("*=what packaging data you need to collect");
  }

  get lnkPoMDataRules() {
    return $("*=how to build a CSV file to report your packaging data");
  }

  get lnkCSVExample() {
    return $("*=an example CSV file");
  }

  get btnReportPackagingData() {
    return $$("button=Start now");
  }

  get lnkPackagingDataGuidanceWelsh() {
    return $("*=pa ddata pecynwaith y mae angen ichi ei gasglu");
  }

  get lnkPoMDataRulesWelsh() {
    return $("*=sut i adeiladu ffeil CSV i roi gwybod am eich data pecynwaith");
  }

  get lnkCSVExampleWelsh() {
    return $("*=enghraifft o ffeil CSV");
  }

  get btnReportPackagingDataFirstPeriod() {
    return $$("button=Start now")[0] as unknown as WebdriverIO.Element;
  }

  get btnReportPackagingDataSecondPeriod() {
    return $$("button=Start now")[1] as unknown as WebdriverIO.Element;
  }

  get txtIfYouMissedDeadline() {
    return $("h2=If you’ve missed a deadline to submit");
  }

  get txtIfYouMissedDeadlineWelsh() {
    return $("h2=Os ydych chi wedi colli dyddiad cau cyflwyno");
  }

  get txtYouStillBeAbleToReport() {
    return $(
      "p*=If you’ve missed a deadline, you may still be able to report without facing enforcement action. Check the GOV.UK guidance"
    );
  }

  get txtYouStillBeAbleToReportWelsh() {
    return $(
      "p*=Os ydych chi wedi colli dyddiad cau, mae’n dal yn bosibl y gallwch chi gyflwyno adroddiad heb wynebu camau gorfodi. Gwiriwch y canllawiau ar GOV.UK"
    );
  }

  get lnkCheckGuidance() {
    return $("*=Check the GOV.UK guidance");
  }

  get lnkCheckGuidanceWelsh() {
    return $("*=Gwiriwch y canllawiau ar GOV.UK");
  }
}

export default new PoMDataSubLandingPage();
