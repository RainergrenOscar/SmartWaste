import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/auth/authSlice"
import adReducer from "../redux/ad/AdSlice"

export const store = configureStore({
	reducer: { auth: authReducer, ads: adReducer },
})
