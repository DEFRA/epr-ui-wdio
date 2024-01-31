import cucumberJson from "wdio-cucumberjs-json-reporter";
import BasePage from "./base.page.js";

class LoginPage extends BasePage {
  private get loginEmailField() {
    return $("input#email");
  }

  private get loginPasswordField() {
    return $("input#password");
  }

  private get loginButton() {
    return $("button#next");
  }

  get userName() {
    return $("li[class*='account-navbar__links-item']")
  }
  async login(username: string, password: string) {
    await (await this.loginEmailField).waitForDisplayed();
    await (await this.loginEmailField).setValue(username);
    await (await this.loginPasswordField).waitForDisplayed();
    await (await this.loginPasswordField).setValue(password);
    await (await this.loginButton).waitForDisplayed();
    await (await this.loginButton).click();
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }
}

export default new LoginPage();
