import React, { Component } from "react";
import PlantPanel from "../PlantPanel/PlantPanel";
import Leaderboard from "../Leaderboard/Leaderboard";
import UserProfile from "../UserProfile/UserProfile";

class Grow extends Component {
  render() {
    return (
      <div>
        <PlantPanel />
        {/* <UserProfile /> */}
      </div>
    );
  }
}

export default Grow;
