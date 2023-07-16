import { API_CITIES } from '../utils/api_url'

export const getCitiesService = async (city) => {
	const res = await fetch(`${API_CITIES}${city}`)

	if (!res.ok) throw { message: 'Something wrong happened' }

	const data = await res.json()

	return data
}
