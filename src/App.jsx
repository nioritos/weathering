import { useState } from "react";
import { defaultCities, searchCity } from "./api/api";
import "./App.css"

function App() {
  const [city, setCity] = useState('');
  const [datas, setDatas] = useState();
  const [canRender, setRender] = useState(false);
  console.log(city)
  
  const onClickHandler = async () => {
    let results = await searchCity(city)
    console.log(results.data)
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
      <h2>Searching the city status for you</h2>
      
     {
      canRender ? (
        <div className="card">
        <h4>{datas.location.name}</h4>
        <h2>{datas.current.temp_c}°C</h2>
        <h3>{datas.current.wind_kph}kph</h3>
        <p>{datas.location.region}</p>
      </div>
      ) : false
     }
    </div>
  )
}

export default App