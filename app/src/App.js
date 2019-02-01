import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './Header.js';
import SideBar from './SideBar.js';
import Container from './Container.js';

require('dotenv').config();
const PORT = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || 'http://localhost';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      messages: []
    }
  }

  getTweets = () => {
    return new Promise((resolve, reject) => {
      fetch(`${LOCALHOST}:${PORT}/tweets`, {
        method: 'GET',
        headers :{
          "access-control-allow-origin": "localhost",
          "access-control-allow-credentials": "true"
      }
      })
      .then(response => response.json())
      .then((data, error) => {
        if (error){
          throw new Error("Error: ", error);
        } else {
          const response = data;
          const messageArray = [];
          response.forEach(chunk => {
            messageArray.push(chunk)
          })
          resolve(messageArray);
        }
      })
    })
  }

  componentDidMount(){
    this.getTweets().then((data) => {
      this.setState({ messages: data })
      console.log(this.state.messages);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Container 
          messages={this.state.messages}
          />
      </div>
    );
  }
}

export default App;
