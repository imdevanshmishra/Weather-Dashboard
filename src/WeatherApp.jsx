import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'




export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"DELHI", 
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity: 100,
        weather:"haze",
        
    });

    const[forecast,setForecastInfo]= useState("")

    let updateInfo =(newInfo ) =>{
        setWeatherInfo(newInfo);
        }
        let updateForecast =(newForecast ) =>{
            setForecastInfo(newForecast);
            
        
    };
    return(
        <div style={{ textAlign:"center"}}> 
        <h1>Weather App</h1>
        <SearchBox updateInfo ={updateInfo}/>
        <InfoBox info={weatherInfo} />
    
      </div>
  )
}