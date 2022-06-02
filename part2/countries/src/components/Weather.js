import axios from "axios";
import { useState, useEffect } from "react";
const Weather = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [capitalWeather, setCapitalWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`
        );
        setCapitalWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, [api_key, country.capital]);

  let temperature = capitalWeather?.main.temp;
  let icon = capitalWeather?.weather[0].icon;
  let wind = capitalWeather?.wind.speed;

  return (
    <>
      <h2> Weather in {country.capital} </h2>
      <p>temperature {temperature}°C</p>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
      <p>wind {wind} m/s</p>
    </>
  );
};

export default Weather;
