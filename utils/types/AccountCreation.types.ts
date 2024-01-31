export type AccountCreationAddress = {
  tradingName: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  postcode: string;
};

export type AccountCreationQuestions =
  | "A registered charity?"
  | "Registered with Companies House?"
  | "Companies House number"
  | "Type of organisation"
  | "Trading name"
  | "Role"
  | "Organisation details"
  | "Address1"
  | "Address2"
  | "AddressPostcode"
  | "UK nation"
  | "Name"
  | "Telephone";

export type ValidOrganisationTypes =
  | "Non-UK organisation"
  | "Partnership"
  | "Sole trader"
  | "Unincorporated body"
  | "Other";

export type ValidBusinessBasedCountries =
  | "England"
  | "Scotland"
  | "Wales"
  | "Northern Ireland";

export type ValidOrganisationRoles =
  | "Director"
  | "Company secretary"
  | "Partner"
  | "Member"
  | "None of the above";
