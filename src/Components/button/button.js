import React, { Component } from "react";

class Button extends Component {
  render() {
    return <div onClick={this.props.onClick}>{this.props.content}</div>;
  }
}

export default Button;
