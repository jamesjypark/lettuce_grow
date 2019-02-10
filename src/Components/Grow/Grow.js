import React, { Component } from "react";
import PlantPanel from "../PlantPanel/PlantPanel";
import Leaderboard from "../Leaderboard/Leaderboard";
import UserProfile from "../UserProfile/UserProfile";


class Grow extends Component {
  render() {
    return <div>Grow <h1>Select Your Crops.</h1>
                <PlantPanel /></div>;
  }
}

export default Grow;
