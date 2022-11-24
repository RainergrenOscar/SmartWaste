import logo from "../resources/Logo.svg"

//React
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

//MUI imports
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

//Redux
import { useSelector, useDispatch } from "react-redux"
import { register, reset } from "../redux/auth/authSlice"
import Loading from "../components/Loading"

//React toast
import { toast } from "react-toastify"

const Signup = () => {
	const navigate = useNavigate()
	//Redux
	const dispatch = useDispatch()
	const { user, isLoading, isSuccess, message, isError } = useSelector(
		(state) => state.auth
	)

	//State from the form
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	})

	//Destructure the form input state
	const { name, email, password, password2 } = form

	//handle the inputs
	const onChange = (e) => {
		setForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	//check if there is any error, otherwise navigate to login and reset the redux state
	useEffect(() => {
		if (isError) {
			console.log("ERROR")
		}
		if (isSuccess || user) {
			navigate("/login")
		}
		dispatch(reset())
	}, [isSuccess, navigate, dispatch, isError, user])

	//When form is submitted
	const handleSubmit = (e) => {
		e.preventDefault()
		if (password !== password2) {
			toast.error("Lösenorden matchar ej")
		} else {
			const userData = {
				name,
				email,
				password,
			}
			dispatch(register(userData))
		}
	}
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Container maxWidth='xs'>
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<img src={logo} />
						<Typography component='h1' variant='h5' sx={{ mt: 1 }}>
							Skapa ett konto
						</Typography>
						<Box
							component='form'
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 2 }}
						>
							<TextField
								margin='normal'
								required
								fullWidth
								id='name'
								label='Namn'
								name='name'
								variant='outlined'
								autoFocus
								onChange={onChange}
								value={name}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='E-postadress'
								name='email'
								variant='outlined'
								onChange={onChange}
								value={email}
							/>

							<TextField
								margin='normal'
								required
								fullWidth
								name='password'
								label='Lösenord'
								type='password'
								id='password'
								onChange={onChange}
								value={password}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='password2'
								label='Bekräfta lösenord'
								type='password'
								id='password2'
								onChange={onChange}
								value={password2}
							/>

							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Skapa konto
							</Button>
							<Link href='/login' variant='body2'>
								{"Har du redan ett konto? Logga in"}
							</Link>
						</Box>
					</Box>
				</Container>
			)}
		</>
	)
}

export default Signup
