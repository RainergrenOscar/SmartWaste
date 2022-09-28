//import modules
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

//Initialize app
const app = express()

//db

// middleware
app.use(express.json({ extended: false }))

// routes

//port
const port = process.env.PORT || 5000

//listenet
app.listen(port, () => console.log(`Server started on port ${port}`))
