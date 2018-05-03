import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="header__content">
          <h1>Search rooms</h1>
          <p>A new selection of spaces hand-picked for quality and comfort.</p>
          <form className="header__search">
            <input
              type="text"
              name="search"
              placeholder="What are you looking for?"
            />
            <img src={this.props.searchIcon} alt="icon" />
            <button type="button" name="button">
              Search
            </button>
          </form>
        </div>
      </header>
    );
  }
}
