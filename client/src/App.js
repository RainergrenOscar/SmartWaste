//Routing & Pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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

function App() {
	const { user } = useSelector((state) => state.auth)

	return (
		<>
			{user ? <Nav /> : null}
			<Header
				button='true'
				icon={<ArrowBackIosNewIcon fontSize='small' />}
				pageName='Annonser'
			/>

			<Container maxWidth='lg'>
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
			</Container>
		</>
	)
}

export default App
