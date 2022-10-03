import axios from "axios"

//Variable for more beautiful code
const url = "/api/users"

/**
 * Signup user function
 * @async
 * @param {String} userData
 * @returns The data from the fetch request.
 */
const register = async (userData) => {
	//Post request to server
	const response = await axios.post(url, userData)

	//check if we got a response from the server
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}

	//Return the data
	return response.data
}

//Exports
const authService = {
	register,
}

export default authService
