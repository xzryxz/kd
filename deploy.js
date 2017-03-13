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
  message: 'Which environment would you like to deploy to?',
  choices: ['STAGE', 'PRODUCTION'],
}

const confirmPrompt = {
  type: 'list',
  name: 'bool',
  message: chalk.red('WARNING! Really deploy to PRODUCTION?'),
  choices: ['NO', 'YES'],
}

function main() {
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
      log('Aborting ...')
    }
  })
}

function deployStage() {
  // const dest = 'thehost.se@ssh.thehost.se:/www/kd'
  // rsync.destination(dest).execute(function (error, code, cmd) {
  //   if (error) {
  //     log(error, chalk.red)
  //     log(`Rsync exited with code: ${code}.`)
  //     log(`The command was: ${cmd}.`)
  //   } else {
  //     log('Successfully deployed to stage!', chalk.green)
  //   }
  // })
  log('TODO: Stage deployment (need to build etc)')
}

function deployProduction() {
  log('TODO: Production environment')
}

main()
