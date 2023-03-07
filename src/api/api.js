import axios from 'axios'

export const requestWeatherInfo = async ( key, local) => {
    try {
      let url = `https://api.weatherapi.com/v1/current.json?${key}&q=${local}&aqi=yes`
      const response = await axios.get(url);
      return response
    } catch (error) {
        console.log(error)
    }
  };

export const requestUnsplashImage = async (location) => {
  try {
    let url = `https://source.unsplash.com/1600x900/?${location}`;
    const response = await axios.get(url);
    return response
  } catch (err) {
    console.log(err)
  }

}
export const requestCountryFlag = async (country) => {
  try {
    let url = `https://countryflagsapi.com/png/${country}`;
    const response = await axios.get(url);
    return response
  } catch (error) {
    console.log(error)
  }
}

