const {
  override,
  useEslintRc,
  disableEsLint,
  addWebpackResolve,
  addBabelPlugins
} = require("customize-cra");

module.exports = override(
  useEslintRc(),
  disableEsLint(),
  addWebpackResolve({
    modules: ["node_modules", "src"]
  }),
  ...addBabelPlugins("@babel/plugin-proposal-optional-chaining")
);
