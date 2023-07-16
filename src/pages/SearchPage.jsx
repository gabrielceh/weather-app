import { useEffect, useState } from 'react'
import { getWeatherService } from '../services/getWeatherService'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
import { setBgColor } from '../features/bgColorSlice'
import Weather from '../components/Weather'
import LoadingWeather from '../components/LoadingWeather'
import BtnAddRemoveFav from '../components/BtnAddRemoveFav'

function SearchPage() {
	const location = useLocation()
	const [weather, setWeather] = useState({})
	const [status, setStatus] = useState('idle')
	const [error, setError] = useState(null)
	const dispatch = useDispatch()
	const unitState = useSelector((state) => state.unit)

	const getWeather = async (units = 'metric') => {
		setStatus('loading')
		try {
			const url = new URL(window.location.href)
			const searchParams = new URLSearchParams(url.search)
			const data = await getWeatherService({
				lat: searchParams.get('lat'),
				lon: searchParams.get('lon'),
				units,
			})
			console.log(data)
			const weather = data.weather[0].main.toLowerCase()
			const dayTime = data.weather[0].icon.at(-1)
			dispatch(
				setBgColor({
					bgColor: `${weather}-${dayTime}`,
				})
			)
			setWeather(data)
			setStatus('success')
		} catch (error) {
			setStatus('error')
			setError(error.message)
		}
	}

	useEffect(() => {
		getWeather(unitState.unit)
	}, [location.search, unitState.unit])

	return (
		<Box>
			{status === 'loading' && <LoadingWeather />}
			{status === 'success' && (
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ alignSelf: 'flex-end' }}>
						<BtnAddRemoveFav weather={weather} />
					</Box>
					<Weather weather={weather} />
				</Box>
			)}
			{status === 'error' && <Typography>{error}</Typography>}
		</Box>
	)
}

export default SearchPage
