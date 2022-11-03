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

import LocationOnIcon from "@mui/icons-material/LocationOn"
//redux
import { getAds, reset } from "../../redux/ad/AdSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Category from "./Category"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../Loading"

const CardGrid = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [search, setSearch] = useState("")
	const { ads, isSuccess, isError, isLoading } = useSelector(
		(state) => state.ads
	)

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		dispatch(getAds())
	}, [dispatch])

	if (isLoading) {
		return <Loading />
	}

	const filteredAds = ads.filter((ad) => {
		return (
			ad.title.toLowerCase().includes(search.toLowerCase()) ||
			ad.location.toLowerCase().includes(search.toLowerCase())
		)
	})

	const onClickAd = (e) => {
		navigate(`/ad/${e.target.closest("article").id}`)
	}

	return (
		<>
			{/* Searchfield */}
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
			{/* Category list */}
			<Category />
			{/* Card grid */}
			<Container>
				<Typography
					gutterBottom
					component='div'
					sx={{
						marginBottom: 1,
						fontWeight: 500,

						letterSpacing: -0.8,
					}}
				>
					Trött på det gamla vanliga?
				</Typography>
				<Box className='auto-grid'>
					{filteredAds.map((ad, i) => (
						<Card
							key={i}
							sx={{
								display: {
									xs: "block",
									sm: "block",
								},
							}}
						>
							<CardActionArea>
								{/* Make props */}
								<article
									id={ad._id}
									onClick={(e) => onClickAd(e)}
								>
									<CardMedia
										component='img'
										height='95'
										image={ad.img}
										alt='green iguana'
									/>
									<CardContent>
										<Typography
											gutterBottom
											component='div'
											sx={{
												margin: 0,
												fontWeight: 500,
												marginTop: -1,
												letterSpacing: -0.8,
											}}
										>
											{ad.title}
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											{`${ad.portions} Portioner`}
										</Typography>
										<Typography
											variant='body2'
											color='black'
											sx={{
												fontWeight: 500,
											}}
										>
											{`${ad.price} Kr`}
										</Typography>
										<Divider sx={{ marginTop: 1 }} />
										<div
											style={{
												display: "flex",
												marginTop: 8,
											}}
										>
											<LocationOnIcon
												fontSize='inherit'
												sx={{
													color: "GrayText",
													marginRight: 0.2,
												}}
											/>
											<Typography
												fontSize='12px'
												color='GrayText'
											>
												{ad.location}
											</Typography>
										</div>
									</CardContent>
								</article>
							</CardActionArea>
						</Card>
					))}
				</Box>
			</Container>
		</>
	)
}

//

export default CardGrid
