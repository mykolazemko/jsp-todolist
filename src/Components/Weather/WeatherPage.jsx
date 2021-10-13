import { useState, useEffect } from 'react';
import axios from "axios";

const WeatherPage = () => {
    const [weather, setWeather] = useState([]);
    //const baseURL = "https://goweather.herokuapp.com/weather/Lviv";
    const baseURL = "https://wttr.in/Lviv?format=j1"

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
        //  setWeather([...response.data.current_condition[0]]);
            console.log(response.data.current_condition[0]);
          });
    },[])
    
    
    return (
        <div>
            <h1>Weather</h1>
            <div>{weather}</div>
           
        </div>
    )
}
export default WeatherPage;
