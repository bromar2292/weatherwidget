import React from "react";
import Header from "../Header/index.js";

import InformationDisplay from "../WeatherDisplay/index";
import css from "./WeatherComponent.module.css";

const API = process.env.REACT_APP_API_URL;

// This is where the header and the weather display are rendered, this component is reusable as im rendinering it in app.js
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
  // ive used set state to collect the data from the api, which then is passed down via props to weather display
  getWeather = async e => {
    e.preventDefault();
    // prevents the page from refreshing and loosing the data
    const city = e.target.elements.city.value;
    // grabs the data from the input field called city
    const callApi = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${API}`
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
