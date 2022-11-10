import { Box } from "@mui/material"
import React, { useEffect } from "react"
import SpecificAd from "../components/card/SpecificAd"
import Header from "../components/Header"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

const Ad = () => {
	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0 })
	}, [])
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
