// http://eslint.org/docs/user-guide/configuring

module.exports = {
	parser: 'babel-eslint',
	extends: [
		'tmaito',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'prettier',
		'prettier/react'
	],
	plugins: ['prettier'],
	rules: {
		"react/prop-types": 0,
		// prettier标记的地方抛出错误信息
		"prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"trailingComma": "none",
				"bracketSpacing": true,
				"jsxBracketSameLine": true
			}
		]
	}
};
