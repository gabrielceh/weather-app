/* eslint-disable react/prop-types */
import { Menu, MenuItem, MenuList, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { routesName } from '../utils/routes_name'
import '/node_modules/flag-icons/css/flag-icons.min.css'

function FavoritesMenu({ isOpen, onclose, anchorEl }) {
	const favoritesState = useSelector((state) => state.favorites)

	useEffect(() => {}, [])

	return (
		<Menu open={isOpen} onClose={onclose} anchorEl={anchorEl}>
			<MenuList sx={{ minWidth: '250px' }}>
				{favoritesState.favorites.length <= 0 && (
					<MenuItem>
						<Typography>Nothing here! 😢</Typography>
					</MenuItem>
				)}
				{favoritesState.favorites.length > 0 &&
					favoritesState.favorites.map((fav) => (
						<MenuItem
							key={fav.id}
							component={RouterLink}
							to={`${routesName.favorites}?lat=${fav.lat}&lon=${fav.lon}`}
							onClick={onclose}
							sx={{
								textTransform: 'capitalize',
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Typography component='span'>
								{fav.name}, {fav.country}
							</Typography>
							<Typography
								component='span'
								className={`fi fi-${fav.country.toLowerCase()}`}
								sx={{ position: 'relative', zIndex: 0 }}></Typography>
						</MenuItem>
					))}
			</MenuList>
		</Menu>
	)
}

export default FavoritesMenu
