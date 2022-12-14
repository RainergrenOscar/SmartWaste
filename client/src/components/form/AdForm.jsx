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
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import UploadIcon from "@mui/icons-material/Upload"
import { Box } from "@mui/system"
import LocationOnIcon from "@mui/icons-material/LocationOn"

//REACT & REDUX
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createAd } from "../../redux/ad/AdSlice"

//EXTRA NPMS
import { v4 } from "uuid"

const AdForm = () => {
	//Redux
	const { user } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	//Ingredients state
	const [ingr, setIngr] = useState([])
	const [name, setName] = useState("")
	//Select state
	const [category, setCategory] = useState("Kött")
	//Date state
	const [date, setDate] = useState("2022/10/22")
	//Form values
	const [values, setValues] = useState({
		title: "",
		allergerns: "",
		link: "",
		desc: "",
		img: "",
		price: "",
		date: "",
		name: "",
		email: "",
		location: "",
		portions: "",
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
	const onFileChange = (e) => {
		let file = e.target.files[0]
		if (file.size > 100000) {
			alert("Bilden är för stor")
			setValues((prev) => ({ ...prev, picDone: false, pic: "" }))
			return
		} else {
			setValues((prev) => ({ ...prev, picDone: true }))
			const reader = new FileReader()
			setValues((prev) => ({ ...prev, img: file }))
			reader.addEventListener(
				"load",
				() => {
					setValues((prev) => ({ ...prev, img: reader.result }))
				},
				false
			)

			if (file) {
				reader.readAsDataURL(file)
			}
		}
	}

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
			case "portions":
				const portions = parseInt(e.target.value)
				setValues((prev) => ({ ...prev, portions: portions }))
				break
			case "location":
				setValues((prev) => ({ ...prev, location: e.target.value }))
				break
		}
	}

	//Validation
	const submitForm = () => {
		const newObj = {
			title: values.title,
			ingredients: ingr,
			allergens: values.allergerns,
			category: category,
			link: values.link,
			desc: values.desc,
			price: values.price,
			date: date,
			name: user.name,
			email: user.email,
			img: values.img,
			portions: values.portions,
			location: values.location,
		}
		if (
			values.title === "" ||
			ingr === "" ||
			values.allergerns === "" ||
			category === "" ||
			values.link === "" ||
			values.desc === "" ||
			values.price === "" ||
			values.img === "" ||
			values.location === "" ||
			values.portions === ""
		) {
			alert("Vänligen fyll i alla fält")
			return
		} else {
			dispatch(createAd(newObj))
			navigate("/")
			window.location.reload()
		}
	}

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
				<Grid item xs={8} sm={9} md={10}>
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
				<Grid item xs={4} sm={3} md={2} sx={{ display: "flex" }}>
					<Button
						variant='contained'
						fullWidth
						onClick={addToArray}
						disableElevation
					>
						Lägg till
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
						<MenuItem value='Kyckling'>Kyckling</MenuItem>
						<MenuItem value='Veganskt'>Veganskt</MenuItem>
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
					<Button
						disableElevation
						variant='contained'
						component='label'
						endIcon={<UploadIcon />}
					>
						Ladda upp fil
						<input
							hidden
							accept='image/*'
							type='file'
							id='icon-button-file'
							onChange={(e) => onFileChange(e)}
						/>
					</Button>
				</Grid>
				<Grid item xs={12} md={12}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							p: 2,
							border: "1px dashed grey",
						}}
					>
						<img src={values.img} width='200px' alt={values.img} />
					</Box>
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

				{/* PORTIONER */}
				<Grid item xs={12} md={6}>
					<TextField
						id='portions'
						value={values.portions}
						onChange={(e) => onChange(e)}
						label='Portioner'
						type='number'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'></InputAdornment>
							),
						}}
					/>
				</Grid>

				{/* PLATS */}
				<Grid item xs={12} md={6}>
					<TextField
						id='location'
						value={values.location}
						onChange={(e) => onChange(e)}
						label='Plats'
						type='text'
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<LocationOnIcon />
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
						disableElevation
						onClick={submitForm}
						fullWidth
						size='large'
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
