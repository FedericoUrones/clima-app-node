const axios = require('axios')

const getLugarLatLng = async ( dir ) => {

    const encodedUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiZmVkZXUiLCJhIjoiY2tpeXdocm1mMHlxbzJ4bW82NTh4Zzc4eiJ9._2kSnqVHS0ZeQD3_JZH-Ag' }
    });

    const resp = await instance.get()

    if (resp.data.features === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = resp.data.features[0]
    const direccion = data.place_name
    const lat = data.center[1]
    const lng = data.center[0]

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}