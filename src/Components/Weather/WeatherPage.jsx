import { useState, useEffect } from 'react';
import axios from "axios";
import style from "./Weather.module.scss";
import { connect, useDispatch, useSelector } from 'react-redux';

const WeatherPage = () => {
    const citiesData = useSelector(state => state.cities);
    console.log(citiesData)
    const [city, setSity] = useState("Lviv");
    const [weather, setWeather] = useState();
    const [units, setSetUnits] = useState("C"); 
    const baseURL = `https://wttr.in/${city}?format=j1`;   


    useEffect (() => {

    })
    
    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
            setWeather(weather => response.data);
        });
    },[city])
    console.log(weather);

    const handleChangeUnits = (u) => {
        setSetUnits(u.target.value)
    }

    const handleCity = event => {
        setSity(event.target.value)
    }

    
    
    return (
        <div>
            <span className={style.selectBlock}>
                <p>Select the city</p>
                <select name="" id="" onChange = {(event) => handleCity(event)}>
                    {citiesData.cities.map( city => 
                        <option value={city}>{city}</option>
                    )}
                </select>
            </span>
            <h1>Weather in {city}</h1>
            <form action="">
                <input name="units" type="radio" id="celsius" value="C" checked={units === "C"} onChange={handleChangeUnits}/>
                <label htmlFor="celsius">Celsius, Meter</label>
                <br />
                <input name="units" type="radio" id="farenheit" value="F" checked={units === "F"} onChange={handleChangeUnits}/>
                <label htmlFor="farenheit">Farenheit, Mile</label>
            </form>

            { weather
            ? <div className={style.resultsBlock}>
                <span>{weather.current_condition[0].weatherDesc[0].value}</span> <br />               
                <span>
                    {units === "C"
                    ? <span>{`Temperature: ${weather.current_condition[0].temp_C}`}&#176;C</span>
                    : <span>{`Temperature: ${weather.current_condition[0].temp_F}`}&#176;F</span>
                    }  <br />
                </span>
                <span>
                    {units === "C"
                    ? <span>{`Feels like: ${weather.current_condition[0].FeelsLikeC}`}&#176;C</span>
                    : <span>{`Feels like: ${weather.current_condition[0].FeelsLikeF}`}&#176;F</span>
                    }  <br />
                </span>
                <span>
                    {units === "C"
                    ? <span>{`Wind: ${weather.current_condition[0].winddir16Point}, ${weather.current_condition[0].windspeedKmph} km/h`}</span>
                    : <span>{`Wind: ${weather.current_condition[0].winddir16Point}, ${weather.current_condition[0].windspeedMiles} m/h`}</span>
                    }  <br />
                </span>
                <span>{`Humidity: ${weather.current_condition[0].humidity}%`}</span> <br />
                <span>{`UV Index: ${weather.current_condition[0].uvIndex}`}</span> <br />
                <span>{weather.current_condition[0].weatherIconUrl[0].value}</span>
            </div>
            : <span>Loading data...</span> }            
        </div>
    )
}
export default WeatherPage;
