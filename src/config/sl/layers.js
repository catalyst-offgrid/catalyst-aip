import theme from '../theme'
const { colors } = theme
/**
 * A style's layers property lists all the layers available in that style.
 * The type of layer is specified by the "type" property, and must be one
 * of background, fill, line, symbol, raster, circle, fill-extrusion,
 * heatmap, hillshade.
 *
 * Except for layers of the background type, each layer needs to refer to
 * a source. Layers take the data that they get from a source, optionally
 * filter features, and then define how those features are styled.
 *
 * See: https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/
 */
var mobileOpacity = 0.35

export default [
  {
    id: 'counties',
    source: 'counties',
    'source-layer': 'Sierra_Leone_Counties-483pik',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
  {
    id: 'sierra-leone-districts',
    source: 'sierra-leone-districts',
    'source-layer': 'Sierra_Leone_Districts-c34k65',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
  // Health Facilities
  {
    id: 'sierra-leone-hospital',
    source: 'sierra-leone-hospital',
    'source-layer': 'Sierra_Leone_Hospitals-193kwh',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'sierra-leone-clinics',
    source: 'sierra-leone-clinics',
    'source-layer': 'Sierra_Leone_Clinics-c1m1du',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'sierra-leone-dentists',
    source: 'sierra-leone-dentists',
    'source-layer': 'Sierra_Leone_Dentists-9md7qv',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'sierra-leone-pharmacy',
    source: 'sierra-leone-pharmacy',
    'source-layer': 'Sierra_Leone_Pharmacies-cz5yed',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'sierra-leone-doctors',
    source: 'sierra-leone-doctors',
    'source-layer': 'Sierra_Leone_Doctors-br6e0v',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
    },
  },
  {
    id: 'sierra-leone-health-site',
    source: 'sierra-leone-health-site',
    'source-layer': 'Sierra_Leone_Health_Sites-9y95b6',
    type: 'circle',
    paint: {
      'circle-color': colors.accent7,
    },
  },
  // Education Facilities
  {
    id: 'sierra-leone-schools',
    source: 'sierra-leone-schools',
    'source-layer': 'Sierra_Leone_Schools-0nmwd3',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'sierra-leone-college',
    source: 'sierra-leone-college',
    'source-layer': 'Sierra_Leone_College-395h5g',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'sierra-leone-kindergarten',
    source: 'sierra-leone-kindergarten',
    'source-layer': 'Sierra_Leone_Kindergartens-9l00gf',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'sierra-leone-university',
    source: 'sierra-leone-university',
    'source-layer': 'Sierra_Leone_University-5gdunu',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  // Mobile Data
  {
    id: 'sierra-leone-orange-2g',
    source: 'sierra-leone-orange-2g',
    'source-layer': 'Sierra_Leone_Orange_2G-806a2g',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'sierra-leone-orange-3g',
    source: 'sierra-leone-orange-3g',
    'source-layer': 'Sierra_Leone_Orange_3G-bqzs5y',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  // Financial Facilities
  {
    id: 'sierra-leone-banks',
    source: 'sierra-leone-banks',
    'source-layer': 'Sierra_Leone_Banks-0q3a0o',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'sierra-leone-atm',
    source: 'sierra-leone-atm',
    'source-layer': 'Sierra_Leone_ATMs-85myoa',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'sierra-leone-money-exchange',
    source: 'sierra-leone-money-exchange',
    'source-layer': 'Sierra_Leone_Money_Exchange-9zobe8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent7,
    },
  },
  {
    id: 'sierra-leone-post-office',
    source: 'sierra-leone-post-office',
    'source-layer': 'Sierra_Leone_Post_Office-5yeos2',
    type: 'circle',
    paint: {
      'circle-color': colors.accent9,
    },
  },
  // Other
  {
    id: 'sierra-leone-roads',
    source: 'sierra-leone-roads',
    'source-layer': 'Sierra_Leone_Road_Network-62c45g',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-width': 1,
    },
  },
  {
    id: 'sierra-leone-transmission',
    source: 'sierra-leone-transmission',
    'source-layer': 'Sierra_Leone_Transmission_Lin-dyrefu',
    type: 'line',
    paint: {
      'line-color': colors.accent9,
      'line-opacity': 0.3,
    },
  },
  {
    id: 'sierra-leone-minigrid',
    source: 'sierra-leone-minigrid',
    'source-layer': 'Sierra_Leone_Minigrid-4mg3od',
    type: 'circle',
    paint: {
      'circle-color': colors.accent9,
    },
  },
  {
    id: 'sierra-rwi',
    style: 'mapbox://styles/iandmuir/ckplcvz8s3o8d19nphpjg3m33',
    source: 'sierra-rwi',
    'source-layer': 'SLE_RWI-2y0cag',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
]
