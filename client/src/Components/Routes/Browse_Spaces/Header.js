import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="header__content">
          <form className="header__search">
            <input
              type="text"
              name="search"
              placeholder="Search by space or location...."
            />
            <img src={this.props.searchIcon} alt="icon" />
            <button type="button" name="button">
              Search
            </button>
          </form>
          <button className="btn btn-dark filter-btn" id="filter">
            <i className="fa fa-cogs" /> Filter
          </button>
          <button className="btn btn-dark clear-filter-btn" id="clear-filter">
            <i className="fa fa-eraser" /> Clear filter
          </button>
        </div>
      </header>
    );
  }
}
