// React n Redux
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { deleteAd, getAds, reset } from "../../redux/ad/AdSlice"

//Mui
import { Grid, Container } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

//Components
import Popup from "../../components/Popup"
import PersonalCard from "../../components/card/PersonalCard"
import Loading from "../../components/Loading"
import Header from "../../components/Header"

const MyAds = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	//State
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	// Redux state
	const { user, isLoading, isError, isSuccess } = useSelector(
		(state) => state.auth
	)
	const { ads } = useSelector((state) => state.ads)

	// 👇️ scroll to top on page load
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0 })
	}, [])

	//If everything is succesfull, set state to initialstate
	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	//Fetch all ads
	useEffect(() => {
		dispatch(getAds())
	}, [])

	if (isLoading) {
		return <Loading />
	}

	const showAd = (e) => {
		navigate(`/ad/${e.target.closest("article").id}`)
	}

	const deletedAd = (ad) => {
		dispatch(deleteAd(ad))
		handleOpen()
	}

	const handleDelete = () => {
		handleClose()
		window.location.reload()
	}

	return (
		<>
			<Header
				pageName='Mina annonser'
				button={true}
				icon={<ArrowBackIosIcon />}
				url='/profile'
			/>
			<Container sx={{ marginTop: "6rem", marginBottom: "6rem" }}>
				<Grid container rowSpacing={1} columnSpacing={2}>
					{ads &&
						ads.map((ad, i) => {
							if (user._id === ad.user) {
								return (
									<Grid
										item
										xs={12}
										sm={12}
										md={6}
										key={ad._id}
									>
										<article id={ad._id}>
											<PersonalCard
												ad={ad}
												user={user}
												key={ad._id}
												showAd={showAd}
												deletedAd={() =>
													deletedAd(ad._id)
												}
											/>
										</article>
										<Popup
											open={open}
											handleClose={handleClose}
											send={handleDelete}
										/>
									</Grid>
								)
							}
						})}
				</Grid>
			</Container>
		</>
	)
}

export default MyAds
