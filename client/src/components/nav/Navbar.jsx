import React from "react"
import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	Container,
} from "@mui/material"
import { Link } from "react-router-dom"
import PersonIcon from "@mui/icons-material/Person"

const Navbar = () => {
	return (
		<AppBar
			position='fixed'
			sx={{
				backgroundColor: "white",
				marginBottom: "2rem",
				display: { xs: "none", sm: "none", md: "block", lg: "block" },
			}}
		>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Toolbar>
					<div className='navlinks'>
						<Link to='/' className='link'>
							<Typography
								variant='h4'
								className='logo'
								sx={{
									letterSpacing: "-1.9px",
									fontWeight: "bold",
								}}
							>
								SmartWaste
							</Typography>
						</Link>
					</div>
					<div className='navlinks'>
						<Link to='/' className='link'>
							Annonser
						</Link>
						<Link to='/createad' className='link'>
							Ny annons
						</Link>
						<Link to='/profile' className='link'>
							Min profil
						</Link>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Navbar
