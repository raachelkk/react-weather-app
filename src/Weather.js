import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <h1>Victoria</h1>
        <ul>
          <li>Monday 2:00pm</li>
          <li>Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Current condition"
            />
            9ºC
          </div>
          <div className="col-6">
            <ul>
              <li>Percipitation: 57%</li>
              <li>Humidity: 82%</li>
              <li>Wind: 34 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
