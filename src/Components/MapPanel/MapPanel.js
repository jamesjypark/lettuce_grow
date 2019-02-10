import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './MapPanel.css';
import API_KEY from '.../Constants/apiKey.js';


export class MapPanel extends Component {
    render() {
        return (
            <div className='mapPanel'>
                <Map
                className = "mapStyle"
                 google = {this.props.google}
                 zoom = {14}
                 style = {mapStyle}
                 initialCenter = {{
                     lat: this.props.lat,
                     lng: this.props.lng
                 }}
                 />
             </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapPanel);
