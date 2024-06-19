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

  get cookiesLnk() {
    return $("=Cookies");
  }

  get cookiesLinkWelsh() {
    return $("=Cwcis");
  }

  get privacyLnk() {
    return $("=Privacy");
  }

  get privacyLnkWelsh() {
    return $("=Preifatrwydd");
  }

  get accessibilityStatementLinkWelsh() {
    return $("=Datganiad hygyrchedd");
  }

  get footer() {
    return $("footer div.govuk-footer__meta-item--grow");
  }

  get getHelpHeader() {
    return this.footer.$("h2");
  }

  get emailLink() {
    return this.footer.$('a[href*="mailto"]');
  }

  email(tag:string) {
    return this.footer.$(`${tag}*=Email`);
  }
  
   phoneNumber(tag:string) {
    return this.footer.$(`${tag}*=Telephone`)
  }

   openingTimes(tag:string) {
    return this.footer.$(`${tag}*=Monday to Friday`);
  }

  emailWelsh(tag:string) {
    return this.footer.$(`${tag}*=Ebost`);
  }

  phoneNumberWelsh(tag:string) {
    return this.footer.$(`${tag}*=Ffôn`)
  }

   openingTimesWelsh(tag:string) {
    return this.footer.$(`${tag}*=Dydd Llun i ddydd Gwener`);
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
  get lnkLogInToPowerBI() {
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

  get btnAcceptCookiesWelsh() {
    return $("button*=Derbyn cwcis dadansoddeg");
  }

  get btnRejectCookies() {
    return $("button*=Reject analytics cookies");
  }

  get btnRejectCookiesWelsh() {
    return $("button*=Gwrthod cwcis dadansoddeg");
  }

  get lnkViewCookies() {
    return $("=View cookies");
  }

  get lnkViewCookiesWelsh() {
    return $("=Gweld cwcis");
  }

  get btnHideCookiesMessage() {
    return $("button*=Hide cookie message");
  }

  get btnHideCookiesMessageWelsh() {
    return $("button*=Cuddio’r neges ynghylch cwcis");
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
    return $(".govuk-error-message");
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
   const errorMessageElement = await this.txtFieldErrorMessage
   const errorMessageText = await errorMessageElement.getText()
   const shouldTrim = await errorMessageElement.getTagName()==='p'
   return shouldTrim ? errorMessageText.split(':')[1].trim() : errorMessageText;
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
  get searchQuery() {
    return $("#SearchTerm");
  }
  async enterSearchQuery(searchValue: string) {
    return await (await this.searchQuery).setValue(searchValue);
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
