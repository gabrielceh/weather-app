import { useForm } from 'react-hook-form'
import { Box, InputAdornment, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getCities } from '../../features/citiesListSlice'
import { debounce } from '../../utils/debounce'
import SearchIcon from '@mui/icons-material/Search'

function SearchForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ search: '' })

	const dispatch = useDispatch()

	const debounceFunc = debounce((value) => {
		dispatch(getCities(value))
	}, 500)

	const handleSearch = (data) => {
		debounce(data.search)
	}

	const onchange = (event) => {
		debounceFunc(event.target.value)
	}

	return (
		<Box component='form' onSubmit={handleSubmit(handleSearch)}>
			<TextField
				{...register('search', { required: 'Please, add a city' })}
				placeholder='Search city'
				error={!!errors.search}
				helperText={errors.search?.message}
				variant='standard'
				sx={{ color: 'red' }}
				onInput={onchange}
				fullWidth
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</Box>
	)
}

export default SearchForm
