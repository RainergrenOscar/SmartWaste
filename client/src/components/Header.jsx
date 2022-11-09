import { Box, Container, IconButton, Typography } from "@mui/material"

import React from "react"
import { Link } from "react-router-dom"

const Header = ({ pageName, icon, button, searchBar, searchHandler, url }) => {
	return (
		<Box
			sx={{
				boxShadow: 3,
				position: "fixed",
				zIndex: "9998",
				top: 0,
				height: "4rem",
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
						<Link to={url}>
							<IconButton size='small'>{icon}</IconButton>
						</Link>
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
