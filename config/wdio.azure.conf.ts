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
        args: ["--headless"],
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
