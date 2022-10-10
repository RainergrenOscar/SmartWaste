//Routing / Pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import PrivateRoute from "./pages/PrivateRoute"
import BottomNav from "./components/BottomNav"

//Redux
import { useSelector } from "react-redux"
import CreateAd from "./pages/CreateAd"
import Profile from "./pages/Profile"

function App() {
	const { user } = useSelector((state) => state.auth)
	return (
		<>
			<Router>
				{/* Navbar */}
				{user ? <BottomNav /> : null}

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
			</Router>
		</>
	)
}

export default App
