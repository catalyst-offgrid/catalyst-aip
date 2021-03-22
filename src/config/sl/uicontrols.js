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
        id: 'counties',
        label: 'Sub-Regions',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['counties'],
        info: 'Sub regions',
      },
      {
        id: 'sierra-leone--districts',
        label: 'Districts',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['sierra-leone-districts'],
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
        subcontrols: [],
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
      {
        id: 'mini-grid',
        label: 'Mini Grid Electricity',
        info: '',
        subcontrols: [],
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
        id: 'popAndMovement',
        label: 'Population and Movement',
        info:
          'Displays where the people of Kenya live and the patterns in their movement.',
        subcontrols: [],
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
        subcontrols: [],
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
        id: 'unemployment',
        label: 'Unemployment',
        info: '',
        subcontrols: [
          //insert unemployment layers here
        ],
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
