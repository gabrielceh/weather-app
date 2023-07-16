export const citiesCoords = [
	{
		lat: 40.71272659,
		lon: -74.00601196,
		name: 'New York',
	},
	{
		lat: 34.05223,
		lon: -118.24368,
		name: 'New York',
	},
]

export const getCity = () => {
	const citiesCoords = [
		{
			lat: 40.71272659,
			lon: -74.00601196,
			name: 'New York',
		},
		{
			lat: 34.05223,
			lon: -118.24368,
			name: 'Los Angeles',
		},
		{
			lat: 35.6895,
			lon: 139.69171,
			name: 'Tokyo',
		},
		{
			lat: 51.51279,
			lon: -0.09184,
			name: 'London',
		},
		{
			lat: 40.4165,
			lon: -3.70256,
			name: 'Madrid',
		},
		{
			lat: 32.71571,
			lon: -117.16472,
			name: 'San Diego',
		},
		{
			lat: 10.96854,
			lon: -74.78132,
			name: 'Barranquilla',
		},
		{
			lat: 37.566,
			lon: 126.9784,
			name: 'Seoul',
		},
		{
			lat: 19.42847,
			lon: -99.12766,
			name: 'Mexico City',
		},
		{
			lat: -33.92584,
			lon: 18.42322,
			name: 'Cape Town',
		},
		{
			lat: -15.77972,
			lon: -47.92972,
			name: 'Brasilia',
		},
	]
	const random = Math.floor(Math.random() * (citiesCoords.length - 0) + 0)

	return citiesCoords[random]
}
