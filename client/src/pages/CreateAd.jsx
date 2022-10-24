import React from "react"
import AdForm from "../components/form/AdForm"
import Header from "../components/Header"
import logo from "../resources/Largelogo.svg"
import { Container } from "@mui/material"

const CreateAd = () => {
	return (
		<>
			<Header pageName='Ny annons' />
			<Container sx={{ marginTop: { xs: "6rem", md: "2rem" } }}>
				<AdForm />
			</Container>
		</>
	)
}

export default CreateAd
