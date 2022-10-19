import { Box, Container, Grid } from "@mui/material"
import React from "react"
import SmallCard from "./SmallCard"

//redux
import { getAds } from "../../redux/ad/AdSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Header from "../Header"

const CardGrid = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAds())
	}, [])
	const { ads } = useSelector((state) => state.ads)

	console.log(ads)

	return (
		<>
			<Container>
				<Box
					sx={{
						flexGrow: 1,
					}}
				>
					<Grid
						container
						spacing={{ xs: 1, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{ads.map((ad) => (
							<Grid
								item
								xs={2}
								sm={4}
								md={4}
								key={ad}
								display='flex'
								justifyContent='center'
							>
								<SmallCard
									title={ad.title}
									img={ad.img}
									location='Västerhaninge'
									portions='4'
									price={ad.price}
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	)
}

//

export default CardGrid
