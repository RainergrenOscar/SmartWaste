import {
	Container,
	TextField,
	Grid,
	FormControl,
	InputLabel,
	InputAdornment,
	MenuItem,
	Button,
	Typography,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import React, { useState } from "react"

const AdForm = () => {
	const [value, setValue] = useState(null)
	return (
		<form>
			<Grid container rowSpacing={4} columnSpacing={2}>
				<Grid item xs={12} md={6}>
					<TextField
						label='Maträtt'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={9} md={6}>
					<TextField
						label='Ingredienser'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={3} md={6} sx={{ display: "flex" }}>
					<Button variant='contained' fullWidth>
						+
					</Button>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label='Allergener'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField label='Kategori' fullWidth select>
						<MenuItem>Kött</MenuItem>
						<MenuItem>Vegetariskt</MenuItem>
						<MenuItem>Fisk / Skaldjur</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label='Länk till recept'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label='Extra info'
						fullWidth
						multiline
						rows={4}
						maxRows={4}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label='Pris'
						type='number'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									SEK
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label='Basic example'
							renderInput={(params) => (
								<TextField fullWidth {...params} />
							)}
						/>
					</LocalizationProvider>
				</Grid>
				<Typography
					sx={{
						marginTop: "2rem",
						marginBottom: "2rem",
						width: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					Kontaktuppgifter
				</Typography>
				<Grid item xs={12} md={6}>
					<TextField
						label='Namn'
						variant='filled'
						value='Oscar Rainergren'
						disabled
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label='Mejladress'
						variant='filled'
						value='Oscar@rainergren.se'
						disabled
						fullWidth
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					marginBottom='5rem'
					sx={{ display: "flex", justifyContent: "center" }}
				>
					<Button
						fullWidth
						variant='contained'
						sx={{
							backgroundColor: "#26D86E",
							"&:hover": {
								backgroundColor: "#22B85F",
							},
						}}
					>
						Skapa annons
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}

export default AdForm
