const {
  override,
  useEslintRc,
  addWebpackResolve,
  useBabelRc
} = require('customize-cra');

module.exports = override(
  useEslintRc(),
  useBabelRc(),
  addWebpackResolve({
    modules: ['src', 'node_modules']
  })
);
