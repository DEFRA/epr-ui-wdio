import type { Options } from "@wdio/types";
import { config as baseConf } from "./wdio.conf.js";
import 'dotenv/config'

const browserstackOptions = {
  testObservability: true,
  buildIdentifier: "#${BUILD_NUMBER}",
  testObservabilityOptions: {
    projectName: "EPR Compatibility Testing",
    buildName: "Regression",
  },
  browserstackLocal: false,
};

const chromeWin11 = {
  browserName: "chrome",
  browserVersion: "latest",
  "bstack:options": {
    os: "Windows",
    osVersion: "11"
  },
};

const firefoxWin11 = {
  browserName: "firefox",
  browserVersion: "latest",
  "bstack:options": {
    os: "Windows",
    osVersion: "11"
  },
};

const edgeWin11 = {
  browserName: "microsoftedge",
  browserVersion: "latest",
  "bstack:options": {
    os: "Windows",
    osVersion: "11"
  },
};

const chromeMacOS = {
  browserName: "chrome",
  browserVersion: "latest",
  "bstack:options": {
    os: "OS X",
    osVersion: "Ventura"
  },
};

const firefoxMacOS = {
  browserName: "firefox",
  browserVersion: "latest",
  "bstack:options": {
    os: "OS X",
    osVersion: "Ventura"
  },
};

const safariMacOS = {
  browserName: "safari",
  browserVersion: "latest",
  "bstack:options": {
    os: "OS X",
    osVersion: "Ventura"
  },
};

const safariIOS = {
  browserName: "safari",
  browserVersion: "latest",
  "bstack:options": {
    platformName: "ios",
    platformVersion : "16",
    deviceName : "iPhone 14"
  }
};

const chromeAndroid = {
  browserName: "chrome",
  browserVersion: "latest",
  "bstack:options": {
    platformName: "Android",
    platformVersion : "12.0",
    deviceName : "Samsung Galaxy S22 Ultra"
  }
};

const samsungInternetAndroid = {
  browserName: "samsung",
  browserVersion: "latest",
  "bstack:options": {
    platformName: "Android",
    platformVersion : "12.0",
    deviceName : "Samsung Galaxy S22 Ultra"
  }
};


export const config: Options.Testrunner = {
  ...baseConf,
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ["./features/step-definitions/**/*.steps.ts"],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
    // <number> Retry if test fails
    retry: 0,
  },
  // Default timeout for all waitFor* commands.
  waitforTimeout: 60000,
  baseUrl: "https://rwd-dev2.azure.defra.cloud",

  user: "",
  key: "",
  // user: process.env.BROWSERSTACK_USERNAME,
  // key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: [["browserstack", browserstackOptions]],
  capabilities: [samsungInternetAndroid]
};
