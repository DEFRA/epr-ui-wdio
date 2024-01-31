import BasePage from "../../base.page.js";

class CheckWarningsPage extends BasePage {
  get Url() {
    return "/report-data/check-warnings";
  }

  get h1Header() {
    return $("h1=Packaging data uploaded – check the warnings");
  }

  get h1HeaderWelsh() {
    return $("h1=Data pecynwaith wedi’i uwchlwytho – gwiriwch y rhybuddion");
  }

  get txtYourFileHasBeenUploaded() {
    return $(
      "p=Your data file has been uploaded to your organisation’s account. There are 0 errors."
    );
  }

  get txtYourFileHasBeenUploadedWelsh() {
    return $(
      "p=Mae eich ffeil ddata wedi’i huwchlwytho i gyfrif eich sefydliad. Does dim gwallau."
    );
  }

  get txtThereAreSomeWarnings() {
    return $(
      "p=There are some warnings. Warnings are unusual entries in your file you need to check, but they will not prevent your file from being submitted to the environmental regulator."
    );
  }

  get txtThereAreSomeWarningsWelsh() {
    return $(
      "p=Mae rhywfaint o rybuddion. Mae rhybuddion yn gofnodion anarferol yn eich ffeil y bydd angen ichi eu gwirio, ond fyddan nhw ddim yn atal eich ffeil rhag cael ei chyflwyno i’r rheoleiddiwr amgylcheddol."
    );
  }

  get txtDownloadWarningReport() {
    return $(
      "p=Download your warning report (CSV, maximum 5MB). This tells you where the warnings are in your file."
    );
  }

  get txtDownloadWarningReportWelsh() {
    return $(
      "p=Lawrlwythwch eich adroddiad gwallau (CSV, 5MB ar y mwyaf). Mae hyn yn dweud wrthoch chi ble mae’r rhybuddion yn eich ffeil."
    );
  }

  get txtWeCanOnlyShow() {
    return $("p=We can only show you the first 1,000 warnings in the report.");
  }

  get txtWeCanOnlyShowWelsh() {
    return $(
      "p=Dim ond y 1,000 cyntaf o rybuddion yn yr adroddiad y gallwn eu dangos ichi."
    );
  }

  get dropdownHowToCheckWarnings() {
    return $("span=How to check warnings");
  }

  get dropdownHowToCheckWarningsWelsh() {
    return $("span=Sut i wirio rhybuddion");
  }

  get btnContinue() {
    return $("button=Continue");
  }

  get btnContinueInWelsh() {
    return $("button=Parhau");
  }

  get txtUseTheReport() {
    return $(
      "p=1. Use the report to check the warnings. You may also need the file specification guidance (opens in a new window)."
    );
  }

  get txtUseTheReportWelsh() {
    return $(
      "p=1. Defnyddiwch yr adroddiad i wirio’r rhybuddion. Efallai y bydd arnoch chi angen y canllawiau ar fanyleb y ffeil hefyd (yn agor mewn ffenestr newydd)."
    );
  }

  get txtDecideIfWantToUpdate() {
    return $("p=2. Decide if you want to update any data.");
  }

  get txtDecideIfWantToUpdateWelsh() {
    return $("p=2. Penderfynwch a ydych chi am ddiweddaru unrhyw ddata.");
  }

  get txtUploadNewFile() {
    return $("p=3. Upload a new file or keep your existing file.");
  }

  get txtUploadNewFileWelsh() {
    return $("p=3. Uwchlwythwch ffeil newydd neu cadwch eich ffeil bresennol.");
  }

  get lnkFileSpecification() {
    return $(
      "a[href='https://www.gov.uk/government/publications/packaging-data-how-to-create-your-file-for-extended-producer-responsibility/packaging-data-file-specification-for-extended-producer-responsibility']"
    );
  }

  get urlFileSpecificationPage() {
    return "/packaging-data-how-to-create-your-file-for-extended-producer-responsibility/packaging-data-file-specification-for-extended-producer-responsibility";
  }

  get titleFileSpecificationPage() {
    return "Packaging data file specification for extended producer responsibility";
  }

  get lnkDownloadWarningReport() {
    return $("a[href^='/report-data/file-upload-error-report/']");
  }

  get optionUploadNewFileYes() {
    return $("label[for='UploadNewFile']");
  }

  get optionUploadNewFileNo() {
    return $("label[for='UploadNewFile-1']");
  }

  get radioYes() {
    return $(".govuk-radios__input[value='True']");
  }

  get radioNo() {
    return $(".govuk-radios__input[value='False']");
  }

  get txtErrorMessage() {
    return $("a[data-testid='error-banner-text']");
  }
}

export default new CheckWarningsPage();
