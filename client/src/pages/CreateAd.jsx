import React, { useEffect } from "react"
import AdForm from "../components/form/AdForm"
import Header from "../components/Header"
import logo from "../resources/Largelogo.svg"
import { Container } from "@mui/material"

const CreateAd = () => {
	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0 })
	}, [])
	return (
		<>
			<Header pageName='Ny annons' />
			<Container sx={{ marginTop: "6rem" }}>
				<AdForm />
			</Container>
		</>
	)
}

export default CreateAd
