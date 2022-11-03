import { Box } from "@mui/material"
import React from "react"
import SpecificAd from "../components/card/SpecificAd"
import Header from "../components/Header"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Link } from "react-router-dom"

const Ad = () => {
	return (
		<>
			<Header
				pageName='Annonser'
				button={true}
				icon={<ArrowBackIosIcon />}
				url='/'
			/>
			<Box
				sx={{
					marginTop: { xs: "4rem", md: "6rem" },
					marginBottom: "6rem",
				}}
			>
				<SpecificAd />
			</Box>
		</>
	)
}

export default Ad
