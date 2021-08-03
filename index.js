const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const pjson = require('./package.json');
const log = console.log;

const createPassword = require('./utils/createPassword');

// Source:
// - https://github.com/tj/commander.js/issues/48#issuecomment-49087390
// - https://stackoverflow.com/a/10855054
program.version(pjson.version).description(pjson.description);

program
  .option('-l, --length <number>', 'password length (number of characters)', '8')
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
log(chalk.blue('Generated password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard'));
