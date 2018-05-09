import React, { Component } from "react";
import SinglePropertyCard from "./SinglePropertyCard";
import backgroundImage1 from "../../../Media/image3.jpg";
import agent1Image from "../../../Media/agents/agent2.jpg";
export default class RoomsByLocation extends Component {
  render() {
    return (
      <div className="room--by--location">
        <section id="properties" className="properties container">
          <br />
          <h2 className="text-center text-light mt-4">{this.props.title}</h2>
          <br />
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
            <a href="/browse-space">
            <button
              type="button"
              name="button"
              className="properties__view-more mb-4"
            >
              View more
            </button>
            </a>
            <br />
          </div>
        </section>
      </div>
    );
  }
}
