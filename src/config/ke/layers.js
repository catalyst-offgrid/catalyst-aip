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

export default [
  {
    id: 'arc-population-density',
    source: 'population',
    'source-layer': 'Kenya_Population_Density_ARC_-90y1wi',
    type: 'raster',
    paint: {
      'raster-opacity': 0.5,
    },
  },
  {
    id: 'fb-population-density',
    source: 'fb-population',
    'source-layer': 'tif6-1z4g21',
    type: 'raster',
    paint: {
      'raster-opacity': 0.5,
    },
  },
  {
    id: 'compress',
    source: 'compress',
    'source-layer': 'compress-7pv3v4',
    type: 'raster',
    paint: {
      'raster-opacity': 0.5,
    },
  },
  {
    id: 'education',
    source: 'education',
    'source-layer': 'Education_Facilities-6v7pmw',
    type: 'circle',
    paint: {
      'circle-color': colors.charmpink,
    },
  },
  {
    id: 'health_type4',
    source: 'health_type4',
    'source-layer': 'Kenya_Health_Type4-3fxfr8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'health_type3',
    source: 'health_type3',
    'source-layer': 'Kenya_Health_Type3-0api8i',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'health_type2',
    source: 'health_type2',
    'source-layer': 'Kenya_Health_Type2-2bis9f',
    type: 'circle',
    paint: {
      'circle-color': colors.accent7,
    },
  },
  {
    id: 'health_type1',
    source: 'health_type1',
    'source-layer': 'Kenya_Health_Type1-81jhng',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'sacco',
    source: 'sacco',
    'source-layer': 'SACCOs-btv3i8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'mfi',
    source: 'mfi',
    'source-layer': 'MFIs-00ivvm',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
    },
  },
  {
    id: 'banks',
    source: 'banks',
    'source-layer': 'Banks_OSM-dn9mc8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'sub-counties',
    source: 'sub-counties',
    'source-layer': 'Sub-Counties_290-0f84my',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-dasharray': [5, 3],
      'line-width': 1,
    },
  },
  {
    id: 'wards',
    source: 'wards',
    'source-layer': 'Wards_1450-60annj',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-dasharray': [5, 3],
      'line-width': 1,
    },
  },
  {
    id: 'gridfinder',
    source: 'gridfinder',
    'source-layer': 'gridfinder_kenya_sample-avd4fk',
    type: 'line',
    paint: {
      'line-color': colors.highlight,
    },
  },
  {
    id: 'transmission_lines_11kv',
    source: 'transmission_lines_11kv',
    'source-layer': 'Transmission_Lines_11KV_RePro-br4ylm',
    type: 'line',
    paint: {
      'line-color': colors.highlight,
    },
  },
  {
    id: 'transmission_lines_66kv',
    source: 'transmission_lines_66kv',
    'source-layer': 'Transmission_Lines_66KV_Repro-6e0r2m',
    type: 'line',
    paint: {
      'line-color': colors.highlight,
    },
  },
  {
    id: 'transmission_lines_220kv',
    source: 'transmission_lines_220kv',
    'source-layer': 'Transmission_Lines_220KV_Repr-4sai37',
    type: 'line',
    paint: {
      'line-color': colors.highlight,
    },
  },
  {
    id: 'mini-grids_under_development',
    source: 'mini-grids_under_development',
    'source-layer': 'Mini-Grids_Under_Development_-7tdfio',
    type: 'circle',
    paint: {
      'circle-color': colors.highlight,
    },
  },
  {
    id: 'existing_mini-grids',
    source: 'existing_mini-grids',
    'source-layer': 'Existing_Mini-Grids_Reproject-7inrxo',
    type: 'circle',
    paint: {
      'circle-color': colors.highlight,
    },
  },
  {
    id: 'proposed_kosap_mini-grids',
    source: 'proposed_kosap_mini-grids',
    'source-layer': 'Proposed_KOSAP_Mini-Grids_Rep-74ct1d',
    type: 'circle',
    paint: {
      'circle-color': colors.highlight,
    },
  },
  {
    id: 'counties',
    source: 'counties',
    'source-layer': 'Counties_47_-_Coded-1htj4o',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-width': 2,
    },
  },
]
