import React, { Component } from 'react';
import './styles/styles.scss';
const FontAwesome = require('react-fontawesome');

require('dotenv').config();
const PORT = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || 'http://localhost';

class Tweet extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      key: this.props.key
    };
    this.changeHeart = this.changeHeart.bind(this);
  }

  changeHeart(){
    if (this.state.clicked === true){
      fetch(`${LOCALHOST}:${PORT}/liked/${this.state.key}`, {
        method: 'PUT',
      })
      .then(() => {
        this.setState({ clicked: false })
      })
    } else {
      this.setState({ clicked: true })
    }
  }

  render() {
    return (
      <div className='tweet-container'>
        <div className='picture-container'>
          <img 
            src={this.props.messageContent.image_url} className="tweet-picture"
            alt=""
          />
        </div> 
        <div className='message-container'>
          <div className='tweet-container'>
            <p>{this.props.messageContent.messages}</p>
          </div>
          <div className='like-container'>
            <FontAwesome name='heart' 
            className={(this.state.clicked) ? "like-icon-clicked" : "like-icon-unclicked"}
            onClick={this.changeHeart}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet;