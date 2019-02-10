import React, { Component } from 'react';
import 'plantPanel.css';
import './App.css';

class PlantPanel extends Component {
  state = {
    vegetable: "vegetable",
    
  }
  
  render() {
    return (
      <div>
        <a>
          <img src={this.state.vegetable}></img>
        </a>
      </div>
    );
  }
}

export default PlantPanel;
