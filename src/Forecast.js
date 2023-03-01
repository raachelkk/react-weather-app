import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
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
