import React, { Component } from "react";
import "./HeaderButton.css";

class HeaderButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="HeaderButton">
        {this.props.content}
      </button>
    );
  }
}

export default HeaderButton;
