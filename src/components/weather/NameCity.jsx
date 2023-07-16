/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import { getCountryDate } from '../../utils/getCountryHours'
import { useEffect, useState } from 'react'

function NameCity({ weather }) {
	const [date, setDate] = useState('')

	useEffect(() => {
		const datenow = getCountryDate(Date.now() / 1000, weather.zone, weather.sys.country)
		setDate(`${datenow}`)
	}, [])

	return (
		<Box component='section'>
			<Box>
				<Typography
					component='span'
					className={`fi fi-${weather.sys.country.toLowerCase()}`}
					sx={{ position: 'relative', zIndex: 0 }}></Typography>
				<Typography variant='caption' component='span' sx={{ ml: 1 }}>
					{date}
				</Typography>
			</Box>
			<Typography variant='h3' component='h1'>
				{weather.name}
			</Typography>
		</Box>
	)
}

export default NameCity
