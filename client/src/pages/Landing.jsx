import { Box, Container, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import CardGrid from "../components/card/CardGrid"

import Header from "../components/Header"

const Landing = () => {
	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0 })
	}, [])
	return (
		<>
			<Header pageName='Annonser' />
			<Box
				sx={{
					marginTop: "4rem",
					marginBottom: "6rem",
				}}
			>
				<CardGrid />
			</Box>
		</>
	)
}

export default Landing
