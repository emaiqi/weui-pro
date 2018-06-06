module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'prefer-spread': 'off',
    'class-methods-use-this': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
