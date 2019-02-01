import React, { Component } from 'react';
import './styles/styles.scss';
const FontAwesome = require('react-fontawesome');

class Header extends Component {

  render() {
    return (
      <nav className='nav-bar'>
        <div className="nav-icon-container">
          <FontAwesome name='twitter' 
            className="nav-icon"
          />
        </div>
        <div className="nav-text-container">
          <p>Header Text</p>
        </div>
      </nav>
    )
  }
}

export default Header;