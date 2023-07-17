export function getCountryHour(timestamp, timezoneCode) {
	const date = new Date(timestamp * 1000)
	const options = { timeZone: timezoneCode, hour12: false }

	// Obtiene la hora local en formato de 24 horas
	const localhour = date.toLocaleTimeString('en', options)

	// Retorna la hora local
	return localhour
}

export function getCountryDate(timestamp, timezoneCode, country) {
	const date = new Date(timestamp * 1000)
	const options = { timeZone: timezoneCode, hour12: false }
	const lang = country === 'US' ? 'en-US' : 'en-UK'

	// Obtiene la fecha y hora local en formato de 24 horas
	const localdate = date.toLocaleString(lang, options)

	// Retorna la hora local
	return localdate
}

export function getCountryOnlyDate(timestamp, timezoneCode, country) {
	const date = new Date(timestamp * 1000)
	const options = { timeZone: timezoneCode, hour12: false }
	const lang = country === 'US' ? 'en-US' : 'en-UK'

	// Obtiene la fecha y hora local en formato de 24 horas
	const localdate = date.toLocaleDateString(lang, options)

	// Retorna la hora local
	return localdate
}
