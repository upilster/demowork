import React, { Component } from "react";

export default class SignleExperienceCard extends Component {
  render() {
    return (
      <div className="property experience">
        <div className="property__bid">
          <div
            className="property__bid__image"
            style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
          />
        </div>
        <div className="property__info">
          <h3 className="property__info__title">{this.props.info}</h3>
          <p className="property__info__location">
            {this.props.details}
          </p>
        </div>
      </div>
    );
  }
}
