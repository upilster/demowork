import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import SinglePropertyCard from "./SinglePropertyCard";
import backgroundImage1 from "../../../Media/image3.jpg";
import agent1Image from "../../../Media/agents/agent2.jpg";
export default class PropterySec extends Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };
  fetchMoreData = () => {
    if (this.state.items.length >= 100) {
      // this 500 will be the length of cards from backend
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  render() {
    return (
      <section id="properties" className="properties">
        <div className="container">
          {/* <h2>{this.props.title}</h2> */}
          <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            <Form inline>
              <FormGroup>
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                </span>

                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="search by location"
                />
              </FormGroup>{" "}
              <FormGroup>
                <span>
                  <i className="fa fa-home" aria-hidden="true" />
                </span>
                <Input type="select" name="select" id="exampleSelect">
                  <option value="" disabled selected>
                    Workspace Types
                  </option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <span>
                  <i class="fa fa-users" />
                </span>
                <Input type="select" name="select" id="exampleSelect">
                  <option value="" disabled selected>
                    Attendees
                  </option>
                  <option value="">Any</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">20</option>
                  <option value="">25+</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <span>
                  <i class="fa fa-sort" />
                </span>
                <Input type="select" name="select" id="exampleSelect">
                  <option value="" disabled selected>
                    Sort by Price
                  </option>
                  <option value="">Hight to Low</option>
                  <option value="">Low to High</option>
                </Input>
              </FormGroup>
            </Form>
            <br/>
          </div>
          <br />
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
          >
            {this.state.items.map((i, index) => (
              <SinglePropertyCard
                key={index}
                backgroundImage={backgroundImage1}
                price="10/month"
                title="Unique coffee shop on Maryland Rd."
                location="Wood Green, London, N22"
                agentName="Mary Shakes"
                agentImage={agent1Image}
              />
            ))}
          </InfiniteScroll>
        </div>
      </section>
    );
  }
}
