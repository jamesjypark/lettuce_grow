import React, { Component } from "react";
import { FAKE_DATA } from "../../Constants/FAKE_DATA";

class Community extends Component {
  state = {
    zones: FAKE_DATA.regions,
    growers : FAKE_DATA.growers,
    crops : FAKE_DATA.crops
  }
  render() {
    return (
      <div> Your Community
        <div>Zones: {this.state.zones}
        | Farmers: {this.state.growers}
        | Crops: {this.state.crops}</div>
      </div>
    );
  }
}

export default Community;
