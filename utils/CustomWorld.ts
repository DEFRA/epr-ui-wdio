import { World, setWorldConstructor } from "@wdio/cucumber-framework";
import { AccountCreationQuestions } from "./types/AccountCreation.types";
import { DelegatedUserQuestions } from "./types/AccountMaintenance.types";
import { LandingPageContextElems } from "./types/LandingPages.types";
import { PoMDataUploadContextElems } from "./types/DataUpload.types";
import { Environment } from "../utils/types/Environment.types";
import { Cookie } from "@wdio/protocols";
import { SecretClient } from "@azure/keyvault-secrets";
import { AddNewApprovedPersonQuestions } from "./types/Regulator.types";

export default class CustomWorld extends World {
  scenarioDataAccCreation: Map<AccountCreationQuestions, string>;
  scenarioDataLandingPgs: Map<LandingPageContextElems, string>;
  scenarioDataPoMDataUpload: Map<PoMDataUploadContextElems, string>;
  scenarioDataAccManagement: Map<DelegatedUserQuestions, string>;
  scenarioDataFilterAppications: Map<string, number>;
  scenarioDataCSDissociatesFromProducers: Number;
  scenarioAddNewApprovedPerson: Map<AddNewApprovedPersonQuestions, string>;
  environment: Environment;
  isMobile: boolean;
  cookies: Map<string, Cookie>;
  isWelsh: boolean;
  databaseName: string;
  secretClient: SecretClient
}

setWorldConstructor(CustomWorld);
