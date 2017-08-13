import React, { Component } from 'react';

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      playSound: false
    }
  }

  render(){
    return(
      <h1> This is the home page </h1>
    )
  }
}

export default Home;
