/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import SearchForm from './SearchForm'
import SearchCard from './SearchCard'
import { LoadingButton } from '@mui/lab'
import { resetCities } from '../../features/citiesListSlice'

const SearchModal = React.forwardRef(({ closeModal }, ref) => {
	const citiesState = useSelector((state) => state.cities)
	const dispatch = useDispatch()

	useEffect(() => {
		return () => {
			dispatch(resetCities())
		}
	}, [])

	return (
		<Box
			ref={ref}
			tabIndex='0'
			bgcolor='background.default'
			maxWidth='500px'
			height='500px'
			mx='auto'
			mt={5}
			sx={{ borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
			<IconButton onClick={closeModal} sx={{ position: 'absolute', top: '5%', right: '5%' }}>
				<CloseIcon />
			</IconButton>
			<Typography variant='h6' id='modal-title' p={3}>
				Search
			</Typography>
			<Box component='header' px={3}>
				<SearchForm />
			</Box>
			<Box p={3} id='modal-description'>
				{citiesState.status === 'loading' && (
					<LoadingButton loading={true} variant='text' size='large'>
						Searching...
					</LoadingButton>
				)}
				{citiesState.status === 'success' &&
					(citiesState.cities.length > 0 ? (
						<Box sx={{ display: 'grid', gap: '0.3rem' }}>
							{citiesState.cities.map((city, index) => (
								<SearchCard key={`${index}-${Date.now()}`} city={city} onclose={closeModal} />
							))}
						</Box>
					) : (
						<Box>
							<Typography variant='body'>
								No results for &quot;{citiesState.cityToSearch}&quot;
							</Typography>
						</Box>
					))}
			</Box>
		</Box>
	)
})

export default SearchModal
