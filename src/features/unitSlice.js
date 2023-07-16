/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice } from '@reduxjs/toolkit'
import { LS_UNITS } from '../utils/LSVariables'

const unitLS = localStorage.getItem(LS_UNITS)
	? JSON.parse(localStorage.getItem(LS_UNITS))
	: {
			unit: 'metric',
			temp: '°C',
			speed: 'mt/sec',
	  }

const initialValue = {
	unit: unitLS.unit,
	temp: unitLS.temp,
	speed: unitLS.speed,
}

const unitSlice = createSlice({
	name: 'unit',
	initialState: initialValue,
	reducers: {
		setUnit: (state) => {
			const units =
				state.unit === 'metric'
					? {
							unit: 'imperial',
							temp: '°F',
							speed: 'ml/hour',
					  }
					: {
							unit: 'metric',
							temp: '°C',
							speed: 'mt/sec',
					  }
			localStorage.setItem(LS_UNITS, JSON.stringify(units))
			state.speed = units.speed
			state.temp = units.temp
			state.unit = units.unit
		},
	},
})

export const { setUnit } = unitSlice.actions

export default unitSlice.reducer
