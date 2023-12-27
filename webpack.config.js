// webpack.config.js
const path = require("path");

module.exports = {
	mode: "production",
	entry: "./app.js",
	target: "node",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js",
	},
};
