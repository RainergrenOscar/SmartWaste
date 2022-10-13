const mongoose = require("mongoose")

const adSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},

	title: {
		type: String,
		required: true,
	},
	ingredients: [
		{
			type: String,
			required: true,
		},
	],
	allergens: [
		{
			type: String,
			required: true,
		},
	],
	category: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
})

module.exports = mongoose.model("ads", adSchema)
