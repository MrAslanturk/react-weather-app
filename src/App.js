import React, {useState} from "react";
import axios from 'axios';
function App() {

  const [data,setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = (event) => {

    if(event.key == 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('')
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fc5b99bceef9305c2bc56f06cea3e6b4`

  return (
    <div className="app">
     <div className="search">
       <input 
       value = {location}
       onChange = {event => setLocation(event.target.value)}
       onKeyPress = {searchLocation}
       placeholder ="Enter Location"
       type="text"/>
     </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.name}
          </div>
          <div className="temp">
          </div>
          <div className="description">
           <table>  
             <tr> 
             <th>
                {data.main ? <h2>{data.main.temp.toFixed()} C&deg;</h2> : null}
            </th> 
            <th>
                {data.weather ?  <p>{data.weather[0].main}</p> : null}
            </th>
             </tr>
           </table>
          </div>
        </div>
        <div className="middle">
        <table>  
             <tr>
               <th>
               Min Temp:   
               </th> 
             <th>
               {data.main ? <p>{data.main.temp_min.toFixed()} C&deg;</p> : null}
            </th>
            <th>&nbsp;|&nbsp;</th>
            <th>
               Max Temp:   
               </th> 
             <th>
               {data.main ? <p>{data.main.temp_max.toFixed()} C&deg;</p> : null}
            </th>
             </tr>
           </table>
        </div>
        {data.name != undefined && 
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()} C&deg;</p> : null}
            <p className="bold">Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity} %</p> : null}
            <p className="bold">Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed} MPH</p> : null}
            <p className="bold">Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
