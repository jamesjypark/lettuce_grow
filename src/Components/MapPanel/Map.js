import React {Component} from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class CurrentLocation extends Component {
    constructor(props) {
        super(props);

        const {lat, lng}  = this.props.intialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        };
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