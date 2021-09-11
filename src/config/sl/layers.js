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
    id: 'sierra-leone-provinces',
    source: 'sierra-leone-provinces',
    'source-layer': 'sierra-leone-admin-provinces-b0v3z3',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
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
    id: 'sierra-leone-hospitals',
    source: 'sierra-leone-hospitals',
    'source-layer': 'sierra_leone_hospitals-drxwsx',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'sierra-leone-health-centers',
    source: 'sierra-leone-health-centers',
    'source-layer': 'sierra_leone_health_centers-9vjwi1',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'sierra-leone-health-clinics',
    source: 'sierra-leone-health-clinics',
    'source-layer': 'sierra_leone_health_clinics-a21n01',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'sierra-leone-health-posts',
    source: 'sierra-leone-health-posts',
    'source-layer': 'sierra_leone_health_posts-0s3k2i',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  // Education Facilities
  {
    id: 'sierra-leone-schools-other',
    source: 'sierra-leone-schools-other',
    'source-layer': 'sierra_leone_schools_other-adt6yh',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'sierra-leone-primary-schools',
    source: 'sierra-leone-primary-schools',
    'source-layer': 'sierra_leone_primary_schools-6nczpj',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'sierra-leone-colleges',
    source: 'sierra-leone-colleges',
    'source-layer': 'sierra_leone_colleges-5o33n8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'sierra-leone-secondary-schools',
    source: 'sierra-leone-secondary-schools',
    'source-layer': 'sierra_leone_secondary_school-6kors2',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
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
    id: 'sierra-built-areas',
    source: 'sierra-built-areas',
    'source-layer': 'Sierra_Leone_BuiltAreaExtent-7yo0na',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': 0.5,
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
    id: 'sierra-leone-gridfinder',
    source: 'sierra-leone-gridfinder',
    'source-layer': 'Sierra_Leone_Gridfinder-3iwtif',
    type: 'line',
    paint: {
      'line-color': colors.accent1,
      'line-opacity': 0.3,
      'line-width': 3,
    },
  },
  {
    id: 'sierra-population-density',
    source: 'sierra-population-density',
    'source-layer': 'Sierra_Leone_Pop_Density-84xcxp',
    type: 'raster',
    paint: {
      'raster-opacity': 0.5,
    },
  },
  {
    id: 'sierra-leone-minigrids',
    source: 'sierra-leone-minigrids',
    'source-layer': 'Sierra_Leone_Minigrid-4mg3od',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
]

