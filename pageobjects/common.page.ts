import BasePage from "./base.page.js";
import cucumberJson from "wdio-cucumberjs-json-reporter";

class CommonPage extends BasePage {
  async takeScreenshot() {
    cucumberJson.attach(await browser.takeScreenshot(), "image/png");
  }

  async takeElemScreenshot(elem: WebdriverIO.Element) {
    cucumberJson.attach(
      await browser.takeElementScreenshot(elem.elementId),
      "image/png"
    );
  }
}

export default new CommonPage();
