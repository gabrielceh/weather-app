export const getHoursByLocation = ({ timestamp, countryCode, timezone }) => {
	// Número de tiempo

	// Crear un objeto Date a partir del timestamp
	let date = new Date(timestamp * 1000) // Multiplicamos por 1000 para convertir segundos a milisegundos

	// Obtener el código del país y la zona horaria // Código del país, en este caso Colombia (CO)
	// Offset de la zona horaria, en este caso -18000 segundos (-5 horas)

	// Ajustar la hora según la zona horaria
	let adjustedTime = date.getTime() + timezone // Ajustamos el tiempo sumando el offset en milisegundos

	// Crear un nuevo objeto Date con la hora ajustada
	let adjustedDate = new Date(adjustedTime)

	// Obtener la hora y los minutos de la fecha ajustada
	let hours = adjustedDate.getHours()
	let minutes = adjustedDate.getMinutes()

	// Formatear la hora y los minutos como texto
	let formattedTime = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2)

	// Mostrar la hora exacta según la zona horaria y el código del país
	console.log('La hora exacta en ' + countryCode + ' es: ' + formattedTime)
}
