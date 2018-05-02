import React, { Component } from "react";
import SinglePropertyCard from "./SinglePropertyCard";
import backgroundImage1 from "../../../Media/image3.jpg";
import agent1Image from "../../../Media/agents/agent2.jpg";
export default class RoomsByLocation extends Component {
  render() {
    return (
      <div className="room--by--location">
        <section id="properties" className="properties">
          <div className="container">
            <SinglePropertyCard
              backgroundImage={backgroundImage1}
              price="10/month"
              title="Unique coffee shop on Maryland Rd."
              location="Wood Green, London, N22"
              agentName="Mary Shakes"
              agentImage={agent1Image}
            />
            <SinglePropertyCard
              backgroundImage={backgroundImage1}
              price="10/month"
              title="Unique coffee shop on Maryland Rd."
              location="Wood Green, London, N22"
              agentName="Mary Shakes"
              agentImage={agent1Image}
            />
            <SinglePropertyCard
              backgroundImage={backgroundImage1}
              price="10/month"
              title="Unique coffee shop on Maryland Rd."
              location="Wood Green, London, N22"
              agentName="Mary Shakes"
              agentImage={agent1Image}
            />
            <button
              type="button"
              name="button"
              className="properties__view-more"
            >
              View more
            </button>
          </div>
        </section>
      </div>
    );
  }
}
