import { Box, Button, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { routesName } from '../utils/routes_name'

function Page404() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '4rem',
				minHeight: '70vh',
			}}>
			<Box>
				<Typography variant='h4' component='h3' textAlign='center'>
					404
				</Typography>
				<Typography variant='h1' component='h1' textAlign='center'>
					Page not found
				</Typography>
			</Box>
			<Link component={RouterLink} to={routesName.index} variant='button'>
				<Button variant='outlined'>Go to home</Button>
			</Link>
		</Box>
	)
}

export default Page404
