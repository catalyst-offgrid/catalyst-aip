import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Explore from './pages/Explore'
import Info from './pages/Info'

import config from './config'

export default function App() {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/explore'>
          <Explore config={config} />
        </Route>
        <Route path='/info'>
          <Info config={config} />
        </Route>
        <Route path='/'>
          <Home config={config} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
