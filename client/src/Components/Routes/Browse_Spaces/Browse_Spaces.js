import React, { Component } from "react";

import searchIcon from "../../../Media/loupe.png";
import backgroundImage1 from "../../../Media/image3.jpg";
import agent1Image from "../../../Media/agents/agent2.jpg";
import Header from "./Header";
import PropterySec from "./PropertySec";
import Filter from "./Filter";
class Browse_Spaces extends Component {
  render() {
    return (
      <div className="Browse--space">
        <Header searchIcon={searchIcon} />
        <Filter />
        <div className="container">
          <br />
          <PropterySec title="Work Spaces" />
        </div>
      </div>
    );
  }
}

export default Browse_Spaces;
