import { Box, Link, Typography } from "@mui/material"
import React from "react"

const SettingsCard = ({ title, lgInfo, icon, to }) => {
	return (
		<Link href={to} underline='none'>
			<Box
				sx={{
					paddingLeft: "16px",
					paddingTop: "16px",
					paddingBottom: "25px",
					paddingRight: "16px",
					backgroundColor: "#f9f7f6",
					borderRadius: "8px",
				}}
			>
				{icon}
				<Typography
					component='div'
					color='#363433'
					sx={{
						fontSize: { xs: "15px", sm: "17px" },
						fontWeight: 500,
						marginTop: 0,
					}}
				>
					{title}
				</Typography>
				<Typography
					component='div'
					color='#363433'
					sx={{
						display: { xs: "none", sm: "block" },
						fontSize: "17px",
						fontWeight: 400,
					}}
				>
					{lgInfo}
				</Typography>
			</Box>
		</Link>
	)
}

export default SettingsCard
