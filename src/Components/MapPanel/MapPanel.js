import React, { Component } from "react";
import { GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
// import "./MapPanel.css";
import { API_KEY } from "../../Constants/apiKey";
import CurrentLocation from "./CurrentLocation";
import CustomWindow from "./CustomWindow";
import { FAKE_COMMUNITIES } from '../../Constants/FAKE_COMMUNITIES'

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
        {FAKE_COMMUNITIES.communities.map(
          community=>(<Marker onClick={this.onMarkerClick} position={community} name={community.name} members={community.members}/>))}

        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
            <CustomWindow name={this.state.selectedPlace.name} members={this.state.selectedPlace.members} />
        </InfoWindow>
          
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapPanel);
