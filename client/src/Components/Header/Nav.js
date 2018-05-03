import React, { Component } from "react";
import autoBind from "react-autobind";
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false
    };
    autoBind(this);
  }
  toggle() {
    this.setState({ toggleNav: !this.state.toggleNav });
  }
  render() {
    return (
      <React.Fragment>
        {/* Navigation */}
        <nav className={this.state.toggleNav ? "nav nav--active" : "nav"}>
          <a href="/" className="nav__logo">
            <img src={this.props.logo} alt="logo" />
          </a>
          <ul className="nav__items">
            <li className="nav__item">
              <a href="/browse-space">Browse Spaces</a>
            </li>
            <li className="nav__item">
              <a href="#" data-scroll="#how">
                How it works
              </a>
            </li>
            <li className="nav__item">
              <a href="#">Help</a>
            </li>
            <li className="nav__item">
              <a href="#">Talk to us</a>
            </li>
            <li className="nav__item">
              <a href="#">Login</a>
            </li>
            <li className="nav__item nav__item--important">
              <a href="#">Add a space</a>
            </li>
          </ul>
          <button className="nav__toggle" onClick={this.toggle}>
            <span />
            <span />
            <span />
          </button>
        </nav>
      </React.Fragment>
    );
  }
}
