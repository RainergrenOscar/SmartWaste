import { Box, Container, Typography } from "@mui/material"

import React from "react"

//redux
import { getAds, reset } from "../../redux/ad/AdSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Category from "./Category"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../Loading"
import Searchbar from "../Searchbar"
import SmallCard from "./SmallCard"
import sad from "../../resources/sad.svg"

const CardGrid = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [search, setSearch] = useState("")
	const { ads, isSuccess, isError, isLoading } = useSelector(
		(state) => state.ads
	)

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		dispatch(getAds())
	}, [dispatch])

	if (isLoading) {
		return <Loading />
	}

	const filteredAds = ads.filter((ad) => {
		return (
			ad.title.toLowerCase().includes(search.toLowerCase()) ||
			ad.location.toLowerCase().includes(search.toLowerCase())
		)
	})

	return (
		<>
			{/* Searchfield */}
			<Searchbar setSearch={setSearch} />
			{/* Category list */}
			<Category />
			{/* Card grid */}
			<Container>
				<Typography
					gutterBottom
					component='div'
					sx={{
						marginBottom: 1,
						fontWeight: 500,

						letterSpacing: -0.8,
					}}
				>
					Trött på det gamla vanliga?
				</Typography>
				<Box className='auto-grid'>
					{filteredAds.map((ad, i) => (
						<SmallCard ad={ad} key={i} />
					))}
				</Box>
				{filteredAds.length === 0 && (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<img src={sad} width='100px' alt='' />
					</Box>
				)}
			</Container>
		</>
	)
}

//

export default CardGrid
