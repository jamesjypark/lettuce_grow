import React, { Component } from "react";
import "./SearchCard.css";

class SearchCard extends Component {
  state = {};

  render() {
    return (
    <div className="Parent">
            <div className="SearchCard">
              <img className="vegetable" src={this.props.content && require("../PlantProfile/" + this.props.content + ".PNG")} alt={this.props.key} />
              <p className="content">
              {this.props.content}
              </p>
            </div>
    </div>);
  }
}

export default SearchCard;
