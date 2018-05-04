import React, { Component } from "react";
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
        <h2>{this.props.title}</h2>
        <p className="text-center">69 spaces</p>
        <div className="container">
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
