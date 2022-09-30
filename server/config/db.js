const mongoose = require("mongoose")

const connectDB = async () => {
	//Connect to database
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log("MONGODB CONNECTED : " + conn.connection.host)
	} catch (error) {
		console.log(`Error : ${error.message}`)
		//Exit process with failure
		process.exit(1)
	}
}

module.exports = connectDB
