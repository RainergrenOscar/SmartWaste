import {
	Box,
	Container,
	IconButton,
	Input,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import React from "react"

const Header = ({ pageName, icon, button, searchBar, searchHandler }) => {
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
				{searchBar ? (
					<TextField
						className='inputRounded'
						placeholder='Search'
						variant='outlined'
						size='small'
						onChange={searchHandler}
						fullWidth
						sx={{
							"& fieldset": { border: "none" },
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				) : null}
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
