// const cluster = require("cluster");
// const os = require("os");

// if (cluster.isMaster) {
// 	const numCPUs = os.cpus().length - 1;
// 	console.log("object", numCPUs);
// 	for (let i = 0; i < numCPUs; i++) {
// 		cluster.fork();
// 	}

// 	cluster.on("exit", (worker, code, signal) => {
// 		console.log(`Worker ${worker.process.pid} died`);
// 	});
// } else {
// 	require("./app.js");
// }

const cluster = require("cluster");
const os = require("os");
const http = require("http");
const app = require("./app"); // Update the path to your app

if (cluster.isMaster) {
	let port;
	const numCPUs = os.cpus().length - 1;

	console.log(`Master ${process.pid} is running`);

	// Fork workers
	for (let i = 0; i < numCPUs; i++) {
		const worker = cluster.fork();
		port = 4000 + i;
		console.log("object", port);
		worker.send({ port });
	}

	cluster.on("exit", (worker, code, signal) => {
		console.log(`Worker ${worker.process.pid} died`);
	});
} else {
	process.on("message", ({ port }) => {
		// Workers can share any TCP connection
		// In this case, it is an HTTP server
		const server = http.createServer(app);

		server.listen(port, () => {
			console.log(
				`Worker ${process.pid} started, listening on port ${port}`
			);
		});
	});
}
