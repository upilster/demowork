import React, { Component } from "react";
import Header from "../Header/Header";
import logo from '../../Media/workclub_logo.png'
import searchIcon from '../../Media/loupe.png'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header logo={logo}/>
        {/* Header */}
        <header id="header" className="header">
          {/* HEADER VIDEO ELEMENT, just replace video URL
<video preload="metadata" autoplay muted loop class="header__video" poster="assets/media/header-bg.jpg">
  <source src="http://www.variousways.com/assets/videos/variousways.mp4" type="video/mp4">
  <source src="http://www.variousways.com/assets/videos/variousways.ogv" type="video/ogv">
</video>
*/}
          <div className="header__content">
            <h1>Book unique workspaces across London.</h1>
            <p>
              A new selection of spaces hand-picked for quality and comfort.
            </p>
            <form className="header__search">
              <input type="text" name="search" placeholder="What are you looking for?" />
              <img src={searchIcon} alt="icon" />
              <button type="button" name="button">
                Search
              </button>
            </form>
          </div>
          <a
            className="header__scroll-indicator"
            href="#"
            data-scroll="#properties"
          />
        </header>
      </div>
    );
  }
}

export default Home;
