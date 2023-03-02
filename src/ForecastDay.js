import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let max = Math.round(props.data.daily[0].temperature.maximum);
    return `${max}º`;
  }
  function minTemperature() {
    let min = Math.round(props.data.daily[0].temperature.minimum);
    return `${min}º`;
  }

  function day() {
    let date = new Date(props.data.daily[0].time);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div>
      <div className="mb-1">{day()}</div>
      <WeatherIcon code={props.data.daily[0].condition.icon} size={40} />
      <div className="forecast-temperature">
        <span className="forecast-max">{maxTemperature()}</span>
        <span className="forecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
