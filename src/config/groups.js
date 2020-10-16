import transportBasemapLayers from './transport-basemap-layers'

export default [
  {
    id: 'admin',
    label: 'Administrative Boundaries',
    sub: {
      counties: {
        label: 'Counties',
        defaultVisibility: true,
        layerIds: ['counties'],
      },
      'sub-counties': {
        label: 'Sub-Counties',
        defaultVisibility: true,
        layerIds: ['sub-counties'],
      },
      wards: { label: 'Wards', defaultVisibility: false, layerIds: ['wards'] },
    },
    // icon: ''
  },
  {
    id: 'energy',
    label: 'Energy',
    sub: {
      gridfinder: {
        label: 'Gridfinder',
        defaultVisibility: true,
        layerIds: ['gridfinder'],
      },
      census: {
        label: 'Census',
        defaultVisibility: true,
        layerIds: ['csv-layer'],
      },
    },
  },
  {
    id: 'finance',
    label: 'Financial Services',
    sub: {
      banks: {
        label: 'Banks',
        defaultVisibility: true,
        layerIds: ['banks'],
      },
      mfi: {
        label: 'MFIs',
        defaultVisibility: true,
        layerIds: ['mfi'],
      },
      sacco: {
        label: 'SACCOs',
        defaultVisibility: true,
        layerIds: ['sacco'],
      },
    },
  },
  {
    id: 'population',
    label: 'Population',
    sub: {
      arc: {
        label: 'Population Density (ARC 2016)',
        defaultVisibility: false,
        layerIds: ['population-density'],
      },
      // 'fb-population': {
      //   label: 'Facebook Population',
      //   defaultVisibility: true,
      //   layerIds: ['fb-population'],
      // },
      // nightlights: {
      //   label: 'Night Lights',
      //   defaultVisibility: true,
      //   layerIds: ['night-lights'],
      // },
    },
  },
  {
    id: 'facilities',
    label: 'Public facilities',
    sub: {
      health: {
        label: 'Health Facilities',
        defaultVisibility: false,
        layerIds: ['health'],
      },
      education: {
        label: 'Education Facilities',
        defaultVisibility: false,
        layerIds: ['education'],
      },
    },
  },
  {
    id: 'transport',
    label: 'Transport',
    sub: {
      road: {
        label: 'Roads',
        defaultVisibility: true,
        layerIds: transportBasemapLayers,
      },
      // rail: {
      //   label: 'Railway',
      //   defaultVisibility: false,
      //   layerIds: ['rail'],
      // },
    },
  },
]
