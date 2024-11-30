require("dotenv").config({
  path: require("path").resolve(__dirname, "../env/.env"),
});

const express = require("express");
const ParseServer = require("parse-server").ParseServer;

const app = express();

const server = new ParseServer({
  databaseURI: `mongodb://localhost:${process.env.MONGODB_PORT}/parse`,
  cloud: "./cloud/main.js",
  appId: process.env.APPLICATION_ID,
  masterKey: process.env.MASTER_KEY,
  fileKey: "optionalFileKey",
  serverURL: "http://localhost:1337/parse",
});

async function main() {
  await server.start();
}

main();

app.use("/parse", server.app);

app.listen(1337, function () {
  console.log("parse-server-example running on port 1337.");
});
