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
import kecsv from '../../data/Energy/Census/KenyaLighting_Cooking.csv'
import ugcsv from '../../data/Energy/Census/UgandaDataSubregion.csv'

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
    layers: kelayers,
    sources: kesources,
    uicontrols: keuicontrols,
    csv: kecsv,
  },
  ug: {
    country: 'Uganda',
    countryCode: 'ug',
    center: [32.2903, 1.3733],
    zoom: 6,
    layers: uglayers,
    sources: ugsources,
    uicontrols: uguicontrols,
    csv: ugcsv,
  },
  sl: {
    country: 'Sierra Leone',
    countryCode: 'sl',
    center: [11.7799, 8.4606],
    zoom: 6,
    layers: sllayers,
    sources: slsources,
    uicontrols: sluicontrols,
    csv: kecsv,
  },
  theme,
}
