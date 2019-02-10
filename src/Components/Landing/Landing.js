import React, { Component } from "react";
import infographic from "../../Assets/infographic.gif";

import "./Landing.css";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="Landing">
        <div className="Subheader">it's thyme to grow.</div>
        <div className="Contents">
        Learn, grow and have fun engaging with your
        <br></br>food. Connect with communities and reap the benefits
        <br></br>of urban agriculture.
        {" "}
        </div>
        <div className="gif">
          <img src={infographic} />
        </div>
      </div>
    );
  }
}

export default Landing;
