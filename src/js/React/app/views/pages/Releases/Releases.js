import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AlbumList from './AlbumList'
import Album from './Album'

const Releases = ({match}) => (
  <Switch>
    <Route exact path={`${match.url}`} component={AlbumList}/>
    <Route path={`${match.url}/:id`} component={Album}/>
  </Switch>
)

export default Releases;
