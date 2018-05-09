import React, { Component } from "react";
import SignleExperienceCard from "./SingleExperienceCard";
import backgroundImage from "../../../Media/image4.jpg";
export default class Experience extends Component {
  render() {
    return (
      <section id="properties" className="properties">
        <h2>{this.props.title}</h2>
        {/*<p>We handcraft every step of the Breather experience to ensure you arrive to a space that’s fully-equipped and primed for productivity.</p>*/}
        <div className="container">
          <SignleExperienceCard
            backgroundImage={backgroundImage}
            info="Coworking Etiquette"
            details="Coworking is a style of work which involves a shared working environment where individuals share equipment, knowledge and ideas..."
          />
          <SignleExperienceCard
            backgroundImage={backgroundImage}
            info="Coworking Etiquette"
            details="Coworking is a style of work which involves a shared working environment where individuals share equipment, knowledge and ideas..."
          />
          <SignleExperienceCard
            backgroundImage={backgroundImage}
            info="Coworking Etiquette"
            details="Coworking is a style of work which involves a shared working environment where individuals share equipment, knowledge and ideas..."
          />
        </div>
        <a href="/browse-space">
          <button type="button" name="button" className="properties__view-more">
            Find The Right Space
          </button>
        </a>
      </section>
    );
  }
}
