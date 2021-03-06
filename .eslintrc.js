module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	extends: ["prettier"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": "error",
	},
};
