/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ModeThemeContext } from '../context/ModeThemeContext'
import { useTheme } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { setUnit } from '../features/unitSlice'
import { ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'

function ConfigMenu({ isOpen, onclose, anchorEl }) {
	const { setToggleTheme } = useContext(ModeThemeContext)
	const unitState = useSelector((state) => state.unit)
	const dispatch = useDispatch()
	const theme = useTheme()

	const handleMetricChange = () => dispatch(setUnit())
	return (
		<Menu open={isOpen} onClose={onclose} anchorEl={anchorEl}>
			<MenuList>
				<MenuItem onClick={setToggleTheme}>
					<ListItemIcon>
						{theme.palette.mode === 'light' ? (
							<Brightness7Icon fontSize='small' />
						) : (
							<Brightness4Icon fontSize='small' />
						)}
					</ListItemIcon>
					<ListItemText sx={{ textTransform: 'capitalize' }}>
						{theme.palette.mode} mode
					</ListItemText>
				</MenuItem>

				<MenuItem onClick={handleMetricChange}>
					<ListItemIcon>
						<DeviceThermostatIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText sx={{ textTransform: 'capitalize' }}>{unitState.temp}</ListItemText>
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default ConfigMenu
