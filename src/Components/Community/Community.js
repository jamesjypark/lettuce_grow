import React, { Component } from "react";
import { FAKE_DATA } from "../../Constants/FAKE_DATA";
import './Community.css';
import MapPanel from "../MapPanel/MapPanel";


class Community extends Component {
  state = {
    zones: FAKE_DATA.regions,
    growers : FAKE_DATA.growers,
    crops : FAKE_DATA.crops,
    community: 'find your community'
  }

  onCommunitySelected = c => {
    this.setState({
      community: c
    })
  };

  render() {
      return (
        <div>
          <div className="communityNav"> <p className="community_title">{this.state.community + "."}</p>
            <p> <b> {this.state.zones} </b> zones,
                <b> {this.state.growers} </b> growers,
                <b> {this.state.crops} </b> crops</p>
                <p className="community_instr">Browse communities by clicking on one of the blue markers on the map.</p>
          </div>
        <MapPanel onCommunitySelected={this.onCommunitySelected}/>
        </div>
        );
  }
}


export default Community;
