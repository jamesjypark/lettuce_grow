import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './mapPanel.css';
import API_KEY from '.../Constants/apiKey';

const mapStyle = {
    width: '100%',
    height: '100%'
};

class MapPanel extends Component {
    render() {
        return (
            <div className='mapPanel'>
                <Map
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


  
