import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getAds, reset } from "../redux/ad/AdSlice"
import Loading from "../components/Loading"
import { Container } from "@mui/system"
import PersonalCard from "../components/card/PersonalCard"
import { Grid } from "@mui/material"

const MyAds = () => {
	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0 })
	}, [])

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [search, setSearch] = useState("")

	const { user, isLoading, isError, isSuccess } = useSelector(
		(state) => state.auth
	)

	const { ads } = useSelector((state) => state.ads)

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		dispatch(getAds())
	}, [])

	if (isLoading) {
		return <Loading />
	}

	const onClickAd = (e) => {
		navigate(`/ad/${e.target.closest("article").id}`)
	}

	return (
		<>
			<Header
				pageName='Mina annonser'
				button={true}
				icon={<ArrowBackIosIcon />}
				url='/profile'
			/>
			<Container sx={{ marginTop: "6rem" }}>
				{ads.map((ad) => (
					<PersonalCard ad={ad} user={user} key={ad._id} />
				))}
			</Container>
		</>
	)
}

export default MyAds