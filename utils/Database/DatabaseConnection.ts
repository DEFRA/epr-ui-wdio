import { Sequelize } from "sequelize";
import * as fs from "fs";
import * as path from "path";

class DatabaseConnection {
  ORGANISATION_TEST_DATA_PATH = path.join(
    process.cwd(),
    "/utils/DatabaseQueriesFiles/"
  );

  private async initializeSequelize(databaseName: string): Promise<Sequelize> {
    return new Sequelize({
      dialect: "mssql",
      host: "devrwddbssq1401.database.windows.net",
      port: 1433,
      database: databaseName,
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

  private async ExecuteQuery(databseName: string, filename: string) {
    const path = `${this.ORGANISATION_TEST_DATA_PATH}${filename}`;
    const longQuery = fs.readFileSync(path, "utf-8");
    const sequelize = await this.initializeSequelize(databseName);
    return await sequelize.query(longQuery);
  }

  async SeedUsersForRegulator(databseName: string) {
    try {
      const result = await this.ExecuteQuery(
        databseName,
        "GenerateUsersForDev3.sql"
      );
      console.log(result);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async RemoveUsersForRegulator(databseName: string) {
    try {
      const result = await this.ExecuteQuery(
        databseName,
        "DeleteUsersForDev3.sql"
      );
      console.log(result);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async RemoveB2CUser(databseName: string) {
    try {
      const result = await this.ExecuteQuery(
        databseName,
        "AccountCreationCleanup.sql"
      );
      console.log(result);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}
export default new DatabaseConnection();
