const fs = require("fs");
const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function writeParseConfig(reset = false) {
  const parseConfig = JSON.parse(fs.readFileSync(".parse.local", "utf8"));
  parseConfig.applications.visualizaai.applicationId = reset
    ? ""
    : process.env.APPLICATION_ID;

  fs.writeFileSync(".parse.local", JSON.stringify(parseConfig, null, 2));
}

rl.question("Deseja fazer o deploy para prod ou dev? (prod/dev) ", (answer) => {
  const envFile =
    answer.trim() === "prod" ? "./env/.env.prod" : "./env/.env.dev";
  require("dotenv").config({ path: envFile });

  writeParseConfig();

  exec("b4a deploy", (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o deploy: ${error}`);
      return;
    }

    if (stdout) {
      console.log(`Resultado do deploy: ${stdout}`);
    }

    if (stderr) {
      console.error(`Erros do deploy: ${stderr}`);
    }

    writeParseConfig(true);
  });

  rl.close();
});
