import React, { Component } from 'react';
import Button from '../Button/Button';
import './header.css';

class Header extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <h1> Lettuce Grow</h1>
        <Button />
        <Button />
        <Button />  
      </div>
    );
  }
}

export default Header;
