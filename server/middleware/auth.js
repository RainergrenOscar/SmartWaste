const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const auth = asyncHandler(async (req, res, next) => {
	let token

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			//Get token from header. If dont use .split it would be Bearertoken
			token = req.headers.authorization.split(" ")[1]

			//Verify token
			const decoded = jwt.verify(token, process.env.JWT_SECRET)

			//Finding the user by the id of the token without hashing password
			req.user = await User.findById(decoded.id).select("-password")

			//Call next piece of middleware
			next()
		} catch (error) {
			console.log(error)
			res.status(401)
			throw new Error(res.json({ message: "Not authorized" }))
		}
	}
	if (!token) {
		res.status(401)
		throw new Error(res.json({ message: "No token" }))
	}
})

module.exports = { auth }
