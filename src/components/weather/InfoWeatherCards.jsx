/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'

function InfoWeatherCards({ label, info, children }) {
	return (
		<Box>
			<Typography
				variant='caption'
				component='p'
				sx={{ display: 'flex', gap: '0.2rem', justifyContent: 'flex-start', alignItems: 'center' }}>
				{children && children}
				{label}
			</Typography>
			<Typography variant='h6' component='h5'>
				{info}
			</Typography>
		</Box>
	)
}

export default InfoWeatherCards
