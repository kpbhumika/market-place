import "./boot.js";
import getNodeEnv from "./config/getNodeEnv.js";
import getDatabaseUrl from "./config/getDatabaseUrl.cjs";

// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const development = {
  awsAccess: { key: process.env.AWS_ACCESS_KEY },
  awsSecret: { key: process.env.AWS_SECRET_KEY },
  s3Bucket: { name: process.env.S3_BUCKET_DEVELOPMENT },
  databaseUrl: getDatabaseUrl(getNodeEnv()),
  nodeEnv: getNodeEnv(),
  session: { secret: process.env.SESSION_SECRET },
  web: { host: process.env.HOST || "0.0.0.0", port: process.env.PORT || 3000 },
  openaiOrganization: "org-LZGOFnb8mEb9561Wh0HqQfO3",
  openaiApiKey: process.env.OPENAI_API_KEY,

}

const test = { ...development }

const production = {
  ...development,
  s3Bucket: { name: process.env.S3_BUCKET_PRODUCTION }
}

const tempConfig = { development, test, production }
export const config = tempConfig[getNodeEnv()]

export default {
  nodeEnv: getNodeEnv(),
  session: { secret: process.env.SESSION_SECRET },
  databaseUrl: getDatabaseUrl(getNodeEnv()),
  web: { host: process.env.HOST || "0.0.0.0", port: process.env.PORT || 3000 }
};

