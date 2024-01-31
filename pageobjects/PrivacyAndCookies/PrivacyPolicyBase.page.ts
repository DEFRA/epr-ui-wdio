import BasePage from "../base.page.js";

export default class PrivacyPolicyBasePage extends BasePage {
  private get txtPageTitle() {
    return $("h1");
  }

  private get txtSection1() {
    return $("h2=Who collects your personal data");
  }

  private get txtSection2() {
    return $("h2=What personal data we collect and how it is used");
  }

  private get txtSection3() {
    return $("h2=Lawful basis for processing your personal data");
  }

  private get txtSection4() {
    return $("h2=Consent to process your personal data");
  }

  private get txtSection5() {
    return $("h2=Who we share your personal data with");
  }

  private get txtSection6() {
    return $("h2=How long we hold personal data");
  }

  private get txtSection7() {
    return $("h2=What happens if you do not provide the personal data");
  }

  private get txtSection8() {
    return $("h2=Use of automated decision-making or profiling");
  }

  private get txtSection9() {
    return $("h2=Transfer of your personal data outside of the UK");
  }

  private get txtSection10() {
    return $("h2=Your rights");
  }

  private get txtSection11() {
    return $("h2=Complaints");
  }

  private get txtSection12() {
    return $("h2=Defra’s personal information charter");
  }

  private get txtSection13() {
    return $("h2=Changes to this policy");
  }

  async PageTitle() {
    return await this.txtPageTitle;
  }

  async Section1() {
    return await this.txtSection1;
  }

  async Section2() {
    return await this.txtSection2;
  }

  async Section3() {
    return await this.txtSection3;
  }

  async Section4() {
    return await this.txtSection4;
  }

  async Section5() {
    return await this.txtSection5;
  }

  async Section6() {
    return await this.txtSection6;
  }

  async Section7() {
    return await this.txtSection7;
  }

  async Section8() {
    return await this.txtSection8;
  }

  async Section9() {
    return await this.txtSection9;
  }

  async Section10() {
    return await this.txtSection10;
  }

  async Section11() {
    return await this.txtSection11;
  }

  async Section12() {
    return await this.txtSection12;
  }

  async Section13() {
    return await this.txtSection13;
  }
}
