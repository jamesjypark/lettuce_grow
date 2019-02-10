import React, { Component } from "react";
import "./SearchCard.css";

class SearchCard extends Component {
  state = {};
  render() {
    return <div className="SearchCard">{<h2 className="content">{this.props.content}</h2>}</div>;
  }
}

export default SearchCard;
