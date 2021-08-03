const crypto = require('crypto');

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;

  // hasNumbers ? (chars += numbers) : '';
  // hasSymbols ? (chars += symbols) : '';
  // or
  hasNumbers && (chars += numbers);
  hasSymbols && (chars += symbols);

  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  const random = crypto.randomBytes(Number(length));
  let password = '';

  for (let i = 0; i < length; i++) {
    // `Math.random()` does not provide cryptographically secure random numbers.
    // More info:
    // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // - https://github.com/bradtraversy/passgen/issues/2
    // - https://github.com/bradtraversy/passgen/pull/3
    // - https://nodejs.org/docs/latest-v14.x/api/crypto.html#crypto_crypto_randombytes_size_callback
    // password += chars.charAt(Math.floor(Math.random() * chars.length));
    // `%`: to get array values with wrapping.
    password += chars.charAt(random[i] % chars.length);
  }

  return password;
};

module.exports = createPassword;
