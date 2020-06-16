const { override, useEslintRc, disableEsLint } = require("customize-cra");

module.exports = override(useEslintRc(), disableEsLint());
