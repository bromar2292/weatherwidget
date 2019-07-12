import React from "react";
import css from "./Header.module.css";
class Header extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1 className={css.primary}>What's my weather ?</h1>
          <h5> Enter your city to find out the weather in the UK </h5>
        </div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city" height="10" />
          <button>What's my weather?</button>
        </form>
      </>
    );
  }
}
export default Header;
