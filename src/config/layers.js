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
    id: 'population-mask',
    source: 'population-mask',
    'source-layer': 'kenya-383p36',
    type: 'fill',
    paint: {
      'fill-color': 'grey',
      'fill-opacity': ['interpolate', ['linear'], ['get', 'pop'], 0, 0, 3, 1],
    },
  },
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
      'circle-opacity': [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        10,
        0,
        11,
        1,
      ],
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
      'icon-opacity': [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        10,
        0,
        11,
        1,
      ],
    },
  },
  {
    id: 'sacco',
    source: 'sacco',
    'source-layer': 'SACCOs-btv3i8',
    type: 'circle',
    paint: {
      'circle-color': '#e8f6fb',
      'circle-opacity': [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        10,
        0,
        11,
        1,
      ],
    },
  },
  {
    id: 'mfi',
    source: 'mfi',
    'source-layer': 'MFIs-00ivvm',
    type: 'circle',
    paint: {
      'circle-color': '#5cc3e8',
      'circle-opacity': [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        10,
        0,
        11,
        1,
      ],
    },
  },
  {
    id: 'banks',
    source: 'banks',
    'source-layer': 'Banks_OSM-dn9mc8',
    type: 'circle',
    paint: {
      'circle-color': '#314855',
      'circle-opacity': [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        9,
        0,
        10,
        1,
      ],
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
      'line-opacity': [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        9,
        0,
        10,
        1,
      ],
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
      'line-opacity': [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        11,
        0,
        12,
        1,
      ],
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
