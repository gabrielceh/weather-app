import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from '../features/citiesListSlice'
import unitSlice from '../features/unitSlice'
import bgColorSlice from '../features/bgColorSlice'
import favoritesSlice from '../features/favoritesSlice'

export const store = configureStore({
	reducer: {
		cities: citiesSlice,
		unit: unitSlice,
		bgColor: bgColorSlice,
		favorites: favoritesSlice,
	},
})
