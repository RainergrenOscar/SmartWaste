import React, { useState } from "react"
import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Modal,
	Radio,
	RadioGroup,
	Typography,
} from "@mui/material"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90%",
	maxWidth: "600px",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	paddingTop: "1rem",
}

const Popup = ({ send, open, handleClose }) => {
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						gutterBottom
						component='div'
						fontSize='18px'
						sx={{
							fontWeight: 500,
							marginBottom: "1rem",
							letterSpacing: -0.8,
							textAlign: "center",
						}}
					>
						Ta bort annons
					</Typography>
					<Typography
						gutterBottom
						component='div'
						fontSize='16px'
						sx={{
							fontWeight: 400,
						}}
					>
						Är du säker?
					</Typography>
					<Typography
						gutterBottom
						component='div'
						fontSize='14px'
						sx={{
							fontWeight: 400,
							marginTop: 1,
							marginBottom: 2,
						}}
					>
						Annonsen kommer att försvinna från SmartWaste inom ett
						kort tag. Tack för att du annonserade hos oss!
					</Typography>

					<FormControl fullWidth>
						<Typography
							gutterBottom
							component='div'
							fontSize='16px'
							sx={{
								fontWeight: 400,
							}}
						>
							Varför tog du bort annonsen?
						</Typography>

						<RadioGroup defaultValue='sold'>
							<FormControlLabel
								sx={{
									marginBottom: 2,
									marginTop: 1,
								}}
								value='sold'
								control={<Radio />}
								label='Varan är såld'
							/>
							<FormControlLabel
								sx={{ marginBottom: 2 }}
								value='date'
								control={<Radio />}
								label='Bäst före datum är passerat'
							/>
							<FormControlLabel
								sx={{ marginBottom: 2 }}
								value='other'
								control={<Radio />}
								label='Annan anledning'
							/>
						</RadioGroup>
						<Button
							onClick={send}
							variant='contained'
							sx={{ backgroundColor: "#26D86E" }}
						>
							Skicka
						</Button>
					</FormControl>
				</Box>
			</Modal>
		</div>
	)
}

export default Popup
