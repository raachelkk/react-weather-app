import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
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
          <h1>{weatherData.name}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.condition}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.icon}
                  alt={weatherData.condition}
                  className="float-left"
                />
                <span className="temperature">
                  {Math.round(weatherData.current)}
                </span>
                <span className="unit">ºC</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "82e2a506b3bf38ccef35bc49eo4bd3at";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);

    return "Loading...";
  }
}
