export enum FileErrorMessageEnum {
  EmptyFile = "The selected file is empty",
  WrongFormatFile = "The selected file must be a CSV",
  SelectCSVFile = "Select a CSV file",
  ColumnNamesMightBeMissing = "Column names in the selected file might be missing, incorrect or in the wrong order. Follow the guidance on how to structure your data submission.",
  ColumnHeadingsNotInTheRightPlace = "Your file was not uploaded. This is because the column headings are not in the right place",
  SameOrganisationId = "Organisation ID must be the same as the identification number assigned to your organisation when your account was created",
}

export enum FileErrorMessageEnumInWelsh {
  EmptyFile = "Mae’r ffeil a ddewiswyd yn wag",
  WrongFormatFile = "Rhaid i’r ffeil a ddewiswyd fod yn ffeil CSV",
  SelectCSVFile = "Dewiswch ffeil CSV",
  ColumnNamesMightBeMissing = "Gallai enwau’r colofnau yn y ffeil a ddewiswyd fod ar goll, yn anghywir neu yn y drefn anghywir. Dilynwch y canllawiau ar sut i strwythuro’ch cyflwyniad data.",
  ColumnHeadingsNotInTheRightPlace = "Chafodd eich ffeil mo’i huwchlwytho, a hynny am nad yw penawdau’r colofnau yn y lle cywir.",
  SameOrganisationId = "Rhaid i ID y sefydliad fod yr un fath â’r rhif adnabod a gafodd ei roi i’ch sefydliad pan gafodd eich cyfrif ei greu",
}

export enum FileErrorTitleEnum {
  Problem = "There is a problem",
}

export enum FileErrorTitleEnumInWelsh {
  Problem = "Mae yna broblem",
}

export enum UploadResultHeader {
  Success = "Success",
}

export enum PoMDataUploadResultStatus {
  Uploaded = "Packaging data file uploaded",
}

export enum OrgDataUploadResultStatus {
  Uploaded = "Organisation details uploaded",
}

export enum BrandDataUploadResultStatus {
  Uploaded = "Brand information uploaded",
}

export enum PartnerDataUploadResultStatus {
  Uploaded = "Partner information uploaded",
}

export enum ReviewOrganisationDetailsError {
  CSChooseYesOption = "Select yes if you want to submit your members’ organisation details",
  CSChooseYesOptionInWelsh = "Dewiswch Hoffwn os hoffech chi gyflwyno manylion eich sefydliad aelodau",
  ProducerChooseYesOption = "Select yes if you want to submit your organisation details",
  ProducerChooseYesOptionInWelsh = "Dewiswch hoffwn os hoffech chi gyflwyno manylion eich sefydliad",
  // TODO add message for ProducerChooseYesOptionInWelsh
}

export enum CheckAndSubmitError {
  SelectYes = "Select yes if you want to submit your packaging data",
  SelectYesInWelsh = "Dewiswch ie os hoffech chi gyflwyno’ch data pecynwaith",
}

export enum CheckWarningsError {
  SelectYes = "Select yes if you want to upload a new file",
  SelectYesInWelsh = "Dewiswch ‘hoffwn’ os hoffech chi uwchlwytho ffeil newydd",
}

export enum SubmissionDeclarationError {
  ErrorNoName = "Enter your full name",
  ErrorNoNameInWelsh = "Rhowch eich enw llawn",
  ErrorLongName = "Full name must be 200 characters or less",
  ErrorLongNameInWelsh = "Rhaid i’r enw llawn fod yn 200 neu lai o gymeriadau",
}

export enum SubmissionDeclarationUserName {
  TwoHundredOneCharactersName = "thisNameIsTwoHundredOneCharactersThisNameIsTwoHundredOneCharactersThisNameIsTwoHundredOneCharactersThisNameIsTwoHundredOneCharactersThisNameIsTwoHundredOneCharactersThisNameIsTwoHundredOneCharactersThi",
}
