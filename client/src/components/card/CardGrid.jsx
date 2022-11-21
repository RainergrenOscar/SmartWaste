//MUI imports
import { Box, Container, Stack, Typography } from "@mui/material"

//react n redux
import { getAds, reset } from "../../redux/ad/AdSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"

//Components
import Category from "./Category"
import Loading from "../Loading"
import Searchbar from "../Searchbar"
import SmallCard from "./SmallCard"

//Images
import sad from "../../resources/sad.svg"
import meat from "../../resources/meat.svg"
import vego from "../../resources/vego.svg"
import fish from "../../resources/fish.svg"
import chicken from "../../resources/kyckling.svg"
import vegan from "../../resources/vegan.svg"
import allt from "../../resources/allt.svg"
import cheapest from "../../resources/cheapest.svg"

const CardGrid = () => {
	const dispatch = useDispatch()
	const [search, setSearch] = useState("")
	const [item, setItem] = useState(null)
	const [category, setCategory] = useState("")

	const { ads, isSuccess, isLoading } = useSelector((state) => state.ads)

	//Category and Searchbar function
	const filterItem = (item, isSearch) => {
		let newItem = ads.filter((newVal) => {
			return newVal.category === item
		})
		if (item === "Allt") {
			newItem = ads
		}
		if (item === "test") {
			newItem = ads.filter((newVal) => {
				return newVal.price < 150
			})
		}
		if (isSearch) {
			let searchResult = newItem.filter((ad) => {
				return (
					ad.title.toLowerCase().includes(isSearch.toLowerCase()) ||
					ad.location.toLowerCase().includes(isSearch.toLowerCase())
				)
			})
			newItem = searchResult
		}
		setCategory(item)
		setItem(newItem)
	}

	const handleSearch = (value) => {
		setSearch(value)
		filterItem(category, value)
	}

	useEffect(() => {
		dispatch(getAds())
	}, [dispatch])

	useEffect(() => {
		filterItem("Allt")
	}, [ads])

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	const menuItems = [
		{
			value: "Allt",
			image: allt,
		},
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
		{
			value: "test",
			image: cheapest,
		},
	]

	if (isLoading) {
		return <Loading />
	}

	return (
		<>
			{/* Searchfield */}
			<Searchbar setSearch={handleSearch} />
			{/* Category list */}
			<Category
				menuItems={menuItems}
				filterItem={filterItem}
				setItem={setItem}
				ads={ads}
			/>
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
					{category === "Allt" && "Alla annonser"}
					{category === "Kött" && "Trevliga måltider med kött"}
					{category === "Vegetariskt" && "Grönsaker du kan lita på"}
					{category === "Fisk" && "Fisk är nyttigt!"}
					{category === "Kyckling" && "Härliga recept med kyckling"}
					{category === "Veganskt" && "Grönsaker för livet"}
					{category === "test" && "Måltider för under 150kr"}
				</Typography>

				<Box className='auto-grid'>
					{item?.map((ad, i) => (
						<SmallCard ad={ad} key={i} />
					))}
				</Box>

				{item?.length === 0 && (
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
