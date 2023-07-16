/* eslint-disable react/prop-types */
import { createContext, useMemo, useState } from 'react'
import { LS_THEME } from '../utils/LSVariables'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { setTheme } from '../theme'

export const ModeThemeContext = createContext()

const themeLS = localStorage.getItem(LS_THEME)
	? JSON.parse(localStorage.getItem(LS_THEME))
	: 'light'

export const ModeThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(themeLS)

	const setToggleTheme = () => {
		const theme = mode === 'light' ? 'dark' : 'light'
		setMode(theme)
		localStorage.setItem(LS_THEME, JSON.stringify(theme))
	}

	// const appTheme = createTheme(setTheme('dark'))

	const appTheme = useMemo(() => createTheme(setTheme(mode)), [mode])

	const data = { mode, setToggleTheme }

	return (
		<ModeThemeContext.Provider value={data}>
			<ThemeProvider theme={appTheme}>{children}</ThemeProvider>
		</ModeThemeContext.Provider>
	)
}
