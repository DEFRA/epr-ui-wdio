import { Sequelize } from "sequelize";
import * as fs from "fs";
import * as path from "path";

class DatabaseConnection {
  ORGANISATION_TEST_DATA_PATH = path.join(
    process.cwd(),
    "/utils/DatabaseQueriesFiles/"
  );
/**
 * InitializeSequelize is connecting to azure portal SQL Database. the 'az login' is required before running any queries locally
 * @param username -- the username value is stored in the pipelines. Comment out if testing locally
 * @param password -- the password value is stored in the pipelines. Comment out if testing locally
 * @returns 
 */
  private async initializeSequelize(
    databaseName: string,
    username: string,
    password: string
  ): Promise<Sequelize> {
    return new Sequelize({
      dialect: "mssql",
      host: "devrwddbssq1401.database.windows.net",
      port: 1433,
      database: databaseName,

      username: username, 
      password: password,
      dialectOptions: {
        authentication: {
          type: "azure-active-directory-default",
          options: {
            trustServerCertificate: false,
            encrypt: true,
          },
        },
      },
    });
  }

  private async ExecuteQuery(
    databseName: string,
    filename: string,
    username: string,
    password: string
  ) {
    const path = `${this.ORGANISATION_TEST_DATA_PATH}${filename}`;
    const longQuery = fs.readFileSync(path, "utf-8");
    const sequelize = await this.initializeSequelize(
      databseName,
      username,
      password
    );
    return await sequelize.query(longQuery);
  }

  async SeedUsersForRegulator(
    databseName: string,
    username: string,
    password: string
  ) {
    try {
      const result = await this.ExecuteQuery(
        databseName,
        "GenerateUsersForDev3.sql",
        username,
        password
      );
      console.log(result);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async RemoveUsersForRegulator(
    databseName: string,
    username: string,
    password: string
  ) {
    try {
      const result = await this.ExecuteQuery(
        databseName,
        "DeleteUsersForDev3.sql",
        username,
        password
      );
      console.log(result);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async RemoveB2CUser(databseName: string, username: string, password: string) {
    try {
      const result = await this.ExecuteQuery(
        databseName,
        "AccountCreationCleanup.sql",
        username,
        password
      );
      console.log(result);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}
export default new DatabaseConnection();
