const mongoose = require("mongoose")

//Create user Model
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: [true, "Please add a email"],
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model("user", userSchema)
