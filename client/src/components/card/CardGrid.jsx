import { Box, Container, Stack, Typography } from "@mui/material"

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

//Category images

import meat from "../../resources/meat.svg"
import vego from "../../resources/vego.svg"
import fish from "../../resources/fish.svg"
import chicken from "../../resources/kyckling.svg"
import vegan from "../../resources/vegan.svg"

const CardGrid = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [search, setSearch] = useState("")
	const [item, setItem] = useState(null)
	const [category, setCategory] = useState("")
	const { ads, isSuccess, isError, isLoading } = useSelector(
		(state) => state.ads
	)

	const menuItems = [
		{
			value: "Kött",
			image: meat,
		},
		{
			value: "Vegetariskt",
			image: vego,
		},
		{
			value: "Fisk",
			image: fish,
		},
		{
			value: "Kyckling",
			image: chicken,
		},
		{
			value: "Veganskt",
			image: vegan,
		},
	]

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		dispatch(getAds())
		setItem(ads)
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

	const filterItem = (item) => {
		const newItem = ads.filter((newVal) => {
			return newVal.category === item
		})
		setCategory(item)
		setItem(newItem)
	}

	return (
		<>
			{/* Searchfield */}
			<Searchbar setSearch={setSearch} />
			{/* Category list */}
			<Category
				menuItems={menuItems}
				filterItem={filterItem}
				setItem={setItem}
				ads={ads}
			/>
			{/* Card grid */}
			<Container>
				{category === "" ? (
					<Typography
						gutterBottom
						component='div'
						sx={{
							marginBottom: 1,
							fontWeight: 500,

							letterSpacing: -0.8,
						}}
					>
						Trött på det gamla vanliga
					</Typography>
				) : (
					<Typography
						gutterBottom
						component='div'
						sx={{
							marginBottom: 1,
							fontWeight: 500,

							letterSpacing: -0.8,
						}}
					>
						Alltid gott med {category}
					</Typography>
				)}

				<Box className='auto-grid'>
					{filteredAds.map((ad, i) => (
						<SmallCard ad={ad} key={i} />
					))}
					{/* {item?.length !== 0
						? item?.map((ad, i) => <SmallCard ad={ad} key={i} />)
						: filteredAds.map((ad, i) => (
								<SmallCard ad={ad} key={i} />
						  ))} */}
				</Box>
				{filteredAds.length === 0 && (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Stack>
							<img src={sad} width='150px' alt='' />
							<Typography textAlign={"center"}>
								Inga annonser
							</Typography>
						</Stack>
					</Box>
				)}
			</Container>
		</>
	)
}

//

export default CardGrid
