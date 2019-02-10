import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
// import "./MapPanel.css";
import { API_KEY } from "../../Constants/apiKey";
import CurrentLocation from "./CurrentLocation";

export class MapPanel extends Component {
  render() {
    return (
      <CurrentLocation 
      streetViewControl
      centerAroundCurrentLocation 
      google={this.props.google} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapPanel);
