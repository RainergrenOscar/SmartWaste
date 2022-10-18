import axios from "axios"

//Variable for more beautiful code
const url = "/api/ads"

/**
 * Create new ad
 * @async
 * @param {adData, token}
 * @returns a new object
 */

const createAd = async (adData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const res = await axios.post(url, adData, config)

	return res.data
}

//Exports
const adService = {
	createAd,
}

export default adService
