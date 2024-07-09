import "./index.css";
import "./Forecast.css";

export default function Forecast({ forecast })
 { return
     ( 
        
    <div class="forecast-container"> 
            <h2>7-Day Forecast</h2>
            {forecast && forecast.forecast && forecast.forecast.map((day, index) => (

          <div key={index} class ="day"> 
          <p>Day {index + 1}: {day.weather[0].description}</p> 
          <p>Temp: {day.main.temp}°C</p> 
           <p>Humidity: {day.main.humidity}%</p>
           </div> 
           ))} 
     
            </div> 
          
         );
     }