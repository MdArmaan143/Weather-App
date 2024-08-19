import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import "./WeatherApp.css"
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({});

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div className="WeatherApp">
          <h2>Weather App</h2>  
          <SearchBox updateInfo={updateInfo} />
          <InfoBox info={weatherInfo}/>
        </div>
    );
}