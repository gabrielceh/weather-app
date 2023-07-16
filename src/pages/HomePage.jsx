import { useEffect, useState } from 'react'
import { getWeatherService } from '../services/getWeatherService'
import { useDispatch, useSelector } from 'react-redux'
import { setBgColor } from '../features/bgColorSlice'
import Weather from '../components/Weather'
import { Box, Typography } from '@mui/material'
import LoadingWeather from '../components/LoadingWeather'
import { getCity } from '../utils/citiesCoords'

function HomePage() {
	const [weather, setWeather] = useState({})
	const [status, setStatus] = useState('idle')
	const [error, setError] = useState(null)
	const dispatch = useDispatch()
	const unitState = useSelector((state) => state.unit)

	const getCoord = async (pos) => {
		setStatus('loading')
		try {
			let lat = pos.coords.latitude
			let lon = pos.coords.longitude
			const data = await getWeatherService({ lat, lon, units: unitState.unit })
			const weather = data.weather[0].main.toLowerCase()
			const dayTime = data.weather[0].icon.at(-1)
			setWeather(data)
			dispatch(
				setBgColor({
					bgColor: `${weather}-${dayTime}`,
				})
			)
			setStatus('success')
		} catch (err) {
			setError(err.message)
			setStatus('error')
		}
	}

	const errorCoords = async () => {
		setStatus('loading')
		try {
			const city = getCity()
			const data = await getWeatherService({ lat: city.lat, lon: city.lon, units: unitState.unit })
			const weather = data.weather[0].main.toLowerCase()
			const dayTime = data.weather[0].icon.at(-1)
			setWeather(data)
			dispatch(
				setBgColor({
					bgColor: `${weather}-${dayTime}`,
				})
			)
			setStatus('success')
		} catch (err) {
			setError(err.message)
			setStatus('error')
		}
	}
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getCoord, errorCoords)
		}
	}, [unitState.unit])

	return (
		<Box>
			<Box>
				{status === 'idle' && <Box minHeight='100vh'></Box>}
				{status === 'loading' && <LoadingWeather />}
				{status === 'success' && <Weather weather={weather} />}
				{status === 'error' && <Typography>{error}</Typography>}
			</Box>
		</Box>
	)
}

export default HomePage
