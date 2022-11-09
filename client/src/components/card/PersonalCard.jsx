import { Button, Card, CardMedia, Stack, Typography } from "@mui/material"

import { Box } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import { deleteAd } from "../../redux/ad/AdSlice"

const PersonalCard = ({ ad, showAd, deletedAd }) => {
	const dispatch = useDispatch()

	return (
		<>
			<Card sx={{ padding: ".5rem" }}>
				<Stack direction='row' spacing={3} sx={{ margin: 1 }}>
					<CardMedia
						component='img'
						image={ad.img}
						alt='green iguana'
						sx={{
							width: "10rem",
							borderRadius: "4px",
							height: "6.5rem",
						}}
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
							Bäst före : {ad.date.substring(0, 10)}
						</Typography>
						<Stack direction='row' spacing={1} marginTop={2}>
							<Button
								disableElevation
								variant='contained'
								onClick={showAd}
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
								onClick={deletedAd}
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
