import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Typography from "@mui/material/Typography"
import { CardActionArea, Divider } from "@mui/material"

const SmallCard = ({}) => {
	return (
		<Card sx={{ width: 164, height: 220 }}>
			{/* Make props */}
			<CardActionArea href='/'>
				<CardMedia
					component='img'
					height='95'
					image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
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
						Test
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						4 Portioner
					</Typography>
					<Typography variant='body2' color='black'>
						160kr
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
							Västerhaninge
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default SmallCard
