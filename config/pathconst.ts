import * as path from "path";
import { Environment } from "../utils/types/Environment.types.js";

export const DOWNLOAD_FOLDER_PATH = path.join(process.cwd(), "/downloads");
export const REPORT_DATA_BASE_PAGE = "/report-data";
export const CREATE_ACCOUNT_BASE_PAGE = "/create-account";
export const MANAGE_ACCOUNT_BASE_PAGE = "/manage-account/manage";
export const REGULATORS_HOME_PAGE = "/regulators/home";
export const REGULATORS_ACCOUNT_MANAGE_PAGE = "/regulators/manage-account";
export const REGULATORS_APPLICATIONS_PAGE ="/regulators/applications";

export const POM_DATA_ERROR_REPORTS_PATH = path.join(
  process.cwd(),
  "/testdata/PoMDataUpload/existingErrorReports/"
);

export const POM_TEST_DATA_PATH = path.join(
  process.cwd(),
  "/testdata/PoMDataUpload/testData/"
);

export const ORGANISATION_TEST_DATA_PATH = path.join(
  process.cwd(),
  "/testdata/OrgDataUpload/testData/"
);

export const TEST_REPORT_PATH = path.join(process.cwd(), "/report");

export function ENV_CONFIG_FILE(environment: Environment) {
  return path.join(process.cwd(), "/config", `${environment}.env`);
}
