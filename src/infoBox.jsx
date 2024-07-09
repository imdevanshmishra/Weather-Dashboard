
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){

    const INIT_URL= "https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    const HOT_URL= "https://i0.wp.com/citi.io/wp-content/uploads/2018/07/bird-clouds-dawn-147465.jpg?zoom=3&resize=1920%2C1024&ssl=1"
    const COLD_URL ="https://th.bing.com/th/id/OIP.UVAyUy5phpeujFgTeWRo_AHaE7?rs=1&pid=ImgDetMain"
    const RAIN_URL ="https://plus.unsplash.com/premium_photo-1675968513923-e07c6bbe0218?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className="InfoBox">
            <h3>WeatherInfo - {info.weather} </h3>
            <div className = "cardContainer" >
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity> 80 ? RAIN_URL : info.temp>15 ?  HOT_URL : info.temp<15 ? COLD_URL : INIT_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity> 80 ? <ThunderstormIcon/> : info.temp>15 ?  <WbSunnyIcon/> : info.temp<15 ? <AcUnitIcon/> : INIT_URL}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>Temperature = {info.temp}&deg;C</div>
            <br></br>
            <div>Humidity = {info.humidity}%</div>
            <br></br>
            <div>Min Temperature = {info.tempMin}&deg;C</div>
            <br></br>
            <div>Max Temperature = {info.tempMax}&deg;C</div>
            <br></br>
            <p>The weather can be described as <i>{info.weather}</i> </p>
          </Typography>
        </CardContent>
      </Card>       
     </div>
     
    

     </div>
    );
}