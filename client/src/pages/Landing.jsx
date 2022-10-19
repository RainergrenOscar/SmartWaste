import { Container } from "@mui/material"
import React from "react"
import CardGrid from "../components/card/CardGrid"
import Category from "../components/card/Category"
import SmallCard from "../components/card/SmallCard"
import Header from "../components/Header"

const Landing = () => {
	return (
		<>
			<Header searchBar='true' />
			<Container>
				<Category />
				<CardGrid />
			</Container>
		</>
	)
}

export default Landing
