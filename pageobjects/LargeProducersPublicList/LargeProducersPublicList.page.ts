import BasePage from "../base.page.js";

class LargeProducersPublicListPage extends BasePage {
  get Url() {
    return "/large-producers";
  }

  get Title() {
    return $(
      "h1=Public list of large producers on the ‘report packaging data’ service"
    );
  }

  get TitleWelsh() {
    return $(
      "h1=Cynhyrchwyr mawr ar y gwasanaeth ‘Rhoi gwybod am ddata pecynwaith’"
    );
  }

  get txtBeforeYouStart() {
    return $(
      "p=Before you start, find out what this list is for and how to use it."
    );
  }

  get txtBeforeYouStartWelsh() {
    return $(
      "p=Cyn ichi ddechrau, darllenwch beth yw’r rhestr a sut i’w defnyddio."
    );
  }

  get txtForAnythingBeforeReportingYear() {
    return $(
      "p=For anything before reporting year 2023, use the Public Register of Registered Producers on the National Packaging Waste Database (NPWD)."
    );
  }

  get txtForAnythingBeforeReportingYearWelsh() {
    return $(
      "p=Ar gyfer unrhyw beth cyn blwyddyn adrodd 2023, defnyddiwch y Gofrestr Gyhoeddus o Gynhyrchwyr Cofrestredig ar y Gronfa Ddata Gwastraff Pecynwaith Genedlaethol (NPWD)."
    );
  }

  get h2ListOfLargeProducers() {
    return $("h2=List of large producers - download CSV files");
  }

  get h2ListOfLargeProducersWelsh() {
    return $("h2=Rhestr o cynhyrchwyr mawr - lawrlwytho ffeiliau CSV");
  }

  get txtTheInformationIsInCSVFiles() {
    return $(
      "p=The information is in CSV files, depending on which environmental regulator the producer is reporting to."
    );
  }

  get txtTheInformationIsInCSVFilesWelsh() {
    return $(
      "p=Mae’r wybodaeth mewn ffeiliau CSV, gan ddibynnu ar ba reoleiddiwr amgylcheddol mae’r sefydliad yn cyflwyno’i adroddiadau iddo."
    );
  }

  get txtThisInformationIsUsually() {
    return $("p=This information is usually updated every day.");
  }

  get txtThisInformationIsUsuallyWelsh() {
    return $("p=Mae’r wybodaeth yma yn cael ei diweddaru bob dydd fel arfer.");
  }

  get h2Disclaimer() {
    return $("h2=Disclaimer");
  }

  get h2DisclaimerWelsh() {
    return $("h2=Ymwadiad");
  }

  get txtThisListShowsTheInformation() {
    return $(
      "p=The lists show the information that producers have submitted to the ‘report packaging data’ service. This means that if a producer has submitted errors, the errors will be shown here."
    );
  }

  get txtThisListShowsTheInformationWelsh() {
    return $(
      "p=Mae’r rhestrau’n dangos yr wybodaeth y mae cynhyrchwyr wedi’i chyflwyno i’r gwasanaeth ‘Rhoi gwybod am ddata pecynwaith’. Mae hyn yn golygu, os oes sefydliad wedi cyflwyno gwallau y bydd y gwallau’n cael eu dangos yma."
    );
  }

  get txtSomeFieldsMayBeBlank() {
    return $(
      "p=Some fields may be blank. This could be because they do not apply to the producer in question."
    );
  }

  get txtSomeFieldsMayBeBlankWelsh() {
    return $(
      "p=Gall rhai meysydd fod yn wag. Un rheswm posibl am hyn yw nad yw’r meysydd yn gymwys i’r cynhyrchydd dan sylw."
    );
  }

  get txtIfYouAreUnsure() {
    return $(
      "p=If you’re unsure about anything, check with the producer directly."
    );
  }

  get txtIfYouAreUnsureWelsh() {
    return $(
      "p=Os ydych chi’n ansicr ynglŷn ag unrhyw beth, gofynnwch i’r cynhyrchydd yn uniongyrchol."
    );
  }

  get lnkEnglandReport() {
    return $("a[href='/large-producers/report/EN']");
  }

  get lnkScotlandReport() {
    return $("a[href='/large-producers/report/SC']");
  }

  get lnkWalesReport() {
    return $("a[href='/large-producers/report/WS']");
  }

  get lnkNorthIrelandReport() {
    return $("a[href='/large-producers/report/NI']");
  }

  get lnkAllNationsReport() {
    return $("a[href='/large-producers/report/ALL']");
  }

  get btnCookies() {
    return $("=Cookies");
  }

  get btnCookiesWelsh() {
    return $("=Cwcis");
  }

  get btnPrivacy() {
    return $("=Privacy");
  }

  get btnPrivacyWelsh() {
    return $("=Preifatrwydd");
  }

  get btnAccessibility() {
    return $("=Accessibility");
  }

  get btnAccessibilityWelsh() {
    return $("=Hygyrchedd");
  }

  get txtCookiesBannerText() {
    return this.cookiesBanner.$("p.govuk-body");
  }

  get lnkHowToUsePublicList() {
    return $(
      "a[href='https://www.gov.uk/guidance/find-large-producers-on-the-report-packaging-data-service']"
    );
  }

  get lnkRegisteredProducersOnNPWD() {
    return $(
      "a[href='https://npwd.environment-agency.gov.uk/PublicRegisterProducers.aspx']"
    );
  }
}

export default new LargeProducersPublicListPage();
