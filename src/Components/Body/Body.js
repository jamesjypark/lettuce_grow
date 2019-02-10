import React, { Component } from "react";
import "./body.css";

class Body extends Component {
  render() {
    return (
      <div>
        <div> The current display is {this.props.content}</div>
      </div>
    );
  }
}

export default Body;
