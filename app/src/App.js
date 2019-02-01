import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './Header.js';
import SideBar from './SideBar.js';
import Container from './Container.js';
import Tweet from './Tweet.js';

// const config = require('../knexfile.js')["development"];
// const knex = require('knex')(config);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Container />
      </div>
    );
  }
}

export default App;
