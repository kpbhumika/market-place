require("dotenv").config();

const path = require("path");
const getDatabaseUrl = require("./src/config/getDatabaseUrl.cjs");

const migrationPath = "src/db/migrations";

function getKnexConnection() {
  const nodeEnv = process.env.NODE_ENV || "development";
  const url = getDatabaseUrl(nodeEnv);
  if (
    typeof url === "string" &&
    url &&
    !/localhost|127\.0\.0\.1/.test(url)
  ) {
    return {
      connectionString: url,
      ssl: { rejectUnauthorized: false },
    };
  }
  return url;
}

module.exports = {
  connection: getKnexConnection(),
  client: "pg",
  migrations: {
    directory: migrationPath,
    extension: "cjs",
    stub: path.join(migrationPath, "migration.stub.cjs"),
  },
};
