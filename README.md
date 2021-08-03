# passgen

A Node.js CLI for generating passwords based on Traversy Media's "[Build a Node.js Password Generator](https://youtu.be/3Xx83JAktXk)" tutorial.

## Notes

- [Commander](https://github.com/tj/commander.js) package (to build CLI applications).
- [Chalk](https://github.com/chalk/chalk) package.
- [clipboardy](https://github.com/sindresorhus/clipboardy) package.
- `npm i commander chalk clipboardy`.
- `npm install --save-dev --save-exact prettier`.
- `os.EOL` ([documentation](https://nodejs.org/docs/latest-v14.x/api/os.html#os_os_eol)): operating system-specific end-of-line marker (`\n` on POSIX, `\r\n` on Windows).

## Development

- `npm install`.
- `node index.js` (`node index.js -h`).
