import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import adService from "./AdService"

const initialState = {
	ads: [],
	ad: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
}

//Create ads
export const createAd = createAsyncThunk(
	"ads/create",
	async (adData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await adService.createAd(adData, token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			//return with the message
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Fetch all ads
export const getAds = createAsyncThunk("ads/getAds", async (_, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token
		return await adService.getAds(token)
	} catch (error) {
		// set the message to the backend server message
		const message =
			(error.response &&
				error.response.data &&
				error.response.data.message) ||
			error.message ||
			error.toString()
		//return with the message
		return thunkAPI.rejectWithValue(message)
	}
})

//Fetch specific ad
export const getSpecificAd = createAsyncThunk(
	"ads/getSpecificAd",
	async (adId, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await adService.getSpecificAd(adId, token)
		} catch (error) {
			// set the message to the backend server message
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			//return with the message
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const adSlice = createSlice({
	name: "ad",
	initialState,
	reducers: { reset: (state) => initialState },
	extraReducers: (builder) => {
		builder
			.addCase(createAd.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createAd.fulfilled, (state) => {
				state.isLoading = false
				state.isSuccess = true
			})
			.addCase(createAd.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getAds.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getAds.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.ads = action.payload
			})
			.addCase(getAds.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getSpecificAd.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getSpecificAd.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.ad = action.payload
			})
			.addCase(getSpecificAd.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})
export const { reset } = adSlice.actions
export default adSlice.reducer
