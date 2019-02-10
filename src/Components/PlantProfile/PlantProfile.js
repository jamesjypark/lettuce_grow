import React, { Component } from 'react';
import './PlantProfile.css';

class PlantProfile extends Component {
  render() {
    const { vegetable } = this.props;
    return (
      <div>
        <a className="textDecorHidden" href="">
            {vegetable}
          <img src={vegetable + ".png"}></img>
        </a>
      </div>
    );
  }
}

export default PlantProfile;
