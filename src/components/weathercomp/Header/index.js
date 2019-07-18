import React from "react";
import css from "./Header.module.css";
class Header extends React.Component {
  render() {
    return (
      <>
        <div className={css.headerContainer}>
          <div className={css.Header}>
            <h1 className={css.primary}>What's my weather ?</h1>
          </div>

          <div className={css.searchDisplay}>
            <form onSubmit={this.props.getWeather} className={css.searchbar}>
              <input type="text" name="city" placeholder="city" />
              <button>What's my weather?</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
