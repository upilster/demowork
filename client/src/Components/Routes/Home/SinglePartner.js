import React, { Component } from "react";

export default class SinglePartner extends Component {
  render() {
    return (
      <span className="partner">
        <a href="#">
          <img src={this.props.partnerImage} alt="logo" />
        </a>
      </span>
    );
  }
}
