/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class BasePage {
  get lnkEnglish() {
    return $("*=English");
  }

  get lnkWelsh() {
    return $("*=Cymraeg");
  }

  get lnkPrivacyPolicy() {
    return $("*=Privacy");
  }

  get lnkCookiesPolicy() {
    return $("*=Cookies");
  }

  get lnkBack() {
    return $("a.govuk-back-link");
  }

  get lnkBackToHome() {
    return $("*=Back to home");
  }

  get cookiesBanner() {
    return $("div.govuk-cookie-banner");
  }

  get govUkLink() {
    return $("=GOV.UK");
  }

  get pEPRRegulatorsServiceLink() {
    return $("=pEPR: Regulators’ Service");
  }

  get crownCopyrightLink() {
    return $("*=© Crown copyright");
  }

  get accessibilityStatementLink() {
    return $("*=Accessibility statement");
  }

  get openGovernmentLicenceLink() {
    return $("*=Open Government Licence");
  }

  get feedbackLink() {
    return $("*=feedback");
  }
  get lnkLogInToPowerBI(){
    return $("*=log in to Power BI");
  }

  get txtCookiesBannerHeader() {
    return this.cookiesBanner.$("h2.govuk-cookie-banner__heading");
  }

  get txtCookiesBannerText() {
    return this.cookiesBanner.$("p.govuk-body*=analytics cookies");
  }

  get btnAcceptCookies() {
    return $("button*=Accept analytics cookies");
  }

  get btnRejectCookies() {
    return $("button*=Reject analytics cookies");
  }

  get lnkViewCookies() {
    return $("=View cookies");
  }

  get btnHideCookiesMessage() {
    return $("button*=Hide cookie message");
  }

  get lnkAddTeamMember() {
    return $("*=Add team member");
  }

  private get txtSummaryErrorMessage() {
    // Only the Regulator Response pages contain the test data id property
    // return $("[data-testid='error-banner-text']");
    return $(".govuk-error-summary__body ul li a");
  }

  private get txtFieldErrorMessage() {
    return $("p.govuk-error-message");
  }

  private get btnMenu() {
    return $("button=Menu");
  }

  private get lnkSignOutEnglish() {
    return $("=Sign out");
  }

  private get lnkSignOutWelsh() {
    return $("=Allgofnodi");
  }

  private get lnkHome() {
    return $("=Home");
  }

  private get btnContinueEnglish() {
    return $("button*=Continue");
  }

  private get btnContinueWelsh() {
    return $("button*=Parhau");
  }

  private get btnConfirmEnglish() {
    return $("button*=Confirm");
  }

  private get btnConfirmWelsh() {
    return $("button*=Cadarnhau");
  }

  private get txtPageH1Header() {
    return $("h1");
  }

  private get txtPageH3Header() {
    return $("h3");
  }

  private get transferBannerTitle() {
    return $("#govuk-notification-banner-title");
  }

  private get transferBannerContent() {
    return $(".govuk-notification-banner__heading");
  }

  private get txtemailAddress() {
    return $(".govuk-input");
  }

  private get btnSendInvite() {
    return $("button*=Send Invite");
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public async open(path: string) {
    return await browser.url(path);
  }

  public async clickHome(isMobile: boolean) {
    if (isMobile) {
      await (await this.btnMenu).click();
    }
    await (await this.lnkHome).click();
  }

  public async signOut(isMobile: boolean, isWelsh: boolean) {
    if (isMobile) {
      await (await this.btnMenu).click();
    }
    if (isWelsh) {
      await (await this.lnkSignOutWelsh).click();
    } else {
      await (await this.lnkSignOutEnglish).click();
    }
      await browser.reloadSession();
      await browser.maximizeWindow();
  }

  async clickContinue(isWelsh: boolean) {
    !isWelsh
      ? await (await this.btnContinueEnglish).click()
      : await (await this.btnContinueWelsh).click();
  }

  async clickConfirm(isWelsh: boolean) {
    !isWelsh
      ? await (await this.btnConfirmEnglish).click()
      : await (await this.btnConfirmWelsh).click();
  }

  async SummaryErrorMessage() {
    return await this.txtSummaryErrorMessage;
  }

  async FieldErrorMessage() {
    return (await (await this.txtFieldErrorMessage).getText()).split(':')[1].trim();
  }

  async PageH1Header() {
    return (await this.txtPageH1Header).getText();
  }

  async PageH3Header() {
    return (await this.txtPageH3Header).getText();
  }

  async TransferBannerTitle() {
    return (await this.transferBannerTitle).getText();
  }

  async TransferBannerContent() {
    return (await this.transferBannerContent).getText();
  }

  async EnterEmailAddress(emailAddress: string) {
    return (await this.txtemailAddress).setValue(emailAddress);
  }

  async SelectUserAccountPermission(userPermission: string) {
    return (await $(`label*=${userPermission}`)).click();
  }

  async SendInvite() {
    (await this.btnSendInvite).click();
  }
}
