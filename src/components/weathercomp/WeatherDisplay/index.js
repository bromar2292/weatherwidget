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

class InformationDisplay extends React.Component {
  // const weatherIcon = (this.props.icon)=>{
  //     if (this.props.icon==01)
  // }

  render() {
    // const icons = ({ icon }) => {
    //   if (icon === "01d") {
    //     return sunny;
    //   } else if (icon === "02d") {
    //     return fewClouds;
    //   } else if (icon === "03d") {
    //     return scatterdClouds;
    //   } else if (icon === "04d") {
    //     return brokenClouds;
    //   } else if (icon === "09d") {
    //     return showers;
    //   } else if (icon === "10d") {
    //     return rainshowers;
    //   } else if (icon === "11d") {
    //     return thunderStorm;
    //   } else if (icon === "13d") {
    //     return snow;
    //   } else if (icon === "50d") {
    //     return mist;
    //   } else {
    //     return sunny;
    //   }
    // };
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

    const celsius = Math.round(this.props.temperature - 273.15);
    return (
      <>
        <div className={css.imgContainer}>
          <img src={WeatherIcon()} alt="weather img" className={css.imgSize} />
        </div>
        <div>
          <div>
            <p>Country = United Kingdom</p>
            <p>City = {this.props.city}</p>
          </div>
          <div>
            <p>Temperature = {celsius} C</p>

            <p>Description= {this.props.description}</p>
          </div>
        </div>
      </>
    );
  }
}
export default InformationDisplay;
