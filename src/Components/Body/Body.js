import React, { Component } from "react";
<<<<<<< HEAD

import Community from "../Community/Community";
import Grow from "../Grow/Grow";
import Search from "../Search/Search";

=======
>>>>>>> b8c008b57846d2960af44d3bccb5a4cf282d2fbc
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div>
        <div className={this.props.content === "community" ? "" : "hidden"}>
          <Community />
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
