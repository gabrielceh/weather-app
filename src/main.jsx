import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'

import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { ModeThemeProvider } from './context/ModeThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ModeThemeProvider>
				<SnackbarProvider>
					<CssBaseline />
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</SnackbarProvider>
			</ModeThemeProvider>
		</Provider>
	</React.StrictMode>
)
