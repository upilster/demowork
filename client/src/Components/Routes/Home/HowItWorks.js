import React, { Component } from "react";
import firstImage from '../../../Media/how_icons/search.ico'
import secondImage from '../../../Media/how_icons/contact.ico'
import thirdImage from '../../../Media/how_icons/pen.ico'
import fourthImage from '../../../Media/how_icons/house.ico'
export default class HowItWorks extends Component {
  render() {
    return (
      <section id="how" className="how">
        <div className="container">
          <h2>How it Works</h2>
          <div className="how__items">
            <div className="how__item">
              <span className="how__item__step">1</span>
              <img src={firstImage} alt="icon" />
              <h4>Find your space</h4>
              <p>Whatever you’re into, there’s something to love, promise.</p>
            </div>
            <div className="how__item">
              <span className="how__item__step">2</span>
              <img src={secondImage} alt="icon" />
              <h4>Easily reserve space</h4>
              <p>
                Book instantly online, it’s easy to find space for a few hours,
                days or months.
              </p>
            </div>
            <div className="how__item">
              <span className="how__item__step">3</span>
              <img src={thirdImage} alt="icon" />
              <h4>Simple and secure access</h4>
              <p>
                Each WorkClub space is secured with a keypad, accessible with a
                unique access code available only to you and your guests.
              </p>
            </div>
            <div className="how__item">
              <span className="how__item__step">4</span>
              <img src={fourthImage} alt="icon" />
              <h4>Take a tour</h4>
              <p>
                Want to see some spaces in person first? Connect with our
                customer care team by phone, email, or live chat to set up a
                tour.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
