import React, { Component } from 'react';
import './styles/styles.scss';
import Tweet from './Tweet.js';
// import Icon from '@material-ui/core/Icon';
// import 'font-awesome/css/font-awesome.min.css';

class Container extends Component {

  render() {
    return (
      <nav className='content-feed'>
        <Tweet />
      </nav>
    )
  }
}

export default Container;