import React, { Component } from "react";
import Button from "../Button/Button";

import logo from "../../Constants/logo.png";
import "./Header.css";

class Header extends Component {
  state = {};

  render() {
    const { onHeaderSelected } = this.props;
    return (
      <div className="Header">
        <div id="logo">
          <div id="top">lettuce</div>
          <div id="bottom">grow</div>
        </div>
        <div className="HeaderItem">
          <Button
            content="community"
            onClick={() => {
              onHeaderSelected("community");
            }}
          />
        </div>
        <div className="HeaderItem">
          <Button
            content="grow"
            onClick={() => {
              onHeaderSelected("grow");
            }}
          />
        </div>
        <div className="HeaderItem">
          <Button
            content="search"
            onClick={() => {
              onHeaderSelected("search");
            }}
          />
        </div>
      </div>
    );
  }
}

export default Header;
