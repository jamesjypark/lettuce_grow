import React, { Component } from "react";
import { FAKE_DATA } from "../../Constants/FAKE_DATA";
import './Community.css';
import Button from "../Button/Button";
import MapPanel from "../MapPanel/MapPanel";


class Community extends Component {
  state = {
    zones: FAKE_DATA.regions,
    growers : FAKE_DATA.growers,
    crops : FAKE_DATA.crops,
    tall : false
  }
  toggleTall = () => {
    this.setState(state => ({ tall: !state.tall }));
    window.scrollBy(0, 300);
  };
  render() {
    // const arrayNames = [];
     const nameList = FAKE_DATA.users.map(user=>
       <span className="memberBox">
        {user.name}
      </span>
    );
    if(!this.state.tall) {
      return (
        <div className="communityNav"> <h1> Your Community</h1>
          <p> <b> {this.state.zones} </b> zones,
              <b> {this.state.growers} </b> growers,
              <b> {this.state.crops} </b> crops</p>
          <Button
          className={this.state.tall === "Button" ? "" : "hidden"}
          content="EXPLORE" onClick={this.toggleTall} />
          <MapPanel tall={this.state.tall}/>
        </div>
        );
    } else {
      return (
        <div className="communityNav"> <h1> Your Community</h1>
          <p> <b> {this.state.zones} </b> zones,
              <b> {this.state.growers} </b> growers,
              <b> {this.state.crops} </b> crops</p>
          <MapPanel tall={this.state.tall}/>
        </div>
        );
    }
  }
}


export default Community;
