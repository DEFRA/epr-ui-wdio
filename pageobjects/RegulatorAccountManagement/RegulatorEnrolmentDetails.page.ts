import BasePage from "../base.page.js";

class RegulatorEnrolmentDetailsPage extends BasePage {
  get Url() {
    return "/regulators/enrolment-requests";
  }

  get Title() {
    return "Enrolment Requests - GOV.UK";
  }

  private get personStatus() {
    return $("strong=Accepted");
  }

  private get transferLink() {
    return $("*=Transfer to another environmental regulator");
  }

  private get btnAcceptApprovedPerson() {
    return $("//div[h3[contains(text(), 'Approved person')]]/form/div/div[2]/div[2]/button[1]")
  }

  private get btnRejectApprovedPerson() {
    return $("//div[h3[contains(text(), 'Approved person')]]/form/div/div[2]/div[2]/button[2]")
  }

  private get btnDelegatedPerson() {
    return $$(
      "//div[h3[contains(text(), 'Delegated person')]]/form/div/div[2]/div/button"
    );
  }

  private get btnAcceptDelegatedPerson() {
    return this.btnDelegatedPerson[0] as unknown as WebdriverIO.Element;
  }

  private get btnRejectDelegatedPerson() {
    return this.btnDelegatedPerson[1] as unknown as WebdriverIO.Element;
  }

  private get companiesHouseNumber() {
    return $("//*[@id='main-content']/div[1]/div/div[3]/p");
  }

 get companiesHouseRegisterLink(){
    return $("*=View on Companies House register");
  }
get delegatedPersonHeader(){
  return $("h3=Delegated person")
}

get approvedPersonHeader(){
  return $("h3=Approved person")
}

async getApprovedPersonHeader(){
  return (await this.approvedPersonHeader);
}

async getDelegatedPersonHeader(){
  return (await this.delegatedPersonHeader);
}
  async getCompaniesHouseRegisterLink(){
    return (this.companiesHouseRegisterLink);
  }

  async getCompaniesHouseNumber() {
    return (await this.companiesHouseNumber).getText();
  }

  async getAcceptedStatus() {
    return await this.personStatus.getText();
  }

  async AcceptButtonForApprovedPerson() {
    return this.btnAcceptApprovedPerson;
  }

  async AcceptButtonForDelegatedPerson() {
    return this.btnAcceptDelegatedPerson;
  }

  async clickAcceptButtonForApprovedPerson() {
    await this.btnAcceptApprovedPerson.click();
  }

  async clickAcceptButtonForDelegatedPerson() {
    await this.btnAcceptDelegatedPerson.click();
  }

  async RejectButtonForApprovedPerson() {
    return this.btnRejectApprovedPerson;
  }

  async RejectButtonForDelegatedPerson() {
    return this.btnRejectDelegatedPerson;
  }

  async clickRejectButtonForApprovedPerson() {
    await this.btnRejectApprovedPerson.click();
  }

  async clickRejectButtonForDelegatedPerson() {
    await this.btnRejectDelegatedPerson.click();
  }

  async clickTransferLink() {
    (await this.transferLink).click();
  }
}
export default new RegulatorEnrolmentDetailsPage();
