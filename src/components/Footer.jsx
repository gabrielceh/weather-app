import { Box, Container, Link, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Footer() {
	const bgState = useSelector((state) => state.bgColor)

	return (
		<Box
			component='footer'
			sx={{
				mt: '2rem',
				borderTopWidth: '1px',
				borderTopStyle: 'solid',
				borderTopColor: `${bgState}.contrastText`,
				bgcolor: 'rgba(10,10,10,0.2)',
			}}>
			<Container maxWidth='sm'>
				<Box component='section' sx={{ p: 3 }}>
					<Typography
						variant='body2'
						component='p'
						align='center'
						mb={1}
						sx={{ fontWeight: 'bold' }}>
						Made by{' '}
						<Link
							href='https://github.com/gabrielceh'
							target='_blank'
							rel='noreferrer'
							color={`${bgState}.contrastText`}>
							Gabriel Cervantes 👨‍💻
						</Link>
					</Typography>
					<Typography variant='caption' component='p' align='center' fontSize='0.8rem'>
						Powered by{' '}
						<Link
							href='https://openweathermap.org/'
							target='_blank'
							rel='noreferrer'
							color={`${bgState}.contrastText`}>
							Open Weather
						</Link>
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

export default Footer
