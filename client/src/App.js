//Routing & Pages
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
} from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import PrivateRoute from "./pages/PrivateRoute"

//Redux
import { useSelector } from "react-redux"
import CreateAd from "./pages/CreateAd"
import Profile from "./pages/Profile"
import Nav from "./components/nav/Nav"
import { Container } from "@mui/material"
import Header from "./components/Header"

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import Ad from "./pages/Ad"
import { useEffect } from "react"
import MyAds from "./pages/MyAds"

function App() {
	const { user } = useSelector((state) => state.auth)

	return (
		<>
			{user ? <Nav /> : null}

			<Routes>
				<Route
					path='/'
					element={
						<PrivateRoute>
							<Landing />
						</PrivateRoute>
					}
				/>
				<Route
					path='/createad'
					element={
						<PrivateRoute>
							<CreateAd />
						</PrivateRoute>
					}
				/>
				<Route
					path='/myAds'
					element={
						<PrivateRoute>
							<MyAds />
						</PrivateRoute>
					}
				/>
				<Route
					path='/ad/:adId'
					element={
						<PrivateRoute>
							<Ad />
						</PrivateRoute>
					}
				/>
				<Route
					path='/profile'
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>

				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	)
}

export default App
