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
      description: undefined,
      humidity: undefined,
      wind: undefined,
      errorText: ""
    };
  }
  // ive used set state to collect the data from the api, which then is passed down via props to weather display
  getWeather = async e => {
    e.preventDefault();
    // prevents the page from refreshing and loosing the data
    try {
      const city = e.target.elements.city.value;
      if (!city) {
        this.setState({
          temperature: undefined,
          icon: undefined,
          city: undefined,
          weather: undefined,
          description: undefined,
          humidity: undefined,
          wind: undefined,
          errorText: "Please input a city, try again! "
        });
        return;
      }
      // grabs the data from the input field called city

      const callApi = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${API}`
      );
      console.log(callApi);
      if (callApi.status === 404) {
        console.log("Something has gone wrong");
        this.setState({
          temperature: undefined,
          icon: undefined,
          city: undefined,
          weather: undefined,
          description: undefined,
          humidity: undefined,
          wind: undefined,
          errorText:
            "This is not a valid city, try again! we all make spelling mistakes"
        });
        return;
      }
      const data = await callApi.json();
      console.log(data);
      console.log(data.message);
      this.setState({
        temperature: data.main.temp,
        icon: data.weather[0].icon,
        city: data.name,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        errorText: "...Good now try and search for another city"
      });
    } catch (e) {
      console.log(e);
      this.setState({
        temperature: undefined,
        icon: undefined,
        city: undefined,
        weather: undefined,
        description: undefined,
        humidity: undefined,
        wind: undefined,
        errorText:
          "Something else has gone wrong that we did not expect, please try again"
      });
    }

    //     try and catch added to catch the error and display this is not a valid city message
  };
  render() {
    return (
      <>
        <div className={css.flexbox}>
          <div className={css.box}>
            <Header getWeather={this.getWeather} />
            <div className={css.infoDisplay}>
              <InformationDisplay
                errorText={this.state.errorText}
                temperature={this.state.temperature}
                icon={this.state.icon}
                city={this.state.city}
                weather={this.state.weather}
                description={this.state.description}
                humidity={this.state.humidity}
                wind={this.state.wind}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default WeatherComponent;
