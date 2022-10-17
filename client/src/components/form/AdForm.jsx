// IMPORTS

//MUI
import {
	TextField,
	Grid,
	InputAdornment,
	MenuItem,
	Button,
	Typography,
	List,
	ListItem,
	Paper,
	IconButton,
	ListSubheader,
	SvgIcon,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

//REACT & REDUX
import React, { useState } from "react"
import { useSelector } from "react-redux"

//EXTRA NPMS
import { v4 } from "uuid"
import dayjs from "dayjs"

const AdForm = () => {
	//Redux
	const { user } = useSelector((state) => state.auth)
	//Ingredients state
	const [ingr, setIngr] = useState([])
	const [name, setName] = useState("")
	//Select state
	const [category, setCategory] = useState("Kött")
	//Date state
	const [date, setDate] = useState(dayjs("2022/12/12"))
	//Form values
	const [values, setValues] = useState({
		title: "",
		allergerns: "",
		category: "",
		link: "",
		desc: "",
		img: "",
		price: "",
		date: "",
		name: "",
		email: "",
	})

	//Add ingredients to Array
	const addToArray = () => {
		if (name) {
			setIngr((prev) => [...prev, name])
			setName("")
		} else {
			console.log("FEL")
		}
	}

	//Remove Ingredients
	const removeIngr = (index) => {
		const newIngr = [...ingr]
		newIngr.splice(index, 1)
		setIngr(newIngr)
	}

	// Handle image upload
	const onFileChange = (e) => {}

	// Handle date
	const handleDate = (newValue) => {
		setDate(newValue)
	}

	// Handle Category
	const handleCategory = (e) => {
		setCategory(e.target.value)
	}

	//Handle form
	const onChange = (e) => {
		switch (e.target.id) {
			case "title":
				setValues((prev) => ({ ...prev, title: e.target.value }))
				break
			case "allergens":
				setValues((prev) => ({ ...prev, allergerns: e.target.value }))
				break
			case "link":
				setValues((prev) => ({ ...prev, link: e.target.value }))
				break
			case "desc":
				setValues((prev) => ({ ...prev, desc: e.target.value }))
				break
			case "price":
				const price = parseInt(e.target.value)
				setValues((prev) => ({ ...prev, price: price }))
				break
		}
	}

	//Submit form
	const submitForm = () => {}

	return (
		<form>
			<Grid container rowSpacing={4} columnSpacing={2}>
				{/* MATRÄTT */}
				<Grid item xs={12} md={12}>
					<TextField
						label='Maträtt'
						id='title'
						value={values.title}
						onChange={(e) => onChange(e)}
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>

				{/* LÄGG TILL INGREDIENSER */}
				<Grid item xs={9} md={9}>
					<TextField
						label='Ingredienser'
						fullWidth
						onChange={(e) => setName(e.target.value)}
						value={name}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={3} md={3} sx={{ display: "flex" }}>
					<Button variant='contained' fullWidth onClick={addToArray}>
						+
					</Button>
				</Grid>

				{/* INGREDIENSER LISTA */}
				<Grid item xs={12} md={12}>
					<Paper>
						<List
							subheader={
								<ListSubheader
									component='div'
									id='nested-list-subheader'
									color={"primary"}
								>
									Ingredienser
								</ListSubheader>
							}
						>
							{ingr.map((item, index) => {
								return (
									<ListItem
										key={v4()}
										secondaryAction={
											<IconButton
												onClick={() =>
													removeIngr(index)
												}
												edge='end'
												aria-label='delete'
											>
												<DeleteIcon />
											</IconButton>
										}
									>
										{item}
									</ListItem>
								)
							})}
						</List>
					</Paper>
				</Grid>

				{/* ALLLERGENER */}
				<Grid item xs={12} md={6}>
					<TextField
						id='allergens'
						value={values.allergerns}
						onChange={(e) => onChange(e)}
						label='Allergener'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>

				{/* KATEGORI */}
				<Grid item xs={12} md={6}>
					<TextField
						value={category}
						onChange={handleCategory}
						label='Kategori'
						fullWidth
						select
						defaultValue={category}
					>
						<MenuItem value='Kött'>Kött</MenuItem>
						<MenuItem value='Vegetariskt'>Vegetariskt</MenuItem>
						<MenuItem value='Fisk'>Fisk / Skaldjur</MenuItem>
					</TextField>
				</Grid>

				{/* LÄNK TILL RECEPT */}
				<Grid item xs={12} md={12}>
					<TextField
						id='link'
						value={values.link}
						onChange={(e) => onChange(e)}
						label='Länk till recept'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>

				{/* EXTRA INFO */}
				<Grid item xs={12} md={12}>
					<TextField
						id='desc'
						value={values.desc}
						onChange={(e) => onChange(e)}
						label='Extra info'
						fullWidth
						multiline
						rows={4}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>

				{/* LADDA UP BILD */}
				<Grid item xs={12} md={12}>
					<Button variant='contained' component='label'>
						Ladda upp fil
						<input
							hidden
							accept='image/*'
							type='file'
							id='icon-button-file'
							onChange={(e) => onFileChange(e)}
						/>
					</Button>
					<img src='' alt='' />
				</Grid>

				{/* PRIS */}
				<Grid item xs={12} md={6}>
					<TextField
						id='price'
						value={values.price}
						onChange={(e) => onChange(e)}
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

				{/* BÄST FÖRE */}
				<Grid item xs={12} md={6}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							id='date'
							value={date}
							onChange={handleDate}
							label='Bäst före'
							inputFormat='YYYY/MM/DD'
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

				{/* NAMN */}
				<Grid item xs={12} md={6}>
					<TextField
						label='Namn'
						variant='filled'
						value={user.name}
						disabled
						fullWidth
					/>
				</Grid>

				{/* MEJLADRESS */}
				<Grid item xs={12} md={6}>
					<TextField
						label='Mejladress'
						variant='filled'
						value={user.email}
						disabled
						fullWidth
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={12}
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
