import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div className="Button" onClick={this.props.onClick}>
        <b> {this.props.content} </b>
      </div>
    );
  }
}

export default Button;
