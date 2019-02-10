import React, { Component } from "react";
import Leaderboard from "../Leaderboard/Leaderboard";


class UserProfile extends Component {
  render() {
    return  <div>
              <h1>Bob</h1>
              <p><b> 1050 </b> Growth Points</p>
              <h3> Badges </h3>
              <p>🍔 ❤️ 🐶</p>
              <h3> Crops </h3>
              <p> 🥬 🍐 🍅 🍆</p>
              <h3> Community </h3>
              <p> Bean Thinking About You!</p>
            </div>;
  }
}

export default UserProfile;
