import { Box, CircularProgress, Grid } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"

const Loading = () => {
	return (
		<Container>
			<Box
				sx={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<CircularProgress />
			</Box>
		</Container>
	)
}

export default Loading
