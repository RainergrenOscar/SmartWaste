import Header from "../../components/Header"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Box, Container, Stack, Typography } from "@mui/material"

// icons
import HelpIcon from "@mui/icons-material/Help"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ErrorIcon from "@mui/icons-material/Error"
import CancelIcon from "@mui/icons-material/Cancel"

const EditProfile = () => {
	return (
		<>
			<Header
				pageName='Inställningar'
				button={true}
				icon={<ArrowBackIosIcon />}
				url='/profile'
			/>
			<Container sx={{ marginTop: "6rem" }}>
				<Typography
					gutterBottom
					component='div'
					fontSize='24px'
					sx={{
						fontWeight: 600,
						letterSpacing: -1,
					}}
				>
					Inställningar
				</Typography>
				<Typography
					component='div'
					fontSize='12px'
					mt={4}
					sx={{
						fontWeight: 500,
						letterSpacing: "-0.5px",
						color: "gray",
					}}
				>
					Om SmartWaste
				</Typography>
				<Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
					<HelpIcon sx={{ color: "#029AE5" }} />
					<Typography
						gutterBottom
						component='div'
						fontSize='16px'
						mt={2}
						sx={{
							fontWeight: 500,
							letterSpacing: -1,
							mt: "5px",
							ml: 2,
						}}
					>
						Så funkar SmartWaste
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
					<ChatBubbleIcon sx={{ color: "#F26087" }} />
					<Typography
						gutterBottom
						component='div'
						fontSize='16px'
						mt={2}
						sx={{
							fontWeight: 500,
							letterSpacing: -1,
							mt: "5px",
							ml: 2,
						}}
					>
						Kontakta oss
					</Typography>
				</Box>
				<Typography
					component='div'
					fontSize='12px'
					mt={4}
					sx={{
						fontWeight: 500,
						letterSpacing: "-0.5px",
						color: "gray",
					}}
				>
					Inställningar
				</Typography>
				<Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
					<AccountCircleIcon sx={{ color: "#FFB236" }} />
					<Typography
						gutterBottom
						component='div'
						fontSize='16px'
						mt={2}
						sx={{
							fontWeight: 500,
							letterSpacing: -1,
							mt: "5px",
							ml: 2,
						}}
					>
						Redigera profil
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
					<ErrorIcon sx={{ color: "#F26087" }} />
					<Typography
						gutterBottom
						component='div'
						fontSize='16px'
						mt={2}
						sx={{
							fontWeight: 500,
							letterSpacing: -0.3,
							mt: "5px",
							ml: 2,
						}}
					>
						Notispreferenser
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
					<CancelIcon sx={{ color: "gray" }} />
					<Typography
						gutterBottom
						component='div'
						fontSize='16px'
						mt={2}
						sx={{
							fontWeight: 500,
							letterSpacing: -1,
							mt: "5px",
							ml: 2,
						}}
					>
						Logga ut
					</Typography>
				</Box>
				<Typography
					component='div'
					fontSize='12px'
					mt={4}
					sx={{
						fontWeight: 500,
						letterSpacing: "-0.5px",
						color: "gray",
					}}
				>
					Dokument
				</Typography>
				<Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
					<AccountCircleIcon sx={{ color: "gray" }} />
					<Typography
						gutterBottom
						component='div'
						fontSize='16px'
						mt={2}
						sx={{
							fontWeight: 500,
							letterSpacing: -1,
							mt: "5px",
							ml: 2,
						}}
					>
						Användarvilkor
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
					<ErrorIcon sx={{ color: "gray" }} />
					<Typography
						gutterBottom
						component='div'
						fontSize='16px'
						mt={2}
						sx={{
							fontWeight: 500,
							letterSpacing: -1,
							mt: "5px",
							ml: 2,
						}}
					>
						Integritetspolicy
					</Typography>
				</Box>
			</Container>
		</>
	)
}

export default EditProfile
