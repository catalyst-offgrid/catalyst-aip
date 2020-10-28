import transportBasemapLayers from './transport-basemap-layers'

import {
  AdminBoundaries,
  Energy,
  Financial,
  Population,
  Public,
  Transport,
} from '../icons'

export default [
  {
    id: 'admin',
    label: 'Administrative Boundaries',
    icon: AdminBoundaries,
    description:
      'Detailed dataset of country administrative both large and small scale.',
    controls: {
      counties: {
        label: 'Counties',
        defaultVisibility: true,
        layerIds: ['counties', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: '',
      },
      'sub-counties': {
        label: 'Sub-Counties',
        defaultVisibility: true,
        layerIds: ['sub-counties'],
        info: '',
      },
      wards: {
        label: 'Wards',
        defaultVisibility: false,
        layerIds: ['wards'],
        info: '',
      },
    },
  },
  {
    id: 'energy',
    label: 'Energy',
    icon: Energy,
    description:
      'Location of mini-grids, transmission lines, fuels & technologies used.',
    controls: {
      gridfinder: {
        label: 'Gridfinder',
        defaultVisibility: true,
        layerIds: ['gridfinder'],
        info: '',
      },
      census: {
        label: 'Census',
        info: '',
        subcontrols: {
          ['Conventional Households']: {
            label: 'Conventional Households',
            defaultVisibility: false,
            layerIds: ['Conventional Households'],
            info: '',
          },
          ['Main Electricity']: {
            label: 'Main Electricity',
            defaultVisibility: true,
            layerIds: ['Main Electricity'],
            info: '',
          },
          ['Low-Quality Stopgap Total']: {
            label: 'Low-Quality Stopgap Total',
            defaultVisibility: false,
            layerIds: ['Low-Quality Stopgap Total'],
            info: '',
          },
          ['Kerosene (Total)']: {
            label: 'Kerosene (Total)',
            defaultVisibility: false,
            layerIds: ['Kerosene (Total)'],
            info: '',
          },
          ['Paraffin Pressure Lamp']: {
            label: 'Paraffin Pressure Lamp',
            defaultVisibility: false,
            layerIds: ['Paraffin Pressure Lamp'],
            info: '',
          },
          ['Paraffin Lantern']: {
            label: 'Paraffin Lantern',
            defaultVisibility: false,
            layerIds: ['Paraffin Lantern'],
            info: '',
          },
          ['Paraffin Tin Lamp']: {
            label: 'Paraffin Tin Lamp',
            defaultVisibility: false,
            layerIds: ['Paraffin Tin Lamp'],
            info: '',
          },
          ['Gas Lamp']: {
            label: 'Gas Lamp',
            defaultVisibility: false,
            layerIds: ['Gas Lamp'],
            info: '',
          },
          ['Wood']: {
            label: 'Wood',
            defaultVisibility: false,
            layerIds: ['Wood'],
            info: '',
          },
          ['Solar (Total)']: {
            label: 'Solar (Total)',
            defaultVisibility: false,
            layerIds: ['Solar (Total)'],
            info: '',
          },
          ['Solar']: {
            label: 'Solar',
            defaultVisibility: false,
            layerIds: ['Solar'],
            info: '',
          },
          ['Torch / Spotlight (Solar-Charged)']: {
            label: 'Torch / Spotlight (Solar-Charged)',
            defaultVisibility: false,
            layerIds: ['Torch / Spotlight (Solar-Charged)'],
            info: '',
          },
          ['Torch / Spotlight (Dry Cells))']: {
            label: 'Torch / Spotlight (Dry Cells))',
            defaultVisibility: false,
            layerIds: ['Torch / Spotlight (Dry Cells))'],
            info: '',
          },
          ['Candle']: {
            label: 'Candle',
            defaultVisibility: false,
            layerIds: ['Candle'],
            info: '',
          },
          ['Battery (Car-Charged)']: {
            label: 'Battery (Car-Charged)',
            defaultVisibility: false,
            layerIds: ['Battery (Car-Charged)'],
            info: '',
          },
          ['Generator (Diesel / Petrol)']: {
            label: 'Generator (Diesel / Petrol)',
            defaultVisibility: false,
            layerIds: ['Generator (Diesel / Petrol)'],
            info: '',
          },
          ['Biogas']: {
            label: 'Biogas',
            defaultVisibility: false,
            layerIds: ['Biogas'],
            info: '',
          },
          ['Not Stated']: {
            label: 'Not Stated',
            defaultVisibility: false,
            layerIds: ['Not Stated'],
            info: '',
          },
          ['Cooking - Electricity']: {
            label: 'Cooking - Electricity',
            defaultVisibility: false,
            layerIds: ['Cooking - Electricity'],
            info: '',
          },
          ['Cooking - Paraffin']: {
            label: 'Cooking - Paraffin',
            defaultVisibility: false,
            layerIds: ['Cooking - Paraffin'],
            info: '',
          },
          ['Cooking - Gas (LPG)']: {
            label: 'Cooking - Gas (LPG)',
            defaultVisibility: false,
            layerIds: ['Cooking - Gas (LPG)'],
            info: '',
          },
          ['Cooking - Biogas']: {
            label: 'Cooking - Biogas',
            defaultVisibility: false,
            layerIds: ['Cooking - Biogas'],
            info: '',
          },
          ['Cooking - Firewood']: {
            label: 'Cooking - Firewood',
            defaultVisibility: false,
            layerIds: ['Cooking - Firewood'],
            info: '',
          },
          ['Cooking - Charcoal']: {
            label: 'Cooking - Charcoal',
            defaultVisibility: false,
            layerIds: ['Cooking - Charcoal'],
            info: '',
          },
          ['Cooking - Solar']: {
            label: 'Cooking - Solar',
            defaultVisibility: false,
            layerIds: ['Cooking - Solar'],
            info: '',
          },
          ['Cooking - Not Stated']: {
            label: 'Cooking - Not Stated',
            defaultVisibility: false,
            layerIds: ['Cooking - Not Stated'],
            info: '',
          },
        },
      },
    },
  },
  {
    id: 'finance',
    label: 'Financial Services',
    icon: Financial,
    description: 'Locations of Banks, Micro-finances and SACCOs.',
    controls: {
      banks: {
        label: 'Banks',
        defaultVisibility: true,
        layerIds: ['banks'],
        info: '',
      },
      mfi: {
        label: 'MFIs',
        defaultVisibility: true,
        layerIds: ['mfi'],
        info: '',
      },
      sacco: {
        label: 'SACCOs',
        defaultVisibility: true,
        layerIds: ['sacco'],
        info: '',
      },
    },
  },
  {
    id: 'population',
    label: 'Population',
    icon: Population,
    description: 'Population density, Night Lights and Mobile Phone Coverage.',
    controls: {
      arc: {
        label: 'Population Density (ARC 2016)',
        defaultVisibility: false,
        layerIds: ['population-density'],
        info: '',
      },
      // 'fb-population': {
      //   label: 'Facebook Population',
      //   defaultVisibility: true,
      //   layerIds: ['fb-population'],
      //   info: '',
      // },
      // nightlights: {
      //   label: 'Night Lights',
      //   defaultVisibility: true,
      //   layerIds: ['night-lights'],
      //   info: '',
      // },
    },
  },
  {
    id: 'facilities',
    label: 'Public facilities',
    icon: Public,
    description:
      'Locations of Schools, Doctors, Hospitals and other Health Institutions.',
    controls: {
      health: {
        label: 'Health Facilities',
        defaultVisibility: false,
        layerIds: ['health'],
        info: '',
      },
      education: {
        label: 'Education Facilities',
        defaultVisibility: false,
        layerIds: ['education'],
        info: '',
      },
    },
  },
  {
    id: 'transport',
    label: 'Transport',
    icon: Transport,
    description: 'Transport networks, roads and routes.',
    controls: {
      road: {
        label: 'Roads',
        defaultVisibility: true,
        layerIds: transportBasemapLayers,
        info: '',
      },
      // rail: {
      //   label: 'Railway',
      //   defaultVisibility: false,
      //   layerIds: ['rail'],
      //   info: '',
      // },
    },
  },
]
