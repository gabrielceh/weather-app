import { Paper, Typography } from '@mui/material'
import { routesName } from '../../utils/routes_name'
import { Link } from 'react-router-dom'
import '/node_modules/flag-icons/css/flag-icons.min.css'

/* eslint-disable react/prop-types */
function SearchCard({ city, onclose }) {
	return (
		<Link to={`${routesName.search}/?lat=${city.lat}&lon=${city.lon}`} onClick={onclose}>
			<Paper sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', p: 2 }}>
				<Typography variant='subtitle2'>
					{city.name}, {city.state}
				</Typography>

				<span className={`fi fi-${city.country.toLowerCase()}`}></span>
			</Paper>
		</Link>
	)
}

export default SearchCard
