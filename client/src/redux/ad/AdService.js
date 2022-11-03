import axios from "axios"

//Variable for more beautiful code
const url = "/api/ads"

/**
 * Create new ad
 * @async
 * @param {adData, token}
 * @returns a new object with userData
 */
const createAd = async (adData, token) => {
	//Verify that user is logged in
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const res = await axios.post(url, adData, config)

	return res.data
}

/**
 * Get ads
 * @async
 * @param {token}
 * @returns all ads created
 */
const getAds = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.get(url, config)

	return response.data
}

/**
 * Get ads by ID
 * @async
 * @param {token, id}
 * @returns Find ad by id
 */
const getSpecificAd = async (adId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.get(url + "/" + adId, config)

	return response.data
}

/**
 * Delete Ad
 * @async
 * @param {token, id}
 * @returns Find ad by id
 */
const deleteAd = async (adId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.delete(url + "/" + adId, config)

	return response.data
}

//Exports
const adService = {
	createAd,
	getAds,
	getSpecificAd,
	deleteAd,
}

export default adService
