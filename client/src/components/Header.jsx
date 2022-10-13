import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import React from "react"

const Header = ({ pageName, icon, button }) => {
	return (
		<Box
			sx={{
				boxShadow: 3,
				position: "static",
				marginBottom: "2rem",
				top: 0,
				height: "3rem",
				left: 0,
				right: 0,
				backgroundColor: "white",
				display: {
					md: "none",
					lg: "none",
				},
			}}
		>
			<Container
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					paddingLeft: "1rem",
					paddingRight: "1rem",
				}}
			>
				{button ? (
					<Box display={"flex"}>
						<IconButton size='small'>{icon}</IconButton>
					</Box>
				) : null}
				<Typography
					sx={{
						marginLeft: 5,
						fontWeight: "500",
					}}
				>
					{pageName}
				</Typography>
			</Container>
		</Box>
	)
}

export default Header
