import { createSlice } from '@reduxjs/toolkit'
import { addToFav, getFavoritesList, removeFromFav } from '../utils/favoritesFuncionts'

const initialState = {
	favorites: getFavoritesList(),
	status: 'idle',
	message: '',
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, { payload }) => {
			state.status = 'idle'
			const res = addToFav(payload)
			if (res.success) {
				state.favorites = [...state.favorites, payload]
				state.status = 'success'
				state.message = res.message
			} else {
				state.status = 'error'
				state.message = res.message
			}
		},
		removeFavorite: (state, { payload }) => {
			state.status = 'idle'
			const res = removeFromFav(payload)
			if (res.success) {
				state.favorites = res.favorites
				state.status = 'success'
				state.message = res.message
			} else {
				state.status = 'error'
				state.message = res.message
			}
		},
		resetStatus: (state) => {
			state.status = 'idle'
			state.message = ''
		},
	},
})

export const { addFavorite, removeFavorite, resetStatus } = favoritesSlice.actions

export default favoritesSlice.reducer
