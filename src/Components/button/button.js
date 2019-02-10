import React, { Component } from 'react';


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
    };
  }
  render() {
    return (
      <button onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
