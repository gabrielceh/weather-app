/* eslint-disable no-mixed-spaces-and-tabs */
const weatherColors = {
	'thunderstorm-d': {
		main: '#54126e',
		contrastText: '#ecbcff',
	},
	'thunderstorm-n': {
		main: '#330f42',
		contrastText: '#d895f5',
	},
	'drizzle-d': {
		main: '#3b5a88',
		contrastText: '#cbe0ff',
	},
	'drizzle-n': {
		main: '#1b2d47',
		contrastText: '#79aef8',
	},
	'rain-d': {
		main: '#2f1e8f',
		contrastText: '#c6bcff',
	},
	'rain-n': {
		main: '#160e42',
		contrastText: '#6d56eb',
	},
	'snow-d': {
		main: '#b2deff',
		contrastText: '#2a3b49',
	},
	'snow-n': {
		main: '#345772',
		contrastText: '#b2deff',
	},
	'clear-d': {
		main: '#86c5ff',
		contrastText: '#133250',
	},
	'clear-n': {
		main: '#191970',
		contrastText: '#b4b4ff',
	},
	'clouds-d': {
		main: '#c4c4c4',
		contrastText: '#575757',
	},
	'clouds-n': {
		main: '#20273f',
		contrastText: '#869eeb',
	},
	'mist-d': {
		main: '#CCCCCC',
		contrastText: '#5f5f5f',
	},
	'mist-n': {
		main: '#5f5f5f',
		contrastText: '#cccccc',
	},
	'smoke-d': {
		main: '#333333',
		contrastText: '#FFFFFF',
	},
	'smoke-n': {
		main: '#171235',
		contrastText: '#FFFFFF',
	},
	'haze-d': {
		main: '#CCCCCC',
		contrastText: '#5e5e5e',
	},
	'haze-n': {
		main: '#171235',
		contrastText: '#FFFFFF',
	},
	'dust-d': {
		main: '#C2B280',
		contrastText: '#524930',
	},
	'dust-n': {
		main: '#383323',
		contrastText: '#ffefc3',
	},
	'fog-d': {
		main: '#CCCCCC',
		contrastText: '#5e5e5e',
	},
	'fog-n': {
		main: '#171235',
		contrastText: '#ededed',
	},
	'sand-d': {
		main: '#D2B48C',
		contrastText: '#4b3a23',
	},
	'sand-n': {
		main: '#473a29',
		contrastText: '#D2B48C',
	},
	'ash-d': {
		main: '#555555',
		contrastText: '#FFFFFF',
	},
	'ash-n': {
		main: '#2d233b',
		contrastText: '#FFFFFF',
	},
	'squall-d': {
		main: '#555555',
		contrastText: '#FFFFFF',
	},
	'squall-n': {
		main: '#3b304d',
		contrastText: '#FFFFFF',
	},
	'tornado-d': {
		main: '#555555',
		contrastText: '#FFFFFF',
	},
	'tornado-n': {
		main: '#291919',
		contrastText: '#FFFFFF',
	},
}

export const setTheme = (mode) => ({
	palette: {
		mode,
		...(mode === 'dark'
			? {
					primary: {
						main: '#906eff',
						light: '#b392ff',
						dark: '#7325ff',
					},
					secondary: {
						main: '#f50084',
						light: '#fb369f',
						dark: '#ad025e',
					},
					text: {
						primary: 'rgba(239,239,239,0.87)',
						secondary: 'rgba(224,224,224,0.6)',
						disabled: 'rgba(191,191,191,0.38)',
					},
					error: {
						main: '#c31616',
						light: '#d44343',
						dark: '#810d0d',
					},
					success: {
						main: '#00e676',
						light: '#37ef95',
						dark: '#018644',
					},
					info: {
						main: '#00b0ff',
						light: '#3fc0fb',
						dark: '#016e9c',
					},
					warning: {
						main: '#f37e16',
						light: '#f99b47',
						dark: '#994700',
					},
					background: {
						default: '#101010',
						paper: '#1e1e1e',
					},
					...weatherColors,
					initial: {
						main: '#101010',
						contrastText: 'rgba(239,239,239,0.87)',
					},
			  }
			: {
					primary: {
						main: '#5739c7',
						light: '#8d66e8',
						dark: '#460aaf',
					},
					secondary: {
						main: '#f50084',
						light: '#fb369f',
						dark: '#ad025e',
					},
					text: {
						primary: 'rgba(28,28,28,0.87)',
						secondary: 'rgba(53,53,53,0.6)',
						disabled: 'rgba(191,191,191,0.38)',
					},
					error: {
						main: '#c31616',
						light: '#d44343',
						dark: '#810d0d',
					},
					success: {
						main: '#00e676',
						light: '#37ef95',
						dark: '#018644',
					},
					info: {
						main: '#00b0ff',
						light: '#3fc0fb',
						dark: '#016e9c',
					},
					warning: {
						main: '#f37e16',
						light: '#f99b47',
						dark: '#994700',
					},
					background: {
						default: '#ececec',
						paper: '#f5f5f5',
					},
					...weatherColors,
					initial: {
						main: '#ececec',
						contrastText: 'rgba(28,28,28,0.87)',
					},
			  }),
	},
})
