/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import { useTheme } from '@emotion/react'
import SettingsIcon from '@mui/icons-material/Settings'
import { useSelector } from 'react-redux'

function BtnSettings({ openMenu }) {
	const theme = useTheme()
	const bgColorState = useSelector((state) => state.bgColor)

	return (
		<IconButton onClick={openMenu}>
			<SettingsIcon
				color={`${bgColorState}`}
				sx={{ color: theme.palette[bgColorState]?.contrastText }}
			/>
		</IconButton>
	)
}

export default BtnSettings
