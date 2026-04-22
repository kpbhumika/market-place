const localDatabaseUrls = {
  development: "postgres://postgres:postgres@localhost:5432/market-place_development",
  test: "postgres://postgres:postgres@localhost:5432/market-place_test",
  e2e: "postgres://postgres:postgres@localhost:5432/market-place_e2e",
};

const getDatabaseUrl = (nodeEnv) => {
  if (Object.prototype.hasOwnProperty.call(localDatabaseUrls, nodeEnv)) {
    return localDatabaseUrls[nodeEnv];
  }
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      `DATABASE_URL must be set when NODE_ENV is "${nodeEnv}" (local Postgres is only used for development, test, and e2e).`
    );
  }
  return url;
};

module.exports = getDatabaseUrl;
