import React, { Component } from 'react';
import './PlantProfile.css';


class PlantProfile extends Component {

  render() {
    const { vegetable } = this.props;
    const veggiePic = "./" + vegetable + ".PNG" ;
    return (
      <div>
          {console.log(vegetable)}
        <a className="textDecorHidden" href="">
            <p>{vegetable}</p>
          <img src={require("./" + vegetable + ".PNG")}/>
        </a>
      </div>
    );
  }
}

export default PlantProfile;
