import React, { Component } from "react";
import { GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
// import "./MapPanel.css";
import { API_KEY } from "../../Constants/apiKey";
import CurrentLocation from "./CurrentLocation";

export class MapPanel extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        {positions.map(i => {
          
          <Marker onClick={this.onMarkerClick} position={i} name='TEST 1'/>
        })}
        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
          <h4>{this.state.selectedPlace.name}</h4>
        </InfoWindow>
      </CurrentLocation>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapPanel);
