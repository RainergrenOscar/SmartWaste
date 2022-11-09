import {
	Button,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material"
import React from "react"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import Loading from "../components/Loading"

import SettingsCard from "../components/profile/SettingsCard"
import pen from "../resources/pen.svg"

import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined"
import { logout, reset } from "../redux/auth/authSlice"
import Confirm from "../components/Popup"

const Profile = () => {
	const dispatch = useDispatch()

	const { user, isLoading, isError, message } = useSelector(
		(state) => state.auth
	)

	if (isLoading) {
		return <Loading />
	}

	if (isError) {
		return <h3>Ooops.... Något blev fel</h3>
	}

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		window.location.reload()
	}

	return (
		<>
			<Header pageName='Min profil' />
			<Container sx={{ marginTop: "6rem" }}>
				<div
					style={{
						display: "flex",
					}}
				>
					<img
						src={user?.avatar}
						width='70px'
						style={{ borderRadius: "30px" }}
						alt=''
					/>
					<Stack spacing={0}>
						<Typography
							gutterBottom
							component='div'
							fontSize='26px'
							sx={{
								fontWeight: 600,
								marginLeft: 2,
								letterSpacing: -1,
							}}
						>
							{user?.name}
						</Typography>
						<Typography
							gutterBottom
							color='text.secondary'
							sx={{
								fontSize: "14px",
								fontWeight: 400,
								marginTop: -1.6,
								marginLeft: 2,
							}}
						>
							{user?.email}
						</Typography>
					</Stack>
				</div>
				<Stack direction='row'>
					<Button
						variant='contained'
						disableElevation
						size='medium'
						sx={{
							marginTop: "2rem",
							marginRight: "1rem",
						}}
						startIcon={<ModeOutlinedIcon />}
					>
						Redigera profil
					</Button>
					<Button
						variant='contained'
						onClick={onLogout}
						disableElevation
						size='medium'
						color='error'
						sx={{ marginTop: "2rem" }}
						startIcon={<ModeOutlinedIcon />}
					>
						Logga ut
					</Button>
				</Stack>

				<Divider sx={{ marginTop: "2rem", marginBottom: "2rem" }} />
				<Grid container rowSpacing={2} columnSpacing={2}>
					<Grid item xs={6}>
						<SettingsCard
							to='/myAds'
							title='Mina annonser'
							lgInfo='Se och hantera dina annonser'
							icon={<img src={pen} width='35px' />}
						/>
					</Grid>
					<Grid item xs={6}>
						<SettingsCard
							to='editprofile'
							title='Redigera profil'
							lgInfo='Se och hantera din profil '
							icon={<img src={pen} width='35px' />}
						/>
					</Grid>
					<Grid item xs={6}>
						<SettingsCard
							title='Inställningar'
							lgInfo='Se och hantera din profil '
							icon={<img src={pen} width='35px' />}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Profile
