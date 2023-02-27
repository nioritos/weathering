import { useState } from 'react'
import './css/App.css';
import {AiOutlineSearch} from 'react-icons/ai';
import { requestWeatherInfo } from './api/api';

function App() {
  const [local, setLocal] = useState('');
  const apiKey = 
  
  return (
    <div className="App">
      <h1>Weathering</h1>
      <h2>Only helping you with weather informations of your local.</h2>

      <div className="weather">
          <div className="weather-input">
              <input type="text" name="local" id="local" placeholder='type your local name here' onChange={
                 e => setLocal(e.target.value)
              }/>
            <button onClick={requestWeatherInfo}>
              <AiOutlineSearch size={26}/>
            </button>
          </div>
          <div className="weather-info">

          </div>
      </div>
    </div>
  )
}

export default App
