import React, { Component } from 'react';
import './styles/styles.scss';
import Tweet from './Tweet.js';

class Container extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='content-feed'>
      {
        this.props.messages.map((message, index) => {
          return (
            <Tweet
              messageContent={message}
              key={index}
            />
          )
        })
      }
      </div>
    )
  }
}

export default Container;