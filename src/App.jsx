import { Box, Container } from '@mui/material'
import Header from './components/Header'
import AppRouter from './routes/AppRouter'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'

function App() {
	const bgColorState = useSelector((state) => state.bgColor)

	return (
		<Box
			sx={{
				bgcolor: `${bgColorState}.main`,
				color: `${bgColorState}.contrastText`,
				minHeight: '100vh',
			}}>
			<Header />
			<Container maxWidth='sm' sx={{ mt: 3, minHeight: '100vh' }}>
				<AppRouter />
			</Container>
			<Footer />
		</Box>
	)
}

export default App
