import React, { Component } from 'react';
import PlantProfile from '../PlantProfile/PlantProfile';
import './PlantPanel.css';
import Vegetable from '../Vegetable/Vegetable';

class PlantPanel extends Component {
  state = {
    Tomato: false,
    Potato: false,
    Broccoli: false,
    Spinach: false,
    isVeggie: false,
  }
  render() {
  const vegetable = ["Tomato", "Potato", "Broccoli", "Spinach"]
  const goToVeggie = () =>{this.setState({Tomato: false,
                                          Potato: false,
                                          Broccoli: false,
                                          Spinach: false,
                                          isVeggie: false,})};
  const goToVeggie1 = v => {
    if (v === vegetable[0]) {
      console.log(vegetable[0])
      this.setState({isVeggie: true,
        Tomato: true,
        Potato: false,
        Broccoli: false,
        Spinach: false,})
    } else if (v === vegetable[1]) {
      console.log(vegetable[1])
      this.setState({isVeggie: !this.state.isVeggie,
                    Tomato: false,
                    Potato: true,
                    Broccoli: false,
                    Spinach: false,})
    } else if (v === vegetable[2]) {
      console.log(vegetable[2])
      this.setState({isVeggie: !this.state.isVeggie,
        Tomato: false,
        Potato: false,
        Broccoli: true,
        Spinach: false,})
    } else if (v === vegetable[3]) {
      console.log(vegetable[3])
      this.setState({isVeggie: !this.state.isVeggie,
        Tomato: false,
        Potato: false,
        Broccoli: false,
        Spinach: true,})
    };
  }
    return (
      <div className="parents">
        {vegetable.map(v=>(
          <div>
          <div onClick={()=>{goToVeggie()}} className={this.state[v] ? "visible" : "hidden"} >
                    <Vegetable vegetable={v} />
                    </div>
                <div onClick={()=>{goToVeggie1(v)}}
                 className={!this.state.isVeggie ? "visible" : "hidden"}>
              <PlantProfile  vegetable={v}/>
            </div>
          </div>
        )
        )}
        
    
      </div>
    );
  }
}

export default PlantPanel;
