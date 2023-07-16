import { LoadingButton } from '@mui/lab'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'

function LoadingWeather() {
	const bgState = useSelector((state) => state.bgColor)

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<LoadingButton
				loading={true}
				variant='text'
				size='large'
				sx={{ color: `${bgState}.contrastText` }}>
				Searching...
			</LoadingButton>
		</Box>
	)
}

export default LoadingWeather
