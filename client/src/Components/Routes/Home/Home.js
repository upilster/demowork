import React, { Component } from "react";
import Nav from "../../Header/Nav";
import Header from "../../Header/Header";
import searchIcon from "../../../Media/loupe.png";
import PropterySec from "./PropertySec";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import Partner from './Partner';
import Experience from './Experience';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header searchIcon={searchIcon} />
        <div className="container">
          <PropterySec title="CO-WORKING" />
          <PropterySec title="MEETING ROOMS" />
          <HowItWorks />
          <Testimonial title="WHAT USERS SAY" />
          <Partner title="OUR PARTNERS" />
          <Experience title="WorkClub" />
          <br/>
        </div>
      </div>
    );
  }
}

export default Home;
