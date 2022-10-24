import { Box, Card, Paper, Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"
import React, { useState } from "react"
import meat from "../../resources/meat.svg"
import vego from "../../resources/vego.svg"
import cheap from "../../resources/cheap.svg"
import fish from "../../resources/fish.svg"

const Category = () => {
	return (
		<>
			<Box marginTop={2} marginBottom={2}>
				<Typography
					gutterBottom
					component='div'
					color='black'
					sx={{
						marginLeft: "1rem",
						fontWeight: 500,
						letterSpacing: -0.5,
					}}
				>
					Vad är du sugen på?
				</Typography>
				<div className='scroll-wrap'>
					<div className='card'>
						<Box
							sx={{
								marginLeft: "1rem",
								marginRight: "1rem",
							}}
						>
							<img src={meat} alt='' />
						</Box>
					</div>
					<div className='card'>
						<Box sx={{ marginRight: "1rem" }}>
							<img src={vego} alt='' />
						</Box>
					</div>
					<div className='card'>
						<Box sx={{ marginRight: "1rem" }}>
							<img src={fish} alt='' />
						</Box>
					</div>
					<div className='card'>
						<Box sx={{ marginRight: "1rem" }}>
							<img src={cheap} alt='' />
						</Box>
					</div>
					<div className='card'>
						<Box sx={{ marginRight: "1rem" }}>
							<img src={meat} alt='' />
						</Box>
					</div>
				</div>
			</Box>
		</>
	)
}

export default Category
