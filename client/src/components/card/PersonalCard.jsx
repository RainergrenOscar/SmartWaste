import {
	Button,
	Card,
	CardActionArea,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAds, reset } from "../../redux/ad/AdSlice"
import Loading from "../../components/Loading"
import { Box } from "@mui/system"

const PersonalCard = ({ ad, user }) => {
	const dispatch = useDispatch()
	const { ads } = useSelector((state) => state.ads)

	useEffect(() => {
		dispatch(getAds())
	}, [dispatch])

	console.log(ads[1], user)

	return (
		<>
			<Card sx={{ marginBottom: "1rem" }}>
				<Stack direction='row' spacing={2} sx={{ margin: 1 }}>
					<CardMedia
						component='img'
						image={ads[1].img}
						alt='green iguana'
						sx={{ width: "10rem", borderRadius: "4px" }}
					/>
					<Box sx={{ paddingTop: 1 }}>
						<Typography
							sx={{
								margin: 0,
								fontWeight: 500,

								letterSpacing: -0.8,
							}}
						>
							{ad.title}
						</Typography>
						<Typography
							sx={{
								margin: 0,
								fontWeight: 400,
								letterSpacing: -0.8,
							}}
						>
							Bäst före : {ad.date}
						</Typography>
						<Stack direction='row' spacing={1} marginTop={2}>
							<Button
								disableElevation
								variant='contained'
								sx={{
									fontSize: "12px",
									padding: "5px",
								}}
							>
								Visa annons
							</Button>
							<Button
								disableElevation
								variant='contained'
								color='error'
								sx={{
									fontSize: "12px",
									padding: "5px",
								}}
							>
								ta bort
							</Button>
						</Stack>
					</Box>
				</Stack>
			</Card>
		</>
	)
}

export default PersonalCard
