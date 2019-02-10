import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './MapPanel.css'
import {API_KEY} from '../../Constants/apiKey';

const mapStyle = {
    width: '100%',
    height: '75%'
};

export class MapPanel extends Component {
    render() {
        return (
            <Map
                google = {this.props.google}
                zoom = {14}
                style = {mapStyle}
                initialCenter = {{
                    lat: 49.2641577,
                    lng: -123.2189405
                }}
                 />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapPanel);
