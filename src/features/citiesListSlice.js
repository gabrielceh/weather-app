import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCitiesService } from '../services/getCitiesService'

const intialState = {
	cities: [],
	error: null,
	status: 'idle',
	cityToSearch: '',
}

export const getCities = createAsyncThunk('cities/getCities', async (city) => {
	try {
		return { data: await getCitiesService(city), city: city }
	} catch (error) {
		return Promise.reject(error.message)
	}
})

const citiesSlice = createSlice({
	name: 'cities',
	initialState: { ...intialState },
	reducers: {
		resetCities: (state) => {
			state.cities = []
			state.error = null
			state.status = 'idle'
			state.cityToSearch = ''
		},
	},
	extraReducers: (builder) => {
		builder
			// GET CITIES
			.addCase(getCities.pending, (state) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(getCities.fulfilled, (state, { payload }) => {
				state.cities = payload.data
				state.cityToSearch = payload.city
				state.status = 'success'
			})
			.addCase(getCities.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error
			})
	},
})

export const { resetCities } = citiesSlice.actions

export default citiesSlice.reducer
