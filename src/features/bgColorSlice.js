/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice } from '@reduxjs/toolkit'

const initialValue = 'initial'

const bgColorSlice = createSlice({
	name: 'bgColor',
	initialState: initialValue,
	reducers: {
		setBgColor(state, { payload }) {
			return payload.bgColor
		},
	},
})

export const { setBgColor } = bgColorSlice.actions

export default bgColorSlice.reducer
