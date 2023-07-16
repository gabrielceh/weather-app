/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import { getCountryHour } from '../../utils/getCountryHours'

function SunsetSunrise({ sunrise, sunset, localTime, zone }) {
	const [progressValue, setProgressValue] = useState(0)

	const calcTimePercent = (sunrise, sunset, localTime) => {
		const timeElapsed = localTime - sunrise

		const totalDuration = sunset - sunrise

		const progress = (timeElapsed / totalDuration) * 100

		setProgressValue(progress < 0 ? 0 : progress > 100 ? 100 : progress)
	}

	useEffect(() => {
		calcTimePercent(sunrise, sunset, localTime)
	}, [sunrise, sunset, localTime])

	return (
		<Box component='section' sx={{ mt: 2 }}>
			<Box
				sx={{
					width: '95%',
					height: '2px',
					mx: 'auto',
					bgcolor: 'rgba(85,85,85,0.3)',
					position: 'relative',
				}}>
				<Box
					component='span'
					sx={{
						p: 0,
						position: 'absolute',
						left: `${progressValue}%`,
						translate: `-${progressValue}% -40%`,
					}}>
					<LightModeIcon color='warning' fontSize='large' />
				</Box>
			</Box>

			<Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Box>
					<Typography variant='caption' component='p'>
						Sunrise
					</Typography>
					<Typography variant='body2' sx={{ fontWeight: 'bold' }}>
						{/* {new Date(sunrise * 1000).toLocaleTimeString()} */}
						{getCountryHour(sunrise, zone)}
					</Typography>
				</Box>
				<Box>
					<Typography variant='caption' component='p' sx={{ textAlign: 'right' }}>
						Sunset
					</Typography>
					<Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'right' }}>
						{/* {new Date(sunset * 1000).toLocaleTimeString()} */}
						{getCountryHour(sunset, zone)}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default SunsetSunrise
