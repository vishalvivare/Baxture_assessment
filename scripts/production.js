const nodemon = require("nodemon");

nodemon({
	script: "app.js",
	ext: "js json",
	ignore: ["src/views/*"],
	env: { NODE_ENV: "development" },
});

nodemon
	.on("start", () => {
		console.log("App has started in production mode using nodemon");
	})
	.on("quit", () => {
		console.log("App has quit");
		process.exit();
	})
	.on("restart", (files) => {
		console.log("App restarted due to:", files);
	});
