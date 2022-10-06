//Pages

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useSelector } from "react-redux"
import Landing from "./pages/Landing"

function App() {
	const { user } = useSelector((state) => state.auth)

	return (
		<>
			{user ? (
				<div>
					<img src={user.avatar} alt='' />
				</div>
			) : (
				<div>EJ INLOGGAD</div>
			)}
			<Router>
				{/* Navbar */}
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
