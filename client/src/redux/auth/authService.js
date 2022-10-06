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
	const res = await axios.post(url, userData)

	//check if we got a response from the server
	if (res.data) {
		localStorage.setItem("user", JSON.stringify(res.data))
	}

	//Return the data
	return res.data
}

const login = async (userData) => {
	//Post request to server
	const res = await axios.post(`${url}/login`, userData)

	//check if we got a response from the server
	if (res.data) {
		localStorage.setItem("user", JSON.stringify(res.data))
	}
	return res.data
}

const logout = () => {
	localStorage.removeItem("user")
}

//Exports
const authService = {
	register,
	login,
	logout,
}

export default authService
