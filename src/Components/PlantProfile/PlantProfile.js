import React, { Component } from "react";
import Vegetable from "../Vegetable/Vegetable";
import "./PlantProfile.css";

class PlantProfile extends Component {

  renderPlantInfo = (vegetable, selected) => {
    if(selected) {
      return (<div className = "more_info">
                <p className = "title">{vegetable}</p>
                <p>planted: <b>19 days ago</b></p>
                <p>stage: <b>young</b></p>
              </div>);
    }
    return (<div className="info"><p className="title">{vegetable}</p></div>);
  }

  render() {
    const {vegetable} = this.props;
    return (
      <div onClick={this.props.onClick}>
        <a className="textDecorHidden">
          <div>
              <div>
                <img className = "vegetable" src={require("./" + vegetable + ".PNG")} />
              </div>
              {this.renderPlantInfo(vegetable, this.props.selected)}
          </div>
        </a>
      </div>
    );
  }
}

export default PlantProfile;
