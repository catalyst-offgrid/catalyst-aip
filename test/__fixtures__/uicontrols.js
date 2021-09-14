export default [
  {
    id: 'admin',
    label: 'Administrative Boundaries',
    icon: () => '',
    description:
      'Detailed dataset of country administrative both large and small scale.',
    controls: [
      {
        id: 'counties',
        label: 'Counties',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['counties', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: '',
      },
      {
        id: 'sub-counties',
        label: 'Sub-Counties',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['sub-counties'],
        info: '',
      },
      {
        id: 'wards',
        label: 'Wards',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['wards'],
        info: '',
      },
    ],
  },
  {
    id: 'energy',
    label: 'Energy',
    icon: () => '',
    description:
      'Location of mini-grids, transmission lines, fuels & technologies used.',
    controls: [
      {
        id: 'lighting',
        label: 'Lighting',
        info: '',
        subcontrols: [
          {
            id: 'Main Electricity', // matches .csv column name
            label: 'Main Electricity',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 50, max: 80 },
              domain: [0, 100],
              unit: '%',
            },
            layerIds: ['Main Electricity'],
            info: '',
          },
          {
            id: 'Low-Quality Stopgap Total', // matches .csv column name
            label: 'Low-Quality Stopgap Total',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 50, max: 80 },
              domain: [0, 80],
              unit: '%',
            },
            layerIds: ['Low-Quality Stopgap Total'],
            info: '',
          },
          {
            id: 'Kerosene (Total)', // matches .csv column name
            label: 'Kerosene (Total)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Kerosene (Total)'],
            info: '',
          },
          {
            id: 'Paraffin Pressure Lamp', // matches .csv column name
            label: 'Paraffin Pressure Lamp',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10 },
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Paraffin Pressure Lamp'],
            info: '',
          },
          {
            id: 'Paraffin Lantern', // matches .csv column name
            label: 'Paraffin Lantern',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Paraffin Lantern'],
            info: '',
          },
          {
            id: 'Paraffin Tin Lamp', // matches .csv column name
            label: 'Paraffin Tin Lamp',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Paraffin Tin Lamp'],
            info: '',
          },
          {
            id: 'Gas Lamp', // matches .csv column name
            label: 'Gas Lamp',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Gas Lamp'],
            info: '',
          },
          {
            id: 'Wood', // matches .csv column name
            label: 'Wood',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Wood'],
            info: '',
          },
          {
            id: 'Solar (Total)', // matches .csv column name
            label: 'Solar (Total)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Solar (Total)'],
            info: '',
          },
          {
            id: 'Solar', // matches .csv column name
            label: 'Solar',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Solar'],
            info: '',
          },
          {
            id: 'Torch / Spotlight (Solar-Charged)', // matches .csv column name
            label: 'Torch / Spotlight (Solar-Charged)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Torch / Spotlight (Solar-Charged)'],
            info: '',
          },
          {
            id: 'Torch / Spotlight (Dry Cells))', // matches .csv column name
            label: 'Torch / Spotlight (Dry Cells))',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Torch / Spotlight (Dry Cells))'],
            info: '',
          },
        ],
      },
      {
        id: 'cooking',
        label: 'Cooking Fuels',
        info: '',
        subcontrols: [
          {
            id: 'Cooking - Electricity', // matches .csv column name
            label: 'Electricity',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Cooking - Electricity'],
            info: '',
          },
          {
            id: 'Cooking - Charcoal', // matches .csv column name
            label: 'Charcoal',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Cooking - Charcoal'],
            info: '',
          },
          {
            id: 'Cooking - Gas (LPG)', // matches .csv column name
            label: 'Gas (LPG)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Cooking - Gas (LPG)'],
            info: '',
          },
          {
            id: 'Cooking - Biogas', // matches .csv column name
            label: 'Biogas',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Cooking - Biogas'],
            info: '',
          },
          {
            id: 'Cooking - Firewood', // matches .csv column name
            label: 'Firewood',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
              unit: '%',
            },
            layerIds: ['Cooking - Firewood'],
            info: '',
          },
        ],
      },

      {
        id: 'grid',
        label: 'Grid Electricity',
        info: '',
        subcontrols: [
          {
            id: 'gridfinder',
            label: 'Gridfinder Map',
            defaultVisibility: false,
            legend: { type: 'line', color: 'orange' },
            layerIds: ['gridfinder'],
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'facilities',
    label: 'Public Facilities and Institutions',
    icon: () => '',
    description:
      'Locations of Financial Services, Schools, Doctors, Hospitals and other Health Institutions.',
    controls: [
      {
        id: 'finance',
        label: 'Financial Services',
        info: '',
        subcontrols: [
          {
            id: 'banks',
            label: 'Banks (OSM)',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#679289' },
            layerIds: ['banks'],
            info: '',
          },
          {
            id: 'mfi',
            label: 'MFIs',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#C8D6AF' },
            layerIds: ['mfi'],
            info: '',
          },
          {
            id: 'sacco',
            label: 'SACCOs',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#1D7874' },
            layerIds: ['sacco'],
            info: '',
          },
        ],
      },
      {
        id: 'health',
        label: 'Health Facilities',
        defaultVisibility: false,
        legend: { type: 'dot', color: '#6A9FB4' },
        layerIds: ['health'],
        info: '',
      },
      {
        id: 'education',
        label: 'Education Facilities',
        defaultVisibility: false,
        legend: { type: 'dot', color: '#DB93B0' },
        layerIds: ['education'],
        info: '',
      },
    ],
  },
  {
    id: 'demographics',
    label: 'Demographics',
    icon: () => '',
    description: 'Population density, Night Lights and Mobile Phone Coverage.',
    controls: [
      // {
      //   id: 'arc',
      //   label: 'Population Density (ARC 2016)',
      //   defaultVisibility: false,
      //   legend: 'none',
      //   layerIds: ['arc-population-density'],
      //   info: '',
      // },
      {
        id: 'fb-population',
        label: 'FB Population Density',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['fb-population-density'],
        info: '',
      },
      // {
      //   id: 'nightlights',
      //   label: 'Night Lights',
      //   defaultVisibility: false,
      //   legend: 'none',
      //   layerIds: ['night-lights'],
      //   info: '',
      // },
    ],
  },
]
