import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import Forecast from './Forecast';
import"./index.css";
import"./Forecast.css";


import { useState } from 'react';


export default function SearchBox({ updateInfo }){
    let [city,setCity] = useState("");
    let[error, setError] =useState(false);
    let [forecast, setForecast] = useState("");

    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = "86f2f6233631f4d98491e4b0ba900164";

    let getWeatherInfo = async () =>{

    try{

      let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feelsLike,
        wind: jsonResponse.wind.speed,
        weather: jsonResponse.weather[0].description,

      };
      console.log(result);
      return result;
    }catch(err){
      console.log(err);
        throw err;
        }   

    };

    let getForecastInfo = async () => {
      try {
        let response = await fetch(`${FORECAST_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        if (jsonResponse && jsonResponse.list) {
          let forecastData = jsonResponse.list.slice(0, 7);
          return forecastData;
        } else {
          return []; // or some default value
        }
      } catch (err) {
        throw err;
      }
    };

    
    let handleChange =(evt) =>{
        setCity(evt.target.value);
        setError(false);
    };

    let handleSubmit = async (evt) =>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
      let newInfo = await getWeatherInfo();
      let newForecast = await getForecastInfo();
      updateInfo(newInfo);
      setForecast(newForecast);
      
      }catch(err){
        console.log(err);
        setError(true);
        }
        
    };
    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City-name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br>
            <br>
            </br>
            <Button variant="contained" type="submit">
             Search
            </Button>
            <p> </p>
            {error && <p style={{ color: 'red' }}>No such place exists in our API</p>}

            </form>
            {forecast && (
        <div>
          <h2>7-Day Forecast</h2>
          {forecast?.map((day, index) => (
            <div key={index}>
              <p>Day {index + 1}: {day.weather[0].description}</p>
              <p>Temp: {day.main.temp}°C</p>
              <p>Humidity: {day.main.humidity}%</p>
            </div>
          ))}
        </div>
      )}

      

        </div>
        );
}