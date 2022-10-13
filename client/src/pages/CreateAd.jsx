import React from "react"
import AdForm from "../components/form/AdForm"
import Header from "../components/Header"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

const CreateAd = () => {
	return (
		<>
			<Header pageName='Ny annons' />
			<AdForm />
		</>
	)
}

export default CreateAd
