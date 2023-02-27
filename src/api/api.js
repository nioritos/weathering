import axios from 'axios'

export const requestWeatherInfo = async (url, key, local) => {
    try {
      let url = `https://api.weatherapi.com/v1/current.json?${key}&q=${local}&aqi=yes`
      const response = axios.get(url);
      console.log(response)
      return response
    } catch (error) {
      
    }
  }