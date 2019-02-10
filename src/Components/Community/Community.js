import React, { Component } from "react";
import { FAKE_DATA } from "../../Constants/FAKE_DATA";
import './Community.css';
import Button from "../Button/Button";


class Community extends Component {
  state = {
    zones: FAKE_DATA.regions,
    growers : FAKE_DATA.growers,
    crops : FAKE_DATA.crops
  }
  render() {
    const arrayNames = [];
    // const nameList = FAKE_DATA.users.map(user=>{arrayNames.push(user.name)})
// //         {listItems.users.map(name=>(<div>{name}</div>))}
 const nameList = FAKE_DATA.users.map(user=>
   <div>
    {user.name}
  </div>
);

    return (
      <div className="communityNav"> <h1> Your Community</h1>
        <div>Zones: {this.state.zones}
        | Farmers: {this.state.growers}
        | Crops: {this.state.crops}</div>
        //Members: {nameList}
        <Button content="EXPLORE"/>
      </div>
      );
  }
}

export default Community;
