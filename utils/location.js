const axios = require('axios')
const key = require('./apiKey')

module.exports = async () => {
  const results = await axios({
    method: 'get',
    url: `https://api.ipdata.co?api-key=${key}`
  })
  const { city, region } = results.data
  console.log(`\t location:${ city }, ${ region }`);
  return `${city}, ${region}`
}