import { useState } from "react";
import { searchCity, getForecastCity } from "./api/api";
import "./App.css"

function App() {
  const [city, setCity] = useState('');
  const [datas, setDatas] = useState();
  const [canRender, setRender] = useState(false);
  const [canRenderForecast, setCanRenderForecast] = useState(false)
  const [forecast, setForecast] = useState([]);
  let date = new Date();
  let hours = date.getHours();
  const onClickHandler = async () => {
    let results = await searchCity(city);
    getForecast()
    setDatas(results.data)
    setRender(true)

  }

  const getForecast = async () => {
    let results = await getForecastCity(city, hours);
    await forecast.push(results.data.forecast.forecastday)
    forecast[0].map(x => {
      console.log(x)
    })

    setCanRenderForecast(true)
  }

  return (
    <div className="App">
      <header>
        <h1>🌎</h1>
        <div className="input-group">
          <input type="text" name="search-city" id="search-city" onChange={e => setCity(e.target.value)} />
          <button onClick={onClickHandler}>🔍</button>
        </div>
        <a href="https://github.com/nioritos">
          <img src="https://github.com/nioritos.png" alt="nioritos photo" />
        </a>
      </header>
      <h1>Weathering</h1>
      <h2 className="subtitle">Searching the city status for you</h2>

      {
        canRender ? (
          <div className="card">
            <h4>{datas.location.name}</h4>
            <h3 className="condition-text">{datas.current.condition.text}</h3>
            <img className="condition-icon" src={datas.current.condition.icon} alt={datas.current.condition.text} />
            <h2 className="temp-c">{datas.current.temp_c}°C</h2>
            <h3 className="wind-text">{datas.current.wind_kph}kph</h3>
            <p className="region-text">{datas.location.region}</p>
          </div>
        ) : false
      }

<div className="forecast-container">
<h1>Forecast</h1>
<div className="forecast-content">


      {
        canRenderForecast ? (
              forecast[0].map(
                (content, id) => {
                return (
                  <div className="forecast-cards" key={id}>
                    <h4>{city}</h4>
                    <h4>{content.hour[0].time}</h4>
                    
                    <h3>{content.hour[0].condition.text}</h3>
                    <img src={content.hour[0].condition.icon} alt={content.hour[0].condition.text} />
                    <h2>{content.hour[0].temp_c}°C</h2>
                  </div>
                )
              })) : console.log(false, 'you cannot render this component')

      }
</div>

      </div>

    </div>
)}

export default App