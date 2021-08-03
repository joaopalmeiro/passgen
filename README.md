# passgen

A Node.js CLI for generating passwords based on Traversy Media's "[Build a Node.js Password Generator](https://youtu.be/3Xx83JAktXk)" tutorial.

## Notes

- [Commander](https://github.com/tj/commander.js) package (to build CLI applications).
- [Chalk](https://github.com/chalk/chalk) package.
- [clipboardy](https://github.com/sindresorhus/clipboardy) package.
- `npm i commander chalk clipboardy`.
- `npm install --save-dev --save-exact prettier`.
- `os.EOL` ([documentation](https://nodejs.org/docs/latest-v14.x/api/os.html#os_os_eol)): operating system-specific end-of-line marker (`\n` on POSIX, `\r\n` on Windows).
- `npm link` (symlink a package folder).
- ESLint:
  - `npx eslint --init` (create a configuration file).
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import). It supports `require()` statements. [import/order](https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md) documentation.
  - [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app).

## Development

- `npm install`.
- `node index.js` (`node index.js -h`).
