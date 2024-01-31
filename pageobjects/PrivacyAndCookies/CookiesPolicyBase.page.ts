import BasePage from "../base.page.js";

export default class CookiesPolicyBasePage extends BasePage {
  private get txtPageTitle() {
    return $("h1");
  }
  å
  private get txtEssentialCookiesHeader() {
    return $("h2=Essential cookies");
  }

  private get tblEssentialCookies() {
    return $("table").$("caption=Essential cookies we use");
  }

  private get tblRowsEssentialCookies() {
    return this.tblEssentialCookies.parentElement().$$("tbody tr th");
  }

  private get txtAnalyticalCookiesHeader() {
    return $("h2=Analytics cookies (optional)");
  }

  private get tblAnalyticalCookies() {
    // return $("table").$("caption=Analytics cookies we use");
    return $("//table/caption[text()='Analytics cookies we use']")
  }

  private get tblRowsAnalyticalCookies() {
    return this.tblAnalyticalCookies.parentElement().$$("tbody tr th");
  }

  private get txtAcceptAnalyticalCookiesQuestion() {
    return $("legend.govuk-fieldset__legend");
  }

  get rdoBtnAcceptAnalyticalCookiesYes() {
    return $("input[value='accept']");
  }

  get rdoBtnAcceptAnalyticalCookiesNo() {
    return $("input[value='reject']");
  }

  get btnSaveCookieSettings() {
    return $("button*=Save cookie settings");
  }

  async PageTitle() {
    return await this.txtPageTitle;
  }

  async EssentialCookiesHeader() {
    return await this.txtEssentialCookiesHeader;
  }

  async EssentialCookiesTable() {
    return await this.tblEssentialCookies;
  }

  async EssentialCookiesTableRows() {
    return await this.tblRowsEssentialCookies;
  }

  async AnalyticalCookiesHeader() {
    return await this.txtAnalyticalCookiesHeader;
  }

  async AnalyticalCookiesTable() {
    return await this.tblAnalyticalCookies;
  }

  async AnalyticalCookiesTableRows() {
    return await this.tblRowsAnalyticalCookies;
  }

  async AcceptAnalyticalCookiesQuestion() {
    return await this.txtAcceptAnalyticalCookiesQuestion;
  }

  async SaveCookieSettings() {
    return (await this.btnSaveCookieSettings).click();
  }    
}