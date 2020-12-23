const axios = require('axios')

const getClima = async ( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9161ae733f6fa62c954536fdac8d19b7&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}