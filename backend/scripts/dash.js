require('dotenv').config({
  path: require('path').resolve(__dirname, '../env/.env'),
})

const { exec } = require('child_process');

const dashboardCommand = `npx parse-dashboard --dev --appId ${process.env.APPLICATION_ID} --masterKey ${process.env.MASTER_KEY} --serverURL "http://localhost:1337/parse"`;
exec(dashboardCommand, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
