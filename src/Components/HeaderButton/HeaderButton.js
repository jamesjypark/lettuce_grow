import React, { Component } from "react";

class HeaderButton extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="HeaderButton">
        {this.props.content}
      </div>
    );
  }
}

export default HeaderButton;
