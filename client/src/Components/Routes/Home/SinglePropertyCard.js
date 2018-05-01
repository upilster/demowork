import React, { Component } from "react";

export default class SinglePropertyCard extends Component {
  render() {
    const {
      backgroundImage,
      price,
      title,
      location,
      agentImage,
      agentname
    } = this.props;
    return (
      <div className="property">
        <div className="property__bid">
          <div
            className="property__bid__image"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="property__bid__status property__bid__status--open">
            <span>Just Added</span>
            <i className="fa fa-home" aria-hidden="true" />
          </div>
          <div className="property__bid__price">
            <small>Price From</small>
            <span>
              <i className="fa fa-gbp" aria-hidden="true" />
              {price}
            </span>
          </div>
        </div>
        <div className="property__info">
          <h3 className="property__info__title">{title}</h3>
          <p className="property__info__location">
            <i className="fa fa-map-marker" aria-hidden="true" /> {location}
          </p>
          <div className="property__info__agent">
            <img
              src={agentImage}
              alt="Harvey Specter"
              className="property__info__agent__image"
            />
            <p className="property__info__offered-by">
              Offered by:
              <span className="property__info__agent__name">{agentname}</span>
              <span className="property__info__agent__rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
