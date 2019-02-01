import React, { Component } from 'react';
import './styles/styles.scss';
const FontAwesome = require('react-fontawesome');

class Tweet extends Component {

  render() {
    return (
      <div className='tweet-container'>
        <div className='picture-container'>
          <div className='picture-border'>
          </div>
        </div> 
        <div className='message-container'>
          <div className='tweet-container'>
            <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah.
            </p>
          </div>
          <div className='like-container'>
            <FontAwesome name='heart' 
              className="like-icon"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet;