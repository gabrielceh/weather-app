/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSelector } from 'react-redux'
import { useTheme } from '@emotion/react'

function BtnSearch({ open }) {
	const bgColorState = useSelector((state) => state.bgColor)
	const theme = useTheme()

	return (
		<IconButton onClick={open}>
			<SearchIcon
				color={`${bgColorState}`}
				sx={{ color: theme.palette[bgColorState]?.contrastText }}
			/>
		</IconButton>
	)
}

export default BtnSearch
