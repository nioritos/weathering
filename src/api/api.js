import axios from "axios";

export const defaultCities = async (url) => {
  try {
    let results = await axios.get(url)
    console.log(results)
    return results
  } catch (error) {
    console.log(error)
  }
};

export const searchCity = async (city) => {
  try {
    const apiKey = '7239476866cb42b699630328231507';
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    let results = await axios.get(url);
    return results
  } catch (error) {
    console.log(error)
  }
}
