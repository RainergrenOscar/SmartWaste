import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Divider,
	Grid,
	InputAdornment,
	Paper,
	TextField,
	Typography,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import React from "react"

const Searchbar = ({ setSearch }) => {
	return (
		<Box
			sx={{
				height: "10rem",
				backgroundColor: "#01befe",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Container>
				<Paper
					sx={{
						height: "8.5rem",
						width: { md: "30rem" },
						padding: "0.8rem",
					}}
				>
					<Typography
						gutterBottom
						component='div'
						color='GrayText'
						sx={{
							margin: 0,
							fontWeight: 500,
							marginTop: -1,
							letterSpacing: -0.5,
						}}
					>
						Välkommen till SmartWaste
					</Typography>
					<Typography
						gutterBottom
						sx={{
							fontWeight: 600,
							marginTop: -1,
							letterSpacing: -1.3,
							fontSize: "1.5rem",
						}}
					>
						Vi minskar matsvinnet!
					</Typography>
					{/* Searchbar */}
					<Grid container rowSpacing={1} columnSpacing={1}>
						<Grid item xs={9} md={10}>
							<TextField
								placeholder='Vad är du sugen på?'
								fullWidth
								onChange={(e) => setSearch(e.target.value)}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<SearchIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={2} md={2}>
							<Button
								variant='contained'
								fullWidth
								disableElevation
								sx={{ height: "100%" }}
							>
								SÖK
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Box>
	)
}

export default Searchbar
