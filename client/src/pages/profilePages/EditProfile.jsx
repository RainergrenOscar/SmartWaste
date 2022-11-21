import { Box } from "@mui/system"
import React, { useEffect } from "react"
import Header from "../../components/Header"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Container, IconButton, Stack, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { getAds } from "../../redux/ad/AdSlice"
import EditIcon from "@mui/icons-material/Edit"
import EditProfileFields from "../../components/profile/EditProfileFields"
import Loading from "../../components/Loading"

const EditProfile = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAds())
	}, [])

	const { user, isLoading, isError, message } = useSelector(
		(state) => state.auth
	)
	const { ads } = useSelector((state) => state.ads)

	const myAds = ads.map((ad, i) => {
		if (user._id === ad.user) {
			return i
		}
	})
	let last = myAds[myAds.length - 1]

	if (isLoading) {
		return <Loading />
	}

	if (isError) {
		return <h3>Ooops.... Något blev fel</h3>
	}

	return (
		<>
			<Header
				pageName='Redigera profil'
				button={true}
				icon={<ArrowBackIosIcon />}
				url='/profile'
			/>
			<Container sx={{ marginTop: "6rem" }}>
				<Typography
					gutterBottom
					component='div'
					fontSize='24px'
					sx={{
						fontWeight: 600,
						letterSpacing: -1,
					}}
				>
					Redigera profil
				</Typography>
				<Box mx={1}>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Typography
							gutterBottom
							component='div'
							fontSize='18px'
							mt={4}
							mb={3}
							sx={{
								fontWeight: 500,

								letterSpacing: "-0.5px",
							}}
						>
							Om mig
						</Typography>
					</Stack>
					<EditProfileFields
						leftField={"Namn"}
						rightField={user?.name}
					/>
					<EditProfileFields leftField={"Telefon"} rightField={"-"} />
					<EditProfileFields
						leftField={"Mejl"}
						rightField={user?.email}
					/>
					<EditProfileFields
						leftField={"Aktiva annonser"}
						rightField={last}
					/>
				</Box>
			</Container>
		</>
	)
}

export default EditProfile
