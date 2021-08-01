import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Explore from './pages/Explore'
import ExploreSelector from './pages/ExploreSelector'
import DatasetSelector from './pages/DatasetSelector'

import Info from './pages/Info'

import config from './config'
import Mtf from './pages/Mtf'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/explore' exact>
          <ExploreSelector
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            imageUrl={config.imageUrl}
            theme={config.theme}
          />
        </Route>
        <Route path='/select' exact>
          <DatasetSelector
            siteAcronym={config.siteAcronym}
            imageUrl={config.imageUrl}
            theme={config.theme}
          />
        </Route>
        <Route path='/select/ke' exact>
          <ExploreSelector
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            imageUrl={config.imageUrl}
            theme={config.theme}
          />
        </Route>
        <Route path='/explore/ug'>
          <Explore
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            config={config.ug}
            theme={config.theme}
          />
        </Route>
        <Route path='/explore/ke'>
          <Explore
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            config={config.ke}
            theme={config.theme}
          />
        </Route>
        <Route path='/explore/sl'>
          <Explore
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            config={config.sl}
            theme={config.theme}
          />
        </Route>
        <Route path='/explore/ng'>
          <Explore
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            config={config.ng}
            theme={config.theme}
          />
        </Route>
        <Route path='/mtf'>
          <Mtf
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            config={config.ke}
            theme={config.theme}
          />
        </Route>
        <Route path='/info'>
          <Info siteAcronym={config.siteAcronym} theme={config.theme} />
        </Route>
        <Route path='/'>
          <Home
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            imageUrl={config.imageUrl}
            theme={config.theme}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
