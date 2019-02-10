import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Map.css';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '75%'
  }
};

export class CurrentLocation extends Component {
    constructor(props) {
        super(props);
    
        const { lat, lng } = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        };
    }

    componentDidUpdate = (prevProps, prevState) => {
        // Check whether the map is loaded. If it isnt, load it.
        if(prevProps.google !== this.props.google) {
            this.loadMap();
        }

        // Check whether the location from the previous state is the same as the current location. If not, recenter to the current location.
        if(prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    recenterMap = () => {
        
        const map = this.map;
        const current = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if(map) {
            let center = new maps.LatLng(current.lat, current.lng);
            // pan from the previous location to the current location
            map.panTo(center);
        }
    }

    componentDidMount = () => {
        if(this.props.centerAroundCurrentLocation) {
            // If navigator/navigator.geolocation is null, do not run.
            if(navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            // Set the latitude and longitude to the geolocation position.
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            }
        }
        //Load the map either with a state w/ set coordinates, or with the default ones.
        this.loadMap();
    }

    loadMap = () => {
        // Check if google is available
        if(this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;

            const node = ReactDOM.findDOMNode(mapRef);
            let { zoom } = this.props;
            const { lat, lng } = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom
                }
            );

            // Use the map constructor to instantiate the map
            this.map = new maps.Map(node, mapConfig);
        }
    }

    render() {
        return (
        <div>
            <div className="mapStyle" ref = "map">
                Loading Map....
            </div>        
        </div>
        );
    }

}


export default CurrentLocation;

CurrentLocation.defaultProps = {
    zoom: 14,
    initialCenter: {
        lat: 49.2641577,
        lng: -123.2189405
    },
    centerAroundCurrentLocation: false,
    visible: true
};