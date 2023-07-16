import { useState } from "react";
import { searchCity } from "./api/api";
import "./App.css"

function App() {
  const [city, setCity] = useState('');
  const [datas, setDatas] = useState();
  const [canRender, setRender] = useState(false);
  
  const onClickHandler = async () => {
    let results = await searchCity(city);
    setDatas(results.data)
    setRender(true)
  }

  return(
    <div className="App">
      <header>
        <h1>🌎</h1>
        <div className="input-group">
          <input type="text" name="search-city" id="search-city" onChange={e => setCity(e.target.value) }/>
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
    </div>
  )
}

export default App