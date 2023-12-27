// webpack.config.js
const path = require("path");

module.exports = {
	entry: "./src/app.js", // Update this with the entry point of your application
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"), // Update this with your desired output directory
	},
	// Add any necessary loaders, plugins, etc.
};
