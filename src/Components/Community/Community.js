import React, { Component } from "react";
import { FAKE_DATA } from "../../Constants/FAKE_DATA";
import './Community.css';
import Button from "../Button/Button";
import MapPanel from "../MapPanel/MapPanel";


class Community extends Component {
  state = {
    zones: FAKE_DATA.regions,
    growers : FAKE_DATA.growers,
    crops : FAKE_DATA.crops
  }

  render() {
      return (
        <div>
        <div className="communityNav"> <h1> Your Community</h1>
          <p> <b> {this.state.zones} </b> zones,
              <b> {this.state.growers} </b> growers,
              <b> {this.state.crops} </b> crops</p>
        </div>
        
        <MapPanel />
        </div>
        );
  }
}


export default Community;
