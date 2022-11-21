import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getSpecificAd } from "../../redux/ad/AdSlice"
import Loading from "../../components/Loading"
import {
	Box,
	Button,
	Container,
	Divider,
	ListItem,
	Stack,
	Typography,
} from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { v4 } from "uuid"
import Modal from "../Modal"

const SpecificAd = () => {
	const [displayModal, setDisplayModal] = useState(false)
	const dispatch = useDispatch()
	const { ad, isLoading, isError, message } = useSelector(
		(state) => state.ads
	)
	const { adId } = useParams()

	useEffect(() => {
		if (isError) {
			console.log(message)
		}
		dispatch(getSpecificAd(adId))
	}, [isError, getSpecificAd, adId])

	if (isLoading) {
		return <Loading />
	}

	if (isError) {
		return <h3>Ooops.... Något blev fel</h3>
	}

	return (
		<>
			<Box>
				<div className='container_image'>
					<Container
						maxWidth='md'
						sx={{
							display: {
								xs: "none",
								sm: "none",
								md: "block",
								lg: "block",
							},
						}}
					>
						<img
							src={ad?.ad?.img}
							width='100%'
							className='container_image_ad'
							alt=''
						/>
					</Container>
					<Box
						maxWidth='md'
						sx={{
							display: {
								xs: "block",
								sm: "block",
								md: "none",
								lg: "none",
							},
						}}
					>
						<img
							src={ad?.ad?.img}
							width='100%'
							className='container_image_ad'
							alt='Hittar ej bild'
						/>
						<div className='top-right'>
							<Typography
								color='white'
								sx={{
									fontSize: 13,
									letterSpacing: "-1.5%",
									lineHeight: 1,
								}}
							>
								Bäst före <br /> 2022-10-11
							</Typography>
						</div>
					</Box>
				</div>

				<Container maxWidth='md'>
					<div
						style={{
							display: "flex",
							marginTop: 8,
							alignItems: "center",
						}}
					>
						<LocationOnIcon
							fontSize='inherit'
							sx={{
								color: "GrayText",
								marginRight: 0.2,
							}}
						/>
						<Stack
							width='100%'
							direction='row'
							justifyContent='space-between'
							alignItems='center'
						>
							<Typography color='GrayText' fontSize='15px'>
								{ad?.ad?.location} - mindre än 1km bort
							</Typography>
							<Typography
								color='black'
								fontSize='15px'
								sx={{
									display: {
										xs: "none",
										sm: "none",
										md: "block",
										lg: "block",
									},
									fontWeight: 500,

									letterSpacing: -0.8,
								}}
							>
								Bäst före : 2022-10-11
							</Typography>
						</Stack>
					</div>
					<Typography
						gutterBottom
						component='div'
						fontSize='24px'
						sx={{
							fontWeight: 500,
							marginTop: 1,
							letterSpacing: -0.8,
						}}
					>
						{ad?.ad?.title}
					</Typography>
					<Typography
						gutterBottom
						fontSize='20px'
						variant='body2'
						color='text.secondary'
						sx={{
							fontWeight: 400,
							marginTop: -0.5,
						}}
					>
						{ad?.ad?.portions} portioner
					</Typography>
					<Typography
						gutterBottom
						fontSize='24px'
						component='div'
						sx={{
							fontWeight: 500,
							marginTop: 1,
							letterSpacing: -0.8,
						}}
					>
						{ad?.ad?.price}kr
					</Typography>
					<Button
						disableElevation
						fullWidth
						onClick={() => setDisplayModal(!displayModal)}
						size='medium'
						variant='contained'
						sx={{
							marginTop: 1,
							backgroundColor: "#26D86E",
							"&:hover": {
								backgroundColor: "#22B85F",
							},
						}}
					>
						Skicka meddelande
					</Button>
					<Typography
						gutterBottom
						component='div'
						color='text.secondary'
						sx={{
							fontWeight: 500,
							marginTop: 3,
							letterSpacing: -0.8,
						}}
					>
						Säljes av
					</Typography>
					<div
						style={{
							display: "flex",
							marginTop: 8,
						}}
					>
						<img
							src={ad?.user?.avatar}
							width='50px'
							style={{ borderRadius: "100%" }}
							alt='
						'
						/>
						<Stack spacing={0}>
							<Typography
								gutterBottom
								component='div'
								fontSize='17px'
								sx={{
									fontWeight: 500,
									marginLeft: 2,
									letterSpacing: -0.8,
								}}
							>
								{ad?.user?.name
									? ad?.user?.name
									: "Profil borttagen"}
							</Typography>
							<Typography
								gutterBottom
								color='text.secondary'
								sx={{
									fontSize: "12px",
									fontWeight: 400,
									marginTop: -1,
									marginLeft: 2,
								}}
							>
								{ad?.user?.name
									? "Verifierad med BankID"
									: null}
							</Typography>
						</Stack>
					</div>
					<Divider
						sx={{
							marginTop: "1.5rem",
							marginBottom: "1.5rem",
						}}
					/>
					<div
						style={{
							display: "flex",
						}}
					>
						<Typography
							gutterBottom
							variant='body2'
							fontSize='16px'
							sx={{
								fontWeight: 500,
							}}
						>
							Allergener:
						</Typography>
						<Typography
							gutterBottom
							fontSize='16px'
							variant='body2'
							color='text.secondary'
							sx={{
								fontWeight: 500,
								marginLeft: 0.5,
							}}
						>
							{ad?.ad?.allergens}
						</Typography>
					</div>
					<Divider
						sx={{
							marginTop: "1.5rem",
							marginBottom: "1.5rem",
						}}
					/>
					<Typography
						variant='body1'
						sx={{
							fontSize: "16px",
							fontWeight: 500,
						}}
					>
						Ingredienser
					</Typography>
					<Typography
						gutterBottom
						variant='body2'
						fontSize='14px'
						color='text.secondary'
						sx={{
							fontWeight: 400,
							letterSpacing: "-1%",
							marginBottom: 2,
						}}
					>
						För {ad?.ad?.portions} portioner
					</Typography>
					{ad?.ad?.ingredients.map((ingr) => (
						<ListItem key={v4()}>{ingr}</ListItem>
					))}
					<Divider
						sx={{
							marginTop: "1.5rem",
							marginBottom: "1.5rem",
						}}
					/>

					<Typography
						gutterBottom
						variant='body2'
						sx={{
							fontWeight: 500,
						}}
					>
						Extra info
					</Typography>
					<Typography
						gutterBottom
						variant='body2'
						color='text.secondary'
						sx={{
							fontWeight: 400,
						}}
					>
						{ad?.ad?.desc}
					</Typography>
				</Container>
			</Box>
			<Modal
				displayModal={displayModal}
				setDisplayModal={setDisplayModal}
				user={ad?.user?.name ? ad?.user?.name : "Profil borttagen"}
				mail={ad?.user?.email ? ad?.user?.email : "Profil borttagen"}
			/>
		</>
	)
}

export default SpecificAd
