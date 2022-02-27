const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

module.exports = {
  moduleNameMapper: {
    "^src(.*)$": `${srcDir}$1`,
  },
  roots: ['../src'],
};

