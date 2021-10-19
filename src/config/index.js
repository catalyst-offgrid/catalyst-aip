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

// Nigeria Config
import nglayers from './ng/layers'
import ngsources from './ng/sources'
import nguicontrols from './ng/uicontrols'

import theme from './theme'
import kecsv from '../../data/Energy/Census/KenyaLighting_Cooking.csv'
import ugcsv from '../../data/Energy/Census/UgandaDataSubregion.csv'
import slcsv from '../../data/Energy/Census/SierraLeoneFinal.csv'
import ngcsv from '../../data/Energy/Census/NigeriaData.csv'

if (!process.env.MAPBOX_ACCESS_TOKEN) {
  throw new Error('MAPBOX_ACCESS_TOKEN env var is required')
}

export default {
  mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  siteName: 'Access Insights Platform',
  siteAcronym: 'AIP',
  imageUrl:
    'https://images.squarespace-cdn.com/content/5a0f434de45a7cf4ec600930/1619190575278-E9NAPWZLG5OQK4W02G92/Sunset+VB.jpg',
  ke: {
    country: 'Kenya',
    countryCode: 'ke',
    center: [37.85335, 0.44014],
    zoom: 6,
    layers: kelayers,
    sources: kesources,
    uicontrols: keuicontrols,
    csv: kecsv,
    getDataHref:
      'https://drive.google.com/drive/folders/11DbaXgeQcKbOf-1CqFtvlaK_cgdxN2mC',
  },
  ug: {
    country: 'Uganda',
    countryCode: 'ug',
    center: [32.2903, 1.3733],
    zoom: 7,
    layers: uglayers,
    sources: ugsources,
    uicontrols: uguicontrols,
    csv: ugcsv,
    getDataHref:
      'https://drive.google.com/drive/folders/1Jkx-OUVHMy_aSJfjatvC8utp1L53p3u1',
  },
  sl: {
    country: 'Sierra Leone',
    countryCode: 'sl',
    center: [-11.7799, 8.4606],
    zoom: 7,
    layers: sllayers,
    sources: slsources,
    uicontrols: sluicontrols,
    csv: slcsv,
    getDataHref:
      'https://drive.google.com/drive/folders/1H6ultMOgEs_FJCcRInPGpgNbVbBJtR8p',
  },
  ng: {
    country: 'Nigeria',
    countryCode: 'ng',
    center: [9.072264, 7.491302],
    zoom: 6,
    layers: nglayers,
    sources: ngsources,
    uicontrols: nguicontrols,
    csv: ngcsv,
    getDataHref:
      'https://drive.google.com/drive/folders/1ReLxguK_ruPkzUAENBRBV53XPVZCb_Sw',
  },
  theme,
}
