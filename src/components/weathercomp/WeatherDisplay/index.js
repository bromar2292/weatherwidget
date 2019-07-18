import React from "react";

import sunny from "./sunny.png";
import scatterdClouds from "./scatteredClouds.png";
import brokenClouds from "./verycloudy.png";
import rainshowers from "./rainsun.png";
import showers from "./rain.png";
import thunderStorm from "./thunderstorm.png";
import snow from "./snow.png";
import mist from "./mist.png";
import fewClouds from "./partlycloudy.png";

import css from "./WeatherDisplay.module.css";

// This component renders the information from the api
class InformationDisplay extends React.Component {
  render() {
    const icons = {
      "01d": sunny,
      "02d": fewClouds,
      "03d": scatterdClouds,
      "04d": brokenClouds,
      "09d": showers,
      "10d": rainshowers,
      "11d": thunderStorm,
      "13d": snow,
      "50d": mist
    };

    const WeatherIcon = () => {
      return icons[this.props.icon] || sunny;
    };
    // The weather api sends icon indicators for from 01d- 50d depending on what type of weather you get, so the function above
    // finds a suitable image depending on the weather icon number
    const celsius = Math.round(this.props.temperature - 273.15);

    // below is conditional rendering so that the data is not on display will there is a value in the props, made by searching for a city
    if (!this.props.city) {
      return <h5> Enter your city to find out the weather in the UK </h5>;
    } else {
      return (
        <>
          <div className={css.imgContainer}>
            <img src={WeatherIcon()} alt="weather img" />
          </div>
          <div>
            <div>
              <p>Country = United Kingdom</p>
              <p>City = {this.props.city}</p>
            </div>
            <div>
              <p>Description = {this.props.description}</p>
              <p>Temp = {celsius} C</p>

              <p> Humidity = {this.props.humidity}%</p>
              <p> Wind = {this.props.wind} mph</p>
            </div>
          </div>
        </>
      );
    }
  }
}

export default InformationDisplay;
