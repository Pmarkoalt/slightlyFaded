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
      <div className="blog">
        <h1> This is the blog page </h1>
        <img style={{height: 200, width: 200}} src="/images/test.jpg" />
      </div>
    )
  }
}

export default Blog;
