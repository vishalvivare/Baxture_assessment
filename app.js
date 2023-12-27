const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./configs/db");
require("dotenv").config();

let port = process.env.PORT;

// Database Connection
connect();

app.use(cors());
app.use(express.json());

app.use((req, res) => {
	res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Internal Server Error" });
});

app.listen(port, (req, res) => {
	console.log(`server is running on ${port}`);
});
