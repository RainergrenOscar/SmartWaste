const express = require("express")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")

// @route   POST api/users
// @desc    Register user
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body // Destructure from request.body

	if (!name || !email || !password) {
		res.status(400)
		throw new Error(res.json({ message: "All fields must be filled" }))
	}

	//See if user exists
	const alreadyExists = await User.findOne({ email })

	if (alreadyExists) {
		res.status(400)
		throw new Error(res.json({ message: "User already exists" }))
	}

	//Hash password
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	//Create the User
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	})
	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: jwtToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error(res.json({ message: "Invalid user data" }))
	}
})

// @route   POST api/users/login
// @desc    Authenticate user
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	//find user email
	const user = await User.findOne({ email })

	// The password is hashed in database som must compare the login password and the hashed
	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: jwtToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error(res.json({ message: "Invalid credentials" }))
	}
})

// @route   GET api/users/me
// @desc    Get user data
// @access  Private
const getMe = asyncHandler(async (req, res) => {
	const { _id, name, email } = await User.findById(req.user.id)

	res.json({
		id: _id,
		name,
		email,
	})
})

//Generate jsonwebtoken
const jwtToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "100d" })
}

module.exports = {
	registerUser,
	loginUser,
	getMe,
}
