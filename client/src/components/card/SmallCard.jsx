/* IMPORTS */

//MUI
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Typography from "@mui/material/Typography"
import { CardActionArea, Divider } from "@mui/material"

//redux
import { getAds } from "../../redux/ad/AdSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

const SmallCard = ({ img, title, portions, price, location }) => {
	return (
		<Card
			sx={{
				width: 164,
				height: 220,
				display: { xs: "block", sm: "block", md: "none", lg: "none" },
			}}
		>
			{/* Make props */}
			<CardActionArea href='/'>
				<CardMedia
					component='img'
					height='95'
					image={img}
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
						{title.substring(0, 16)}...
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{`${portions} portioner`}
					</Typography>
					<Typography variant='body2' color='black'>
						{`${price} kr`}
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
							sx={{ color: "GrayText", marginRight: 0.2 }}
						/>
						<Typography fontSize='12px' color='GrayText'>
							{location}
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default SmallCard
