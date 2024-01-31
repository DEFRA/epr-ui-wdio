import BasePage from "../../base.page.js";

class FileUploadPage extends BasePage {
  get Url() {
    return "/report-data/file-upload";
  }

  get H1HeaderWelsh() {
    return "Uwchlwytho data pecynwaith i’ch cyfrif";
  }

  get formDataFileUpload() {
    return $('[data-testid="pom-data-upload-form"]');
    // return $('[data-testid="data-upload-form"]');
    // TODO move to CommonDataUpload
  }

  get btnAddPoMDataFile() {
    return $('[data-testid="pom-upload-choose-file-button"]');
    // return $('[data-testid="data-upload-choose-file-button"]');
    // TODO move to CommonDataUpload
  }

  get btnUploadPoMDataFile() {
    return $('[data-testid="pom-data-upload-button"]');
    // return $('[data-testid="data-upload-button"]');
    // TODO move to CommonDataUpload
  }

  get lnkUploadPackagingDataAsCS() {
    return $(
      "a[href='https://www.gov.uk/government/publications/packaging-data-how-to-create-your-file-for-extended-producer-responsibility']"
    );
    // return $('[data-testid="pom-data-quidance-link"]');
  }

  get txtUploadYourMembersPackagingData() {
    return $(
      "p=Upload your members’ packaging data in a CSV file. The file must be smaller than 256MB."
    );
  }

  get txtUploadYourMembersPackagingDataWelsh() {
    return $(
      "p=Uwchlwytho data pecynwaith eich aelodau mewn ffeil CSV. Rhaid i’r ffeil fod yn llai na 256MB."
    );
  }

  get txtUploadYourOrganisationsPackagingData() {
    return $(
      "p=Upload your organisation’s packaging data in a CSV file. The file must be smaller than 256MB."
    );
  }

  get txtUploadYourOrganisationsPackagingDataWelsh() {
    return $(
      "p=Uwchlwytho data pecynwaith eich sefydliad mewn ffeil CSV. Rhaid i’r ffeil fod yn llai na 256MB."
    );
  }

  get txtOnceWeHaveValidated() {
    return $(
      "p=Once we have validated the data, we store the file on your account."
    );
  }

  get txtOnceWeHaveValidatedWelsh() {
    return $(
      "p=Unwaith y byddwn wedi dilysu’r data, rydym yn storio’r ffeil ar eich cyfrif."
    );
  }

  get txtIfThereIsAProblem() {
    return $("p=If there’s a problem, we’ll tell you about:");
  }

  get txtIfThereIsAProblemWelsh() {
    return $("p=Os oes problem, byddwn yn dweud wrthoch chi am y canlynol:");
  }

  get txtYouNeedToFixErrors() {
    return $(
      "li=errors – you’ll need to fix all errors and upload your file again"
    );
  }

  get txtYouNeedToFixErrorsWelsh() {
    return $(
      "li=gwallau – bydd angen ichi drwsio’r holl wallau ac uwchlwytho’ch ffeil eto"
    );
  }

  get txtWarningsAreUnusualEntries() {
    return $(
      "li=warnings – these are unusual entries you’ll need to check, like very low packaging weights, but they will not prevent your file from being submitted to the environmental regulator"
    );
  }

  get txtWarningsAreUnusualEntriesWelsh() {
    return $(
      "li=rhybuddion – mae’r rhain yn gofnodion anarferol y bydd angen ichi eu gwirio, fel pwysau pecynwaith isel iawn, ond fyddan nhw ddim yn atal eich ffeil rhag cael ei chyflwyno i’r rheoleiddiwr amgylcheddol"
    );
  }

  get txtUploadYourFile() {
    return $("h2=Upload your file");
  }

  get txtUploadYourFileWelsh() {
    return $("h2=Uwchlwythwch eich ffeil");
  }

  get txtItMayTakeAFewMinutes() {
    return $("p=It may take a few minutes to upload.");
  }

  get txtItMayTakeAFewMinutesWelsh() {
    return $("p=Gallai gymryd ychydig funudau i’w huwchlwytho.");
  }
}

export default new FileUploadPage();
