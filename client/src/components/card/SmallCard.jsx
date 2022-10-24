/* IMPORTS */

//MUI
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Typography from "@mui/material/Typography"
import { CardActionArea, Divider } from "@mui/material"

// DONT USE THIS FOR NOW
const SmallCard = ({ img, title, portions, price, location, id }) => {
	return (
		<Card
			sx={{
				display: { xs: "block", sm: "block", md: "none", lg: "none" },
			}}
		>
			{/* Make props */}
			<CardActionArea>
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
						{title.substring(0, 15)}...
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{`${portions} Portioner`}
					</Typography>
					<Typography
						variant='body2'
						color='black'
						sx={{
							fontWeight: 500,
						}}
					>
						{`${price} Kr`}
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
