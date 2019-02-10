import React, { Component } from "react";
import "./Button.css";

class AddButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button className="AddButton"
                    onClick={this.props.onClick}>
            </button>;

    }
}

export default AddButton;
