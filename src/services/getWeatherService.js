import { API_FORECAST, API_TIMEZONE, API_WEATHER } from '../utils/api_url'

export const getWeatherService = async ({ lat, lon, units = 'metric' }) => {
	const res = await fetch(`${API_WEATHER}&units=${units}&lat=${lat}&lon=${lon}`)
	if (!res.ok) throw { message: 'Something wrong happened' }

	const resTimeZone = await fetch(`${API_TIMEZONE}&lat=${lat}&lng=${lon}`)
	if (!resTimeZone.ok) throw { message: 'Something wrong happened' }

	const resForecast = await fetch(`${API_FORECAST}&units=${units}&lat=${lat}&lon=${lon}`)
	if (!resForecast.ok) throw { message: 'Something wrong happened' }

	const data = await res.json()
	const dataForecast = await resForecast.json()
	const dataTimeZone = await resTimeZone.json()

	return {
		...data,
		name: dataTimeZone.cityName,
		state: dataTimeZone.regionName,
		zone: dataTimeZone.zoneName,
		forecast: dataForecast,
	}
}
