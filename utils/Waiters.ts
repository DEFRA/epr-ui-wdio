export async function waitUntilPageLoads(timeout = 60000): Promise<void> {
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout,
      timeoutMsg: `The page didn't load after ${timeout}ms`,
    }
  );
}

export async function waitUntilPageOpened(
  url: string,
  timeout = 60000
): Promise<void> {
  await browser.waitUntil(
    async function () {
      const currentUrl = await browser.getUrl();
      return currentUrl.includes(url);
    },
    {
      timeout,
    }
  );
}

export async function waitUntilElemDisplayed(
  elem: WebdriverIO.Element,
  timeout = 5000
) {
  await browser.waitUntil(
    async function () {
      return elem.isDisplayed();
    },
    {
      timeout,
    }
  );
}

export async function waitAndClick(elem: WebdriverIO.Element, timeout = 5000) {
  await elem.waitForDisplayed({ timeout });
  await elem.waitForClickable();
  await elem.click();
}
