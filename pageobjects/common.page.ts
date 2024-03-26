import { Pages } from "../utils/Pages.js";
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


async verifyPage(page:string) {
  const pageElem = Pages[page];
  if (!pageElem) {
    throw new Error(`The page ${page} is not defined!`);
  }
  return pageElem;
}
}
export default new CommonPage();
