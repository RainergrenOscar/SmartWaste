import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import React from "react"

const PrivateRoute = ({ children }) => {
	const { user } = useSelector((state) => state.auth)
	if (!user) {
		return <Navigate to='/login' />
	}

	return children
}

export default PrivateRoute
