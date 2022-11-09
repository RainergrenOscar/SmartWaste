import { Box } from "@mui/system"
import React from "react"
import Header from "../components/Header"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

const EditProfile = () => {
	return (
		<>
			<Header
				pageName='Redigera profil'
				button={true}
				icon={<ArrowBackIosIcon />}
				url='/profile'
			/>
			<Box
				sx={{
					marginTop: { xs: "4rem", md: "6rem" },
					marginBottom: "6rem",
				}}
            >
                
            </Box>
		</>
	)
}

export default EditProfile
