import layers from './ke/layers'
import sources from './ke/sources'
import uicontrols from './ke/uicontrols'
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
    layers,
    sources,
    uicontrols,
    csv,
  },
  theme,
}
