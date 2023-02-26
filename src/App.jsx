import { useState } from 'react'
import './css/App.css';
import {AiOutlineSearch} from 'react-icons/ai';
function App() {
  const [local, setLocal] = useState('');
  return (
    <div className="App">
      <h1>Weathering</h1>
      <h2>Only helping you with weather informations of your local.</h2>

      <div className="weather">
          <div className="weather-input">
              <input type="text" name="local" id="local" placeholder='type your local name here' onChange={
                 e => setLocal(e.target.value)
              }/>
            <button>
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
