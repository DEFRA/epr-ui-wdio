### 1. Installation

1. Download and install `Node.JS` - https://nodejs.org/en/.
   Select the Long Term Support (LTS) version.

2. Install project dependencies: `npm i`.

   Upon installing the project dependencies, they are saved in `./node_modules` folder.

   This folder is not pushed to source control and is handled in `./gitignore`, so nothing additional is required.

### 2. Project Structure

    .
    ├── config              # B2C User Config
    ├── features            # Feature files
      ├── './'              # Organised based on functionality
      ├── step-definitions  # All Step definitions
    ├── pageobjects         # Page Objects
      ├── './'              # Organised based on functionality
    ├── testdata            # Files for testing Organisation and PoM data uploads
    ├── testdata_originals  # Files containing a detailed description of the applied validation rules. Based on these files, other files are created in the "testdata" folder
    ├── utils               # Tools and utilities
        ├── Assert.utils.ts # Contains methods to assert pages in Account Creation and Delegated User Journeys
        ├── CompateCSV.ts # Contains method to compate the contents of 2 CSV files. Used for checking invalid PoM error report
        ├── CustomWorld.ts  # Stores data in context to set and get between test steps
        ├── types           # Used to allow type safety in steps and page objects
    └── README.md

### 3. Run all tests

#### <u>Dev1</u>

To execute all tests in Dev1: `npx wdio ./config/wdio.dev1.conf.ts`.

`./config/wdio.dev1.conf.ts` is a config file which overrides the **BaseUrl** property from the config file: `./config/wdio.conf.ts`

#### <u>Dev4</u>

To execute all tests in Dev4: `npx wdio ./config/wdio.dev4.conf.ts`.

`./config/wdio.dev4.conf.ts` is a config file which overrides the **BaseUrl** property from the config file: `./config/wdio.conf.ts`

### 4. Run tests by Suite

SuiteNames are defined as arrays in `./config/wdio.conf.ts`, within the **suites** object.

The Suites are used to configure which feature(s) are part of them and to be run.

New test suites should be added here.

#### <u>Dev1</u>

To execute a specific suite(s) in Dev1, for example: tests just for Team 1, 2 or 3:
`npx wdio ./config/wdio.dev1.conf.ts --suite {SuiteName}`.

Example: `npx wdio ./config/wdio.dev1.conf.ts --suite landingPages`

#### <u>Dev4</u>

To execute a specific suite(s) in Dev4, for example: tests just for Team 1, 2 or 3:
`npx wdio ./config/wdio.dev4.conf.ts --suite {SuiteName}`.

Example: `npx wdio ./config/wdio.dev4.conf.ts --suite landingPages`

### 5. Run tests by Tag

Tags are used within feature files to group scenarios together and allow the user to only run a specific number of scenarios associated with a particular tag. They are defined by using the `@` symbol, followed by the name of the tag.

#### <u>Dev1</u>

To execute a specific tag in Dev1, for example: tests just for a Limited Company within the Account_Creation suite:
`npx wdio ./config/wdio.dev1.conf.ts --cucumberOpts.tagExpression='@{TagName}'`.

Example: `npx wdio ./config/wdio.dev1.conf.ts --cucumberOpts.tagExpression='@LimitedCompany'`

#### <u>Dev4</u>

To execute a specific tag in Dev4, for example: tests just for a Limited Company within the Account_Creation suite:
`npx wdio ./config/wdio.dev4.conf.ts --cucumberOpts.tagExpression='@{TagName}'`.

Example: `npx wdio ./config/wdio.dev4.conf.ts --cucumberOpts.tagExpression='@LimitedCompany'`

### 6. BrowserStack

To run the tests in BrowserStack please follow these steps:

1. Add your BrowserStack credentials to the file named: `.env` which is in the root of the project. The properties `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` must be added
2. Add the browser and device capabilities(s) in the file `wdio.browserstack.conf.ts`, which is also in the root of the project. eg: `capabilities: [chromeWin11, firefoxWin11, edgeWin11]`
3. Set the BaseUrl in `wdio.browserstack.conf.ts`
4. To execute in BrowserStack:
   `npx wdio ./config/wdio.browserstack.conf.ts`, or
   `npx wdio ./config/wdio.browserstack.conf.ts --suite {SuiteName}`, or
   `npx wdio ./config/wdio.browserstack.conf.ts --cucumberOpts.tagExpression='@{TagName}`

### 7. Test Report

Report type(s) are defined as arrays in `./config/wdio.conf.ts`, within the **Reporters** object.

`HTML` report will be created following each test run, which will be inside the './report/report' folder.
The report will include all features executed.

### 8. Logs

Test execution logs will be introduced in the near future.

### 9. Environment Variables

Environment Variables will be introduced in the near future.

### 10. Linting

Linting will be used to enforce consistant coding styles. Will be introduced in the near future and will use `ESLint`.

### 8. Contributing to this project
Please read the [contribution guidelines](CONTRIBUTING.md) before submitting a pull request.

### 9. Licence
[Licence information](LICENCE.md).