import { useState } from "react"
import { Link } from "react-router-dom"

//MUI
import PersonIcon from "@mui/icons-material/Person"
import ControlPointIcon from "@mui/icons-material/ControlPoint"
import SearchIcon from "@mui/icons-material/Search"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"

const BottomNav = () => {
	const pathname = window.location.pathname
	const [value, setValue] = useState(pathname)
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
			<Paper
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: "99999",
					display: {
						xs: "block",
						sm: "block",
						md: "none",
						lg: "none",
					},
				}}
				elevation={3}
			>
				<BottomNavigation
					value={value}
					showLabels
					onChange={handleChange}
					sx={{
						"& .Mui-selected, .Mui-selected > svg": {
							color: "#00ab41",
						},
					}}
				>
					<BottomNavigationAction
						component={Link}
						to='/'
						label='Annonser'
						value='annonser'
						icon={<SearchIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to='/createad'
						label='Ny annons'
						value='createad'
						icon={<ControlPointIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to='/profile'
						label='Min profil'
						value='myprofile'
						icon={<PersonIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</>
	)
}

export default BottomNav
