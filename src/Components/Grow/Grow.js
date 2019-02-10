import React, { Component } from "react";
import PlantPanel from "../PlantPanel/PlantPanel";
import Leaderboard from "../Leaderboard/Leaderboard";
import UserProfile from "../UserProfile/UserProfile";

class Grow extends Component {
  render() {
    return (
      <div>
        Grow <h1>select your crop</h1>
        <PlantPanel />
        <UserProfile />
      </div>
    );
  }
}

export default Grow;
