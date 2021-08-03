import {
  AdminBoundaries,
  Energy,
  Population,
  Public,
  Health,
  //Placeholder,
  Mobile,
  EconHealth,
  HHAsset,
  EconAct,
} from '../../icons'
import theme from '../theme'
const { colors } = theme

export default [
  {
    id: 'admin',
    label: 'Administrative Boundaries',
    icon: AdminBoundaries,
    description: '',
    info: 'Administrative boundaries from the Government of Uganda.',
    controls: [
      //{
        //id: 'uganda-borders', // Was uganda-borders
        //label: 'Borders',
        //defaultVisibility: false,
        //legend: 'none',
        //layerIds: ['uganda-borders'],
        //info: 'Country boundaries',
      //},
      {
        id: 'sierra-leone-districts',
        label: 'Districts',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['sierra-leone-districts'],
        info: '',
      },
      {
        id: 'counties',
        label: 'Chiefdoms',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['counties'],
        info: 'Sub regions',
      },
    ],
  },
  {
    id: 'energy',
    label: 'Energy',
    icon: Energy,
    description: '',
    info: 'Information on Energy Sources.',
    controls: [
      {
        id: 'lighting',
        label: 'Lighting',
        info: '',
        subcontrols: [
          {
            id: 'Kerosene - Lighting', // matches .csv column name
            label: 'Kerosene',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5},
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Kerosene - Lighting'],
            info: '',
          },
          {
            id: 'Gas - Lighting', // matches .csv column name
            label: 'Gas',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Gas - Lighting'],
            info: '',
          },
          {
            id: 'EDSA - Lighting', // matches .csv column name
            label: 'EDSA',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 82},
              domain: [0, 82],
              unit: '%',
            },
            layerIds: ['EDSA - Lighting'],
            info: '',
          },
          {
            id: 'Generator - Lighting', // matches .csv column name
            label: 'Generator',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Generator - Lighting'],
            info: '',
          },
          {
            id: 'Solar Panel- Lighting', // matches .csv column name
            label: 'Solar Panel',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20},
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Solar Panel- Lighting'],
            info: '',
          },
          {
            id: 'Battery - Lighting', // matches .csv column name
            label: 'Battery',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 95},
              domain: [0, 95],
              unit: '%',
            },
            layerIds: ['Battery - Lighting'],
            info: '',
          },
          {
            id: 'Candles - Lighting', // matches .csv column name
            label: 'Candles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Candles - Lighting'],
            info: '',
          },
          {
            id: 'Firewood - Lighting', // matches .csv column name
            label: 'Firewood',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Firewood - Lighting'],
            info: '',
          },
          {
            id: 'Other - Lighting', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2},
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Other - Lighting'],
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
            id: 'Firewood - Cooking', // matches .csv column name
            label: 'Firewood',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 99},
              domain: [0, 99],
              unit: '%',
            },
            layerIds: ['Firewood - Cooking'],
            info: '',
          },
          {
            id: 'Kerosene - Cooking', // matches .csv column name
            label: 'Kerosene',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Kerosene - Cooking'],
            info: '',
          },
          {
            id: 'Gas - Cooking', // matches .csv column name
            label: 'Gas',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2},
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Gas - Cooking'],
            info: '',
          },
          {
            id: 'Saw Dust/Crop Residue - Cooking', // matches .csv column name
            label: 'Saw Dust/Crop Residue',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Saw Dust/Crop Residue - Cooking'],
            info: '',
          },
          {
            id: 'Animal Waste - Cooking', // matches .csv column name
            label: 'Animal Waste',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Animal Waste - Cooking'],
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
            id: 'sierra-leone-transmission',
            label: 'Transmission Lines',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent9 },
            layerIds: ['sierra-leone-transmission'],
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'facilities',
    label: 'Institutions and Services',
    icon: Public,
    description: '',
    info:
      'Locations of Financial Services, Schools, Doctors, Hospitals and other Health Institutions.',
    controls: [
      {
        id: 'finance',
        label: 'Financial Services',
        info: 'Locations of Banks, Micro-finances and SACCOs.',
        subcontrols: [
          {
            id: 'sierra-leone-banks',
            label: 'Banks',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['sierra-leone-banks'],
            info: '',
          },
          {
            id: 'sierra-leone-atm',
            label: 'ATM',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['sierra-leone-atm'],
            info: '',
          },
          {
            id: 'sierra-leone-money-exchange',
            label: 'Microfinance',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent7 },
            layerIds: ['sierra-leone-money-exchange'],
            info: '',
          },
          {
            id: 'sierra-leone-post-office',
            label: 'Post Office',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent9 },
            layerIds: ['sierra-leone-post-office'],
            info: '',
          },
        ],
      },
      {
        id: 'healthFacs',
        label: 'Health Facilities',
        info:
          'Displays the locations of the health facilities in Kenya by the facility type.',
        subcontrols: [
          {
            id: 'sierra-leone-hospital',
            label: 'Hospitals',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['sierra-leone-hospital'],
            info: '',
          },
          {
            id: 'sierra-leone-clinics',
            label: 'Clinics',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['sierra-leone-clinics'],
            info: '',
          },
          {
            id: 'sierra-leone-dentists',
            label: 'Dentist',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['sierra-leone-dentists'],
            info: '',
          },
          {
            id: 'sierra-leone-pharmacy',
            label: 'Pharmacy',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['sierra-leone-pharmacy'],
            info: '',
          },
          {
            id: 'sierra-leone-doctors',
            label: 'Doctors',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent6 },
            layerIds: ['sierra-leone-doctors'],
            info: '',
          },
        ],
      },
      {
        id: 'education',
        label: 'Education Facilities',
        info:
          'Displays the locations of the education facilities in Kenya by the facility type.',
        subcontrols: [
          {
            id: 'sierra-leone-college',
            label: 'Colleges',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['sierra-leone-college'],
            info: '',
          },
          {
            id: 'sierra-leone-schools',
            label: 'Schools',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['sierra-leone-schools'],
            info: '',
          },
          {
            id: 'sierra-leone-kindergarten',
            label: 'Kindergarten',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['sierra-leone-kindergarten'],
            info: '',
          },
          {
            id: 'sierra-leone-university',
            label: 'University',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['sierra-leone-university'],
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'demographics',
    label: 'Population & Demographics',
    icon: Population,
    description: '',
    info: 'Population density, demographic statistics and Night Lights.',
    controls: [
      {
        id: 'population',
        label: 'Population',
        info: '',
        subcontrols: [
          {
            id: 'sierra-population-density',
            label: 'Population Density',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['sierra-population-density'],
            info: '',
          },
        ],
      },
      {
        id: 'ageRanges',
        label: 'Age Ranges',
        info: 'Breakdown of the regions by the age of their population.',
        subcontrols: [
          // Add layers here
          {
            id: '0-19', // matches .csv column name
            label: '0-19',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 99},
              domain: [0, 99],
              unit: '%',
            },
            layerIds: ['0-19'],
            info: '',
          },
          {
            id: '20-64', // matches .csv column name
            label: '20-64',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 69},
              domain: [0, 69],
              unit: '%',
            },
            layerIds: ['20-64'],
            info: '',
          },
          {
            id: '65+', // matches .csv column name
            label: '65+',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 6},
              domain: [0, 6],
              unit: '%',
            },
            layerIds: ['65+'],
            info: '',
          },
        ],
      },
      {
        id: 'householdChar',
        label: 'Household Characteristics',
        info:
          'Descriptive statistics of the households located in each region.',
        subcontrols: [
          {
            id: 'Total Households', // matches .csv column name
            label: 'Total Households',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 250000},
              domain: [0, 250000],
              unit: '',
            },
            layerIds: ['Total Households'],
            info: '',
          },
          {
            id: 'Average Household Size', // matches .csv column name
            label: 'Average Household Size',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 8},
              domain: [0, 8],
              unit: '',
            },
            layerIds: ['Average Household Size'],
            info: '',
          },
        ],
      },
      {
        id: 'urbanrural',
        label: 'Urban & Rural',
        info:
          'Breakdown of population by environment.',
        subcontrols: [
          {
            id: 'Percent Rural', // matches .csv column name
            label: 'Percent Rural',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 93},
              domain: [0, 93],
              unit: '%',
            },
            layerIds: ['Percent Rural'],
            info: '',
          },
          {
            id: 'Percent Urban', // matches .csv column name
            label: 'Percent Urban',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 100},
              domain: [0, 100],
              unit: '%',
            },
            layerIds: ['Percent Urban'],
            info: '',
          },
        ],
      },
      // {
      // id: 'compress',
      // label: 'Night Lights',
      // defaultVisibility: false,
      // legend: 'none',
      // layerIds: ['compress'],
      // info: '',
      // },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    icon: Public,
    description: '',
    info:
      '',
    controls: [
      {
        id: 'sierra-leone-roads',
        label: 'Road Network',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['sierra-leone-roads'],
        info: '',
      },
      {
        id: 'sierra-built-areas',
        label: 'Extent of Built-Up Areas',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['sierra-built-areas'],
        info: '',
      },
    ]
  },
  {
    id: 'mobileData',
    label: 'Mobile Coverage',
    icon: Mobile,
    description: '',
    info: 'Mobile Coverage Data © Collins Bartholomew and GSMA 2020',
    controls: [
      {
        id: 'Orange',
        label: 'Orange',
        info: 'Coverage on the Orange Network.',
        subcontrols: [
          {
            id: 'sierra-leone-orange-2g',
            label: 'Africell 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['sierra-leone-orange-2g'],
            info: '',
          },
          {
            id: 'sierra-leone-orange-3g',
            label: 'Africell 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['sierra-leone-orange-3g'],
            info: '',
          },
        ]
      },
    ],
  },
  {
    id: 'health',
    label: 'Health',
    icon: Health,
    description: '',
    info: 'Explores access to services that impact health and health outcomes.',
    controls: [
      {
        id: 'wasteDisposal',
        label: 'Mode of Human Waste Disposal',
        info: '',
        subcontrols: [
          {
            id: 'Piped Sewer System - Toilet', // matches .csv column name
            label: 'Piped Sewer System',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 7},
              domain: [0, 7],
              unit: '%',
            },
            layerIds: ['Piped Sewer System - Toilet'],
            info: '',
          },
          {
            id: 'Septic Tank - Toilet', // matches .csv column name
            label: 'Septic Tank',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 21},
              domain: [0, 21],
              unit: '%',
            },
            layerIds: ['Septic Tank - Toilet'],
            info: '',
          },
          {
            id: 'Pit Latrine - Toilet', // matches .csv column name
            label: 'Pit Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 14},
              domain: [0, 14],
              unit: '%',
            },
            layerIds: ['Pit Latrine - Toilet'],
            info: '',
          },
          {
            id: 'Flush Elsewhere - Toilet', // matches .csv column name
            label: 'Flush',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Flush Elsewhere - Toilet'],
            info: '',
          },
          {
            id: 'Ventilated Improved Pit Latrine (VIP) - Toilet', // matches .csv column name
            label: 'VIP Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10},
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Ventilated Improved Pit Latrine (VIP) - Toilet'],
            info: '',
          },
          {
            id: 'Pit Latrine with Slab - Toilet', // matches .csv column name
            label: 'Pit Latrine with Slab',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 63},
              domain: [0, 63],
              unit: '%',
            },
            layerIds: ['Pit Latrine with Slab - Toilet'],
            info: '',
          },
          {
            id: 'Open Pit Latrine - Toilet', // matches .csv column name
            label: 'Open Pit Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 46},
              domain: [0, 46],
              unit: '%',
            },
            layerIds: ['Open Pit Latrine - Toilet'],
            info: '',
          },
          {
            id: 'Composting Toilet - Toilet', // matches .csv column name
            label: 'Composting Toilet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 12},
              domain: [0, 12],
              unit: '%',
            },
            layerIds: ['Composting Toilet - Toilet'],
            info: '',
          },
          {
            id: 'Hanging Toilet - Toilet', // matches .csv column name
            label: 'Hanging Toilet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 24},
              domain: [0, 24],
              unit: '%',
            },
            layerIds: ['Hanging Toilet - Toilet'],
            info: '',
          },
          {
            id: 'No Facility - Toilet', // matches .csv column name
            label: 'No Facility',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60},
              domain: [0, 60],
              unit: '%',
            },
            layerIds: ['No Facility - Toilet'],
            info: '',
          },
          {
            id: 'Other - Toilet', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Other - Toilet'],
            info: '',
          },
        ],
      },
      {
        id: 'drinkingWater',
        label: 'Source of Drinking Water',
        info: '',
        subcontrols: [
          // Add layers here
          {
            id: 'Piped', // matches .csv column name
            label: 'Piped Source',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 48},
              domain: [0, 48],
              unit: '%',
            },
            layerIds: ['Piped'],
            info: '',
          },
          {
            id: 'Tube Well', // matches .csv column name
            label: 'Tube Well',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 41},
              domain: [0, 41],
              unit: '%',
            },
            layerIds: ['Tube Well'],
            info: '',
          },
          {
            id: 'Protected Dug Well', // matches .csv column name
            label: 'Protected Dug Well',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 31},
              domain: [0, 31],
              unit: '%',
            },
            layerIds: ['Protected Dug Well'],
            info: '',
          },
          {
            id: 'Unprotected Dug Well', // matches .csv column name
            label: 'Unprotected Dug Well',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 35},
              domain: [0, 35],
              unit: '%',
            },
            layerIds: ['Unprotected Dug Well'],
            info: '',
          },
          {
            id: 'Protected Spring', // matches .csv column name
            label: 'Protected Spring',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 8},
              domain: [0, 8],
              unit: '%',
            },
            layerIds: ['Protected Spring'],
            info: '',
          },
          {
            id: 'Unprotected Spring', // matches .csv column name
            label: 'Unprotected Spring',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25},
              domain: [0, 25],
              unit: '%',
            },
            layerIds: ['Unprotected Spring'],
            info: '',
          },
          {
            id: 'Rainwater', // matches .csv column name
            label: 'Rainwater',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Rainwater'],
            info: '',
          },
          {
            id: 'Surface Water', // matches .csv column name
            label: 'Surface Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Surface Water'],
            info: '',
          },
          {
            id: 'Bottle/Satchet Water', // matches .csv column name
            label: 'Bottle/Satchet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 32},
              domain: [0, 32],
              unit: '%',
            },
            layerIds: ['Bottle/Satchet Water'],
            info: '',
          },
          {
            id: 'River/Stream', // matches .csv column name
            label: 'River/Stream',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 39},
              domain: [0, 39],
              unit: '%',
            },
            layerIds: ['River/Stream'],
            info: '',
          },
          {
            id: 'Other', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Other'],
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'hhAssets',
    label: 'Household Assets',
    icon: HHAsset,
    description: '',
    info: 'Assets and ownership.',
    controls: [
      {
        id: 'electronic_appliance',
        label: 'Electronics and Appliances',
        info: '',
        subcontrols: [
          {
            id: 'Percent Access to Internet', // matches .csv column name
            label: 'Internet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 29},
              domain: [0, 29],
              unit: '%',
            },
            layerIds: ['Percent Access to Internet'],
            info: '',
          },
          {
            id: 'Electric Iron Percent', // matches .csv column name
            label: 'Electric Iron',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 8},
              domain: [0, 8],
              unit: '%',
            },
            layerIds: ['Electric Iron Percent'],
            info: '',
          },
          {
            id: 'Charcoal Iron Percent', // matches .csv column name
            label: 'Charcoal Iron',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 45},
              domain: [0, 45],
              unit: '%',
            },
            layerIds: ['Charcoal Iron Percent'],
            info: '',
          },
          {
            id: 'Generator Percent', // matches .csv column name
            label: 'Generator',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 19},
              domain: [0, 19],
              unit: '%',
            },
            layerIds: ['Generator Percent'],
            info: '',
          },
          {
            id: 'Fridge Percent', // matches .csv column name
            label: 'Refrigerator',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 14},
              domain: [0, 14],
              unit: '%',
            },
            layerIds: ['Fridge Percent'],
            info: '',
          },
          {
            id: 'TV Percent', // matches .csv column name
            label: 'TV',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 27},
              domain: [0, 27],
              unit: '%',
            },
            layerIds: ['TV Percent'],
            info: '',
          },
          {
            id: 'Computer Percent', // matches .csv column name
            label: 'Computer',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 9},
              domain: [0, 9],
              unit: '%',
            },
            layerIds: ['Computer Percent'],
            info: '',
          },
          {
            id: 'Radio Percent', // matches .csv column name
            label: 'Radio',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 77},
              domain: [0, 77],
              unit: '%',
            },
            layerIds: ['Radio Percent'],
            info: '',
          },
          {
            id: 'Stove Percent', // matches .csv column name
            label: 'Stove',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10},
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Stove Percent'],
            info: '',
          },
          {
            id: 'Bed Percent', // matches .csv column name
            label: 'Bed',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 90},
              domain: [0, 90],
              unit: '%',
            },
            layerIds: ['Bed Percent'],
            info: '',
          },
          {
            id: 'Mobile Phone Percent', // matches .csv column name
            label: 'Mobile Phone',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 85},
              domain: [0, 85],
              unit: '%',
            },
            layerIds: ['Mobile Phone Percent'],
            info: '',
          },
          {
            id: 'Sofa Percent', // matches .csv column name
            label: 'Sofa',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25},
              domain: [0, 25],
              unit: '%',
            },
            layerIds: ['Sofa Percent'],
            info: '',
          },
        ],
      },
      {
        id: 'vehicles',
        label: 'Vehicles',
        info: '',
        subcontrols: [
          // Add layers here
          {
            id: 'Bike Percent', // matches .csv column name
            label: 'Bike',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 9},
              domain: [0, 9],
              unit: '%',
            },
            layerIds: ['Bike Percent'],
            info: '',
          },
          {
            id: 'Motorcycle Percent', // matches .csv column name
            label: 'Motorcycle',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 12},
              domain: [0, 12],
              unit: '%',
            },
            layerIds: ['Motorcycle Percent'],
            info: '',
          },
          {
            id: 'Car Percent', // matches .csv column name
            label: 'Car',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 8},
              domain: [0, 8],
              unit: '%',
            },
            layerIds: ['Car Percent'],
            info: '',
          },
          {
            id: 'Truck Percent', // matches .csv column name
            label: 'Truck',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2},
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Truck Percent'],
            info: '',
          },
          {
            id: 'Boat Percent', // matches .csv column name
            label: 'Boat',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25},
              domain: [0, 25],
              unit: '%',
            },
            layerIds: ['Boat Percent'],
            info: '',
          },
        ],
      },
      {
        id: 'Disability',
        label: 'Disability',
        info: '',
        subcontrols: [
          // Add layers here
          {
            id: 'Disability Percent', // matches .csv column name
            label: 'Disability',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2},
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Disability Percent'],
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'economicHealth',
    label: 'Economic Health',
    icon: EconHealth,
    description: '',
    info: 'Assets and ownership.',
    controls: [
      {
        id: 'roof',
        label: 'Roof Material',
        info: '',
        subcontrols: [
          {
            id: 'Thatch - Roofing', // matches .csv column name
            label: 'Thatch',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 38},
              domain: [0, 38],
              unit: '%',
            },
            layerIds: ['Thatch - Roofing'],
            info: '',
          },
          {
            id: 'Iron Sheet - Roofing', // matches .csv column name
            label: 'Iron Sheet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 96},
              domain: [0, 96],
              unit: '%',
            },
            layerIds: ['Iron Sheet - Roofing'],
            info: '',
          },
          {
            id: 'Cement/Concrete - Roofing', // matches .csv column name
            label: 'Cement/Concrete',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 12},
              domain: [0, 12],
              unit: '%',
            },
            layerIds: ['Cement/Concrete - Roofing'],
            info: '',
          },
          {
            id: 'Tiles - Roofing', // matches .csv column name
            label: 'Tiles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Tiles - Roofing'],
            info: '',
          },
          {
            id: 'Tarpaulin - Roofing', // matches .csv column name
            label: 'Tarpaulin',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Tarpaulin - Roofing'],
            info: '',
          },
        ],
      },
      {
        id: 'wall_material',
        label: 'Wall Material',
        info: '',
        subcontrols: [
          // Add layers here
          {
            id: 'Mud and Wattle - Walls', // matches .csv column name
            label: 'Mud and Wattle',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 75},
              domain: [0, 75],
              unit: '%',
            },
            layerIds: ['Mud and Wattle - Walls'],
            info: '',
          },
          {
            id: 'Mud Brick with Cement - Walls', // matches .csv column name
            label: 'Mud Brick with Cement',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 49},
              domain: [0, 49],
              unit: '%',
            },
            layerIds: ['Mud Brick with Cement - Walls'],
            info: '',
          },
          {
            id: 'Wooden Boards - Walls', // matches .csv column name
            label: 'Wooden Boards',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5},
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Wooden Boards - Walls'],
            info: '',
          },
          {
            id: 'Iron Sheet - Walls', // matches .csv column name
            label: 'Iron Sheet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 21},
              domain: [0, 21],
              unit: '%',
            },
            layerIds: ['Iron Sheet - Walls'],
            info: '',
          },
          {
            id: 'Cement Block - Walls', // matches .csv column name
            label: 'Cement Block',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 53},
              domain: [0, 53],
              unit: '%',
            },
            layerIds: ['Cement Block - Walls'],
            info: '',
          },
          {
            id: 'Others - Walls', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 4},
              domain: [0, 4],
              unit: '%',
            },
            layerIds: ['Others - Walls'],
            info: '',
          },
        ],
      },
      {
        id: 'floor_material',
        label: 'Floor Material',
        info: '',
        subcontrols: [
          // Add layers here
          {
            id: 'Earth/Mud - Flooring', // matches .csv column name
            label: 'Earth/Mud',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 86},
              domain: [0, 86],
              unit: '%',
            },
            layerIds: ['Earth/Mud - Flooring'],
            info: '',
          },
          {
            id: 'Tile - Flooring', // matches .csv column name
            label: 'Tile',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 22},
              domain: [0, 22],
              unit: '%',
            },
            layerIds: ['Tile - Flooring'],
            info: '',
          },
          {
            id: 'Wood - Flooring', // matches .csv column name
            label: 'Wood',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Wood - Flooring'],
            info: '',
          },
          {
            id: 'Concrete/Cement - Flooring', // matches .csv column name
            label: 'Concrete/Cement',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 77},
              domain: [0, 77],
              unit: '%',
            },
            layerIds: ['Concrete/Cement - Flooring'],
            info: '',
          },
          {
            id: 'Stone - Flooring', // matches .csv column name
            label: 'Stone',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1},
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Stone - Flooring'],
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'economicActivity',
    label: 'Economic Activity',
    icon: EconAct,
    description: '',
    info: 'Work and Expenditure',
    controls: [
      {
        id: 'industry_participation',
        label: 'Industry Participation',
        info: '',
        subcontrols: [
          {
            id: 'Crop Farming Percent', // matches .csv column name
            label: 'Crop Farming',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 85},
              domain: [0, 85],
              unit: '%',
            },
            layerIds: ['Crop Farming Percent'],
            info: '',
          },
          {
            id: 'Mining Percent', // matches .csv column name
            label: 'Mining',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 9},
              domain: [0, 9],
              unit: '%',
            },
            layerIds: ['Mining Percent'],
            info: '',
          },
          {
            id: 'Manufacturing Percent', // matches .csv column name
            label: 'Manufacturing',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 7},
              domain: [0, 7],
              unit: '%',
            },
            layerIds: ['Manufacturing Percent'],
            info: '',
          },
          {
            id: 'Wholesale Percent', // matches .csv column name
            label: 'Wholesale',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 38},
              domain: [0, 38],
              unit: '%',
            },
            layerIds: ['Wholesale Percent'],
            info: '',
          },
          {
            id: 'Fishing Percent', // matches .csv column name
            label: 'Fishing',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 17},
              domain: [0, 17],
              unit: '%',
            },
            layerIds: ['Fishing Percent'],
            info: '',
          },
          {
            id: 'Transport Percent', // matches .csv column name
            label: 'Transport',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 7},
              domain: [0, 7],
              unit: '%',
            },
            layerIds: ['Transport Percent'],
            info: '',
          },
          {
            id: 'Other', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 45},
              domain: [0, 45],
              unit: '%',
            },
            layerIds: ['Other'],
            info: '',
          },
        ],
      },
      {
        id: 'livestock_fish',
        label: 'Livestock & Fish',
        info: '',
        subcontrols: [
          // Add layers here
          {
            id: 'Cattle', // matches .csv column name
            label: 'Cattle',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 16000},
              domain: [0, 16000],
              unit: '',
            },
            layerIds: ['Cattle'],
            info: '',
          },
          {
            id: 'Sheep', // matches .csv column name
            label: 'Sheep',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25000},
              domain: [0, 25000],
              unit: '',
            },
            layerIds: ['Sheep'],
            info: '',
          },
          {
            id: 'Goats', // matches .csv column name
            label: 'Goats',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 35000},
              domain: [0, 35000],
              unit: '',
            },
            layerIds: ['Goats'],
            info: '',
          },
          {
            id: 'Pigs', // matches .csv column name
            label: 'Pigs',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3000},
              domain: [0, 3000],
              unit: '',
            },
            layerIds: ['Pigs'],
            info: '',
          },
          {
            id: 'Chickens', // matches .csv column name
            label: 'Chickens',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 80000},
              domain: [0, 80000],
              unit: '',
            },
            layerIds: ['Chickens'],
            info: '',
          },
          {
            id: 'Ducks', // matches .csv column name
            label: 'Ducks',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 15000},
              domain: [0, 15000],
              unit: '',
            },
            layerIds: ['Ducks'],
            info: '',
          },
          {
            id: 'Other Poultry', // matches .csv column name
            label: 'Other Poultry',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 9000},
              domain: [0, 9000],
              unit: '',
            },
            layerIds: ['Other Poultry'],
            info: '',
          },
          {
            id: 'Other Livestock', // matches .csv column name
            label: 'Other Livestock',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 6000},
              domain: [0, 6000],
              unit: '',
            },
            layerIds: ['Other Livestock'],
            info: '',
          },
          {
            id: 'Farmed Fish', // matches .csv column name
            label: 'Farmed Fish',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2000},
              domain: [0, 2000],
              unit: '',
            },
            layerIds: ['Farmed Fish'],
            info: '',
          },
        ],
      },
      {
        id: 'permanent_crops',
        label: 'Permanent Crop Growth',
        info: '',
        subcontrols: [
          // Add layers here
          {
            id: 'Upland Rice Percent', // matches .csv column name
            label: 'Upland Rice',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 43},
              domain: [0, 43],
              unit: '%',
            },
            layerIds: ['Upland Rice Percent'],
            info: '',
          },
          {
            id: 'Lowland Rice Percent', // matches .csv column name
            label: 'Lowland Rice',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 54},
              domain: [0, 54],
              unit: '%',
            },
            layerIds: ['Lowland Rice Percent'],
            info: '',
          },
          {
            id: 'Cassava Percent', // matches .csv column name
            label: 'Cassava',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 36},
              domain: [0, 36],
              unit: '%',
            },
            layerIds: ['Cassava Percent'],
            info: '',
          },
          {
            id: 'Sweet Potato Percent', // matches .csv column name
            label: 'Sweet Potato',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 14},
              domain: [0, 14],
              unit: '%',
            },
            layerIds: ['Sweet Potato Percent'],
            info: '',
          },
          {
            id: 'Groundnut Percent', // matches .csv column name
            label: 'Groundnut',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 22},
              domain: [0, 22],
              unit: '%',
            },
            layerIds: ['Groundnut Percent'],
            info: '',
          },
          {
            id: 'Maize Percent', // matches .csv column name
            label: 'Maize',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5},
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Maize Percent'],
            info: '',
          },
          {
            id: 'Coffee Percent', // matches .csv column name
            label: 'Coffee',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20},
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Coffee Percent'],
            info: '',
          },
          {
            id: 'Cacao Percent', // matches .csv column name
            label: 'Cacao',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 23},
              domain: [0, 23],
              unit: '%',
            },
            layerIds: ['Cacao Percent'],
            info: '',
          },
          {
            id: 'Oil Palm Percent', // matches .csv column name
            label: 'Oil Palm',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 19},
              domain: [0, 19],
              unit: '%',
            },
            layerIds: ['Oil Palm Percent'],
            info: '',
          },
          {
            id: 'Citrus Percent', // matches .csv column name
            label: 'Citrus',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Citrus Percent'],
            info: '',
          },
          {
            id: 'Vegetables Percent', // matches .csv column name
            label: 'Vegetables',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 15},
              domain: [0, 15],
              unit: '%',
            },
            layerIds: ['Vegetables Percent'],
            info: '',
          },
          {
            id: 'Cashew Percent', // matches .csv column name
            label: 'Cashew',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3},
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Cashew Percent'],
            info: '',
          },

        ],
      },
    ],
  },
]
