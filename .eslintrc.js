module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['react-app', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
