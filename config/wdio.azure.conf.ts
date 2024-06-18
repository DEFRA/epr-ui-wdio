import type { Options } from "@wdio/types";
import { DOWNLOAD_FOLDER_PATH } from "./pathconst.js";
import { config as baseConf } from "./wdio.conf.js";

export const config: Options.Testrunner = {
  ...baseConf,
  capabilities: [
    {
      // capabilities for local browser web tests
      browserName: "chrome", // or "firefox", "microsoftedge", "safari"]
      "goog:chromeOptions": {
        args: [
                "--headless",
                "--proxy-server='direct://'",
                '--proxy-bypass-list=*',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--disable-setuid-sandbox',
                '--no-first-run',
                '--no-sandbox',
                '--no-zygote',
                '--single-process',
                '--ignore-certificate-errors',
                '--ignore-certificate-errors-spki-list',
                '--enable-features=NetworkService'],
        prefs: {
          "download.directory_upgrade": true,
          "download.prompt_for_download": false,
          "download.default_directory": DOWNLOAD_FOLDER_PATH,
          "download.extensions_to_open": "csv",
        },
      },
    },
  ],
  logLevel: "error",
};
