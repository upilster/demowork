import React, { Component } from "react";
// import { GoogleApiWrapper } from 'google-maps-react'
import GoogleMapReact from "google-map-react";
// import MapContainer from './MapContainer'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Table
} from "reactstrap";
import backgroundImage1 from "../../../Media/properties/house1.jpg";
import backgroundImage2 from "../../../Media/properties/house2.jpg";
import backgroundImage3 from "../../../Media/properties/house3.jpg";
import agentImage from "../../../Media/agents/agent2.jpg";
import board from "../../../Media/list2.png";
import television from "../../../Media/list5.png";
import aircondition from "../../../Media/list5.png";
import wifi from "../../../Media/list8.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const items = [
  {
    src: backgroundImage1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: backgroundImage2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: backgroundImage3,
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class Single_Space extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  static defaultProps = {
    center: {
      lat: 23.810332,
      lng: 90.412518
    },
    zoom: 8
  };
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const space = this.props.match.match.params.space;
    const { activeIndex } = this.state;
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });
    console.log(space);
    return (
      <div className="Single-room">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="property__info">
                <h3 className="property__info__title">
                  Coffee shop on Maryland Rd.
                </h3>
                <div className="row">
                  <div className="col-6">
                    <p className="property__info__location">
                      <i className="fa fa-map-marker" aria-hidden="true" /> Wood
                      Green, London, N22
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="price text-right">
                      from / per night <span>$244</span>
                    </p>
                  </div>
                </div>
                <div className="property__info__agent">
                  <img
                    src={agentImage}
                    alt="Harvey Specter"
                    className="property__info__agent__image"
                  />
                  <p className="property__info__offered-by">
                    Offered by:
                    <span className="property__info__agent__name">
                      Mary Shakes
                    </span>
                    <span className="property__info__agent__rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </span>
                    <span
                      className="property__info__agent__name"
                      style={{ fontSize: "1rem" }}
                    >
                      58 ratings
                    </span>
                  </p>
                </div>
              </div>
              <div className="desc">
                <div className="title">
                  <h1>Description</h1>
                </div>
                <div className="subtitle">
                  <h2>The space</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Velit vero atque alias? Quasi id pariatur obcaecati animi
                    facilis nisi nostrum explicabo voluptate veniam,
                    perspiciatis cupiditate?
                  </p>
                </div>
                <div className="subtitle">
                  <h2>Guest access</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat autem sequi, placeat provident, illum, eaque minus
                    consequuntur commodi impedit perferendis ratione magni
                    dolore dolorem eligendi. Perferendis temporibus ratione
                    impedit quisquam maiores? Cupiditate nostrum voluptatem
                    possimus numquam pariatur quidem, nihil officiis esse
                    accusamus perspiciatis a assumenda!
                  </p>
                </div>
                <div className="subtitle">
                  <h2>Cancelation</h2>
                  <ol>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ol>
                </div>
              </div>
              <div className="amenities">
                <h2>Amenities</h2>
                <Table className="borderless">
                  <tbody>
                    <tr>
                      <td>WiFi</td>
                      <td>Furnished</td>
                      <td>Catering</td>
                      <td>Phone</td>
                    </tr>
                    <tr>
                      <td>Filtered Water</td>
                      <td>Parking</td>
                      <td>Whiteboard</td>
                      <td>Meeting Rooms</td>
                    </tr>
                    <tr>
                      <td>Flatscreen TV</td>
                      <td>Air conditioning</td>
                      <td>Mirror</td>
                      <td>Elevator access</td>
                    </tr>
                    <tr>
                      <td>Phone charger</td>
                      <td>Bathroom on premises</td>
                      <td>HDMI</td>
                      <td>USB-C Multiport</td>
                    </tr>
                    <tr>
                      <td>Printer</td>
                      <td>Furniture</td>
                      <td>24hr Access</td>
                      <td>Cleaning</td>
                    </tr>
                    <tr>
                      <td>Disabled Access</td>
                      <td>Storage</td>
                      <td>Mailing Address</td>
                      <td>Utilities</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="accommodates">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Accommodates</h2>
                    <Table className="borderless">
                      <tbody>
                        <tr>
                          <td>At tables</td>
                          <td>10</td>
                        </tr>
                        <tr>
                          <td>Maximum total</td>
                          <td>14</td>
                        </tr>
                        <tr>
                          <td>In lounge</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>Sq. ft.</td>
                          <td>550</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="col-md-6">
                    <h2>Opening Hours</h2>
                    <Table className="borderless">
                      <tbody>
                        <tr>
                          <td>Mon - Thu</td>
                          <td>6:00 am - 10:00 pm</td>
                        </tr>
                        <tr>
                          <td>Fri - Sat</td>
                          <td>6:00 am - 8:00 pm</td>
                        </tr>
                        <tr>
                          <td>Sun</td>
                          <td>6:00 am - 9:00 pm</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className="additional">
                <h2>Additional Details</h2>
                <Table className="borderless">
                  <tbody>
                    <tr>
                      <td>Beer & Wine</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                      <td>Bike Storage</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Cafe</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                      <td>Childcare</td>
                      <td>
                        <i className="fa fa-times" />
                      </td>
                    </tr>
                    <tr>
                      <td>Coffee & Tea</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                      <td>Event Space</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Events & Talks</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                      <td>Fruit & Snacks</td>
                      <td>
                        <i className="fa fa-times" />
                      </td>
                    </tr>
                    <tr>
                      <td>Gym</td>
                      <td>
                        <i className="fa fa-times" />
                      </td>
                      <td>Kitchen</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Lockers</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                      <td>Parking</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Pets Allowed</td>
                      <td>
                        <i className="fa fa-times" />
                      </td>
                      <td>Roof Terrace</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Showers</td>
                      <td>
                        <i className="fa fa-times" />
                      </td>
                      <td>Projector</td>
                      <td>
                        <i className="fa fa-check" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col-md-4 p4">
              <div className="map" style={{ width: "100%", height: "400px" }}>
                <GoogleMapReact
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                  bootstrapURLKeys={{ key: 'AIzaSyDN96lf2Q1ryYwYevi2QKLZboxk3ILPGCk' }}
                >
                  <AnyReactComponent
                    lat={40.747331}
                    lng={-73.851744}
                    text={"Coffee shop on Maryland Rd."}
                  />
                </GoogleMapReact>
              </div>
              <br/>
             <a href={'/'+ space + '/book'} className="btn btn-block btn-info">BOOK IT NOW</a> 
             <a href={space} className="btn btn-block btn-outline-danger"><i className="fa fa-heart"></i> ADD TO FAVOURITE</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Single_Space;
