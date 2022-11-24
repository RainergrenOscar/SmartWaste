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
import { login, reset } from "../redux/auth/authSlice"
import Loading from "../components/Loading"

const Login = () => {
	const navigate = useNavigate()
	//Redux
	const dispatch = useDispatch()
	const { user, isLoading, isSuccess, message, isError } = useSelector(
		(state) => state.auth
	)

	//State from the form
	const [form, setForm] = useState({
		email: "",
		password: "",
	})

	//Destructure the form input state
	const { email, password } = form

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
			navigate("/")
		}
		dispatch(reset())
	}, [isSuccess, navigate, dispatch, isError, user])

	//When form is submitted
	const handleSubmit = (e) => {
		e.preventDefault()

		const userData = {
			email,
			password,
		}
		dispatch(login(userData))
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
							Logga in
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

							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Logga in
							</Button>
							<Link href='/signup' variant='body2'>
								{"Har du inte ett konto? Registrera dig"}
							</Link>
						</Box>
					</Box>
				</Container>
			)}
		</>
	)
}

export default Login
