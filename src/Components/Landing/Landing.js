import React, { Component } from "react";
import infographic from "../../Assets/infographic.gif";

import "./Landing.css";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="Landing">
        <div className="Subheader">it's time to grow.</div>
        <div className="Contents">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </div>
        <div className="gif">
          <img src={infographic} />
        </div>
      </div>
    );
  }
}

export default Landing;
