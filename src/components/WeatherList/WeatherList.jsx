import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from '../Form/Form';
import axios from 'axios';
import WeatherCard from '../WeatherCard/WeatherCard';
import { weatherImages } from './WeatherData';

const WeatherList = () => {
  const [weatherStates, setWeatherStates] = useState({});
  const [location, setLocation] = useState("");
  const [input, setInput] = useState("");
  const [userCoords, setUserCoords] = useState({});
  
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&lang=sp,%20es&cnt=5&appid=${(import.meta.env.VITE_OPEN_WEATHER_API_KEY)}&units=metric`;
  
  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(input)
    setInput("")
  }

  useEffect(() => {
    try {
      if (location) {
        axios.get(url).then(response => {
          if (response) {
            setWeatherStates(response.data)
          }
        })
      }
    }
    catch(error) {
      console.error(error);
    }
    
  }, [location])
  

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition( position => {
  
        setUserCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
    }
    catch(error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      if (userCoords.latitude && userCoords.longitude) {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${userCoords.latitude}&lon=${userCoords.longitude}&units=metric&lang=sp,%20es&cnt=5&appid=${(import.meta.env.VITE_OPEN_WEATHER_API_KEY)}`)
        .then(response => {
          if (response) {
            setWeatherStates(response.data)
          }
        })
      }
    }
    catch(error) {
      console.error(error);
    }
  }, [userCoords]);
  
  
  const paintWeather = () => weatherStates.list?.map((weather) => {
    
    const cardImage = weatherImages.find(weath => weath.weather.includes(weather.weather[0].description.toLowerCase()))?.img ?? 'Clear';

    return ( 
      <>
        <section className='container'>
          <WeatherCard 
            key={uuidv4()}
            img={`/src/assets/${cardImage}.svg`}
            temp={weather.main.temp}
            city={weatherStates.city.name}
            dt_txt={weather.dt_txt}
            weather={weather.weather[0].description}
            clouds={weather.clouds.all}
            temp_max={weather.main.temp_max}
            temp_min={weather.main.temp_min}
            feels_like={weather.main.feels_like}
          />
        </section>
      </>
    )
  });

  return (<>
    <Form handleSearch={handleSearch} input={input} setInput={setInput}/>
    {paintWeather()}
  </>)
};


export default WeatherList;