const axios = require('axios')
const key = require('./opmKey')
function getCeliusTemp(degrees) {
  return !isNaN(degrees - 273.15) ? degrees - 273.15 : 0
}
module.exports = async (location) => {
  const result = await axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather', // 'https://query.yahooapis.com/v1/public/yql',
    params: {
      format: 'json',
      q: location,
      // id: 1808926, //by citId
      appid: key
    },
  })
  // console.log('weather\n', result.data)
  const temp = result.data.main.temp
  const cityName = result.data.name
  return {
    cityName,
    main: result.data.weather[0].main,
    temp: getCeliusTemp(temp)
  }
}
const body = {
  "coord": {
    "lon": 120.21,
    "lat": 30.25
  },
  "weather": [{
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
  }, {
    "id": 701,
    "main": "Mist",
    "description": "mist",
    "icon": "50n"
  }],
  "base": "stations",
  "main": {
    "temp": 289.15,
    "pressure": 1018,
    "humidity": 93,
    "temp_min": 289.15,
    "temp_max": 289.15
  },
  "visibility": 3000,
  "wind": {
    "speed": 2,
    "deg": 340
  },
  "clouds": {
    "all": 75
  },
  "dt": 1539615600,
  "sys": {
    "type": 1,
    "id": 7443,
    "message": 0.0048,
    "country": "CN",
    "sunrise": 1539554478,
    "sunset": 1539595679
  },
  "id": 1808926,
  "name": "Hangzhou",
  "cod": 200
}