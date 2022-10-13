const express = require("express")
const asyncHandler = require("express-async-handler")
const router = express.Router()
const auth = require("../middleware/auth")

const Ad = require("../models/adModel")
const User = require("../models/userModel")

// @desc get all ads
// @route GET /api/ads
// @access private
const getAds = asyncHandler(async (req, res) => {
	try {
		const ads = await Ad.find().sort({ date: -1 })
		console.log(ads)
		res.status(200).json(ads)
	} catch (err) {
		console.error(err.message)
		res.status(500).send("Server Error")
	}
})

// @desc Create new ad
// @route POST /api/ads
// @access private
const createAd = asyncHandler(async (req, res) => {
	const {
		title,
		ingredients,
		allergens,
		category,
		link,
		desc,
		price,
		date,
		img,
	} = req.body
	const user = await User.findById(req.user.id)

	if (
		!title ||
		!ingredients ||
		!allergens ||
		!category ||
		!link ||
		!desc ||
		!price ||
		!img
	) {
		res.status(400)
		throw new Error("All fields must be filled")
	}
	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const newAd = await Ad.create({
		title,
		ingredients,
		allergens,
		category,
		link,
		desc,
		price,
		user,
		date,
		img,
	})

	res.status(201).json(newAd)
})

// @desc Get specific ad
// @route GET /api/ads/:id
// @access private
const getAdById = asyncHandler(async (req, res) => {
	let ad = await Ad.findById(req.params.id)
	let user = await User.findById(ad.user).select(["-password", "-_id"])

	const result = {
		user,
		ad,
	}

	if (!ad) {
		res.status(404)
		throw new Error("Cant find specific ad")
	}

	res.status(200).json(result)
})

// @desc Delete ad
// @route DELETE /api/ads/:id
// @access private
const deleteAd = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const ad = await Ad.findById(req.params.id)

	if (!ad) {
		res.status(404)
		throw new Error("Ad not found")
	}

	await ad.remove()

	res.status(200).json({ message: "DELETED" })
})

// @desc Update ad
// @route PUT /api/ads/:id
// @access private
const updateAd = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const ad = await Ad.findById(req.params.id)

	if (!ad) {
		res.status(404)
		throw new Error("Cant find the quote")
	}

	const updatedAd = await Ad.findByIdAndUpdate(req.params.id, req.body)

	res.status(200).json(updatedAd)
})

module.exports = {
	createAd,
	getAds,
	getAdById,
	deleteAd,
	updateAd,
}
