import React, { Component } from 'react';
import './PlantProfile.css';
// import  from "../PlantPanel";

class PlantProfile extends Component {
  render() {
    const { vegetable } = this.props;
    return (
      <div>
        <a>
            {vegetable}
          <img src={vegetable + ".png"}></img>
        </a>
      </div>
    );
  }
}

export default PlantProfile;
