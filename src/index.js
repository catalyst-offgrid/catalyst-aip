import React from 'react'
import { render } from 'react-dom'
import mapbox from 'mapbox-gl'
import App from './app'
import config from './config'

import './base-styles.css'

mapbox.accessToken = config.mapboxAccessToken

render(<App />, document.querySelector('#app'))
