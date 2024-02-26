const fs = require('fs');
const path = require('path');
const { buildnumber } = require('./config.json');
const { program } = require('commander');

const configPath = path.join(__dirname, './config.json');

program
  .option( '-v, --version')
  .option('-b,--bump')
  .option('-o,--output <filename>')
  .parse(process.argv);

  console.log("app.js running")

function bumpVersion() {
  const configContent = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configContent);


  if (config && config.buildnumber) {
    const currentVersion = config.buildnumber.split('.').map(Number);

    currentVersion[1] += 1;


    config.buildnumber = currentVersion.join('.');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

    console.log('Increment:', config.buildnumber);
  } else {
    console.error('not found buildnumber');
  }
}


function writeVersionToFile(filename) {
  console.log(filename)
  fs.writeFileSync(filename, buildnumber);
  console.log(`Write to ${filename}`);
}


if (program.opts().version) {
  console.log(`current bersion: ${buildnumber}`);
} else if (program.opts().bump) {
  bumpVersion();
} else if (program.opts().output) {
  writeVersionToFile(program.opts().output);
}
