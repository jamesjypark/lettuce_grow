import React, { Component } from 'react';
import PlantProfile from '../PlantProfile/PlantProfile';
import './PlantPanel.css';

class PlantPanel extends Component {
  state = {
    
  }
  render() {
    
  const vegetable = ["Tomato", "Potato", "Broccoli", "Spinach"]
    return (
      <div className="parents">
        {vegetable.map(v=>(
          <PlantProfile vegetable={v}/>
        )
        )}
        
    
      </div>
    );
  }
}

export default PlantPanel;
