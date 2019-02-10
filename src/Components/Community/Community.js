import React, { Component } from "react";
import { FAKE_DATA } from "../../Constants/FAKE_DATA";
import './Community.css';
import MapPanel from "../MapPanel/MapPanel";


class Community extends Component {
  state = {
    zones: FAKE_DATA.regions,
    growers : FAKE_DATA.growers,
    crops : FAKE_DATA.crops,
    community: 'Select a Community'
  }

  onCommunitySelected = c => {
    this.setState({
      community: c
    })
  };

  render() {
      return (
        <div>
          <div className="communityNav"> <h1>{this.state.community}</h1>
            <p> <b> {this.state.zones} </b> zones,
                <b> {this.state.growers} </b> growers,
                <b> {this.state.crops} </b> crops</p>
                <h5>The Top Grower is Brandon!</h5>
          </div>
        <MapPanel onCommunitySelected={this.onCommunitySelected}/>
        </div>
        );
  }
}


export default Community;
