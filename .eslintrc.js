// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    'semi': 'off',
    'no-unused-vars': 'off',
    'no-useless-return': 'off',
    'keyword-spacing': 'off',
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
    'spaced-comment': 'off',
    'space-in-parens': 'off',
    'indent': 'off',
    'eqeqeq': 'off',
    'template-curly-spacing': 'off',
    'padded-blocks': 'off'
  }
}
