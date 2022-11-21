import { Stack, Typography } from "@mui/material"
import React from "react"

const EditProfileFields = ({ leftField, rightField }) => {
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			mt={1}
			display='flex'
			alignItems='center'
			maxWidth={"500px"}
		>
			<Typography
				gutterBottom
				component='div'
				fontSize='16px'
				sx={{
					fontWeight: 400,

					letterSpacing: "-0.5px",
				}}
			>
				{leftField}
			</Typography>
			<Typography
				gutterBottom
				component='div'
				fontSize='16px'
				sx={{
					fontWeight: 500,

					letterSpacing: "-0.5px",
				}}
			>
				{rightField}
			</Typography>
		</Stack>
	)
}

export default EditProfileFields
