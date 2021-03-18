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
      {
        id: 'uganda-borders',
        label: 'Borders',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-borders'],
        info: 'Country boundaries',
      },
      {
        id: 'uganda-sub-regions',
        label: 'Sub-Regions',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-sub-regions'],
        info: 'Sub regions',
      },
      {
        id: 'uganda-roads',
        label: 'Road Network',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-roads'],
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
            id: 'uganda-mobile-money',
            label: 'Mobile Money Agents',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-mobile-money'],
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
            id: 'uganda-hospital',
            label: 'Hospitals',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-hospital'],
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
            id: 'uganda-schools',
            label: 'Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-schools'],
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
          'Displays where the people of Kenya live and the patterns in their movement.',
        subcontrols: [
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
        id: 'wasteDisposal',
        label: 'Mode of Human Waste Disposal',
        info: '',
        subcontrols: [
          // {
          // id: 'arc',
          // label: 'Population Density (Heatmap)',
          // defaultVisibility: false,
          // legend: 'none',
          // layerIds: ['arc-population-density'],
          // info: 'Source: Arc 2016',
          // },
        ],
      },
      {
        id: 'drinkingWater',
        label: 'Source of Drinking Water',
        info: '',
        subcontrols: [
          // Add layers here
        ],
      },
      {
        id: 'births',
        label: 'Births',
        info: '',
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
    info: 'Assets and ownership.',
    controls: [
      {
        id: 'electronic_appliance',
        label: 'Electronics and Appliances',
        info: '',
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
        info: '',
        subcontrols: [
          // Add layers here
        ],
      },
      {
        id: 'Disability',
        label: 'Disability',
        info: '',
        subcontrols: [
          // Add layers here
        ]
      }
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
        id: 'unemployment',
        label: 'Unemployment',
        info: '',
        subcontrols: [
          //insert unemployment layers here
        ]
      },
      {
        id: 'roof',
        label: 'Roof Material',
        info: '',
        subcontrols: [
          // Add layers here
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
        id: 'wall_material',
        label: 'Wall Material',
        info: '',
        subcontrols: [
          // Add layers here
        ],
      },
      {
        id: 'floor_material',
        label: 'Floor Material',
        info: '',
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
        info: '',
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
          // Add layers here
        ],
      },
    ],
  },
]
