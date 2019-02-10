import React, { Component } from 'react';
import './Vegetable.css';


class Vegetable extends Component {

  render() {
    const { vegetable } = this.props;
    return (
      <div className="inline">
        <a className="textDecorHidden img"> 
          <img src={require("../PlantProfile/" + vegetable + ".PNG")}/>
        </a>
        <h2>{vegetable}</h2>
      </div>
    );
  }
}

export default Vegetable;
