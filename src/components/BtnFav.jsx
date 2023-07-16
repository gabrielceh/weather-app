/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { IconButton, useTheme } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

function BtnFav({ open }) {
	const bgColorState = useSelector((state) => state.bgColor)
	const theme = useTheme()

	return (
		<IconButton onClick={open}>
			<StarRoundedIcon
				color={`${bgColorState}`}
				sx={{ color: theme.palette[bgColorState]?.contrastText }}
			/>
		</IconButton>
	)
}

export default BtnFav
