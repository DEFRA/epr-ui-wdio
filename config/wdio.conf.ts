import type { Options } from "@wdio/types";
import BasePage from "./../pageobjects/base.page.js";
import { DOWNLOAD_FOLDER_PATH, TEST_REPORT_PATH } from "./pathconst.js";
import * as path from "path";
import * as fs from "fs";
import { generate } from "multiple-cucumber-html-reporter";
import cucumberJson from "wdio-cucumberjs-json-reporter";
import CustomWorld from "../utils/CustomWorld.js";

var basePage = new BasePage();

function rmdir(dir: string) {
  var list = fs.readdirSync(dir);
  for (var i = 0; i < list.length; i++) {
    var filename = path.join(dir, list[i]);
    var stat = fs.statSync(filename);

    if (filename == "." || filename == "..") {
      // pass these files
    } else if (stat.isDirectory()) {
      // rmdir recursively
      rmdir(filename);
    } else {
      // rm fiilename
      fs.unlinkSync(filename);
    }
  }
  fs.rmdirSync(dir);
}

export const config: Options.Testrunner = {
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO supports running e2e tests as well as unit and component tests.
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },

  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // of the configuration file being run.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //
  specs: ["./../features/**/*.feature"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  suites: {
    Landing_Pages: ["./../features/Landing_Pages/*.feature"],
    CS_Org_Data_Upload: ["./../features/CS_Org_Data_Upload/*.feature"],
    CS_PoM_Data_Upload: ["./../features/CS_PoM_Data_Upload/*.feature"],
    Producer_Org_Data_Upload: [
      "./../features/Producer_Org_Data_Upload/*.feature",
    ],
    Producer_PoM_Data_Upload: [
      "./../features/Producer_PoM_Data_Upload/*.feature",
    ],
    CS_PoM_Data_Submission: ["./../features/CS_PoM_Data_Submission/*.feature"],
    Producer_PoM_Data_Submission: [
      "./../features/Producer_PoM_Data_Submission/*.feature",
    ],
    Account_Creation: ["./../features/Account_Creation/*.feature"],
    Account_Creation_Inline_Errors: [
      "./../features/Account_Creation/InlineErrors.feature",
    ],
    Delegated_User: ["./../features/Delegated_User/*.feature"],
    Privacy_Cookies_Policy: ["./../features/Privacy_Cookies_Policy/*.feature"],
    CS_Dissociates_From_Producer: ["./../features/CS_Dissociates_From_Producer/*.feature"],
    CS_Org_Data_Submission: ["./../features/CS_Org_Data_Submission/*.feature"],
    Producer_Org_Data_Submission: [
      "./../features/Producer_Org_Data_Submission/*.feature",
    ],
    Regulator_Account_Management: [
      "./../features/Regulator_Account_Management/*.feature",
    ],
    Welsh_Translation: ["./../features/Welsh_Translation/**/*.feature"],
    Welsh_Translation_Account_Creation: [
      "./../features/Welsh_Translation/Account_Creation/*.feature",
    ],
    Welsh_Translation_CS_Dissociates_From_Producer: [
      "./../features/Welsh_Translation/CS_Dissociates_From_Producer/*.feature",
    ],
    Welsh_Translation_Manage_Account: [
      "./../features/Welsh_Translation/Manage_Account/*.feature",
    ],
    Welsh_Translation_Report_Data: [
      "./../features/Welsh_Translation/Report_Data/*.feature",
    ],
    Welsh_Translation_Large_Producers: [
      "./../features/Welsh_Translation/Large_Producers_Public_List/LargeProducersPublicList.feature",
    ],
    Regulator_Response_Applications: [
      "./../features/Regulator_Response/Applications/RejectEnrolmentRequest.feature",
    ],
    Regulator_Response_PoM_Submission: [
      "./../features/Regulator_Response/PoMSubmission/*.feature",
    ],
    RegulatorResponseDB: [
      "./../features/Regulator_Response/DatabaseConnection.feature",
    ],
    E2E_CS: ["./../features/End_to_End_Tests/**/*.feature"],
    E2E_Ltd: ["./../features/End_to_End_Tests/**/LimitedCompanyE2E.feature"],
    E2E_Non_Ltd: [
      "./../features/End_to_End_Tests/**/NonLimitedCompanyE2E.feature",
    ],
    Regulator_Manage_Org_And_Apr_Person: [
      "./../features/Regulator_Manage_Org_And_Apr_Person/*.feature",
    ],
    SeedDev3Database: ["./../features/SeedDatabase/*.feature"],
    RollbackDev2Database: [
      "./../features/RollbackDatabase/RollbackDev2Database.feature",
    ],
    RollbackDev3Database: [
      "./../features/RollbackDatabase/RollbackDev3Database.feature",
    ],
    Large_Producers_Public_List: [
      "./../features/Large_Producers_Public_List/LargeProducersPublicList.feature",
    ],
  },
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //
  capabilities: [
    {
      // capabilities for local browser web tests
      browserName: "chrome", // or "firefox", "microsoftedge", "safari"]
      "goog:chromeOptions": {
        prefs: {
          "download.directory_upgrade": true,
          "download.prompt_for_download": false,
          "download.default_directory": DOWNLOAD_FOLDER_PATH,
          "download.extensions_to_open": "csv",
        },
        // args: ['--headless']
      },
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "silent",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ["chromedriver"],

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "cucumber",
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [
    [
      "cucumberjs-json",
      {
        jsonFolder: "report/json/",
        language: "en",
      },
    ],
  ],
  //
  // If you are using Cucumber you need to specify the location of your step definitions.
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
    retry: 1,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: function (config, capabilities) {
    if (fs.existsSync(TEST_REPORT_PATH)) {
      rmdir(TEST_REPORT_PATH);
    }

    if (fs.existsSync(DOWNLOAD_FOLDER_PATH)) {
      rmdir(DOWNLOAD_FOLDER_PATH);
    }
    fs.mkdirSync(DOWNLOAD_FOLDER_PATH);
  },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {object} specs    specs to be run in the worker process
   * @param  {object} args     object that will be merged with the main configuration once worker is initialized
   * @param  {object} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just after a worker process has exited.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {number} exitCode 0 - success, 1 - fail
   * @param  {object} specs    specs to be run in the worker process
   * @param  {number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {string} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {object}         browser      instance of created browser/device session
   */
  // before: function (capabilities, specs) {
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {string}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // beforeFeature: function (uri, feature) {
  // },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
   * @param {object}                 context  Cucumber World object
   */
  beforeScenario: async function (world, context) {
    await browser.maximizeWindow();
  },
  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   * @param {object}             context  Cucumber World object
   */
  // beforeStep: function (step, scenario, context) {
  // },
  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step             step data
   * @param {IPickle}            scenario         scenario pickle
   * @param {object}             result           results object containing scenario results
   * @param {boolean}            result.passed    true if scenario has passed
   * @param {string}             result.error     error stack if scenario failed
   * @param {number}             result.duration  duration of scenario in milliseconds
   * @param {object}             context          Cucumber World object
   */
  afterStep: async function (step, scenario, result, context) {
    if (!result.passed) {
      cucumberJson.attach(await browser.takeScreenshot(), "image/png");
      cucumberJson.attach(`URL: ${await browser.getUrl()}`, "text/plain");
    }
  },
  /**
   *
   * Runs after a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
   * @param {object}                 result           results object containing scenario results
   * @param {boolean}                result.passed    true if scenario has passed
   * @param {string}                 result.error     error stack if scenario failed
   * @param {number}                 result.duration  duration of scenario in milliseconds
   * @param {object}                 context          Cucumber World object
   */
  afterScenario: async function (this: CustomWorld, world, result, context: CustomWorld) {
    await basePage.signOut(context.isMobile, context.isWelsh);
  },
  /**
   *
   * Runs after a Cucumber Feature.
   * @param {string}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // afterFeature: function (uri, feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {number} result 0 - command success, 1 - command error
   * @param {object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {object} exitCode 0 - success, 1 - fail
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: function (exitCode, config, capabilities, results) {
    /**
     * Generate Test Report.
     * @param options
     */
    generate({
      jsonDir: "report/json/",
      reportPath: "report/report/",
      displayReportTime: true,
      displayDuration: true,
    });

    /**
     * .
     * @param dir
     */
    rmdir(DOWNLOAD_FOLDER_PATH);
  },
  /**
   * Gets executed when a refresh happens.
   * @param {string} oldSessionId session ID of the old session
   * @param {string} newSessionId session ID of the new session
   */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};
