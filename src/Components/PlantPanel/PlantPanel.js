import React, { Component } from 'react';
import PlantProfile from '../PlantProfile/PlantProfile';
import './PlantPanel.css';

class PlantPanel extends Component {
  state = {
    
  }
  render() {
    
  const vegetable = ["Tomato", "Potato", "Brocolli", "Spanish"]
    return (
      <div>
        {vegetable.map(v=>(
          <PlantProfile vegetable={v}/>
        )
        )}
        
    
      </div>
    );
  }
}

export default PlantPanel;
