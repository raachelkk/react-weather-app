import axios from "axios";
import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "82e2a506b3bf38ccef35bc49eo4bd3at";
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day mb-1">Thu</div>
          <WeatherIcon code="clear-sky-day" size={40} />
          <div className="forecats-temperature">
            <span className="forecast-max">19º</span>
            <span className="forecast-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
