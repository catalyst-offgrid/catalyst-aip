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
    info: 'Administrative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'counties',
        label: 'Counties',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['counties', 'admin-1-boundary', 'admin-1-boundary-bg'],
        // Is this correct for Nigeria? (comment by Kurt Oct 11, 2021)
        info: 'Source: Kenya Independent Electoral and Boundaries Commission (IEBC)',
      },
      {
        id: 'nigeria-lgas',
        label: 'Local Government Areas',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-lgas'],
        info: '',
      },
      {
        id: 'nigeria-states',
        label: 'States',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-states'],
        info: '',
      },
      {
        id: 'nigeria-wards',
        label: 'Wards',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['nigeria-wards'],
        info: '',
      },
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
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.10',
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
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.10',
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
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.10',
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
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.10',
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
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 7.10',
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
            info: 'Measured in hours per 24 hour day; Source: Nigeria Living Standards Survey 2018-2019, Table 7.12',
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
            info: 'Measured in hours per 24 hour day; Source: Nigeria Living Standards Survey 2018-2019, Table 7.12',
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
          'Displays the locations of the health facilities in Kenya by the facility type.',
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
          'Displays the locations of the education facilities in Kenya by the facility type.',
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
          {
            id: 'nigeria-junior-secondary-schools',
            label: 'Junior Secondary Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-junior-secondary-schools'],
            info: 'Includes schools that have highest level of junior secondary. For example, schools with only junior secondary levels OR primary and junior secondary levels are both displayed.',
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
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
        ],
      },
      {
        id: 'drinkingWater',
        label: 'Source of Drinking Water',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
          {
            id: 'nigeria-water-points',
            label: 'Water Points',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-water-points'],
            info: '',
          },
        ],
      },
      {
        id: 'births',
        label: 'Births',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
        ],
      },
      {
        id: 'Disability',
        label: 'Disability',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
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
      'Description: Assets and ownership. Source: 2019 Kenya Population and Housing Census',
    controls: [
      {
        id: 'electronic_appliance',
        label: 'Electronics and Appliances',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
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
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
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
        label: 'Unemployment',
        info: 'Source: Nigeria Living Standards Survey 2018-2019',
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
        ],
      },
      {
        id: 'roof',
        label: 'Roof Material',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
        ],
      },
      {
        id: 'wall_material',
        label: 'Wall Material',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
        ],
      },
      {
        id: 'floor_material',
        label: 'Floor Material',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
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
        info: 'Source: 2019 Kenya Population and Housing Census',
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
            info: 'Source: Nigeria Living Standards Survey 2018-2019, Table 4.2',
          },
          {
            id: 'Households with Any Nonfarm Enterprise', // matches .csv column name
            label: 'Households with Any Nonfarm Enterprise',
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
        id: 'livestock_fish',
        label: 'Livestock & Fish',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
        ],
      },
      {
        id: 'permanent_crops',
        label: 'Permanent Crop Growth',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
        ],
      },
    ],
  },
]
