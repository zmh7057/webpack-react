// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',
  extends: ['tmaito', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'no-nested-ternary': 'off',
    // prettier标记的地方抛出错误信息
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        endOfLine: 'auto'
      }
    ]
  }
};
