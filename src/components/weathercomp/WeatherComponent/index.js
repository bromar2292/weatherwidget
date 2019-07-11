import React from "react";
import Header from "../Header/index.js";

import InformationDisplay from "../WeatherDisplay/index";
import css from "./WeatherComponent.module.css";

const apiKey = "5806ed3a21b92e80ae55bfa47d55f525";

class WeatherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      icon: undefined,
      city: undefined,
      weather: undefined,
      description: undefined
    };
  }

  getWeather = async e => {
    e.preventDefault();
    // prevents the page from refreshing and loosing the data
    const city = e.target.elements.city.value;
    // grabs the data from the input field called city
    const callApi = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}`
    );
    const data = await callApi.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      icon: data.weather[0].icon,
      city: data.name,
      weather: data.weather[0].main,
      description: data.weather[0].description
    });
  };

  render() {
    return (
      <>
        <div className={css.box}>
          <Header getWeather={this.getWeather} />

          <InformationDisplay
            temperature={this.state.temperature}
            icon={this.state.icon}
            city={this.state.city}
            weather={this.state.weather}
            description={this.state.description}
          />
        </div>
      </>
    );
  }
}
export default WeatherComponent;
