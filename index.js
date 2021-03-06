#!/usr/bin/env node
const os = require('os');

const chalk = require('chalk');
const clipboardy = require('clipboardy');
const program = require('commander');

const pjson = require('./package.json');
const constants = require('./utils/constants');
const createPassword = require('./utils/createPassword');

const log = console.log;

// Source:
// - https://github.com/tj/commander.js/issues/48#issuecomment-49087390
// - https://stackoverflow.com/a/10855054
program.version(pjson.version).description(pjson.description);

program
  .option('-l, --length <number>', 'password length (number of characters)', constants.LENGTH)
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

// log(program.opts());
const { length, numbers, symbols } = program.opts();

// Get password.
const generatedPassword = createPassword(length, numbers, symbols);

// Copy to clipboard.
clipboardy.writeSync(generatedPassword);

// Output.
log(chalk.blue('Generated password: ') + chalk.bold(generatedPassword) + os.EOL);
log(chalk.yellow('Password copied to clipboard'));
