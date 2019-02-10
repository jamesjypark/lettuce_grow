import React, { Component } from "react";

import Community from "../Community/Community";
import Grow from "../Grow/Grow";
import Search from "../Search/Search";
import MapPanel from "../MapPanel/MapPanel";
import Landing from "../Landing/Landing";
import UserProfile from "../UserProfile/UserProfile";

import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div>
        <div className={this.props.content === "landing" ? "" : "hidden"}>
          <Landing />
        </div>
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
        <div className={this.props.content === "UserProfile" ? "" : "hidden"}>
          <UserProfile />
        </div>
      </div>
    );
  }
}

export default Body;
