import BasePage from "../../base.page.js";

class ReportOrganisationDetailsPage extends BasePage {
  get Url() {
    return "/report-data/report-organisation-details";
  }

  get CSH1HeaderWelsh() {
    return "Rhoi gwybod am fanylion eich sefydliad aelodau chi";
  }

  get ProducerH1HeaderWelsh() {
    return "Rhoi gwybod am fanylion eich sefydliad chi";
  }
  
  get btnReportOrganisationDetailsFirstPeriod() {
    return $$(
      "button[type='submit'][name='dataPeriod']"
    )[0] as unknown as WebdriverIO.Element;
  }

  get btnReportOrganisationDetailsSecondPeriod() {
    return $$(
      "button[type='submit'][name='dataPeriod']"
    )[1] as unknown as WebdriverIO.Element;
  }
}

export default new ReportOrganisationDetailsPage();
