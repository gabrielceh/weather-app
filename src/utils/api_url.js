const KEY = import.meta.env.VITE_API_KEY
const KEY_TIMEZONE = import.meta.env.VITE_API_KEY_TIMEZONE

export const API_CITIES = `http://api.openweathermap.org/geo/1.0/direct?appid=${KEY}&limit=10&q=`

export const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?appid=${KEY}`

export const API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?appid=${KEY}`

export const API_TIMEZONE = `https://api.timezonedb.com/v2.1/get-time-zone?key=${KEY_TIMEZONE}&format=json&by=position`
