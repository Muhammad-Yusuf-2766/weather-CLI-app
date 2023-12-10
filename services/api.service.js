import axios from "axios"
import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js"


const getWeather = async (city) => {
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    if(!token) {
        throw new Error("API does not exist. retry to get API:  -t [API_KEY] for saving token")
    }
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appId: token,
            lang: 'en',
            units: 'metric'
        }
    })
    console.log(response.data)
    return data

    // this commented codes are old style of axios.get style

    // const url = new URL('https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=bab33a15f43ce1d7107a28631567ff72')
    // url.searchParams.append('query', city)
    // url.searchParams.append('appId', token )
    // url.searchParams.append('lang', 'en' )
    // url.searchParams.append('units', 'metric')

    // https.get(url, response => {
    //     let res = ''
    //     response.on('data', chunk => {
    //         res += chunk 
    //     })
    //     response.on('end', () => {
    //         console.log(res)
    //     })
    // })
}
export default getWeather;