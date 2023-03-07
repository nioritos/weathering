import { useState } from 'react'
import './css/App.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiWaterDrop} from 'react-icons/gi';
import {BsWind} from 'react-icons/bs'
import { requestWeatherInfo, requestUnsplashImage, requestCountryFlag } from './api/api';
const apiKey = import.meta.env.WEATHER_API_KEY;

function App() {
  const [local, setLocal] = useState('');
  const [weather, setWeather] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const [backgroundCountry, setBackgroundCountry] = useState('');

  const onClickHandler = async () => {
    const fields = await requestWeatherInfo('key=109547dac82b4fada42220908232602', local);
    setWeather(fields.data);

    searchFlag(fields.data)

  }

  const searchFlag = async (country) => {
    const fieldsFlag = await requestCountryFlag(country.location.country);
    setCountryFlag(fieldsFlag.config.url);
  }


  return (
    <div className="App">
      <h1>Weathering</h1>
      <h2>Only helping you with weather informations of your local.</h2>

      <div className="weather">
          <div className="weather-input">
              <input type="text" name="local" id="local" placeholder='type your local name here' onChange={
                 e => setLocal(e.target.value)
              }/>
            <button onClick={onClickHandler}>
              <AiOutlineSearch size={26}/>
            </button>
          </div>
          <div className="weather-info">
              {
                weather ? (
                  <>
                      <div className="header-weather-info">
                      <GoLocation className='location-icon' size={24}/>
                      <h2>{weather.location.name}</h2> 
                      <img crossOrigin='anonymous' src={countryFlag} alt="" />
                      </div>
                      <h1>{weather.current.temp_c} °C</h1>
                      <div className="conditions-weather-info">
                        <h3>{weather.current.condition.text}</h3>
                        <img src={weather.current.condition.icon} alt="" />
                      </div>

                      <div className="humidity-weather-info">
                        <p>{weather.current.humidity}%</p>
                        <GiWaterDrop size={24}/> |
                        <BsWind size={24}/>
                        <p>{weather.current.wind_kph}</p>
                      </div>

                  </>
                 ) : console.log('loading...') 
              }
          </div>
      </div>
    </div>
  )

}

export default App
