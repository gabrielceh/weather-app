/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getCountryHour, getCountryOnlyDate } from '../../utils/getCountryHours'

function Forecast({ forecast, unit, zone }) {
	const bgState = useSelector((state) => state.bgColor)

	return (
		<Box
			component='section'
			display='flex'
			gap={2}
			borderColor={`${bgState}.contrastText`}
			bgcolor={`${bgState}.contrastText`}
			sx={{
				scrollSnapType: 'x mandatory',
				p: 1,
				borderWidth: '1px',
				borderStyle: 'solid',
				borderRadius: '10px',
			}}
			className='scroll-container'>
			{forecast?.list.map((item, index) => (
				<Box
					key={`${index}-${Date.now()}`}
					component='section'
					minWidth='150px'
					sx={{
						scrollSnapAlign: 'center',
						p: 1,
						color: `${bgState}.main`,
						textAlign: 'center',
					}}>
					<Typography variant='body2'>{getCountryHour(item.dt, zone)}</Typography>
					<Typography variant='body2'>
						{getCountryOnlyDate(item.dt, zone, forecast.city.country)}
					</Typography>
					<Box component='article'>
						<img
							src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
							alt={item.weather[0].description}
							style={{ width: '75px' }}
						/>
						<Typography variant='body2'>{item.weather[0].description}</Typography>
						<Typography variant='body2'>
							{item.main.temp}
							{unit}
						</Typography>
					</Box>
				</Box>
			))}
		</Box>
	)
}

export default Forecast
