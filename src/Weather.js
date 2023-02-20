import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Victoria</h1>
        <ul>
          <li>Monday 2:00pm</li>
          <li>Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Current condition"
                className="float-left"
              />
              <span className="temperature">9</span>
              <span className="unit">ºC</span>
            </div>
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
