import BasePage from "../base.page.js";

class JobTitlePage extends BasePage {
  get Url() {
    return "/manage-account/job-title";
  }

  get Title() {
    return "Job title";
  }

  get H1HeaderWelsh() {
    return "Beth yw teitl eu swydd?"
  }

  private get txtJobTitle() {
    return $("#JobTitle")
  }

  async EnterJobTitle(jobTitle: string) {
    return (await this.txtJobTitle).setValue(jobTitle)
  }
}

export default new JobTitlePage();
