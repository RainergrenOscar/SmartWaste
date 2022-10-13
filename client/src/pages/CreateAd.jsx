import React from "react"
import AdForm from "../components/form/AdForm"
import Header from "../components/Header"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { Container } from "@mui/material"

const CreateAd = () => {
	return (
		<>
			<Header pageName='Ny annons' />
			<Container>
				<AdForm />
			</Container>
		</>
	)
}

export default CreateAd
