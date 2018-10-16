const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')
const ora = require('ora')

module.exports = async (args) => {
  const spinner = ora('start to get your location\'s weather').start()
  spinner.text = 'get location... \t'
  spinner.color = 'yellow';
  try {
    const location = args.location || args.l || await getLocation()
    spinner.text = `get ${location} location...`
    const weather = await getWeather(location)
    spinner.stop()
    console.log(`Forecast for ${location}:`)
    // weather.forecast.forEach(item =>
    //   console.log(`\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${item.text}`))
  } catch (error) {
    spinner.stop()
    console.log('Forecast-error', error)
  }
}