const mongoose = require("mongoose");

// USER SCHEMA
const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	age: { type: Number, required: true },
	hobbies: [{ type: String, required: true }],
});

// USER MODEL
module.exports = new mongoose.model("users", userSchema);
