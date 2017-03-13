const inquirer = require('inquirer')
const Rsync = require('rsync')
const chalk = require('chalk')


const log = (text, style) => {
  style = style === undefined ? chalk.cyan : style
  console.log(style(text))
}

const rsync = new Rsync()
  .shell('ssh')
  .source('./src/*')

const envPrompt = {
  type: 'list',
  name: 'env',
  message: chalk.bgBlue.white('Which environment would you like to deploy to?'),
  choices: ['STAGE', 'PRODUCTION'],
}

const confirmPrompt = {
  type: 'list',
  name: 'bool',
  message: chalk.bgRed.white('WARNING! Really deploy to PRODUCTION?'),
  choices: ['NO', 'YES'],
}

function main() {
  log('This program will guide you through the deployment.', chalk.bgBlue.white)
  startDeploy()
}

function startDeploy() {
  inquirer.prompt(envPrompt).then(function (answers) {
    if (answers.env === 'STAGE') {
      deployStage()
    } else if (answers.env === 'PRODUCTION') {
      confirmProduction()
    }
  })
}

function confirmProduction() {
  inquirer.prompt(confirmPrompt).then(function (answers) {
    if (answers.bool === 'YES') {
      deployProduction()
    } else if (answers.bool === 'NO') {
      log('Aborting ...', chalk.gray)
    }
  })
}

function deployStage() {
  const dest = 'thehost.se@ssh.thehost.se:/www/kd'
  rsync.destination(dest).execute(function (error, code, cmd) {
    if (error) {
      log(error, chalk.red)
      log(`Rsync exited with code: ${code}.`, chalk.gray)
      log(`The command was: ${cmd}.`, chalk.gray)
    } else {
      log('Successfully deployed to stage!', chalk.green.bold)
    }
  })
}

function deployProduction() {
  log('TODO: Production environment', chalk.gray.bold)
}

main()
