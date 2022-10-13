const express = require("express")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()

// Init app
const app = express()
// Connect Database MongoDB
connectDB()
// Init Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Define Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/ads", require("./routes/adRoutes"))

// Port / Listener
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
