import React, { Component } from 'react';
import PlantProfile from '../PlantProfile/PlantProfile';
// import './PlantPanel.css';

class PlantPanel extends Component {
  state = {
    vegetable: ["Tomato", "Potato", "Brocolli"],
    
  }
  
  render() {
    return (
      <div>
        <PlantProfile vegetable={this.state.vegetable[0]}/>
        <PlantProfile vegetable={this.state.vegetable[1]}/>
        <PlantProfile vegetable={this.state.vegetable[2]}/>
      </div>
    );
  }
}

export default PlantPanel;
