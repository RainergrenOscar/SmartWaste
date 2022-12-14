//Pages
import Ad from "./pages/Ad"
import MyAds from "./pages/profilePages/MyAds"
import EditProfile from "./pages/profilePages/EditProfile"
import Settings from "./pages/profilePages/Settings"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import PrivateRoute from "./pages/PrivateRoute"
import CreateAd from "./pages/CreateAd"
import Profile from "./pages/Profile"
import Nav from "./components/nav/Nav"

//Routing & Pages
import { Routes, Route } from "react-router-dom"

//Redux
import { useSelector } from "react-redux"

// React toastify npm
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
				<Route
					path='/profile/myAds'
					element={
						<PrivateRoute>
							<MyAds />
						</PrivateRoute>
					}
				/>
				<Route
					path='/profile/editprofile'
					element={
						<PrivateRoute>
							<EditProfile />
						</PrivateRoute>
					}
				/>
				<Route
					path='/profile/settings'
					element={
						<PrivateRoute>
							<Settings />
						</PrivateRoute>
					}
				/>

				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
			</Routes>
			<ToastContainer />
		</>
	)
}

export default App
