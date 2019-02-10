import React, { Component } from "react";
import { FAKE_DATA } from "../../Constants/FAKE_DATA";

class Community extends Component {
  state = {
    zones: FAKE_DATA.regions,
    growers : FAKE_DATA.growers,
    crops : FAKE_DATA.crops
  }
  render() {
//     const arrayNames = [];
//     const nameList = FAKE_DATA.users.map(user.name=>{arrayNames.push(user.name)})
// //         {listItems.users.map(name=>(<div>{name}</div>))}

    return (
      <div> Your Community
        <div>Zones: {this.state.zones}
        | Farmers: {this.state.growers}
        | Crops: {this.state.crops}</div>
        {FAKE_DATA.users[0].name}
      </div>
      );
  }
}

export default Community;
