import { useEffect, useState } from 'react'
import { getWeatherService } from '../services/getWeatherService'
import { useDispatch, useSelector } from 'react-redux'
import { setBgColor } from '../features/bgColorSlice'
import Weather from '../components/Weather'
import { Box, Typography } from '@mui/material'
import LoadingWeather from '../components/LoadingWeather'

function HomePage() {
	const [weather, setWeather] = useState({})
	const [status, setStatus] = useState('idle')
	const [error, setError] = useState(null)
	const [showSunsetSunrise, setShowSunsetSunrise] = useState(false)
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
			console.log(data)
			dispatch(
				setBgColor({
					bgColor: `${weather}-${dayTime}`,
				})
			)
			setStatus('success')
			setShowSunsetSunrise(true)
		} catch (err) {
			setError(err.message)
			setStatus('error')
		}
	}

	const errorCoords = async () => {
		setStatus('loading')
		try {
			const lat = 40.71272659
			const lon = -74.00601196
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
			setShowSunsetSunrise(false)
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
				{status === 'success' && (
					<Weather weather={weather} showSunsetSunrise={showSunsetSunrise} />
				)}
				{status === 'error' && <Typography>{error}</Typography>}
			</Box>
		</Box>
	)
}

export default HomePage
