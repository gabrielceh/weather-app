/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Forecast from './weather/Forecast'
import InfoWeatherCards from './weather/InfoWeatherCards'
import SunsetSunrise from './weather/SunsetSunrise'
import GridWeatherInfo from './weather/GridWeatherInfo'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import NameCity from './weather/NameCity'
import { useEffect } from 'react'

function Weather({ weather, showSunsetSunrise = true }) {
	const unitState = useSelector((state) => state.unit)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<Box sx={{ display: 'grid', gap: '1.5rem' }}>
			<NameCity weather={weather} />

			<Box component='section' sx={{ display: 'flex', flexDirection: 'column' }}>
				<Box sx={{ alignSelf: 'flex-end' }}>
					<img
						src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
						alt={weather.weather[0].description}
						style={{ width: '120px', height: '120px' }}
					/>
				</Box>
				<Box>
					<Typography variant='h3' component='span'>
						{weather.main.temp}
						{unitState.temp}
					</Typography>{' '}
					<Typography variant='body' component='span' sx={{ textTransform: 'capitalize' }}>
						{weather.weather[0].description}
					</Typography>
				</Box>
			</Box>

			<Box component='section'>
				<InfoWeatherCards
					label='Min / Max'
					info={`${weather.main.temp_min}${unitState.temp} / ${weather.main.temp_max}${unitState.temp}`}
				/>
			</Box>

			<Forecast forecast={weather.forecast} unit={unitState.temp} />

			<GridWeatherInfo unitState={unitState} weather={weather} />

			{showSunsetSunrise && (
				<SunsetSunrise
					sunrise={weather.sys.sunrise}
					sunset={weather.sys.sunset}
					localTime={weather.dt}
					zone={weather.zone}
				/>
			)}
		</Box>
	)
}

export default Weather
