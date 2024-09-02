import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){

    const INIT_URL = "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <h1>WeatherInfo</h1>
            <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}

        image = {info.humidity > 80 ? RAIN_URL : info.temp> 15 ? HOT_URL: COLD_URL}
        title="rain Weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        &nbsp;
        {info.humidity > 80 ? <ThunderstormIcon />: info.temp> 15 ? <WbSunnyIcon/>: <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <div>Temperature = {info.temp}&deg;C</div>
         <div>Humidity = {info.humidity}&percnt ;%</div>
         <div>Min Temp = {info.temMin}&deg;C</div>
         <div>Max Temp = {info.temMax}&deg;C</div>
         <div>The weather feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>

        </div>
    );
}
