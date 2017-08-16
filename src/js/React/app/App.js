import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Home, Blog, Contact, Releases } from './views/pages'


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <main>
        <div className="universalHeader">
           <img className="universalHeader__logo" src="/images/logo.png" />
           <div id="universalHeader__navbar">
             <Link to="/"> <button> home </button> </Link>
             <Link to="/blog"> <button> blog </button> </Link>
             <Link to="/releases"> <button> releases </button> </Link>
             <Link to="/contact"> <button> contact </button> </Link>
           </div>
        </div>
        <button id="jqueryTest"> Jquery Test </button>

        <Route exact path='/' component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path='/releases' component={Releases} />
      </main>
    )
  }

}

export default App;
