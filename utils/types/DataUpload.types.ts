export type OrgDataFileNames =
  | "BrandData"
  | "EmptyFile"
  | "PartnerData"
  | "RegData_LLP_secondary"
  | "RegData_OrgType_LLP"
  | "RegData_OrgType_LPA"
  | "RegData_OrgType_PAR"
  | "RegData_PacAct_primary"
  | "RegData_PacAct_secondary"
  | "RegDataFile"
  | "OrgDataWrongFormatFile"
  | "BrandDataWrongFormatFile"
  | "PartnerDataWrongFormatFile"
  | "OrganisationDetailsLessColumns"
  | "OrganisationDetailsMoreColumns";

export type ReviewOrgDataTableFields =
  | "Organisation details"
  | "Brand information"
  | "Partner information";

export type PoMDataFileNames =
  | "CSInvalidDataCombinationUpload"
  | "CSInvalidOrganisationId"
  | "CSInvalidOrganisationIdAnotherCompany"
  | "CSSmallInvalidFile"
  | "EmptyFile"
  | "ProducerInvalidDataCombinationUpload"
  | "ProducerSmallInvalidFile"
  | "CSSmallValidFile"
  | "ProducerSmallValidFile"
  | "CSValidDataUpload"
  | "ProducerValidDataUpload"
  | "WrongFormatFile"
  | "EmptyFileFromExcel"
  | "CSInvalidDataCombinationUploadWelsh"
  | "CSInvalidOrganisationIdWelsh"
  | "CSInvalidOrganisationIdAnotherCompanyWelsh"
  | "ProducerInvalidDataCombinationUploadWelsh"
  | "InvalidFileLessColumns"
  | "InvalidFileMissingHeaders"
  | "InvalidFileIncorrectColumnName"
  | "ProducerInvalidOrganisationId"
  | "ProducerInvalidOrganisationIdAnotherCompany"
  | "CSSmallFileContainingWarning60"
  | "CSSmallFileContainingWarning60Welsh"
  | "ProducerSmallFileContainingWarning60"
  | "ProducerSmallFileContainingWarning60Welsh";

export type PoMDataUploadContextElems = "uploadSuccessURL";
