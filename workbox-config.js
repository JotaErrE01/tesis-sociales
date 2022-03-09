module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{svg,js,css,ico,html,png,json,txt}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};