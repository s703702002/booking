const {
  override,
  useEslintRc,
  disableEsLint,
  addWebpackResolve
} = require("customize-cra");

module.exports = override(
  useEslintRc(),
  disableEsLint(),
  addWebpackResolve({
    modules: ["node_modules", "src"]
  })
);
