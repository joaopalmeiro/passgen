const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const pjson = require('./package.json');
const log = console.log;

// Source:
// - https://github.com/tj/commander.js/issues/48#issuecomment-49087390
// - https://stackoverflow.com/a/10855054
program.version(pjson.version).description(pjson.description).parse();
