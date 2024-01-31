import BasePage from "../base.page.js";

class CommonDataUploadPage extends BasePage {
  get lnkReportOrganisationDetailsAsProducer() {
    return $("=Report organisation details");
    // return $('[data-testid="report-organisation-details-link"]');
  }

  get lnkReportOrganisationDetailsAsCS() {
    return $("=Report your members’ organisation details");
  }

  get lnkReportPackagingData() {
    return $('a[href="/report-data/file-upload-sub-landing"]');
    // return $('[data-testid="report-packaging-data-link"]');
  }

  get txtErrorSummary() {
    return $('[data-testid="error-banner"]');
  }

  get txtErrorSummaryTitle() {
    return $('[data-testid="error-banner-title"]');
  }

  get txtErorMessage() {
    return $('[data-testid="error-banner-text"]');
  }

  get bannerUploadResult() {
    return $("div.govuk-notification-banner");
  }

  get btnGoToAccountHomePage() {
    return $("button.govuk-button");
    // TODO remove after adding data-testid="go-to-account-home-page-button"
  }

  get btnUploadBrandInfo() {
    return $("a=Upload brand information");
    // return $('[data-testid="upload-brand-information-button"]');
  }

  get btnUploadPartnerInfo() {
    return $("=Upload partner information");
    // return $('[data-testid="upload-partner-information-button"]');
  }

  get btnContToPartnerInfo() {
    return $("=Continue to partner information");
    // return $('[data-testid="upload-partner-information-button"]');
  }

  get btnContinue2() {
    return $("a=Continue");
    // return $('[data-testid="continue-button"]');
  }

  get btnConfirm() {
    return $("button*=Confirm");
    // return $('[data-testid="confirm-button"]');
  }

  get formDataFileUpload() {
    return $("div.govuk-form-group");
    // return $('[data-testid="data-upload-form"]');
  }

  get btnAddFile() {
    return $('input[id="file"]');
    // return $('[data-testid="data-upload-choose-file-button"]');
  }

  get btnUploadFile() {
    return $("button=Upload file");
    // return $('[data-testid="data-upload-button"]');
  }

  get btnUploadFileInWelsh() {
    return $("button=Uwchlwytho ffeil");
  }

  get txtResultBannerTitle() {
    return $("h2=Success");
    // return $('[data-testid="result-banner-title"]');
    // TODO move to CommonDataUpload
  }

  get txtResultBanner() {
    return $("h3.govuk-notification-banner__heading");
    // return $('[data-testid="result-banner-text"]');
    // TODO move to CommonDataUpload
  }

  get txtResultBannerFileName() {
    return this.txtResultBanner.nextElement();
    // return $('[data-testid="result-banner-filename-text"]');
    // TODO move to CommonDataUpload
  }

  get lnkHowToReportOrgDetailsGuidance() {
    return $("*=how to report organisation details");
  }

  get submissionPeriods() {
    return $$(".govuk-card-body");
    // return $('[data-testid="sub-landing-submission-period-text"]');
  }

  private get submissionPeriodCards() {
    return $$("h3.govuk-heading-m");
  }

  async getSubmissionPeriodCards() {
    return await this.submissionPeriodCards;
  }

  async SubmissionPeriodDeadlinesSubmitStatusNot(
    submitStatusNot = "CANNOT START YET"
  ) {
    const subperiods = await this.submissionPeriods.filter(
      async (submissionPeriod) => {
        return (
          (await submissionPeriod.$("strong.govuk-tag").getText()) !=
          submitStatusNot
        );
      }
    );
    return subperiods.map(async (period) => {
      const d = (await period.$("p*=Deadline").getText())
        .replace("Deadline: 11:59pm on", "")
        .trim();
      console.log(d);
      return d;
    });
  }

  async GetFileUploadStatusFirstPeriod() {
    return (await this.submissionPeriods[0].$("strong.govuk-tag")).getText();
  }

  async GetFileUploadStatusSecondPeriodOrganisationDetails() {
    return (await this.submissionPeriods[2].$("strong.govuk-tag")).getText();
  }

  async GetFileUploadStatusSecondPeriodPackagingData() {
    return (await this.submissionPeriods[1].$("strong.govuk-tag")).getText();
  }
}

export default new CommonDataUploadPage();
