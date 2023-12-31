/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import { useEffect, useState } from 'react'
import { isFav } from '../utils/favoritesFuncionts'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite, resetStatus } from '../features/favoritesSlice'
import { enqueueSnackbar } from 'notistack'

function BtnAddRemoveFav({ weather }) {
	const [isInFav, setIsInFav] = useState(false)
	const dispatch = useDispatch()
	const favoritesState = useSelector((state) => state.favorites)

	useEffect(() => {
		setIsInFav(isFav(weather.id))

		return () => {
			setIsInFav(false)
			dispatch(resetStatus())
		}
	}, [weather.id])

	useEffect(() => {
		if (favoritesState.status === 'error') {
			enqueueSnackbar(favoritesState.message, {
				variant: 'warning',
				persist: false,
				anchorOrigin: {
					horizontal: 'right',
					vertical: 'top',
				},
				preventDuplicate: false,
			})
			console.log(favoritesState.message)
		}
		if (favoritesState.status === 'success') {
			setIsInFav(!isInFav)
			enqueueSnackbar(favoritesState.message, {
				variant: 'success',
				persist: false,
				anchorOrigin: {
					horizontal: 'right',
					vertical: 'top',
				},
				preventDuplicate: false,
			})
		}
	}, [favoritesState.favorites, favoritesState.status])

	const handleAddFav = () => {
		dispatch(
			addFavorite({
				id: weather.id,
				country: weather.sys.country,
				lat: weather.coord.lat,
				lon: weather.coord.lon,
				name: weather.name,
			})
		)
	}
	const handleDeleteFav = () => {
		dispatch(removeFavorite(weather.id))
	}

	return (
		<>
			{isInFav ? (
				<IconButton onClick={handleDeleteFav}>
					<StarRoundedIcon fontSize='large' color='warning' />
				</IconButton>
			) : (
				<IconButton onClick={handleAddFav}>
					<StarBorderRoundedIcon fontSize='large' color='warning' />
				</IconButton>
			)}
		</>
	)
}

export default BtnAddRemoveFav
