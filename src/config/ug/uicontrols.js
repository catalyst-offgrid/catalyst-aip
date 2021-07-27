import {
  AdminBoundaries,
  Energy,
  Population,
  Public,
  Health,
  //Placeholder, INSERT ICON FOR INFRASTRUCTURE
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
        id: 'uganda-regions',
        label: 'Regions',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-regions'],
        info: '',
      },
      {
        //ACtUALLY CALLED SUBREGIONS BUT SITE WILL NOT WORK
        id: 'counties',
        label: 'Sub-Regions',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['counties'],
        info: 'Sub regions',
      },
      {
        id: 'uganda-districts',
        label: 'Districts',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-districts'],
        info: '',
      },
      {
        id: 'uganda-towns',
        label: 'Towns',
        defaultVisibility: false,
        legend: {type: 'dot', color: colors.accent5 },
        layerIds: ['uganda-towns'],
        info: '',
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
            id: 'Tadooba - Lighting Fuel', // matches .csv column name
            label: 'Tadooba (Kerosene Tin Lamp)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 58},
              domain: [0, 58],
              unit: '%',
            },
            layerIds: ['Tadooba - Lighting Fuel'],
            info: 'Description: Percentage of households in an area whose primary lighting source is a tadooba (i.e., a basic kerosene tin lamp). Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Lantern - Lighting Fuel', // matches .csv column name
            label: 'Kerosene Lantern',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 13},
              domain: [0, 13],
              unit: '%',
            },
            layerIds: ['Lantern - Lighting Fuel'],
            info: 'Description: Percentage of households in an area whose primary lighting source is a kerosene latern (not including tadoobas). Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Grid Electricity - Lighting Fuel', // matches .csv column name
            label: 'Grid Electricity',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 70},
              domain: [0, 70],
              unit: '%',
            },
            layerIds: ['Grid Electricity - Lighting Fuel'],
            info: 'Description: Percentage of households in an area whose primary lighting source is grid electrcity. Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Solar - Lighting Fuel', // matches .csv column name
            label: 'Solar',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 33},
              domain: [0, 33],
              unit: '%',
            },
            layerIds: ['Solar - Lighting Fuel'],
            info: 'Description: Percentage of households in an area whose primary lighting source is a solar system. Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Dry Cells/Batteries - Lighting Fuel', // matches .csv column name
            label: 'Dry Cells/Batteries',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 57},
              domain: [0, 57],
              unit: '%',
            },
            layerIds: ['Dry Cells/Batteries - Lighting Fuel'],
            info: 'Description: Percentage of households in an area whose primary lighting source is a torch powered by dry-cell batteries. Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Candles - Lighting Fuel', // matches .csv column name
            label: 'Candles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 6},
              domain: [0, 6],
              unit: '%',
            },
            layerIds: ['Candles - Lighting Fuel'],
            info: 'Description: Percentage of households in an area whose primary lighting source is candles. Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Other Lighting Fuel', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 41},
              domain: [0, 41],
              unit: '%',
            },
            layerIds: ['Other Lighting Fuel'],
            info: 'Description: Percentage of households in an area whose primary lighting source is either gas, biogas, candles, firewood, cow dung, grass, or others. Source: 2016/2017 UBOS Household Survey',
          },
        ],
      },
      //{
      //  id: 'lighting',
      //  label: 'Lighting (District Level)',
      //  info: '',
      //  subcontrols: []
      //},
      {
        id: 'cooking',
        label: 'Cooking Fuels',
        info: '',
        subcontrols: [
          {
            id: 'Firewood - Cooking Fuel', // matches .csv column name
            label: 'Firewood',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 87},
              domain: [0, 87],
              unit: '%',
            },
            layerIds: ['Firewood - Cooking Fuel'],
            info: 'Description: Percentage of households in an area whose primary cooking fuel source is firewood. Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Charcoal - Cooking Fuel', // matches .csv column name
            label: 'Charcoal',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 70},
              domain: [0, 70],
              unit: '%',
            },
            layerIds: ['Charcoal - Cooking Fuel'],
            info: 'Description: Percentage of households in an area whose primary cooking fuel source is charcoal. Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Other Cooking Fuel', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 15},
              domain: [0, 15],
              unit: '%',
            },
            layerIds: ['Other Cooking Fuel'],
            info: 'Description: Percentage of households in an area whose primary cooking fuel source is either kerosene, electricity, gas, cow dung, grass/reeds, or others. Source: 2016/2017 UBOS Household Survey',
          },
        ],
      },
      //{
      //  id: 'cooking',
      //  label: 'Cooking Fuels (District Level)',
      //  info: '',
      //  subcontrols: []
      //},
      {
        id: 'grid',
        label: 'Grid Electricity',
        info: '',
        subcontrols: [
        //  {
        //  id: 'uganda-substations',
        //    label: 'Substations',
        //    defaultVisibility: false,
         //   legend: { type: 'dot', color: colors.accent1 },
         //   layerIds: ['uganda-substations'],
         //   info: '',
          //},
          {
            id: 'uganda-grid',
            label: 'All Grid T&D Lines',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent9 },
            layerIds: ['uganda-grid'],
            info: 'Source: Ugandan Energy Sector GIS Working Group, 2017.',
          },
          {
            id: 'uganda-data-for-good',
            label: 'Gridfinder MV/HV Lines',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-data-for-good'],
            info: 'GridFinder predictive algorithm based on night lights imagery, estimating the location of high- and medium-voltage transmission lines, 2019.',
          },
         // {
         //   id: 'uganda-electrical',
         //   label: 'Electrical and Distribution',
         //   defaultVisibility: false,
         //   legend: { type: 'line', color: colors.accent9 },
         //   layerIds: ['uganda-electrical'],
         //   info: '',
         // },
          {
            id: 'uganda-planned-transmission',
            label: 'Planned Transmission Lines',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent9 },
            layerIds: ['uganda-planned-transmission'],
            info: 'Source: Ugandan Energy Sector GIS Working Group, 2016',
          },
          {
            id: 'uganda-construct-transmission',
            label: 'Transmission Lines Under Construction',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent9 },
            layerIds: ['uganda-construct-transmission'],
            info: 'Source: Ugandan Energy Sector GIS Working Group, 2016',
          },
          {
            id: 'uganda-minigrids',
            label: 'Minigrids',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['uganda-minigrids'],
            info: '',
          },
        ],
      },
      {
        id: 'grid-disconnection',
        label: 'Reason for Grid Exclusion',
        info: '',
        subcontrols: [
          {
            id: 'Too Far/Not Available - Reason for Non-Connection to Grid', // matches .csv column name
            label: 'Too Far or Not Available',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 78},
              domain: [0, 78],
              unit: '%',
            },
            layerIds: ['Too Far/Not Available - Reason for Non-Connection to Grid'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Cost of Connection Too Expensive - Reason for Non-Connection to Grid', // matches .csv column name
            label: 'Cost of Connection',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 51},
              domain: [0, 51],
              unit: '%',
            },
            layerIds: ['Cost of Connection Too Expensive - Reason for Non-Connection to Grid'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Renting or Landlord Decision - Reason for Non-Connection to Grid', // matches .csv column name
            label: 'Landlord Decision',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 21},
              domain: [0, 21],
              unit: '%',
            },
            layerIds: ['Renting or Landlord Decision - Reason for Non-Connection to Grid'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Monthly Fee Too Expensive - Reason for Non-Connection to Grid', // matches .csv column name
            label: 'Monthly Fee Cost',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 19},
              domain: [0, 19],
              unit: '%',
            },
            layerIds: ['Monthly Fee Too Expensive - Reason for Non-Connection to Grid'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Other Reason for Non-Connection to Grid', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 9},
              domain: [0, 9],
              unit: '%',
            },
            layerIds: ['Other Reason for Non-Connection to Grid'],
            info: 'Source: 2016/2017 UBOS Household Survey',
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
      'Locations of Financial Services, Schools, and Health institutions.',
    controls: [
      {
        id: 'finance',
        label: 'Financial Services',
        info: 'Locations of Banks, MFIs, and SACCOs in Uganda.',
        subcontrols: [
          //{
          //  id: 'uganda-mobile-money',
          //  label: 'Mobile Money Agents',
          //  defaultVisibility: false,
          //  legend: { type: 'dot', color: colors.accent1 },
          //  layerIds: ['uganda-mobile-money'],
          //  info: '',
          //},
          {
            id: 'uganda-banks',
            label: 'Banks',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['uganda-banks'],
            info: 'Source: OpenStreetMap contributors, 2021',
          },
          {
            id: 'uganda-sacco',
            label: 'SACCO',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['uganda-sacco'],
            info: 'Source: OpenStreetMap contributors, 2021',
          },
         // {
         //   id: 'uganda-bureau-de-change',
         //   label: 'Bureau de Change',
         //   defaultVisibility: false,
         //   legend: { type: 'dot', color: colors.accent5 },
         //   layerIds: ['uganda-bureau-de-change'],
         //   info: '',
         // },
          {
            id: 'uganda-microfinance',
            label: 'Microfinance',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent6 },
            layerIds: ['uganda-microfinance'],
            info: 'Source: OpenStreetMap contributors, 2021',
          },
         // {
         //   id: 'uganda-post-office',
         //   label: 'Post Office',
         //   defaultVisibility: false,
         //   legend: { type: 'dot', color: colors.accent9 },
         //   layerIds: ['uganda-post-office'],
         //   info: '',
         // },
        ],
      },
      {
        id: 'healthFacs',
        label: 'Health Facilities',
        info:
          'Displays the locations of the health facilities in Uganda.',
        subcontrols: [
          // {
          //   id: 'uganda-hospital',
          //   label: 'Hospitals',
          //   defaultVisibility: false,
          //   legend: { type: 'dot', color: colors.accent1 },
          //   layerIds: ['uganda-hospital'],
          //   info: '',
          // },
          // {
          //   id: 'uganda-clinics',
          //   label: 'Clinics',
          //   defaultVisibility: false,
          //   legend: { type: 'dot', color: colors.accent2 },
          //   layerIds: ['uganda-clinics'],
          //   info: '',
          // },
          // {
          //   id: 'uganda-health-post',
          //   label: 'Health Post',
          //   defaultVisibility: false,
          //   legend: { type: 'dot', color: colors.accent4 },
          //   layerIds: ['uganda-health-post'],
          //   info: '',
          // },
          // {
          //   id: 'uganda-pharmacy',
          //   label: 'Pharmacy',
          //   defaultVisibility: false,
          //   legend: { type: 'dot', color: colors.accent5 },
          //   layerIds: ['uganda-pharmacy'],
          //   info: '',
          // },
          {
            id: 'uganda-healthsites',
            label: 'Health Facilities',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-healthsites'],
            info: 'Source: Healthsites.io extract, 2021',
          },
        ],
      },
      {
        id: 'education',
        label: 'Education Facilities',
        info:
          'Displays the locations of the education facilities in Uganda by the facility type.',
        subcontrols: [
          {
            id: 'uganda-colleges',
            label: 'Colleges',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['uganda-colleges'],
            info: 'Source: OpenStreetMap contributors, 2021',
          },
          {
            id: 'uganda-schools',
            label: 'Schools',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['uganda-schools'],
            info: 'Source: OpenStreetMap contributors, 2021',
          },
          {
            id: 'uganda-kindergarten',
            label: 'Kindergarten',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-kindergarten'],
            info: 'Source: OpenStreetMap contributors, 2021',
          },
          {
            id: 'uganda-university',
            label: 'University',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['uganda-university'],
            info: 'Source: OpenStreetMap contributors, 2021',
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
    info: 'Population density and demographic statistics.',
    controls: [
      {
        id: 'popAndMovement',
        label: 'Population and Movement',
        info:
          'Displays where the people of Uganda live and the patterns in their movement.',
        subcontrols: [
          {
            id: 'uganda-density',
            label: 'Population Density',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-density'],
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
            id: 'Household Population 0-13', // matches .csv column name
            label: 'Under 14',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 56},
              domain: [0, 56],
              unit: '%',
            },
            layerIds: ['Household Population 0-13'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Household Population 14-64', // matches .csv column name
            label: '14 - 64',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60},
              domain: [0, 60],
              unit: '%',
            },
            layerIds: ['Household Population 14-64'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Household Population 65+', // matches .csv column name
            label: '65+',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5},
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Household Population 65+'],
            info: 'Source: 2016/2017 UBOS Household Survey',
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
            id: 'Average Household Size', // matches .csv column name
            label: 'Average Household Size',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 7},
              domain: [0, 7],
              unit: '',
            },
            layerIds: ['Average Household Size'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Total Households', // matches .csv column name
            label: 'Total Households',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1500000},
              domain: [0, 1500000],
              unit: 'Source: 2016/2017 UBOS Household Survey',
            },
            layerIds: ['Total Households'],
            info: 'Source: 2016/2017 UBOS Household Survey',
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
        id: 'uganda-roads',
        label: 'Road Network',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-roads'],
        info: 'Source: Geo-IM Working Group chaired by UBOS, 2018',
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
        id: 'Africell',
        label: 'Africell',
        info: 'Coverage on the Africell Network.',
        subcontrols: [
          {
            id: 'uganda-africell-2g',
            label: 'Africell 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-africell-2g'],
            info: '',
          },
          {
            id: 'uganda-africell-3g',
            label: 'Africell 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['uganda-africell-3g'],
            info: '',
          },
          {
            id: 'uganda-africell-4g',
            label: 'Africell 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['uganda-africell-4g'],
            info: '',
          },
        ]
      },
      {
        id: 'Airtel',
        label: 'Airtel',
        info: 'Coverage on the Airtel Network.',
        subcontrols: [
          {
            id: 'uganda-airtel-2g',
            label: 'Airtel 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-airtel-2g'],
            info: '',
          },
          {
            id: 'uganda-airtel-3g',
            label: 'Airtel 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['uganda-airtel-3g'],
            info: '',
          },
          {
            id: 'uganda-airtel-4g',
            label: 'Airtel 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['uganda-airtel-4g'],
            info: '',
          },
        ]
      },
      {
        id: 'MTN',
        label: 'MTN',
        info: 'Coverage on the MTN Network.',
        subcontrols: [
          {
            id: 'uganda-mtn-2g',
            label: 'MTN 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-mtn-2g'],
            info: '',
          },
          {
            id: 'uganda-mtn-3g',
            label: 'MTN 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['uganda-mtn-3g'],
            info: '',
          },
          {
            id: 'uganda-mtn-4g',
            label: 'MTN 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['uganda-mtn-4g'],
            info: '',
          },
        ]
      },
      {
        id: 'UT Mobile',
        label: 'UT Mobile',
        info: 'Coverage on the UT Mobile Network.',
        subcontrols: [
          {
            id: 'uganda-ut-mobile-2g',
            label: 'UT Mobile 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-ut-mobile-2g'],
            info: '',
          },
          {
            id: 'uganda-ut-mobile-3g',
            label: 'UT Mobile 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['uganda-ut-mobile-3g'],
            info: '',
          },
        ]
      }
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
            id: 'Pit Latrine - Type of Toilet', // matches .csv column name
            label: 'Pit Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 96},
              domain: [0, 96],
              unit: '%',
            },
            layerIds: ['Pit Latrine - Type of Toilet'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'VIP Latrine - Type of Toilet', // matches .csv column name
            label: 'VIP Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 17},
              domain: [0, 17],
              unit: '%',
            },
            layerIds: ['VIP Latrine - Type of Toilet'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Bush/No Toilet - Type of Toilet', // matches .csv column name
            label: 'Bush/No Toilet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 66},
              domain: [0, 66],
              unit: '%',
            },
            layerIds: ['Bush/No Toilet - Type of Toilet'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Flush - Type of Toilet', // matches .csv column name
            label: 'Flush Toilet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 11},
              domain: [0, 11],
              unit: '%',
            },
            layerIds: ['Flush - Type of Toilet'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
        ],
      },
      {
        id: 'drinkingWater',
        label: 'Distance from Water Source',
        info: '',
        subcontrols: [
          // Add layers here
          {
            id: '< 3km - Distance to Drinking Water Source', // matches .csv column name
            label: 'Less than 3 km',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 99},
              domain: [0, 99],
              unit: '%',
            },
            layerIds: ['< 3km - Distance to Drinking Water Source'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: '3-5km - Distance to Drinking Water Source', // matches .csv column name
            label: '3 to 5 km',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 6},
              domain: [0, 6],
              unit: '%',
            },
            layerIds: ['3-5km - Distance to Drinking Water Source'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: '5+ km - Distance to Drinking Water Source', // matches .csv column name
            label: '5+ km',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2},
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['5+ km - Distance to Drinking Water Source'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
        ],
      },
    ],
  },
  //{
  //  id: 'hhAssets',
  //  label: 'Household Assets',
  //  icon: HHAsset,
  //  description: '',
  //  info: 'Assets and ownership.',
  //  controls: [
  //    {
  //      id: 'Disability',
  //      label: 'Disability',
  //      info: '',
  //      subcontrols: [
          // Add layers here
  //      ],
  //    },
  //  ],
  //},
  {
    id: 'economicHealth',
    label: 'Economic Health',
    icon: EconHealth,
    description: '',
    info: 'Assets and ownership.',
    controls: [
      {
        id: 'indicators',
        label: 'Indicators',
        info: '',
        subcontrols: [
          //insert unemployment layers here
          {
            id: 'Percent of Population in Poverty', // matches .csv column name
            label: 'Poverty Incidence',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 11},
              domain: [0, 11],
              unit: '%',
            },
            layerIds: ['Percent of Population in Poverty'],
            info: 'Description: Percentage of the population living in poverty. Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Average Nominal Monthly Household Income', // matches .csv column name
            label: 'Average Household Income',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1000000},
              domain: [0, 1000000],
              unit: '',
            },
            layerIds: ['Average Nominal Monthly Household Income'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Unemployment Rate', // matches .csv column name
            label: 'Unemployment Rate',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 17},
              domain: [0, 17],
              unit: '%',
            },
            layerIds: ['Unemployment Rate'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
        ],
      },
      {
        id: 'roof',
        label: 'Roof Material',
        info: '',
        subcontrols: [
          {
            id: 'Iron Sheets - Roofing', // matches .csv column name
            label: 'Iron Sheets',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 98},
              domain: [0, 98],
              unit: '%',
            },
            layerIds: ['Iron Sheets - Roofing'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Thatched - Roofing', // matches .csv column name
            label: 'Thatched',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 92},
              domain: [0, 92],
              unit: '%',
            },
            layerIds: ['Thatched - Roofing'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Other Roofing Type', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 4},
              domain: [0, 4],
              unit: '%',
            },
            layerIds: ['Other Roofing Type'],
            info: 'Source: 2016/2017 UBOS Household Survey',
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
            id: 'Bricks - Walls', // matches .csv column name
            label: 'Bricks',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 97},
              domain: [0, 97],
              unit: '%',
            },
            layerIds: ['Bricks - Walls'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Mud & Poles - Wall', // matches .csv column name
            label: 'Mud & Poles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 84},
              domain: [0, 84],
              unit: '%',
            },
            layerIds: ['Mud & Poles - Walls'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Other Wall Material', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 12},
              domain: [0, 12],
              unit: '%',
            },
            layerIds: ['Other Wall Material'],
            info: 'Source: 2016/2017 UBOS Household Survey',
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
            id: 'Earth - Flooring', // matches .csv column name
            label: 'Earth',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 97},
              domain: [0, 97],
              unit: '%',
            },
            layerIds: ['Earth - Flooring'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Cement - Flooring', // matches .csv column name
            label: 'Cement',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 64},
              domain: [0, 64],
              unit: '%',
            },
            layerIds: ['Cement - Flooring'],
            info: 'Source: 2016/2017 UBOS Household Survey',
          },
          {
            id: 'Other Flooring Material', // matches .csv column name
            label: 'Other',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20},
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Other Flooring Material'],
            info: 'Source: 2016/2017 UBOS Household Survey',
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
            id: 'Agriculture - Employed Persons by Industry', // matches .csv column name
            label: 'Agriculture',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 46},
              domain: [0, 46],
              unit: '%',
            },
            layerIds: ['Agriculture - Employed Persons by Industry'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: 'Construction - Employed Persons by Industry', // matches .csv column name
            label: 'Construction',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20},
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Construction - Employed Persons by Industry'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: 'Trade - Employed Persons by Industry', // matches .csv column name
            label: 'Trade',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 28},
              domain: [0, 28],
              unit: '%',
            },
            layerIds: ['Trade - Employed Persons by Industry'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: 'Other Services - Employed Persons by Industry', // matches .csv column name
            label: 'Other Service',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 45},
              domain: [0, 45],
              unit: '%',
            },
            layerIds: ['Other Services - Employed Persons by Industry'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
        ],
      },
      {
        id: 'permanent_crops',
        label: 'Agricultural Households',
        info: '',
        subcontrols: [
          {
            id: '%_agricultural_hh_members_with_financial_services_access', // matches .csv column name
            label: 'Members with Access to Financial Services',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 14},
              domain: [0, 14],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_members_with_financial_services_access'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_members_in_agriculture', // matches .csv column name
            label: 'Members Working in Agriculture',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 76},
              domain: [0, 76],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_members_in_agriculture'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_members_in_livestock_activities', // matches .csv column name
            label: 'Members Working in Livestock',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 11},
              domain: [0, 11],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_members_in_livestock_activities'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_members_15+_with_agricultural_training', // matches .csv column name
            label: 'Members 15+ with Agricultural Training',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 7},
              domain: [0, 7],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_members_15+_with_agricultural_training'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_paying_for_feeding_livestock', // matches .csv column name
            label: 'Paying to Feed Livestock',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 41},
              domain: [0, 41],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_paying_for_feeding_livestock'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_paying_for_watering_livestock', // matches .csv column name
            label: 'Paying to Water Livestock',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 44},
              domain: [0, 44],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_paying_for_watering_livestock'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_using_fertilizers', // matches .csv column name
            label: 'Using Fertilizers',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 74},
              domain: [0, 74],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_using_fertilizers'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_using_improved_seeds', // matches .csv column name
            label: 'Using Improved Seeds',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 33},
              domain: [0, 33],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_using_improved_seeds'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_using_irrigation', // matches .csv column name
            label: 'Using Irrigation',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 7},
              domain: [0, 7],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_using_irrigation'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_agricultural_hh_access_to_credit', // matches .csv column name
            label: 'Access to Credit',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 26},
              domain: [0, 26],
              unit: '%',
            },
            layerIds: ['%_agricultural_hh_access_to_credit'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_literate_agricultural_hh_members (10+)', // matches .csv column name
            label: 'Members 10+ Literacy Rate',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 87},
              domain: [0, 87],
              unit: '%',
            },
            layerIds: ['%_literate_agricultural_hh_members (10+)'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
        ],
      },
      {
        id: 'permanent_crops',
        label: 'Permanent Crop Growth',
        info: '',
        subcontrols: [
          {
            id: '%_produce_banana (Food)', // matches .csv column name
            label: 'Banana',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 98},
              domain: [0, 98],
              unit: '%',
            },
            layerIds: ['%_produce_banana (Food)'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Beans', // matches .csv column name
            label: 'Beans',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 92},
              domain: [0, 92],
              unit: '%',
            },
            layerIds: ['%_produce_Beans'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Cassava', // matches .csv column name
            label: 'Cassava',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 95},
              domain: [0, 95],
              unit: '%',
            },
            layerIds: ['%_produce_Cassava'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Coffee Arabica', // matches .csv column name
            label: 'Coffee Arabica',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 61},
              domain: [0, 61],
              unit: '%',
            },
            layerIds: ['%_produce_Coffee Arabica'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Coffee Robusta', // matches .csv column name
            label: 'Coffee Robusta',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60},
              domain: [0, 60],
              unit: '%',
            },
            layerIds: ['%_produce_Coffee Robusta'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Groundnuts', // matches .csv column name
            label: 'Groundnuts',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 47},
              domain: [0, 47],
              unit: '%',
            },
            layerIds: ['%_produce_Groundnuts'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Maize', // matches .csv column name
            label: 'Maize',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 88},
              domain: [0, 88],
              unit: '%',
            },
            layerIds: ['%_produce_Maize'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Millet', // matches .csv column name
            label: 'Millet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 52},
              domain: [0, 52],
              unit: '%',
            },
            layerIds: ['%_produce_Millet'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Rice', // matches .csv column name
            label: 'Rice',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 12},
              domain: [0, 12],
              unit: '%',
            },
            layerIds: ['%_produce_Rice'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
          {
            id: '%_produce_Soya Beans', // matches .csv column name
            label: 'Soya Beans',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 30},
              domain: [0, 30],
              unit: '%',
            },
            layerIds: ['%_produce_Soya Beans'],
            info: 'Source: Uganda National Agricultultural Survey, 2018',
          },
        ],
      },
    ],
  },
]
