import React, { Component } from 'react';

class Blog extends Component{
  constructor(props){
    super(props)
    this.state = {
      page: 1
    }
  }

  render(){
    return(
      <h1> This is the blog page </h1>
    )
  }
}

export default Blog;
