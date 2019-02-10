import React, { Component } from "react";
import "./Leaderboard.css";
import { FAKE_DATA } from "../../Constants/FAKE_DATA";


class Leaderboard extends Component {

  render() {
    return <div align="left" className="Leaderboard">
              Top Growers
              <ol align="left" type="1">
                <li>{FAKE_DATA.users[0].name} </li>
                <li>{FAKE_DATA.users[1].name} </li>
                <li>{FAKE_DATA.users[2].name} </li>
              </ol>
            </div>;
  }
}

export default Leaderboard;
