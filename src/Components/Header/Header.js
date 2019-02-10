import React, { Component } from "react";
import Button from "../Button/Button";
// import "./Header.css";

class Header extends Component {
  state = {};

  render() {
    const { onHeaderSelected } = this.props;
    return (
      <div>
        <h1> Lettuce Grow</h1>
        <Button
          content="community"
          onClick={() => {
            onHeaderSelected("community");
          }}
        />
        <Button 
          content="grow"
          onClick={() => {
            onHeaderSelected("grow");
          }}
        />
        <Button
          content="search"
          onClick={() => {
            onHeaderSelected("search");
          }}
        />
      </div>
    );
  }
}

export default Header;
