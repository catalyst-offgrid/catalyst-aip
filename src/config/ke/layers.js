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
    id: 'education',
    source: 'education',
    'source-layer': 'Education_Facilities-6v7pmw',
    type: 'circle',
    paint: {
      'circle-color': '#DB93B0',
    },
  },
  {
    id: 'health',
    source: 'health',
    'source-layer': 'Health_Facilities-2yj576',
    type: 'circle',
    paint: {
      'circle-color': '#6A9FB4',
    },
  },
  {
    id: 'sacco',
    source: 'sacco',
    'source-layer': 'SACCOs-btv3i8',
    type: 'circle',
    paint: {
      'circle-color': '#1D7874',
    },
  },
  {
    id: 'mfi',
    source: 'mfi',
    'source-layer': 'MFIs-00ivvm',
    type: 'circle',
    paint: {
      'circle-color': '#C8D6AF',
    },
  },
  {
    id: 'banks',
    source: 'banks',
    'source-layer': 'Banks_OSM-dn9mc8',
    type: 'circle',
    paint: {
      'circle-color': '#679289',
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
