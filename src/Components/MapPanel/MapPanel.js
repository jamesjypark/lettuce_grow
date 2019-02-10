import React, { Component } from "react";
import { GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
// import "./MapPanel.css";
import { API_KEY } from "../../Constants/apiKey";
import CurrentLocation from "./CurrentLocation";
import { FAKE_DATA } from '../../Constants/FAKE_DATA'

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
      <div>

      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        {FAKE_DATA.positions.map(
          location=>(<Marker onClick={this.onMarkerClick} position={location} name={location.name} />))}
        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
          <h4>{this.state.selectedPlace.name}</h4>
        </InfoWindow>
      </CurrentLocation>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapPanel);
