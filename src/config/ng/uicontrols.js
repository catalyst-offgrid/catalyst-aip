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
    info: 'Source: UN OCHA',
    controls: [
      {
        id: 'nigeria-states',
        label: 'States',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-states'],
        info: 'Source: UN OCHA',
      },
      {
        id: 'nigeria-lgas',
        label: 'Local Government Areas',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-lgas'],
        info: 'Source: UN OCHA',
      },
      // Website breaks if you remove layers with "id: 'counties'" so code below is work-around. 
      // Bug has been recorded. Fix pending.
      {
        id: 'counties',
        label: 'Wards',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-wards', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: 'Source: UN OCHA',
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
  /*
  {
    id: 'planning',
    label: 'Planning & Programs',
    icon: AdminBoundaries,
    description: '',
    info: '.',
    controls: [
    ]
  },
  */
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
        info: 'Source: Nigeria Living Standards Survey 2018-2019',
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
            label: 'Average National Grid Uptime',
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
            label: 'Average Generator Use',
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
          {
            id: 'Electricity is Constraint to Starting Non-Farm Enterprise', // matches .csv column name
            label: 'Electricity Constrains Business Startup',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 3, max: 49},
              domain: [3, 49],
              unit: '%',
            },
            layerIds: ['Electricity is Constraint to Starting Non-Farm Enterprise'],
            info: 'Percent of respondents who reported that lack of electricity constains their ability to start a business. Source: Nigeria Living Standards Survey 2018-2019, Table 6.6',
          },
          {
            id: 'Electricity is Constraint to Operate/Grow Non-Farm Enterprise', // matches .csv column name
            label: 'Electricity Constrains Business Growth',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 3, max: 51},
              domain: [3, 51],
              unit: '%',
            },
            layerIds: ['Electricity is Constraint to Operate/Grow Non-Farm Enterprise'],
            info: 'Percent of respondents who reported that lack of electricity constains their ability to operate or grow a business. Source: Nigeria Living Standards Survey 2018-2019, Table 6.6',
          },
        ],
      },
      {
        id: 'grid',
        label: 'Grid Electricity',
        info: 'Source: Global Energy Monitor, GridFinder',
        subcontrols: [
          {
            id: 'nigeria-natural-gas-power-plants',
            label: 'Natural Gas Power Plants',
            defaultVisibility: false,
            legend: { type: 'circle', color: colors.accent3 },
            layerIds: ['nigeria-natural-gas-power-plants'],
            info: 'Source: Global Energy Monitor Global Gas Plant Tracker',
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
      /*
      {
        id: 'mini-grid',
        label: 'Mini Grid Electricity',
        info: '',
        subcontrols: [

        ],
      },
      */
      {
        id: 'cookstoves',
        label: 'Cookstoves',
        info: 'Source: Nigeria Living Standards Survey 2018-2019',
        subcontrols: [
          {
            id: '3-Stone/Open Fire Cookstove', // matches .csv column name
            label: '3-Stone/Open Fire',
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
            label: 'Biomass (Self-Built or Manufactured)',
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
            label: 'LPG/Natural Gas',
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
            label: 'Kerosene',
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
      {
        id: 'cooking',
        label: 'Cooking Fuels',
        info: 'Source: Nigeria Living Standards Survey 2018-2019',
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
        id: 'solar-penetration',
        label: 'Stand Alone Solar Market Penetration',
        info: 'Includes data for 10 states only: Abia, Bauchi, Cross River, Ebonyi, Edo, Ekiti, Kano, Kogi, Oyo, and Plateau. Source: Stand-Alone Off-Grid Solar Market Research Nigeria, page 7',
        subcontrols: [
          {
            id: 'SAS Penetration', // matches .csv column name
            label: 'Stand Alone Solar (SAS) Penetration',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 4, max: 33 },
              domain: [4, 33],
              unit: '%',
            },
            layerIds: ['SAS Penetration'],
            info: 'Percent of trade outlets that stock any solar product. Source: Stand-Alone Off-Grid Solar Market Research Nigeria, page 7',
          },
          {
            id: 'Solar Lantern Share SAS Penetration', // matches .csv column name
            label: 'Solar Lantern Share of SAS Penetration',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 37, max: 84 },
              domain: [37, 84],
              unit: '%',
            },
            layerIds: ['SAS Penetration'],
            info: 'Percent of stand alone solar (SAS) products that are solar laterns at trade outlets that stock any solar product. Source: Stand-Alone Off-Grid Solar Market Research Nigeria, page 7',
          },
          {
            id: 'SHS Share SAS Penetration', // matches .csv column name
            label: 'SHS Share of SAS Penetration',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 4, max: 29 },
              domain: [4, 29],
              unit: '%',
            },
            layerIds: ['SHS Share of SAS Penetration'],
            info: 'Percent of stand alone solar (SAS) products that are solar home systems (SHS) at trade outlets that stock any solar product. Source: Stand-Alone Off-Grid Solar Market Research Nigeria, page 7',
          },
          {
            id: 'Solar Panel Share SAS Penetration', // matches .csv column name
            label: 'Solar Panel Share of SAS Penetration',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 3, max: 52 },
              domain: [3, 52],
              unit: '%',
            },
            layerIds: ['Solar Panel Share SAS Penetration'],
            info: 'Percent of stand alone solar (SAS) products that are solar panels at trade outlets that stock any solar product. Source: Stand-Alone Off-Grid Solar Market Research Nigeria, page 7',
          },
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
      /*
      {
        id: 'finance',
        label: 'Financial Services',
        info: 'Locations of Banks, Micro-finances and SACCOs.',
        subcontrols: [
        ],
      },
      */
      {
        id: 'healthFacs',
        label: 'Health Facilities',
        info:
          'Displays the locations of the health facilities in Nigeria by the facility type. Source: eHealth Africa',
        subcontrols: [
          {
            id: 'nigeria-health-centers',
            label: 'Health Centers',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-health-centers'],
            info: 'Source: eHealth Africa',
          },
          {
            id: 'nigeria-compHC-cottage-hospitals',
            label: 'Comprehensive HCs/Cottage Hospitals',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-compHC-cottage-hospitals'],
            info: 'Source: eHealth Africa',
          },
          {
            id: 'nigeria-hospitals',
            label: 'Hospitals',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-hospitals'],
            info: 'Source: eHealth Africa',
          },
          {
            id: 'nigeria-dispensaries',
            label: 'Dispensaries',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-dispensaries'],
            info: 'Source: eHealth Africa',
          },
          {
            id: 'nigeria-fed-health-facilities',
            label: 'Federal Health Facilities',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-fed-health-facilities'],
            info: 'Source: eHealth Africa',
          },
          {
            id: 'nigeria-maternity-homes',
            label: 'Maternity Homes',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-maternity-homes'],
            info: 'Source: eHealth Africa',
          },
        ],
      },
      {
        id: 'education',
        label: 'Education Facilities',
        info:
          'Displays the locations of the education facilities in Nigeria by the facility type. Source: Nigeria NMIS facility database',
        subcontrols: [
          {
            id: 'nigeria-preprimary',
            label: 'Pre-Primary Schools',
            defaultVisibility: false,
            legend: { type: 'circle', color: colors.accent3 },
            layerIds: ['nigeria-preprimary'],
            info: 'Source: Nigeria NMIS facility database',
          },
          {
            id: 'nigeria-reg-primary',
            label: 'Primary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-reg-primary'],
            info: 'Source: Nigeria NMIS facility database',
          },
          {
            id: 'nigeria-standard-primary',
            label: 'Standard Primary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-standard-primary'],
            info: 'Source: Nigeria NMIS facility database',
          },
          {
            id: 'nigeria-secondary',
            label: 'Secondary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-secondary'],
            info: 'Source: Nigeria NMIS facility database',
          },
          {
            id: 'nigeria-tertiary',
            label: 'Tertiary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-tertiary'],
            info: 'Source: Nigeria NMIS facility database',
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
          'Sources: Facebook Data for Good, GRID3, Nigeria Living Standards Survey 2018-2019',
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
            info: 'Source: Facebook Data for Good',
          },
          {
            id: 'nigeria-built-extent',
            label: 'Extent of Build-Up Areas',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-built-extent'],
            info: 'Source: GRID3',
          },
          {
            id: 'nigeria-comm-risk',
            label: 'Communication Access Risk',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-comm-risk'],
            info: 'Source: GRID3',
          },
        ],
      },
      {
        id: 'ageRanges',
        label: 'Age Ranges',
        info: 'Breakdown of states by the age of their population. Source: Nigeria Living Standards Survey 2018-2019.',
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
          'Descriptive statistics of the households located in each state. Source: Nigeria Living Standards Survey 2018-2019',
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
            label: 'Avg Share Female Headed Households',
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
    info: 'Sources: GRID3, eHealth Africa',
    controls: [
      {
        id: 'nigeria-farms',
        label: 'Farms',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-farms'],
        info: 'Source: eHealth Africa',
      },
      {
        id: 'nigeria-gov-buildings',
        label: 'Government Buildings',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-gov-buildings'],
        info: 'Source: eHealth Africa',
      },
      {
        id: 'nigeria-post-office',
        label: 'Post Offices',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-post-office'],
        info: 'Source: eHealth Africa',
      },
      {
        id: 'nigeria-markets',
        label: 'Markets',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-markets'],
        info: 'Source: eHealth Africa',
      },
      {
        id: 'nigeria-industrial-sites',
        label: 'Industrial Sites',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-industrial-sites'],
        info: 'Source: GRID3',
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
      {
        id: 'All',
        label: 'All Networks',
        info: 'Coverage area for all networks. Stronger color suggests multiple networks. Source: Collins Batholomew and GSMA 2020',
        subcontrols: [
          {
            id: 'NG-all-2G',
            label: 'All 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['NG-all-2G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },

          {
            id: 'NG-all-3G',
            label: 'All 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['NG-all-3G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-MTN-4G',
            label: 'All 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['NG-all-4G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },

        ],
      },
      {
        id: 'MTN',
        label: 'MTN',
        info: 'Coverage on MTN. Source: Collins Batholomew and GSMA 2020',
        subcontrols: [
          {
            id: 'NG-MTN-2G',
            label: 'MTN 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['NG-MTN-2G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-MTN-3G',
            label: 'MTN 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['NG-MTN-3G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-MTN-4G',
            label: 'MTN 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['NG-MTN-4G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
        ],
      },
      {
        id: 'glo_mobile',
        label: 'Glo Mobile (Globacom)',
        info: 'Coverage on the Glo Mobile network. Source: Collins Batholomew and GSMA 2020',
        subcontrols: [
          {
            id: 'NG-Glo-Mobile-Globacom-2G',
            label: 'Glo Mobile (Globacom) 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['NG-Glo-Mobile-Globacom-2G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-Glo-Mobile-Globacom-3G',
            label: 'Glo Mobile (Globacom) 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['NG-Glo-Mobile-Globacom-3G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-Glo-Mobile-Globacom-4G',
            label: 'Glo Mobile (Globacom) 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['NG-Glo-Mobile-Globacom-4G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
        ],
      },

      {
        id: 'Airtel',
        label: 'Airtel (Bharti Airtel)',
        info: 'Coverage on Airtel mobile network. Source: Collins Batholomew and GSMA 2020',
        subcontrols: [
          {
            id: 'NG-Airtel-2G',
            label: 'Airtel (Bharti Airtel) 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['NG-Airtel-2G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-Airtel-3G',
            label: 'Airtel (Bharti Airtel) 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['NG-Airtel-3G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-Airtel-4G',
            label: 'Airtel (Bharti Airtel) 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['NG-Airtel-4G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
        ],
      },

      {
        id: '9mobile',
        label: '9mobile (EMTS)',
        info: 'Coverage on 9mobile network. Source: Collins Batholomew and GSMA 2020',
        subcontrols: [
          {
            id: 'NG-9mobile-2G',
            label: '9mobile (EMTS) 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['NG-9mobile-2G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-9mobile-3G',
            label: '9mobile (EMTS) 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['NG-9mobile-3G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-9mobile-4G',
            label: '9mobile (EMTS) 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['NG-9mobile-4G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
        ],
      },
      {
        id: 'ntel',
        label: 'ntel (NatCom)',
        info: 'Coverage on ntel (NatCom) network. Source: Collins Batholomew and GSMA 2020',
        subcontrols: [
          {
            id: 'NG-ntel-2G',
            label: 'ntel (NatCom) 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['NG-ntel-2G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-ntel-3G',
            label: 'ntel (NatCom) 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['NG-ntel-3G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'NG-ntel-4G',
            label: 'ntel (NatCom) 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['NG-ntel-4G'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
        ],
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
        id: 'emergencyServices',
        label: 'Emergency Services',
        info: 'Source: GRID3',
        subcontrols: [
          {
            id: 'nigeria-fire-stations',
            label: 'Fire Stations',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-fire-stations'],
            info: 'Source: GRID3',
          },
          {
            id: 'nigeria-police-stations',
            label: 'Police Stations',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-police-stations'],
            info: 'Source: GRID3',
          },
          {
            id: 'nigeria-prisons',
            label: 'Prisons',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-prisons'],
            info: 'Source: GRID3',
          },
          {
            id: 'nigeria-idp-sites',
            label: 'IDP Sites',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-idp-sites'],
            info: 'Source: GRID3',
          },
        ],
      },
      {
        id: 'wasteDisposal',
        label: 'Mode of Human Waste Disposal',
        info: 'Source: Nigeria Living Standards Survey 2018-19',
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
        info: 'Source: Nigeria Living Standards Survey 2018-19',
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
        info: 'Source: Nigeria Living Standards Survey 2018-19',
        subcontrols: [

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
        info: 'Sources: Nigeria Living Standards Survey 2018-19, GRID3',
        subcontrols: [
          {
            id: 'nigeria-water-points',
            label: 'Water Points',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-water-points'],
            info: 'Source: GRID3',
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
        info: 'Source: Nigeria Living Standards Survey 2018-19',
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
            info: 'Demographic and Health Survey Nigeria 2018, Table 5.2',
          },

        ],
      },
      {
        id: 'Disability',
        label: 'Disability',
        info: 'Source: Nigeria Living Standards Survey 2018-19',
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
        info: 'Source: Nigeria Living Standards Survey 2018-19',
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
        info: 'Source: Nigeria Living Standards Survey 2018-19',
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
        label: 'Unemployment & Remittances',
        info: 'Source: National Bureau of Statistics, Labor Force Statistics: Unempoyment and Underemployment Report (Q4 2020) and Nigeria Living Standards Survey 2018-19',
        subcontrols: [
          //insert unemployment layers here
          {
            id: 'Unemployment', // matches .csv column name
            label: 'Unemployment Rate',
            legend: {
              type: 'gradient',
              defaultRange: { min: 11, max: 57},
              domain: [11, 57],
              unit: '%',
            },
            layerIds: ['Unemployment'],
            info: 'National Bureau of Statistics, Labor Force Statistics: Unempoyment and Underemployment Report (Q4 2020)',
          },
          {
            id: 'Underemployment', // matches .csv column name
            label: 'Underemployment Rate',
            legend: {
              type: 'gradient',
              defaultRange: { min: 4, max: 44},
              domain: [4, 44],
              unit: '%',
            },
            layerIds: ['Unemployment'],
            info: 'National Bureau of Statistics, Labor Force Statistics: Unempoyment and Underemployment Report (Q4 2020)',
          },
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
        ],
      },
      {
        id: 'relative_wealth_index',
        label: 'Relative Wealth Index',
        info: 'The Relative Wealth Index predicts the relative standard of living within countries using privacy protecting connectivity data, satellite imagery, and other novel data sources. Source: Meta Data For Good',
        subcontrols: [
          //insert unemployment layers here
          {
            id: 'nga_rwi_-2_to_-1pt5',
            label: 'RWI -2 to -1.5',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_-2_to_-1pt5'],
            info: 'RWI range inclusive of -2 to -1.501, Source: Meta Data for Good',
          },
          {
            id: 'nga_rwi_-1pt5_to_-1',
            label: 'RWI -1.5 to -1',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_-1pt5_to_-1'],
            info: 'RWI range inclusive of -1.5 to -1.001, Source: Meta Data for Good',
          },
          {
            id: 'nga_rwi_-1_to_-0pt5',
            label: 'RWI -1 to -0.5',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_-1_to_-0pt5'],
            info: 'RWI range inclusive of -1 to -0.501, Source: Meta Data for Good',
          },
          {
            id: 'nga_rwi_-0pt5_to_0',
            label: 'RWI -0.5 to 0',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_-0pt5_to_0'],
            info: 'RWI range inclusive of -0.5 to -0.001, Source: Meta Data for Good',
          },
          {
            id: 'nga_rwi_0_to_0pt5',
            label: 'RWI 0 to 0.5',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_0_to_0pt5'],
            info: 'RWI range inclusive of 0 to 0.499, Source: Meta Data for Good',
          },
          {
            id: 'nga_rwi_0pt5_to_1',
            label: 'RWI 0.5 to 1',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_0pt5_to_1'],
            info: 'RWI range inclusive of 0.5 to 0.999, Source: Meta Data for Good',
          },
          {
            id: 'nga_rwi_1_to_1pt5',
            label: 'RWI 1 to 1.5',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_1_to_1pt5'],
            info: 'RWI range inclusive of 1 to 1.499, Source: Meta Data for Good',
          },
          {
            id: 'nga_rwi_1pt5_to_2',
            label: 'RWI 1.5 to 2',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_1pt5_to_2'],
            info: 'RWI range inclusive of 1.5 to 2, Source: Meta Data for Good',
          },
          /*
          {
            id: 'nga_rwi_-0.5_to_0',
            label: 'RWI -0.5 to 0',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nga_rwi_-0.5_to_0'],
            info: 'Source: Meta Data for Good',
          },
          */
        ],
      },
      {
        id: 'roof',
        label: 'Roof Material',
        info: 'Source: Nigeria Living Standards Survey 2018-2019',
        subcontrols: [
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
        info: 'Source: Nigeria Living Standards Survey 2018-2019',
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

        ],
      },
      {
        id: 'floor_material',
        label: 'Floor Material',
        info: 'Source: Nigeria Living Standards Survey 2018-2019',
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
        info: 'Source: Nigeria Living Standards Survey 2018-2019',
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
            label: 'Households with Non-Farm Enterprise',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 29, max: 88},
              domain: [29, 88],
              unit: '%',
            },
            layerIds: ['Households with Any Nonfarm Enterprise'],
            info: 'Households with any non-farm enterprise. Source: Nigeria Living Standards Survey 2018-2019, page 61',
          },
        ],
      },
      {
        id: 'industry_wage_employment',
        label: 'Wage Employment by Industry',
        info: 'The percent of individuals who earn a wage from working in a particular sector among all individuals who have wage employment. Source: Nigeria Living Standards Survey 2018-2019',
        subcontrols: [
          {
            id: 'Wage Labor Agriculture', // matches .csv column name
            label: 'Agriculture',
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
            label: 'Mining/Construction',
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
            label: 'Manufacturing',
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
            label: 'Transportation',
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
            label: 'Personal Services',
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
            label: 'Education',
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
            label: 'Health',
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
            label: 'Public Administration',
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
