import React from "react";
import css from "./Header.module.css";
class Header extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1 className={css.primary}>Whats my Weather ?</h1>
          <h5> Enter your City to find out the Uk weather </h5>
        </div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city" height="10" />
          <button>whats my weather?</button>
        </form>
      </>
    );
  }
}
export default Header;
