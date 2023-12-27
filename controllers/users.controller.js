const mongoose = require("mongoose");
const User = require("../models/users.model");

// Create user
const saveUser = async (req, res) => {
	try {
		let postData = req.body;
		await User.create(postData)
			.then((data) => {
				if (data) {
					res.status(201).send({
						message: "Data saved successfully.",
						data: data,
					});
				} else {
					res.status(400).send({ error: "data not found" });
				}
			})
			.catch((err) => {
				res.status(400).send({ error: err.message });
			});
	} catch (error) {
		console.log("error", error);
	}
};

// Get All Users
const getUsers = async (req, res) => {
	try {
		await User.find()
			.then((data) => {
				if (data) {
					res.status(200).send({
						message: "Data fetched successfully.",
						data: data,
					});
				} else {
					res.status(400).send({ error: "data not found" });
				}
			})
			.catch((err) => {
				res.status(400).send({ error: err });
			});
	} catch (error) {
		console.log("error", error);
	}
};

// Get One User
const getOneUser = async (req, res) => {
	try {
		let where = { _id: req.params.id };

		// Check if the ObjectId is valid
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(400).send({ error: "User id is not valid." });
		}

		await User.find(where)
			.then((data) => {
				if (data) {
					res.status(200).send({
						message: "Data fetched successfully.",
						data: data,
					});
				} else {
					res.status(404).send({ error: "User doesn't exists." });
				}
			})
			.catch((err) => {
				res.status(400).send({ error: err });
			});
	} catch (error) {
		console.log("error", error);
	}
};

// Update One User
const updateUser = async (req, res) => {
	try {
		let postData = req.body;

		// Check if the ObjectId is valid
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(400).send({ error: "User id is not valid." });
		}

		let where = { _id: req.params.id };
		await User.updateOne(where, postData)
			.then((data) => {
				if (data) {
					res.status(200).send({
						message: "Data updated successfully.",
						data: data,
					});
				} else {
					res.status(404).send({ error: "User doesn't exists." });
				}
			})
			.catch((err) => {
				res.status(400).send({ error: err });
			});
	} catch (error) {
		console.log("error", error);
	}
};

// Delete One user
const deleteUser = async (req, res) => {
	try {
		// Check if the ObjectId is valid
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(400).send({ error: "User id is not valid." });
		}

		let where = { _id: req.params.id };
		await User.deleteOne(where)
			.then((data) => {
				if (data) {
					res.status(200).send({
						message: "Data deleted successfully.",
						data: data,
					});
				} else {
					res.status(404).send({ error: "User doesn't exists." });
				}
			})
			.catch((err) => {
				res.status(400).send({ error: err });
			});
	} catch (error) {
		console.log("error", error);
	}
};

module.exports = {
	saveUser,
	getUsers,
	getOneUser,
	updateUser,
	deleteUser,
};
