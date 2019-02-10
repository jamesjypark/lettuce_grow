import React, { Component } from "react";
import './Button.css';

class Button extends Component {
  render() {
    return <div className="Button"
                onClick={this.props.onClick}>
              {this.props.content}
          </div>;

  }
}

export default Button;
