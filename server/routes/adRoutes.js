const express = require("express")
const router = express.Router()
const {
	createAd,
	getAds,
	getAdById,
	deleteAd,
	updateAd,
} = require("../controllers/adController")
const { auth } = require("../middleware/auth")

router.route("/").get(auth, getAds).post(auth, createAd)

router
	.route("/:id")
	.get(auth, getAdById)
	.delete(auth, deleteAd)
	.put(auth, updateAd)

module.exports = router
