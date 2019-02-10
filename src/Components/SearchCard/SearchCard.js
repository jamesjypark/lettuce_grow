import React, { Component } from "react";
import "./SearchCard.css";

class SearchCard extends Component {
  state = {};
  render() {
    return <div className="SearchCard">{this.props.content}</div>;
  }
}

export default SearchCard;
