import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import adService from "./AdService"

const initialState = {
	ads: [],
	ad: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
}

export const createAd = createAsyncThunk(
	"ad/create",
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

export const adSlice = createSlice({
	name: "ad",
	initialState,
	reducers: {},
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
	},
})

export default adSlice.reducer
