import React, { Component } from 'react';
import './Vegetable.css';


class Vegetable extends Component {

  render() {
    const { vegetable } = this.props;
    return (
      <div>
        <a className="textDecorHidden"> 
            <p>{vegetable}</p>
          <img src={require("../PlantProfile/" + vegetable + ".PNG")}/>
        </a>
      </div>
    );
  }
}

export default Vegetable;
