import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

// Get "user" from localstorage
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
	user: user ? user : null,
	isError: false,
	isSucces: false,
	isLoading: false,
	message: "",
}

//Function that register a new user
//Using "register" function from "authService"
export const register = createAsyncThunk(
	"auth/signup",
	async (user, thunkAPI) => {
		try {
			return await authService.register(user)
		} catch (error) {
			//Try to find where the error message is
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			//return a rejected response with a defined payload (message)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Function that logging in user
// Using "login" function from "authService"
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
	try {
		return await authService.login(user)
	} catch (error) {
		const message =
			(error.response &&
				error.response.data &&
				error.response.data.message) ||
			error.message ||
			error.toString()
		//return a rejected response with a defined payload (message)
		return thunkAPI.rejectWithValue(message)
	}
})

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
	await authService.logout()
})

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isError = false
			state.isSucces = false
			state.message = ""
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})

			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = true
				state.isSucces = true
				state.user = action.payload
			})

			.addCase(register.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
				state.isError = true
				state.message = action.payload
			})

			.addCase(login.pending, (state) => {
				state.isLoading = true
			})

			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = true
				state.isSucces = true
				state.user = action.payload
			})

			.addCase(login.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
				state.isError = true
				state.message = action.payload
			})
	},
})
export const { reset } = authSlice.actions
export default authSlice.reducer
