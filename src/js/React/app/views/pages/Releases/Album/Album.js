import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Album extends Component{
  constructor(props){
    super(props)
    this.state = {
      playSound: false
    }
  }

  render(){
    return(
      <div className="album">
        <Link to="/releases"> <button> Back </button> </Link>
        <h1> This is an Album </h1>
      </div>
    )
  }
}

export default Album;
