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
    id: 'population-density',
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
      'circle-color': '#79ceb8',
    },
  },
  {
    id: 'health',
    source: 'health',
    'source-layer': 'Health_Facilities-2yj576',
    type: 'symbol',
    layout: {
      'icon-image': 'hospital-11',
    },
    paint: {
      'icon-color': '#e53238',
    },
  },
  {
    id: 'sacco',
    source: 'sacco',
    'source-layer': 'SACCOs-btv3i8',
    type: 'circle',
    paint: {
      'circle-color': '#e8f6fb',
    },
  },
  {
    id: 'mfi',
    source: 'mfi',
    'source-layer': 'MFIs-00ivvm',
    type: 'circle',
    paint: {
      'circle-color': '#5cc3e8',
    },
  },
  {
    id: 'banks',
    source: 'banks',
    'source-layer': 'Banks_OSM-dn9mc8',
    type: 'circle',
    paint: {
      'circle-color': '#314855',
    },
  },
  {
    id: 'sub-counties',
    source: 'sub-counties',
    'source-layer': 'Sub-Counties_290-0f84my',
    type: 'line',
    paint: {
      'line-color': '#8F3A84',
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
      'line-color': '#8F3A84',
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
      'line-color': 'orange',
    },
  },
  {
    id: 'counties',
    source: 'counties',
    'source-layer': 'Counties_47_-_Coded-1htj4o',
    type: 'line',
    paint: {
      'line-color': '#8F3A84',
      'line-opacity': 0.3,
      'line-width': 3,
    },
  },
]
