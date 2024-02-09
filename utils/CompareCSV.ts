import { createObjectCsvWriter, createArrayCsvWriter } from "csv-writer";
import { promises as fs } from "fs";
import {
  POM_TEST_DATA_PATH,
  POM_DATA_ERROR_REPORTS_PATH,
} from "../config/pathconst.js";

/**
 * Compares two CSV files and returns true if they are equal, ignoring the specified columns.
 *
 * @param file1 Path to the first CSV file
 * @param file2 Path to the second CSV file
 * @param ignoreColumns Array of column names to ignore
 * @returns A Promise that resolves to true if the files are equal, false otherwise
 */
export async function compareCSVFiles(
  file1: string,
  file2: string,
  ignoreColumns: string[]
): Promise<boolean> {
  const csvWriter = createObjectCsvWriter({
    path: "temp.csv",
    header: [],
  });

  // Read the contents of both files
  const [contents1, contents2] = await Promise.all([
    fs.readFile(file1, "utf-8"),
    fs.readFile(file2, "utf-8"),
  ]);

  // Parse the CSV data into arrays of rows
  const data1 = contents1
    .trim()
    .split("\n")
    .map((line) => line.split(","));
  const data2 = contents2
    .trim()
    .split("\n")
    .map((line) => line.split(","));

  // Remove the ignored columns from each row
  const filteredData1 = data1.map((row) =>
    row.filter((_, index) => !ignoreColumns.includes(String(index)))
  );
  const filteredData2 = data2.map((row) =>
    row.filter((_, index) => !ignoreColumns.includes(String(index)))
  );

  // Compare the filtered data
  const isEqual =
    JSON.stringify(filteredData1) === JSON.stringify(filteredData2);

  // Write the filtered data to a temporary CSV file
  await csvWriter.writeRecords(
    filteredData1.map((row) =>
      row.reduce((acc, cur, index) => ({ ...acc, [String(index)]: cur }), {})
    )
  );

  return isEqual;
}

export async function replaceTestDataOrganisationIdWithPlaceholder(
  fileName: string,
  organisationId: string
) {
  // Read the content of file
  let pathToFile: string | undefined;
  switch (fileName) {
    case "CSInvalidDataCombinationUpload":
    case "CSInvalidOrganisationId":
    case "CSInvalidOrganisationIdAnotherCompany":
    case "CSInvalidDataCombinationUploadWelsh":
    case "CSInvalidOrganisationIdWelsh":
    case "CSInvalidOrganisationIdAnotherCompanyWelsh":
    case "CSSmallFileContainingWarning60":
    case "CSSmallFileContainingWarning60Welsh":
    case "CSSmallInvalidFile":
    case "CSSmallValidFile":
    case "CSValidDataUpload":
      pathToFile = POM_TEST_DATA_PATH + `ComplianceScheme/${fileName}.csv`;
      break;
    case "ProducerInvalidDataCombinationUpload":
    case "ProducerSmallInvalidFile":
    case "ProducerInvalidDataCombinationUploadWelsh":
    case "ProducerSmallValidFile":
    case "ProducerValidDataUpload":
    case "ProducerSmallFileContainingWarning60":
    case "ProducerSmallFileContainingWarning60Welsh":
      pathToFile = POM_TEST_DATA_PATH + `DirectProducer/${fileName}.csv`;
      break;
    default:
      throw new Error(`The ${pathToFile as string} path is not defined!`);
  }
  const currentFile = await fs.readFile(pathToFile as string, "utf-8");

  await fs.writeFile(
    pathToFile as string,
    // Parse the CSV data into arrays of rows
    currentFile
      .trim()
      .split("\n")
      // Update organisation id for eash record
      .map((elem, index) =>
        index > 0 ? elem.replaceAll(organisationId, "org_id_placeholder") : elem
      )
      .join("\n"),
    "utf-8"
  );
}

export async function replaceExistReportOrganisationIdWithPlaceholder(
  fileName: string,
  organisationId: string
) {
  // Read the content of file
  let pathToFile: string | undefined;
  switch (fileName) {
    case "CSInvalidDataCombinationUpload":
    case "CSInvalidOrganisationId":
    case "CSInvalidOrganisationIdAnotherCompany":
    case "CSInvalidDataCombinationUploadWelsh":
    case "CSInvalidOrganisationIdWelsh":
    case "CSInvalidOrganisationIdAnotherCompanyWelsh":
    case "CSSmallFileContainingWarning60":
    case "CSSmallFileContainingWarning60Welsh":
    case "CSSmallInvalidFile":
    case "CSSmallValidFile":
    case "CSValidDataUpload":
      pathToFile =
        POM_DATA_ERROR_REPORTS_PATH + `ComplianceScheme/${fileName}.csv`;
      break;
    case "ProducerInvalidDataCombinationUpload":
    case "ProducerSmallInvalidFile":
    case "ProducerInvalidDataCombinationUploadWelsh":
    case "ProducerSmallValidFile":
    case "ProducerValidDataUpload":
    case "ProducerSmallFileContainingWarning60":
    case "ProducerSmallFileContainingWarning60Welsh":
      pathToFile =
        POM_DATA_ERROR_REPORTS_PATH + `DirectProducer/${fileName}.csv`;
      break;
    default:
      throw new Error(`The ${pathToFile as string} path is not defined!`);
  }
  const currentFile = await fs.readFile(pathToFile as string, "utf-8");

  await fs.writeFile(
    pathToFile as string,
    // Parse the CSV data into arrays of rows
    currentFile
      .trim()
      .split("\n")
      // Update organisation id for eash record
      .map((elem, index) =>
        index > 0 ? elem.replaceAll(organisationId, "org_id_placeholder") : elem
      )
      .join("\n"),
    "utf-8"
  );
}

export async function replaceTestDataPlaceholderWithOrganisationId(
  fileName: string,
  organisationId: string
) {
  // Read the content of file
  let pathToFile: string | undefined;
  switch (fileName) {
    case "CSInvalidDataCombinationUpload":
    case "CSInvalidOrganisationId":
    case "CSInvalidOrganisationIdAnotherCompany":
    case "CSInvalidDataCombinationUploadWelsh":
    case "CSInvalidOrganisationIdWelsh":
    case "CSInvalidOrganisationIdAnotherCompanyWelsh":
    case "CSSmallFileContainingWarning60":
    case "CSSmallFileContainingWarning60Welsh":
    case "CSSmallInvalidFile":
    case "CSSmallValidFile":
    case "CSValidDataUpload":
      pathToFile = POM_TEST_DATA_PATH + `ComplianceScheme/${fileName}.csv`;
      break;
    case "ProducerInvalidDataCombinationUpload":
    case "ProducerSmallInvalidFile":
    case "ProducerInvalidDataCombinationUploadWelsh":
    case "ProducerSmallValidFile":
    case "ProducerValidDataUpload":
    case "ProducerSmallFileContainingWarning60":
    case "ProducerSmallFileContainingWarning60Welsh":
      pathToFile = POM_TEST_DATA_PATH + `DirectProducer/${fileName}.csv`;
      break;
    default:
      throw new Error(`The ${pathToFile as string} path is not defined!`);
  }
  const currentFile = await fs.readFile(pathToFile as string, "utf-8");

  await fs.writeFile(
    pathToFile as string,
    // Parse the CSV data into arrays of rows
    currentFile
      .trim()
      .split("\n")
      // Update organisation id for eash record
      .map((elem, index) =>
        index > 0 ? elem.replaceAll("org_id_placeholder", organisationId) : elem
      )
      .join("\n"),
    "utf-8"
  );
}

export async function replaceExistReportPlaceholderWithOrganisationId(
  fileName: string,
  organisationId: string
) {
  // Read the content of file
  let pathToFile: string | undefined;
  switch (fileName) {
    case "CSInvalidDataCombinationUpload":
    case "CSInvalidOrganisationId":
    case "CSInvalidOrganisationIdAnotherCompany":
    case "CSInvalidDataCombinationUploadWelsh":
    case "CSInvalidOrganisationIdWelsh":
    case "CSInvalidOrganisationIdAnotherCompanyWelsh":
    case "CSSmallFileContainingWarning60":
    case "CSSmallFileContainingWarning60Welsh":
    case "CSSmallInvalidFile":
      pathToFile =
        POM_DATA_ERROR_REPORTS_PATH + `ComplianceScheme/${fileName}.csv`;
      break;
    case "ProducerInvalidDataCombinationUpload":
    case "ProducerSmallInvalidFile":
    case "ProducerInvalidDataCombinationUploadWelsh":
    case "ProducerSmallFileContainingWarning60":
    case "ProducerSmallFileContainingWarning60Welsh":
      pathToFile =
        POM_DATA_ERROR_REPORTS_PATH + `DirectProducer/${fileName}.csv`;
      break;
    default:
      throw new Error(`The ${pathToFile as string} path is not defined!`);
  }
  const currentFile = await fs.readFile(pathToFile as string, "utf-8");

  await fs.writeFile(
    pathToFile as string,
    // Parse the CSV data into arrays of rows
    currentFile
      .trim()
      .split("\n")
      // Update organisation id for eash record
      .map((elem, index) =>
        index > 0 ? elem.replaceAll("org_id_placeholder", organisationId) : elem
      )
      .join("\n"),
    "utf-8"
  );
}
