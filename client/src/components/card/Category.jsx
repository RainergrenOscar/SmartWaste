import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"

const Category = ({ filterItem, menuItems }) => {
	return (
		<Container sx={{}}>
			<Box marginTop={2} marginBottom={2}>
				<Typography
					gutterBottom
					component='div'
					color='black'
					sx={{
						fontWeight: 500,
						letterSpacing: -0.5,
					}}
				>
					Vad är du sugen på?
				</Typography>
				<div className='scroll-wrap'>
					{menuItems.map((Val, id) => (
						<div className='card' key={id}>
							<Box
								onClick={() => filterItem(Val.value)}
								sx={{
									marginRight: "0.5rem",
									cursor: "pointer",
								}}
							>
								<img src={Val.image} alt='' />
							</Box>
						</div>
					))}
				</div>
			</Box>
		</Container>
	)
}

export default Category
