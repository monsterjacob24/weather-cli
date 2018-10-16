const ora = require('ora')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')

module.exports = async (args) => {
  const spinner = ora('start to get your location\'s weather and teperature').start()
  setTimeout(() => {
      spinner.color = 'yellow';
      spinner.text = 'fetch info...\n'
  }, 200);
  try {
    const location = args.location || args.l || await getLocation()
    const weather = await getWeather(location)
    spinner.stop()
    // celsius degrees
    const temp = weather.temp ? (weather.temp).toFixed(1) : 0
    console.log(`${weather.main} today, ${weather.cityName} current temperature is ${temp}°C`)
    // console.log(`current temperature in ${weather.cityName} is ${temp} °C`);
  } catch (error) {
    spinner.stop()
    console.log('error', error);
  }
}