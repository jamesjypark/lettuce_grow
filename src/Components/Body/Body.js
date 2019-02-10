import React, { Component } from "react";
import Community from "../Community/Community";
import Grow from "../Grow/Grow";
import Search from "../Search/Search";
import "./Body.css"
import MapPanel from "../MapPanel/MapPanel";

class Body extends Component {
  render() {
    return (
      <div>
        <div className={this.props.content === "community" ? "" : "hidden"}>
          <Community />
          <MapPanel />
        </div>
        <div className={this.props.content === "grow" ? "" : "hidden"}>
          <Grow />
        </div>
        <div className={this.props.content === "search" ? "" : "hidden"}>
          <Search />
        </div>
      </div>
    );
  }
}

export default Body;
