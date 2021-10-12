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
        id: 'lighting',
        label: 'Lighting',
        info: '',
        subcontrols: [
        ],
      },
      {
        id: 'cooking',
        label: 'Cooking Fuels',
        info: '',
        subcontrols: [
        ],
      },
      {
        id: 'grid',
        label: 'Grid Electricity',
        info: '',
        subcontrols: [
          {
            id: 'National Grid', // matches .csv column name
            label: 'Percent Connected to National Grid',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 19, max: 99},
              domain: [19, 99],
              unit: '%',
            },
            layerIds: ['National Grid'],
            info: 'Source: Nigeria Living Standards Survey 2018-2019',
          },
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
            id: 'nigeria-healthsites',
            label: 'Healthsites',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['nigeria-healthsites'],
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
            legend: 'none',
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
          // Add layers here
        ],
      },
      {
        id: 'householdChar',
        label: 'Household Characteristics',
        info:
          'Descriptive statistics of the households located in each region.',
        subcontrols: [
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
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          //insert unemployment layers here
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
