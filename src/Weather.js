import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayTemperature(response) {
    setWeatherData({
      ready: true,
      current: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      name: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "82e2a506b3bf38ccef35bc49eo4bd3at";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  className="btn btn-primary w-100"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
