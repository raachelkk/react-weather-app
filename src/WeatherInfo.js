import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.name}</h1>
          <span>
            <FormattedDate date={props.data.date} />
          </span>
          <div className="currentCondition">{props.data.condition}</div>
          <div>
            Humidity: <span className="humidity">{props.data.humidity}%</span>,
            Wind: <span className="wind">{Math.round(props.data.wind)} </span>
            km/h
          </div>
        </div>
        <div className="col-6">
          <div className="clearfix temperature-col">
            <WeatherIcon code={props.data.icon} size={56} />
            <CurrentTemperature celsius={props.data.current} />
          </div>
        </div>
      </div>
    </div>
  );
}
