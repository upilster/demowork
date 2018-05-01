import React, { Component } from "react";

export default class SingleTestimonial extends Component {
  render() {
    return (
        <div className="testimonial">
          <div className="testimonial__text">
            <p>{this.props.text}</p>
          </div>
          <div className="testimonial__user">
            <img src={this.props.userImage} alt="User" />
            <h4>{this.props.client}</h4>
            <span>{this.props.pation}</span>
          </div>
        </div>
    );
  }
}
