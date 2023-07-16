/* eslint-disable react/prop-types */
import { Grid } from '@mui/material'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import AirIcon from '@mui/icons-material/Air'
import CompressIcon from '@mui/icons-material/Compress'
import InfoWeatherCards from './InfoWeatherCards'

function GridWeatherInfo({ weather, unitState }) {
	return (
		<Grid container component='section' spacing={4} mt={1}>
			<Grid item xs={6}>
				<InfoWeatherCards label='Feels like' info={`${weather.main.feels_like}${unitState.temp}`}>
					<DeviceThermostatIcon />
				</InfoWeatherCards>
			</Grid>
			<Grid item xs={6}>
				<InfoWeatherCards label='Humidity' info={`${weather.main.humidity}%`}>
					<WaterDropIcon />
				</InfoWeatherCards>
			</Grid>
			<Grid item xs={6}>
				<InfoWeatherCards label='Wind speed' info={`${weather.wind.speed} ${unitState.speed}`}>
					<AirIcon />
				</InfoWeatherCards>
			</Grid>
			<Grid item xs={6}>
				<InfoWeatherCards label='Pressure' info={`${weather.main.pressure} hPa`}>
					<CompressIcon />
				</InfoWeatherCards>
			</Grid>
		</Grid>
	)
}

export default GridWeatherInfo
