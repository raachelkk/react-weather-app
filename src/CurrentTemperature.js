import React from "react";

export default function CurrentTemperature(props) {
  return (
    <span className="CurrentTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">ºC</span>
    </span>
  );
}
