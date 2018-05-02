import React, { Component } from "react";
import Header from "../../Header/Header";
import searchIcon from "../../../Media/loupe.png";
import PropterySec from "./PropertySec";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import Partner from "./Partner";
import Experience from "./Experience";
import RoomsByLocation from "./RoomsByLocation";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header searchIcon={searchIcon} />
        <RoomsByLocation title="Rooms nearby"/>
        <div className="container">
          <PropterySec title="CO-WORKING" />
          <PropterySec title="MEETING ROOMS" />
          <HowItWorks />
          <Testimonial title="WHAT USERS SAY" />
          <Partner title="OUR PARTNERS" />
          <Experience title="WorkClub" />
          <br />
        </div>
      </div>
    );
  }
}

export default Home;
