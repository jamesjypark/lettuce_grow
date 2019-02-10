import React, { Component } from "react";
import Vegetable from "../Vegetable/Vegetable";
import "./PlantProfile.css";

class PlantProfile extends Component {
  render() {
    const { vegetable } = this.props;
    return (
      <div onClick={this.props.onClick}>
        <a className="textDecorHidden">
          <p>{vegetable}</p>
          <img src={require("./" + vegetable + ".PNG")} />
        </a>
      </div>
    );
  }
}

export default PlantProfile;
