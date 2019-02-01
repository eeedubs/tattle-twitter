import React, { Component } from 'react';
import './styles/styles.scss';

class Tweet extends Component {

  render() {
    return (
      <div className='tweet-container'>
        <div className='picture-container'>
        </div> 
        <div className='message-container'>
          <div className='tweet-container'>
          </div>
          <div className='like-container'>
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet;