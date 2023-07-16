import { LS_FAV } from './LSVariables'

export const getFavoritesList = () => {
	let favorites = localStorage.getItem(LS_FAV) ? JSON.parse(localStorage.getItem(LS_FAV)) : []
	return favorites
}

export const isFav = (id) => {
	const favorites = localStorage.getItem(LS_FAV) ? JSON.parse(localStorage.getItem(LS_FAV)) : []
	const foundId = favorites.find((fav) => fav.id === id)

	return foundId ? true : false
}

export const addToFav = ({ id, lat, lon, name, country }) => {
	const favorites = localStorage.getItem(LS_FAV) ? JSON.parse(localStorage.getItem(LS_FAV)) : []
	if (favorites.length >= 5) {
		return { success: false, message: 'Only 5 locations' }
	}

	if (isFav(id)) {
		return { success: false, message: 'Location is in your favorites' }
	}

	const newLocation = { id, lat, lon, name, country }

	favorites.push(newLocation)

	localStorage.setItem(LS_FAV, JSON.stringify(favorites))

	return { success: true, message: 'Location was added to your favorites' }
}

export const removeFromFav = (id) => {
	let favorites = localStorage.getItem(LS_FAV) ? JSON.parse(localStorage.getItem(LS_FAV)) : []

	if (!isFav(id)) {
		return { success: false, message: 'Location is not in your favorites' }
	}

	favorites = favorites.filter((fav) => fav.id !== id)

	localStorage.setItem(LS_FAV, JSON.stringify(favorites))

	return { success: true, message: 'Location was deleted from your favorites', favorites }
}
