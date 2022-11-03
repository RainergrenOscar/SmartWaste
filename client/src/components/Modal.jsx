import { Typography } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"

const Modal = ({ displayModal, setDisplayModal, user, mail }) => {
	return (
		<>
			<div className={`Modal ${displayModal ? "Show" : ""}`}>
				<Container>
					<Typography
						component='div'
						sx={{
							fontSize: { xs: "16px" },
							fontWeight: 500,
							marginTop: 3,
							letterSpacing: -0.8,
							display: "flex",
						}}
					>
						<PersonIcon
							sx={{
								marginRight: "1rem",
							}}
						/>
						{user}
					</Typography>
					<Typography
						gutterBottom
						component='div'
						sx={{
							fontSize: { xs: "16px" },
							fontWeight: 400,
							marginTop: ".5rem",
							display: "flex",
						}}
					>
						<EmailIcon
							sx={{
								marginRight: "1rem",
							}}
						/>
						{mail}
					</Typography>
				</Container>
			</div>

			<div
				className={`Overlay ${displayModal ? "Show" : ""}`}
				onClick={() => setDisplayModal(!displayModal)}
			/>
		</>
	)
}

export default Modal

// <button
// 						className='Close'
// 						onClick={() => setDisplayModal(!displayModal)}
// 					>
// 						X
// 					</button>
