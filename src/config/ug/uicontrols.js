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
        id: 'counties', // Was uganda-borders
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
        id: 'uganda-regions',
        label: 'Regions',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-regions'],
        info: '',
      },
      {
        id: 'uganda-districts',
        label: 'Districts',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-districts'],
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
        subcontrols: [],
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
            id: 'uganda-substations',
            label: 'Substations',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-substations'],
            info: '',
          },
          {
            id: 'uganda-transmission',
            label: 'Transmission Lines',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-transmission'],
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
            id: 'uganda-mobile-money',
            label: 'Mobile Money Agents',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-mobile-money'],
            info: '',
          },
          {
            id: 'uganda-banks',
            label: 'Banks',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['uganda-banks'],
            info: '',
          },
          {
            id: 'uganda-sacco',
            label: 'SACCO',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['uganda-sacco'],
            info: '',
          },
          {
            id: 'uganda-atm',
            label: 'ATM',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['uganda-atm'],
            info: '',
          },
          {
            id: 'uganda-bureau-de-change',
            label: 'Bureau de Change',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['uganda-bureau-de-change'],
            info: '',
          },
          {
            id: 'uganda-microfinance',
            label: 'Microfinance',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['uganda-microfinance'],
            info: '',
          },
          {
            id: 'uganda-money-transfer',
            label: 'Money Transfer',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['uganda-money-transfer'],
            info: '',
          },
          {
            id: 'uganda-post-office',
            label: 'Post Office',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['uganda-post-office'],
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
          {
            id: 'uganda-clinics',
            label: 'Clinics',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-clinics'],
            info: '',
          },
          {
            id: 'uganda-dentist',
            label: 'Dentist',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-dentist'],
            info: '',
          },
          {
            id: 'uganda-health-post',
            label: 'Health Post',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-health-post'],
            info: '',
          },
          {
            id: 'uganda-pharmacy',
            label: 'Pharmacy',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-pharmacy'],
            info: '',
          },
          {
            id: 'uganda-doctors',
            label: 'Doctors',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-doctors'],
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
            id: 'uganda-colleges',
            label: 'Colleges',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-colleges'],
            info: '',
          },
          {
            id: 'uganda-schools',
            label: 'Schools',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-schools'],
            info: '',
          },
          {
            id: 'uganda-kindergarten',
            label: 'Kindergarten',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-kindergarten'],
            info: '',
          },
          {
            id: 'uganda-university',
            label: 'University',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['uganda-university'],
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
        id: 'uganda-roads',
        label: 'Road Network',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['uganda-roads'],
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
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-africell-3g'],
            info: '',
          },
          {
            id: 'uganda-africell-4g',
            label: 'Africell 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
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
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-airtel-3g'],
            info: '',
          },
          {
            id: 'uganda-airtel-4g',
            label: 'Airtel 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
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
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['uganda-mtn-3g'],
            info: '',
          },
          {
            id: 'uganda-mtn-4g',
            label: 'MTN 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
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
            legend: { type: 'dot', color: colors.accent1 },
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
