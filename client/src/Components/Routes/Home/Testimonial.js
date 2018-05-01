import React, { Component } from "react";
import userImage1 from "../../../Media/users/user1.jpg";
import SingleTestimoniual from "./singleTestimonial";
export default class Testimonial extends Component {
  render() {
    return (
      <section id="testimonials" className="testimonials">
          <h2>{this.props.title}</h2>
          <div className="testimonials__arrows">
            <span className="testimonials__arrow__left">←</span>
            <span className="testimonials__arrow__left">→</span>
          </div>
          <div className="testimonials__slider">
            <SingleTestimoniual
              text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              client="John Doe"
              pation="Artist"
              userImage={userImage1}
            />
            <SingleTestimoniual
              text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              client="John Doe"
              pation="Artist"
              userImage={userImage1}
            />
            <SingleTestimoniual
              text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              client="John Doe"
              pation="Artist"
              userImage={userImage1}
            />
            <SingleTestimoniual
              text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              client="John Doe"
              pation="Artist"
              userImage={userImage1}
            />
            <SingleTestimoniual
              text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              client="John Doe"
              pation="Artist"
              userImage={userImage1}
            />
          </div>
      </section>
    );
  }
}
