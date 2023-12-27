const mongoose = require("mongoose");

const connect = () => {
	try {
		mongoose
			.connect(process.env.URL + "baxture")
			.then((res) => {
				console.log("database is connected successfully.");
			})
			.catch((err) => {
				console.log("err", err);
			});
	} catch (error) {}
};

module.exports = connect;