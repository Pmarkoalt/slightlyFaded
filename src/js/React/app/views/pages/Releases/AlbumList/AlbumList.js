import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AlbumList extends Component{
  constructor(props){
    super(props)
    this.state = {
      playSound: false
    }
  }

  render(){
    return(
      <div className="albumList">
        <h1> These are the Albums </h1>
        <Link to="/releases/album1"> <button> Album1 </button> </Link>
        <Link to="/releases/album2"> <button> Album2 </button> </Link>
      </div>
    )
  }
}

export default AlbumList;
