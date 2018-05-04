import React, { Component } from "react";

export default class Single_Space extends Component {
  render() {
    const space = this.props.match.match.params.space;
    return <div>This is the route for {space}</div>;
  }
}
