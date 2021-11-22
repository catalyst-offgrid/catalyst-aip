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
    info: '',
    controls: [
      {
        id: 'nigeria-states',
        label: 'States',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-states'],
        info: '',
      },
      {
        id: 'nigeria-lgas',
        label: 'Local Government Areas',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-lgas'],
        info: '',
      },
      // Website breaks if you remove layers with "id: 'counties'" so code below is work-around. 
      // Bug has been recorded. Fix pending.
      {
        id: 'counties',
        label: 'Wards',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-wards', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: '',
      },
      /* Due to 'counties' bug, this layer has been merged with the 'counties' layer. When bug fixed, implement 
      this layer for wards. 
      {
        id: 'nigeria-wards',
        label: 'Wards',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-wards'],
        info: '',
      },
      */
    ],
  },
  {
    id: 'planning',
    label: 'Planning & Programs',
    icon: AdminBoundaries,
    description: '',
    info: '.',
    controls: [
    ]
  },
  {
    id: 'energy',
    label: 'Energy',
    icon: Energy,
    description: '',
    info: 'Information on Energy Sources.',
    controls: [
      {
        id: 'electricity-access',
        label: 'Electricity Access',
        info: '',
        subcontrols: [
          {
            id: 'Access to Electricity', // matches .csv column name
            label: 'Access to Electricity',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 19, max: 100},
              domain: [19, 100],
              unit: '%',
            },
            layerIds: ['Access to Electricity'],
            info: 'Percent of people with access to electricity via any means. Source: Nigeria Living Standards Survey 2018-2019, Table 7.10',
          },
          {
            id: 'National Grid', // matches .csv column name
            label: 'Access via National Grid',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 19, max: 100},
              domain: [19, 100],
              unit: '%',
            },
            layerIds: ['National Grid'],
            info: 'Percent of people who, if they have electricity, use the national grid as their primary source of electricity. Source: Nigeria Living Standards Survey 2018-2019, Table 7.10.',
          },
          {
            id: 'Generator', // matches .csv column name
            label: 'Access via Generator',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 51},
              domain: [0, 51],
              unit: '%',
            },
            layerIds: ['Generator'],
            info: 'Percent of people who, if they have electricity, use a generator as their primary source of electricity. Source: Nigeria Living Standards Survey 2018-2019, Table 7.10.',
          },
          {
            id: 'Solar System', // matches .csv column name
            label: 'Access via Solar Device',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 4},
              domain: [0, 4],
              unit: '%',
            },
            layerIds: ['Solar System'],
            info: 'Percent of people who, if they have electricity, use a solar system as their primary source of electricity. Source: Nigeria Living Standards Survey 2018-2019, Table 7.10.',
          },
          {
            id: 'Rechargeable Battery', // matches .csv column name
            label: 'Access via Rechargeable Battery',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5},
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Rechargeable Battery'],
            info: 'Percent of people who, if they have electricity, use a rechargeable battery as their primary source of electricity. Source: Nigeria Living Standards Survey 2018-2019, Table 7.10.',
          },
          {
            id: 'Average Hours National Grid Works per Day', // matches .csv column name
            label: 'Average Hours National Grid Works',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 3, max: 20},
              domain: [3, 20],
              unit: ' hr',
            },
            layerIds: ['Average Hours National Grid Works per Day'],
            info: 'Measured in hours per 24 hour day. Source: Nigeria Living Standards Survey 2018-2019, Table 7.12',
          },
          {
            id: 'Average Hours Electricity from Generator per Day', // matches .csv column name
            label: 'Average Hours Electricity from Generator',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 2, max: 14},
              domain: [2, 14],
              unit: ' hr',
            },
            layerIds: ['Average Hours Electricity from Generator per Day'],
            info: 'Measured in hours per 24 hour day. Source: Nigeria Living Standards Survey 2018-2019, Table 7.12',
          },
        ],
      },
      {
        id: 'cooking',
        label: 'Cooking Fuels',
        info: '',
        subcontrols: [
          {
            id: 'Wood', // matches .csv column name
            label: 'Wood',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 99},
              domain: [0, 99],
              unit: '%',
            },
            layerIds: ['Wood'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
          },
          {
            id: 'Biomass', // matches .csv column name
            label: 'Biomass',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 48},
              domain: [0, 48],
              unit: '%',
            },
            layerIds: ['Biomass'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
          },
          {
            id: 'LPG/Natural Gas', // matches .csv column name
            label: 'LPG/Natural Gas',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 58},
              domain: [0, 58],
              unit: '%',
            },
            layerIds: ['LPG/Natural Gas'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
          },
          {
            id: 'Kerosene', // matches .csv column name
            label: 'Kerosene',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 54},
              domain: [0, 54],
              unit: '%',
            },
            layerIds: ['LPG/Natural Gas'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
          },
          {
            id: 'Electricity', // matches .csv column name
            label: 'Electricity',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5},
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Electricity'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
          },
        ],
      },
      {
        id: 'grid',
        label: 'Grid Electricity',
        info: '',
        subcontrols: [

          {
            id: 'nigeria-substations',
            label: 'Substations',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-substations'],
            info: '',
          },
          {
            id: 'nigeria-gridfinder',
            label: 'Gridfinder MV/HV Lines',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent9 },
            layerIds: ['nigeria-gridfinder'],
            info: 'Source: GridFinder predictive algorithm based on night lights imagery, estimating the location of high- and medium-voltage transmission lines, 2020',
          },
        ],
      },
      {
        id: 'mini-grid',
        label: 'Mini Grid Electricity',
        info: '',
        subcontrols: [

        ],
      },
    ],
  },
  {
    id: 'facilities',
    label: 'Institutions & Services',
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
        ],
      },
      {
        id: 'healthFacs',
        label: 'Health Facilities',
        info:
          'Displays the locations of the health facilities in Nigeria by the facility type.',
        subcontrols: [
          {
            id: 'nigeria-health-centers',
            label: 'Health Centers',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-health-centers'],
            info: '',
          },
          {
            id: 'nigeria-compHC-cottage-hospitals',
            label: 'Comprehensive HCs/Cottage Hospitals',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-compHC-cottage-hospitals'],
            info: '',
          },
          {
            id: 'nigeria-hospitals',
            label: 'Hospitals',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-hospitals'],
            info: '',
          },
          {
            id: 'nigeria-dispensaries',
            label: 'Dispensaries',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-dispensaries'],
            info: '',
          },
          {
            id: 'nigeria-fed-health-facilities',
            label: 'Federal Health Facilities',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-fed-health-facilities'],
            info: '',
          },
          {
            id: 'nigeria-maternity-homes',
            label: 'Maternity Homes',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-maternity-homes'],
            info: '',
          },
        ],
      },
      {
        id: 'education',
        label: 'Education Facilities',
        info:
          'Displays the locations of the education facilities in Nigeria by the facility type.',
        subcontrols: [
          {
            id: 'nigeria-preprimary',
            label: 'Pre-Primary Schools',
            defaultVisibility: false,
            legend: { type: 'circle', color: colors.accent3 },
            layerIds: ['nigeria-preprimary'],
            info: '',
          },
          {
            id: 'nigeria-reg-primary',
            label: 'Primary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-reg-primary'],
            info: '',
          },
          {
            id: 'nigeria-standard-primary',
            label: 'Standard Primary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-standard-primary'],
            info: '',
          },
          {
            id: 'nigeria-secondary',
            label: 'Secondary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-secondary'],
            info: '',
          },
          {
            id: 'nigeria-tertiary',
            label: 'Tertiary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-tertiary'],
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
        id: 'popAndMovement',
        label: 'Population and Movement',
        info:
          '',
        subcontrols: [
          {
            id: 'Percent Male', // matches .csv column name
            label: 'Percent Male',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 45, max: 54},
              domain: [45, 54],
              unit: '%',
            },
            layerIds: ['Percent Male'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 1.2',
          },
          {
            id: 'Percent Female', // matches .csv column name
            label: 'Percent Female',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 46, max: 54},
              domain: [46, 54],
              unit: '%',
            },
            layerIds: ['Percent Female'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 1.2',
          },
          {
            id: 'nigeria-pop-density',
            label: 'Population Density',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-pop-density'],
            info: '',
          },
          {
            id: 'nigeria-built-extent',
            label: 'Extent of Build-Up Areas',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-built-extent'],
            info: '',
          },
          {
            id: 'nigeria-comm-risk',
            label: 'Communication Access Risk',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-comm-risk'],
            info: '',
          },
        ],
      },
      {
        id: 'ageRanges',
        label: 'Age Ranges',
        info: 'Breakdown of the regions by the age of their population.',
        subcontrols: [
          {
            id: 'Percent Population Age 0-5', // matches .csv column name
            label: 'Age 0-5',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 12, max: 24},
              domain: [12, 24],
              unit: '%',
            },
            layerIds: ['Percent Population Age 0-5'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 1.2',
          },
          {
            id: 'Percent Population Age 6-9', // matches .csv column name
            label: 'Age 6-9',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 9, max: 17},
              domain: [9, 17],
              unit: '%',
            },
            layerIds: ['Percent Population Age 6-9'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 1.2',
          },
          {
            id: 'Percent Population Age 10-14', // matches .csv column name
            label: 'Age 10-14',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 10, max: 16},
              domain: [10, 16],
              unit: '%',
            },
            layerIds: ['Percent Population Age 10-14'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 1.2',
          },
          {
            id: 'Percent Population Age 15-64', // matches .csv column name
            label: 'Age 15-64',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 44, max: 63},
              domain: [44, 63],
              unit: '%',
            },
            layerIds: ['Percent Population Age 15-64'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 1.2',
          },
          {
            id: 'Percent Population Age 65+', // matches .csv column name
            label: 'Age 64+',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 1, max: 11},
              domain: [1, 11],
              unit: '%',
            },
            layerIds: ['Percent Population Age 65+'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 1.2',
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
              defaultRange: { min: 3, max: 9},
              domain: [3, 9],
              unit: '',
            },
            layerIds: ['Average Household Size'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, page 10',
          },
          {
            id: 'Average Share Female Headed Households', // matches .csv column name
            label: 'Average Share Female Headed Households',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 1, max: 36},
              domain: [1, 36],
              unit: '%',
            },
            layerIds: ['Average Share Female Headed Households'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, page 10',
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
    info: '',
    controls: [
      {
        id: 'nigeria-farms',
        label: 'Farms',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-farms'],
        info: '',
      },
      {
        id: 'nigeria-gov-buildings',
        label: 'Government Buildings',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-gov-buildings'],
        info: '',
      },
      {
        id: 'nigeria-post-office',
        label: 'Post Offices',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-post-office'],
        info: '',
      },
      {
        id: 'nigeria-markets',
        label: 'Markets',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-markets'],
        info: '',
      },
      {
        id: 'nigeria-industrial-sites',
        label: 'Industrial Sites',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-industrial-sites'],
        info: '',
      },

    ],
  },
  {
    id: 'mobileData',
    label: 'Mobile Coverage',
    icon: Mobile,
    description: '',
    info: 'Mobile Coverage Data © Collins Bartholomew and GSMA 2020',
    controls: [
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
        id: 'emergencyServices',
        label: 'Emergency Services',
        info: '',
        subcontrols: [
          {
            id: 'nigeria-fire-stations',
            label: 'Fire Stations',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-fire-stations'],
            info: '',
          },
          {
            id: 'nigeria-police-stations',
            label: 'Police Stations',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-police-stations'],
            info: '',
          },
          {
            id: 'nigeria-prisons',
            label: 'Prisons',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-prisons'],
            info: '',
          },
          {
            id: 'nigeria-idp-sites',
            label: 'IDP Sites',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-idp-sites'],
            info: '',
          },
        ],
      },
      {
        id: 'wasteDisposal',
        label: 'Mode of Human Waste Disposal',
        info: '',
        subcontrols: [
          {
            id: 'No Latrine', // matches .csv column name
            label: 'No Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 61},
              domain: [0, 61],
              unit: '%',
            },
            layerIds: ['No Latrine'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.17',
          },
          {
            id: 'Flush Toilet to Sewage/Septic System', // matches .csv column name
            label: 'Flush Toilet to Sewage/Septic System',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 65},
              domain: [0, 65],
              unit: '%',
            },
            layerIds: ['Flush Toilet to Sewage/Septic System'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.17',
          },
          {
            id: 'Flush to Pit Latrine', // matches .csv column name
            label: 'Flush to Pit Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 33},
              domain: [0, 33],
              unit: '%',
            },
            layerIds: ['Flush to Pit Latrine'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.17',
          },
          {
            id: 'Pit Latrine with Slab', // matches .csv column name
            label: 'Pit Latrine with Slab',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 69},
              domain: [0, 69],
              unit: '%',
            },
            layerIds: ['Flush to Pit Latrine'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.17',
          },
          {
            id: 'Open Pit Latrine', // matches .csv column name
            label: 'Open Pit Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 53},
              domain: [0, 53],
              unit: '%',
            },
            layerIds: ['Flush to Pit Latrine'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.17',
          },
        ],
      },
      {
        id: 'drinkingWaterRainySeason',
        label: 'Source of Drinking Water (Rainy Season)',
        info: '',
        subcontrols: [
          // Add layers here
          /*
          {
            id: 'nigeria-water-points',
            label: 'Water Points',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-water-points'],
            info: '',
          },
          */
          {
            id: 'Piped Water (Rainy)', // matches .csv column name
            label: 'Piped Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 13},
              domain: [0, 13],
              unit: '%',
            },
            layerIds: ['Piped Water (Rainy)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.13',
          },
          {
            id: 'Public Tap/Standpipe (Rainy)', // matches .csv column name
            label: 'Public Tap/Standpipe',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 24},
              domain: [0, 24],
              unit: '%',
            },
            layerIds: ['Public Tap/Standpipe (Rainy)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.13',
          },
          {
            id: 'Tube Well/Borehole (Rainy)', // matches .csv column name
            label: 'Tube Well/Borehole',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 8, max: 79},
              domain: [8, 79],
              unit: '%',
            },
            layerIds: ['Tube Well/Borehole (Rainy)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.13',
          },
          {
            id: 'Protected Dug Well/Spring (Rainy)', // matches .csv column name
            label: 'Protected Dug Well/Spring',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 37},
              domain: [0, 37],
              unit: '%',
            },
            layerIds: ['Protected Dug Well/Spring (Rainy)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.13',
          },
          {
            id: 'Unprotected Dug Well/Spring (Rainy)', // matches .csv column name
            label: 'Unprotected Dug Well/Spring',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 66},
              domain: [0, 66],
              unit: '%',
            },
            layerIds: ['Unprotected Dug Well/Spring (Rainy)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.13',
          },
          {
            id: 'Rainwater Collection (Rainy)', // matches .csv column name
            label: 'Rainwater Collection',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 79},
              domain: [0, 79],
              unit: '%',
            },
            layerIds: ['Rainwater Collection (Rainy)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.13',
          },
          {
            id: 'Surface Water (Rainy)', // matches .csv column name
            label: 'Surface Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 24},
              domain: [0, 24],
              unit: '%',
            },
            layerIds: ['Surface Water (Rainy)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.13',
          },
          {
            id: 'Bottled/Sachet Water (Rainy)', // matches .csv column name
            label: 'Bottled/Sachet Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 72},
              domain: [0, 72],
              unit: '%',
            },
            layerIds: ['Bottled/Sachet Water (Rainy)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.13',
          },
        ],
      },
      {
        id: 'drinkingWaterDrySeason',
        label: 'Source of Drinking Water (Dry Season)',
        info: '',
        subcontrols: [
          {
            id: 'nigeria-water-points',
            label: 'Water Points',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-water-points'],
            info: '',
          },
          {
            id: 'Piped Water (Dry)', // matches .csv column name
            label: 'Piped Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 13},
              domain: [0, 13],
              unit: '%',
            },
            layerIds: ['Piped Water (Dry)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.14',
          },
          {
            id: 'Public Tap/Standpipe (Dry)', // matches .csv column name
            label: 'Public Tap/Standpipe',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 24},
              domain: [0, 24],
              unit: '%',
            },
            layerIds: ['Public Tap/Standpipe (Dry)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.14',
          },
          {
            id: 'Tube Well/Borehole (Dry)', // matches .csv column name
            label: 'Tube Well/Borehole',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 15, max: 81},
              domain: [15, 81],
              unit: '%',
            },
            layerIds: ['Tube Well/Borehole (Dry)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.14',
          },
          {
            id: 'Protected Dug Well/Spring (Dry)', // matches .csv column name
            label: 'Protected Dug Well/Spring',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 41},
              domain: [0, 41],
              unit: '%',
            },
            layerIds: ['Protected Dug Well/Spring (Dry)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.14',
          },
          {
            id: 'Unprotected Dug Well/Spring (Dry)', // matches .csv column name
            label: 'Unprotected Dug Well/Spring',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 64},
              domain: [0, 64],
              unit: '%',
            },
            layerIds: ['Unprotected Dug Well/Spring (Dry)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.14',
          },
          {
            id: 'Rainwater Collection (Dry)', // matches .csv column name
            label: 'Rainwater Collection',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5},
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Rainwater Collection (Dry)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.14',
          },
          {
            id: 'Surface Water (Dry)', // matches .csv column name
            label: 'Surface Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 39},
              domain: [0, 39],
              unit: '%',
            },
            layerIds: ['Surface Water (Dry)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.14',
          },
          {
            id: 'Bottled/Sachet Water (Dry)', // matches .csv column name
            label: 'Bottled/Sachet Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 73},
              domain: [0, 73],
              unit: '%',
            },
            layerIds: ['Bottled/Sachet Water (Dry)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.14',
          },
        ],
      },
      {
        id: 'waterPointsTreatement',
        label: 'Water Points and Water Treatment',
        info: '',
        subcontrols: [
          {
            id: 'nigeria-water-points',
            label: 'Water Points',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-water-points'],
            info: '',
          },
          {
            id: 'Treat Water', // matches .csv column name
            label: 'Treat Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20},
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Treat Water'],
            info: 'Percent of households that treat their water. Source: Nigeria Living Standards Survey 2018-2019, Table 7.16',
          },
        ],
      },
      {
        id: 'births',
        label: 'Fertility',
        info: '',
        subcontrols: [
          {
            id: 'Fertility Rate', // matches .csv column name
            label: 'Fertility Rate',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 3, max: 8},
              domain: [3, 8],
              unit: '%',
            },
            layerIds: ['Fertility Rate'],
            info: 'Demographic and Health Survey Nigeria 2019, Table 5.2',
          },

        ],
      },
      {
        id: 'Disability',
        label: 'Disability',
        info: '',
        subcontrols: [
          {
            id: 'Disability', // matches .csv column name
            label: 'Disability',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 6},
              domain: [0, 6],
              unit: '%',
            },
            layerIds: ['Disability'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, page 41',
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
    info:
      'Description: Assets and ownership. ',
    controls: [
      {
        id: 'electronic_appliance',
        label: 'Electronics and Appliances',
        info: '',
        subcontrols: [
          {
            id: 'Sewing Machine', // matches .csv column name
            label: 'Sewing Machine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 2, max: 15},
              domain: [2, 15],
              unit: '%',
            },
            layerIds: ['Sewing Machine'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Stove/Cooker', // matches .csv column name
            label: 'Stove/Cooker',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 2, max: 97},
              domain: [2, 97],
              unit: '%',
            },
            layerIds: ['Stove/Cooker'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Fridge', // matches .csv column name
            label: 'Fridge',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 2, max: 53},
              domain: [2, 53],
              unit: '%',
            },
            layerIds: ['Fridge'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Freezer', // matches .csv column name
            label: 'Freezer',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20},
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Freezer'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Generator', // matches .csv column name
            label: 'Generator',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 52},
              domain: [0, 52],
              unit: '%',
            },
            layerIds: ['Generator'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Fan', // matches .csv column name
            label: 'Fan',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 8, max: 97},
              domain: [8, 97],
              unit: '%',
            },
            layerIds: ['Fan'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Radio', // matches .csv column name
            label: 'Radio',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 26, max: 80},
              domain: [26, 80],
              unit: '%',
            },
            layerIds: ['Radio'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Iron', // matches .csv column name
            label: 'Iron',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 11, max: 85},
              domain: [11, 85],
              unit: '%',
            },
            layerIds: ['Iron'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'TV Set', // matches .csv column name
            label: 'TV Set',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 10, max: 90},
              domain: [10, 90],
              unit: '%',
            },
            layerIds: ['TV Set'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'DVD Player', // matches .csv column name
            label: 'DVD Player',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 3, max: 69},
              domain: [3, 69],
              unit: '%',
            },
            layerIds: ['DVD Player'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Satellite Dish', // matches .csv column name
            label: 'Satellite Dish',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 1, max: 41},
              domain: [1, 41],
              unit: '%',
            },
            layerIds: ['Satellite Dish'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Smartphone', // matches .csv column name
            label: 'Smartphone',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 4, max: 63},
              domain: [4, 63],
              unit: '%',
            },
            layerIds: ['Smartphone'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Regular Mobile Phone', // matches .csv column name
            label: 'Regular Mobile Phone',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 44, max: 91},
              domain: [44, 91],
              unit: '%',
            },
            layerIds: ['Regular Mobile Phone'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          // {
          // id: 'arc',
          // label: 'Population Density (Heatmap)',
          // defaultVisibility: false,
          // legend: 'none',
          // layerIds: ['arc-population-density'],
          // info: 'Source: Arc 2016',
          // },
          // {
          // id: 'fb-population',
          // label: 'Population Density (HD)',
          // defaultVisibility: false,
          // legend: 'none',
          // layerIds: ['fb-population-density'],
          // info: 'Source: Facebook',
          // },
        ],
      },
      {
        id: 'vehicles',
        label: 'Vehicles',
        info: '',
        subcontrols: [
          {
            id: 'Bicycle', // matches .csv column name
            label: 'Bicycle',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 30},
              domain: [0, 30],
              unit: '%',
            },
            layerIds: ['Bicycle'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Motorbike', // matches .csv column name
            label: 'Motorbike',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 2, max: 53},
              domain: [2, 53],
              unit: '%',
            },
            layerIds: ['Motorbike'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'Cars and Other Vehicles', // matches .csv column name
            label: 'Cars and Other Vehicles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 1, max: 15},
              domain: [1, 15],
              unit: '%',
            },
            layerIds: ['Cars and Other Vehicles'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.18',
          },
          {
            id: 'nigeria-filling-stations',
            label: 'Filling Stations',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-filling-stations'],
            info: '',
          },
          // Add layers here
        ],
      },
      {
        id: 'cookstoves',
        label: 'Cookstoves',
        info: '',
        subcontrols: [
          {
            id: '3-Stone/Open Fire Cookstove', // matches .csv column name
            label: '3-Stone/Open Fire Cookstove',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 99},
              domain: [0, 99],
              unit: '%',
            },
            layerIds: ['3-Stone/Open Fire Cookstove'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
          },
          {
            id: 'Biomass Cookstove (Self-Built or Manufactured)', // matches .csv column name
            label: 'Biomass Cookstove (Self-Built or Manufactured)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 48},
              domain: [0, 48],
              unit: '%',
            },
            layerIds: ['Biomass Cookstove (Self-Built or Manufactured)'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
          },
          {
            id: 'LPG/Natural Gas Cookstove', // matches .csv column name
            label: 'LPG/Natural Gas Cookstove',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 58},
              domain: [0, 58],
              unit: '%',
            },
            layerIds: ['LPG/Natural Gas Cookstove'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
          },
          {
            id: 'Kerosene Cookstove', // matches .csv column name
            label: 'Kerosene Cookstove',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 54},
              domain: [0, 54],
              unit: '%',
            },
            layerIds: ['Kerosene Cookstove'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.8',
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
    info: 'Economic Health',
    controls: [
      {
        id: 'unemployment',
        label: 'Unemployment',
        info: '',
        subcontrols: [
          //insert unemployment layers here
          {
            id: 'Households Receiving Remittances', // matches .csv column name
            label: 'Households Receiving Remittances',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 5, max: 82},
              domain: [5, 82],
              unit: '%',
            },
            layerIds: ['Households Receiving Remittances'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, page 61',
          },
          {
            id: 'Electricity is Constraint to Starting Non-Farm Enterprise', // matches .csv column name
            label: 'Electricity is Constraint to Starting Business',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 3, max: 49},
              domain: [3, 49],
              unit: '%',
            },
            layerIds: ['Electricity is Constraint to Starting Non-Farm Enterprise'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 6.6',
          },
          {
            id: 'Electricity is Constraint to Operate/Grow Non-Farm Enterprise', // matches .csv column name
            label: 'Electricity is Constraint to Operate/Grow Business',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 3, max: 51},
              domain: [3, 51],
              unit: '%',
            },
            layerIds: ['Electricity is Constraint to Operate/Grow Non-Farm Enterprise'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 6.6',
          },
        ],
      },
      {
        id: 'roof',
        label: 'Roof Material',
        info: '',
        subcontrols: [
          {
            id: 'Thatch Roof', // matches .csv column name
            label: 'Thatch',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 38},
              domain: [0, 38],
              unit: '%',
            },
            layerIds: ['Thatch Roof'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.5',
          },
          {
            id: 'Corrugated Iron Sheet Roof', // matches .csv column name
            label: 'Corrugated Iron Sheet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 16, max: 97},
              domain: [16, 97],
              unit: '%',
            },
            layerIds: ['Corrugated Iron Sheet Roof'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.5',
          },
          {
            id: 'Asbestos Sheet Roof', // matches .csv column name
            label: 'Asbestos Sheet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 42},
              domain: [0, 42],
              unit: '%',
            },
            layerIds: ['Asbestos Sheet Roof'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.5',
          },
          {
            id: 'Zinc Sheet Roof', // matches .csv column name
            label: 'Zinc Sheet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 74},
              domain: [0, 74],
              unit: '%',
            },
            layerIds: ['Zinc Sheet Roof'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.5',
          },
          {
            id: 'Mud Roof', // matches .csv column name
            label: 'Mud',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 23},
              domain: [0, 23],
              unit: '%',
            },
            layerIds: ['Mud Roof'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.5',
          },
          {
            id: 'Long/Short Span Sheet Roof', // matches .csv column name
            label: 'Long/Short Span Sheet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 19},
              domain: [0, 19],
              unit: '%',
            },
            layerIds: ['Long/Short Span Sheet Roof'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.5',
          },
        ],
      },
      {
        id: 'wall_material',
        label: 'Wall Material',
        info: '',
        subcontrols: [
          {
            id: 'Mud Walls', // matches .csv column name
            label: 'Mud',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 1, max: 82},
              domain: [1, 82],
              unit: '%',
            },
            layerIds: ['Mud Walls'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.4',
          },
          {
            id: 'Brick Walls', // matches .csv column name
            label: 'Brick',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 33},
              domain: [0, 33],
              unit: '%',
            },
            layerIds: ['Brick Walls'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.4',
          },
          {
            id: 'Concrete Walls', // matches .csv column name
            label: 'Concrete',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 11, max: 97},
              domain: [11, 97],
              unit: '%',
            },
            layerIds: ['Concrete Walls'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.4',
          },
          {
            id: 'Wood/Bamboo Walls', // matches .csv column name
            label: 'Wood/Bamboo',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 16},
              domain: [0, 16],
              unit: '%',
            },
            layerIds: ['Wood/Bamboo'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.4',
          },
        ],
      },
      {
        id: 'floor_material',
        label: 'Floor Material',
        info: '',
        subcontrols: [
          {
            id: 'Sand/Dirt/Straw Floor', // matches .csv column name
            label: 'Sand/Dirt/Straw',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 36},
              domain: [0, 36],
              unit: '%',
            },
            layerIds: ['Sand/Dirt/Straw Floor'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.6',
          },
          {
            id: 'Smoothed Mud Floor', // matches .csv column name
            label: 'Smoothed Mud',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 53},
              domain: [0, 53],
              unit: '%',
            },
            layerIds: ['Smoothed Mud Floor'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.6',
          },
          {
            id: 'Smooth Concrete Floor', // matches .csv column name
            label: 'Concrete',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 29, max: 85},
              domain: [29, 85],
              unit: '%',
            },
            layerIds: ['Smoothed Concrete Floor'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.6',
          },
          {
            id: 'Tile Floor', // matches .csv column name
            label: 'Tile',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 27},
              domain: [0, 27],
              unit: '%',
            },
            layerIds: ['Tile Floor'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.6',
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
            id: 'Participation in Wage Labor', // matches .csv column name
            label: 'Participation in Wage Labor',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 24},
              domain: [0, 24],
              unit: '%',
            },
            layerIds: ['Participation in Wage Labor'],
            info: 'See Wage Employment by Industry for breakdown of wage labor by industry. Source: Nigeria Living Standards Survey 2018-2019, Table 4.2',
          },
          {
            id: 'Participation in Farm Labor', // matches .csv column name
            label: 'Participation in Farm Labor',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 63},
              domain: [0, 63],
              unit: '%',
            },
            layerIds: ['Participation in Farm Labor'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 4.2',
          },
          {
            id: 'Participation in Non-Farm Labor', // matches .csv column name
            label: 'Participation in Non-Farm Labor',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 4, max: 37},
              domain: [4, 37],
              unit: '%',
            },
            layerIds: ['Participation in Non-Farm Labor'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 4.2',
          },
          {
            id: 'Participation in Apprenticeship', // matches .csv column name
            label: 'Participation in Apprenticeship',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10},
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Participation in Apprenticeship'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 4.2',
          },
          {
            id: 'Participation in Mixed Labor', // matches .csv column name
            label: 'Participation in Mixed Labor',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 34},
              domain: [0, 34],
              unit: '%',
            },
            layerIds: ['Participation in Mixed Labor'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 4.2',
          },
          {
            id: 'No Participation in Labor Force', // matches .csv column name
            label: 'No Participation in Labor Force',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 14, max: 56},
              domain: [14, 56],
              unit: '%',
            },
            layerIds: ['No Participation in Labor Force'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 4.2',
          },
          {
            id: 'Households with Any Nonfarm Enterprise', // matches .csv column name
            label: 'Households with Any Non-Farm Enterprise',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 29, max: 88},
              domain: [29, 88],
              unit: '%',
            },
            layerIds: ['Households with Any Nonfarm Enterprise'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019, page 61',
          },
        ],
      },
      {
        id: 'industry_wage_employment',
        label: 'Wage Employment by Industry',
        info: 'The percent of individuals who earn a wage from working in a particular sector among all individuals who have wage employment.',
        subcontrols: [
          {
            id: 'Wage Labor Agriculture', // matches .csv column name
            label: 'Wage Employment in Agriculture',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 31},
              domain: [0, 31],
              unit: '%',
            },
            layerIds: ['Wage Employment in Agriculture'],
            info: 'Percent of people who, if they earn a wage, earn a wage in agriculture. Source: Nigeria Living Standards Survey 2018-2019, Table 4.5',
          },
          {
            id: 'Wage Labor Mining/Construction', // matches .csv column name
            label: 'Wage Employment in Mining/Construction',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 18},
              domain: [0, 18],
              unit: '%',
            },
            layerIds: ['Wage Labor Mining/Construction'],
            info: 'Percent of people who, if they earn a wage, earn a wage in mining or construction. Source: Nigeria Living Standards Survey 2018-2019, Table 4.5',
          },
          {
            id: 'Wage Labor Manufacturing', // matches .csv column name
            label: 'Wage Employment in Manufacturing',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 13},
              domain: [0, 13],
              unit: '%',
            },
            layerIds: ['Wage Labor Manufacturing'],
            info: 'Percent of people who, if they earn a wage, earn a wage in manufacturing. Source: Nigeria Living Standards Survey 2018-2019, Table 4.5',
          },
          {
            id: 'Wage Labor Transportation', // matches .csv column name
            label: 'Wage Employment in Transportation',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 11},
              domain: [0, 11],
              unit: '%',
            },
            layerIds: ['Wage Labor Transportation'],
            info: 'Percent of people who, if they earn a wage, earn a wage in transportation. Source: Nigeria Living Standards Survey 2018-2019, Table 4.5',
          },
          {
            id: 'Wage Labor Personal Services', // matches .csv column name
            label: 'Wage Employment in Personal Services',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 53},
              domain: [0, 53],
              unit: '%',
            },
            layerIds: ['Wage Labor Personal Services'],
            info: 'Percent of people who, if they earn a wage, earn a wage in personal services. Source: Nigeria Living Standards Survey 2018-2019, Table 4.5',
          },
          {
            id: 'Wage Labor Education', // matches .csv column name
            label: 'Wage Employment in Education',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 10, max: 50},
              domain: [10, 50],
              unit: '%',
            },
            layerIds: ['Wage Labor Education'],
            info: 'Percent of people who, if they earn a wage, earn a wage in education. Source: Nigeria Living Standards Survey 2018-2019, Table 4.5',
          },
          {
            id: 'Wage Labor Health', // matches .csv column name
            label: 'Wage Employment in Health',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 1, max: 51},
              domain: [1, 51],
              unit: '%',
            },
            layerIds: ['Wage Labor Health'],
            info: 'Percent of people who, if they earn a wage, earn a wage in health. Source: Nigeria Living Standards Survey 2018-2019, Table 4.5',
          },
          {
            id: 'Wage Labor Public Administration', // matches .csv column name
            label: 'Wage Employment in Public Administration',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 4, max: 29},
              domain: [4, 29],
              unit: '%',
            },
            layerIds: ['Wage Labor Public Administration'],
            info: 'Percent of people who, if they earn a wage, earn a wage in public administration. Source: Nigeria Living Standards Survey 2018-2019, Table 4.5',
          },
        ],
      },
      {
        id: 'livestock_fish',
        label: 'Livestock & Fish',
        info: '',
        subcontrols: [
          // Add layers here
        ],
      },
      {
        id: 'permanent_crops',
        label: 'Permanent Crop Growth',
        info: '',
        subcontrols: [
        ],
      },
    ],
  },
]
