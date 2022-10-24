import { Box, Container, Grid } from "@mui/material"
import React, { useState } from "react"
import CardGrid from "../components/card/CardGrid"

import Header from "../components/Header"

const Landing = () => {
	return (
		<>
			<Header pageName='Annonser' />
			<Box
				sx={{
					marginTop: { xs: "4rem", md: "2rem" },
					marginBottom: "6rem",
				}}
			>
				<CardGrid />
			</Box>
		</>
	)
}

export default Landing
