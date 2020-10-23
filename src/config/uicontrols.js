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
        layerIds: ['counties'],
      },
      'sub-counties': {
        label: 'Sub-Counties',
        defaultVisibility: true,
        layerIds: ['sub-counties'],
      },
      wards: { label: 'Wards', defaultVisibility: false, layerIds: ['wards'] },
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
      },
      census: {
        label: 'Census',
        subcontrols: {
          ['Conventional Households']: {
            label: 'Conventional Households',
            defaultVisibility: false,
            layerIds: ['Conventional Households'],
          },
          ['Mains Electricity']: {
            label: 'Mains Electricity',
            defaultVisibility: true,
            layerIds: ['Mains Electricity'],
          },
          ['Low-Quality Stopgap Total']: {
            label: 'Low-Quality Stopgap Total',
            defaultVisibility: false,
            layerIds: ['Low-Quality Stopgap Total'],
          },
          ['Kerosene (Total)']: {
            label: 'Kerosene (Total)',
            defaultVisibility: false,
            layerIds: ['Kerosene (Total)'],
          },
          ['Paraffin Pressure Lamp']: {
            label: 'Paraffin Pressure Lamp',
            defaultVisibility: false,
            layerIds: ['Paraffin Pressure Lamp'],
          },
          ['Paraffin Lantern']: {
            label: 'Paraffin Lantern',
            defaultVisibility: false,
            layerIds: ['Paraffin Lantern'],
          },
          ['Paraffin Tin Lamp']: {
            label: 'Paraffin Tin Lamp',
            defaultVisibility: false,
            layerIds: ['Paraffin Tin Lamp'],
          },
          ['Gas Lamp']: {
            label: 'Gas Lamp',
            defaultVisibility: false,
            layerIds: ['Gas Lamp'],
          },
          ['Wood']: {
            label: 'Wood',
            defaultVisibility: false,
            layerIds: ['Wood'],
          },
          ['Solar (Total)']: {
            label: 'Solar (Total)',
            defaultVisibility: false,
            layerIds: ['Solar (Total)'],
          },
          ['Solar']: {
            label: 'Solar',
            defaultVisibility: false,
            layerIds: ['Solar'],
          },
          ['Torch / Spotlight (Solar-Charged)']: {
            label: 'Torch / Spotlight (Solar-Charged)',
            defaultVisibility: false,
            layerIds: ['Torch / Spotlight (Solar-Charged)'],
          },
          ['Torch / Spotlight (Dry Cells))']: {
            label: 'Torch / Spotlight (Dry Cells))',
            defaultVisibility: false,
            layerIds: ['Torch / Spotlight (Dry Cells))'],
          },
          ['Candle']: {
            label: 'Candle',
            defaultVisibility: false,
            layerIds: ['Candle'],
          },
          ['Battery (Car-Charged)']: {
            label: 'Battery (Car-Charged)',
            defaultVisibility: false,
            layerIds: ['Battery (Car-Charged)'],
          },
          ['Generator (Diesel / Petrol)']: {
            label: 'Generator (Diesel / Petrol)',
            defaultVisibility: false,
            layerIds: ['Generator (Diesel / Petrol)'],
          },
          ['Biogas']: {
            label: 'Biogas',
            defaultVisibility: false,
            layerIds: ['Biogas'],
          },
          ['Not Stated']: {
            label: 'Not Stated',
            defaultVisibility: false,
            layerIds: ['Not Stated'],
          },
          ['Cooking - Electricity']: {
            label: 'Cooking - Electricity',
            defaultVisibility: false,
            layerIds: ['Cooking - Electricity'],
          },
          ['Cooking - Paraffin']: {
            label: 'Cooking - Paraffin',
            defaultVisibility: false,
            layerIds: ['Cooking - Paraffin'],
          },
          ['Cooking - Gas (LPG)']: {
            label: 'Cooking - Gas (LPG)',
            defaultVisibility: false,
            layerIds: ['Cooking - Gas (LPG)'],
          },
          ['Cooking - Biogas']: {
            label: 'Cooking - Biogas',
            defaultVisibility: false,
            layerIds: ['Cooking - Biogas'],
          },
          ['Cooking - Firewood']: {
            label: 'Cooking - Firewood',
            defaultVisibility: false,
            layerIds: ['Cooking - Firewood'],
          },
          ['Cooking - Charcoal']: {
            label: 'Cooking - Charcoal',
            defaultVisibility: false,
            layerIds: ['Cooking - Charcoal'],
          },
          ['Cooking - Solar']: {
            label: 'Cooking - Solar',
            defaultVisibility: false,
            layerIds: ['Cooking - Solar'],
          },
          ['Cooking - Not Stated']: {
            label: 'Cooking - Not Stated',
            defaultVisibility: false,
            layerIds: ['Cooking - Not Stated'],
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
    icon: Population,
    description: 'Population density, Night Lights and Mobile Phone Coverage.',
    controls: {
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
    icon: Public,
    description:
      'Locations of Schools, Doctors, Hospitals and other Health Institutions.',
    controls: {
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
    icon: Transport,
    description: 'Transport networks, roads and routes.',
    controls: {
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
