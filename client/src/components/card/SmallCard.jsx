import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Divider,
	Typography,
} from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { useNavigate } from "react-router-dom"

const SmallCard = ({ ad, i }) => {
	const navigate = useNavigate()
	const onClickAd = (e) => {
		navigate(`/ad/${e.target.closest("article").id}`)
	}
	return (
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
				<article id={ad._id} onClick={(e) => onClickAd(e)}>
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
						<Typography variant='body2' color='text.secondary'>
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
							<Typography fontSize='12px' color='GrayText'>
								{ad.location}
							</Typography>
						</div>
					</CardContent>
				</article>
			</CardActionArea>
		</Card>
	)
}

export default SmallCard
