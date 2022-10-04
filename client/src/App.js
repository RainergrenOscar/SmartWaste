//Pages

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"

function App() {
	return (
		<>
			<Router>
				{/* Navbar */}
				<Routes>
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
