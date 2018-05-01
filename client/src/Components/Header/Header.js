import React from "react";

const Header = props => {
  return (
    <React.Fragment>
      {/* Navigation */}
      <nav className="nav">
        <a href="/" className="nav__logo">
          <img src={props.logo} alt="logo" />
        </a>
        <ul className="nav__items">
          <li className="nav__item">
            <a href="#">Browse Spaces</a>
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
        <button className="nav__toggle">
          <span />
          <span />
          <span />
        </button>
      </nav>
    </React.Fragment>
  );
};
export default Header;
