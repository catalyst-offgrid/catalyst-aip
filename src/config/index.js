// Kenya Config
import kelayers from './ke/layers'
import kesources from './ke/sources'
import keuicontrols from './ke/uicontrols'

// Sierra Leone Config
import sllayers from './sl/layers'
import slsources from './sl/sources'
import sluicontrols from './sl/uicontrols'

// Uganda Config
import uglayers from './ug/layers'
import ugsources from './ug/sources'
import uguicontrols from './ug/uicontrols'

import theme from './theme'
import csv from '../../data/Energy/Census/KenyaLighting_Cooking.csv'

if (!process.env.MAPBOX_ACCESS_TOKEN) {
  throw new Error('MAPBOX_ACCESS_TOKEN env var is required')
}

export default {
  mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  siteName: 'Access Insights Platform',
  siteAcronym: 'AIP',
  imageUrl:
    'https://lh3.googleusercontent.com/oBj0pG4JQ4Nlx6F1VXsIA1iGYWRwYlmjNwDmKP-NyaUtkALATIkVEeRvJuzWWe_gZPDFOnBaeW0ZkgK7-aWo1l6Voxc3N9jDmP1i6scMqecWek-OoUj8SoNbBGDcVnHzjBd-TLo4=w2400',
  ke: {
    country: 'Kenya',
    countryCode: 'ke',
    center: [37.85335, 0.44014],
    zoom: 6,
    kelayers,
    kesources,
    keuicontrols,
    csv,
  },
  ug: {
    country: 'Uganda',
    countryCode: 'ug',
    center: [37.85335, 0.44014],
    zoom: 6,
    uglayers,
    ugsources,
    uguicontrols,
    csv,
  },
  sl: {
    country: 'Sierra Leone',
    countryCode: 'sl',
    center: [37.85335, 0.44014],
    zoom: 6,
    sllayers,
    slsources,
    sluicontrols,
    csv,
  },
  theme,
}
