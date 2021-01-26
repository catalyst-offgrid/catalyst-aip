import { AdminBoundaries, Energy, Population, Public, Health, Placeholder, Mobile, EconHealth, HHAsset, EconAct} from '../../icons'
import theme from '../theme'
const { colors } = theme

export default [
  {
    id: 'admin',
    label: 'Administrative Boundaries',
    icon: AdminBoundaries,
	description:'',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'counties',
        label: 'Counties',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['counties', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: 'Counties',
      },
      {
        id: 'sub-counties',
        label: 'Sub-Counties',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['sub-counties'],
        info: 'Sub Counties',
      },
      {
        id: 'wards',
        label: 'Wards',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['wards'],
        info: 'Wards',
      },
    ],
  },
  {
    id: 'energy',
    label: 'Energy',
    icon: Energy,
	description:'',
    info: 'Information on Energy Sources.',
    controls: [
      {
        id: 'lighting',
        label: 'Lighting',
        info: '',
        subcontrols: [
          {
            id: 'Main Electricity', // matches .csv column name
            label: 'Grid Connection',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 100 },
              domain: [0, 100],
              unit: '%',
            },
			color: colors.accent1,
            layerIds: ['Main Electricity'],
            info: 'Percentage of households in each area that are lit by electricity from a grid connection. <br> Here is how.',
          },
          {
            id: 'Low-Quality Stopgap Total', // matches .csv column name
            label: 'Low-Quality Stopgap (Total)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 100 },
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
            label: 'Kerosene Pressure Lamp',
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
            label: 'Kerosene Lantern',
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
            label: 'Kerosene Tin Lamp',
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
            label: 'Solar System',
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
            label: 'Solar Lantern',
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
            label: 'Dry-Cell Powered Torch',
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
              defaultRange: { min: 0, max: 100 },
              domain: [0, 100],
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
            legend: { type: 'line', color: colors.highlight },
            layerIds: ['gridfinder'],
            info: 'Source: GridFinder',
          },
          {
            id: 'transmission_lines_11kv',
            label: 'Transmission Lines 11kv',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent9 },
            layerIds: ['transmission_lines_11kv'],
            info: 'Source: KPLC',
          },
          {
            id: 'transmission_lines_66kv',
            label: 'Transmission Lines 66kv',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent10 },
            layerIds: ['transmission_lines_66kv'],
            info: 'Source: KPLC',
          },
          {
            id: 'transmission_lines_220kv',
            label: 'Transmission Lines 220kv',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent11 },
            layerIds: ['transmission_lines_220kv'],
            info: 'Source: KPLC',
          },
        ],
      },
      {
        id: 'mini-grid',
        label: 'Mini Grid Electricity',
        info: '',
        subcontrols: [
          {
            id: 'mini-grids_under_development',
            label: 'Mini-grids Under Development',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['mini-grids_under_development'],
            info: '',
          },
          {
            id: 'existing_mini-grids',
            label: 'Existing Mini-Grids',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['existing_mini-grids'],
            info: '',
          },
          {
            id: 'proposed_kosap_mini-grids',
            label: 'Proposed KOSAP Mini-Grids',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['proposed_kosap_mini-grids'],
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
	description:'',
    info:
      'Locations of Financial Services, Schools, Doctors, Hospitals and other Health Institutions.',
    controls: [
      {
        id: 'finance',
        label: 'Financial Services',
        info: 'Locations of Banks, Micro-finances and SACCOs.',
        subcontrols: [
          {
            id: 'banks',
            label: 'Banks',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent5 },
            layerIds: ['banks'],
            info: 'Source: OSM',
          },
          {
            id: 'mfi',
            label: 'MFIs',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent6 },
            layerIds: ['mfi'],
            info: '',
          },
          {
            id: 'sacco',
            label: 'SACCOs',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['sacco'],
            info: '',
          },
        ],
      },
      {
        id: 'healthFacs',
        label: 'Health Facilities',
        info: 'Displays the locations of the health facilities in Kenya by the facility type.',
        subcontrols: [
          {
            id: 'health_type1',
            label: 'District & Sub-District Hospitals',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['health_type1'],
            info: '',
          },
          {
            id: 'health_type2',
            label: 'Provincial Hospitals',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent7 },
            layerIds: ['health_type2'],
            info: '',
          },
          {
            id: 'health_type3',
            label: 'Health Centers',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['health_type3'],
            info: '',
          },
          {
            id: 'health_type4',
            label: 'Dispensaries',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['health_type4'],
            info: '',
          },
        ],
      },
	  {
        id: 'education',
        label: 'Education Facilities',
        info: 'Displays the locations of the education facilities in Kenya by the facility type.',
        subcontrols: [
		{
			id: 'all_education',
			label: 'All Education Facilities',
			defaultVisibility: false,
			legend: { type: 'dot', color: colors.charmpink },
			layerIds: ['all_education'],
			info: '',
		},
		{
			id: 'ke_kindergarten',
			label: 'Kindergartens',
			defaultVisibility: false,
			legend: { type: 'dot', color: colors.accent1 },
			layerIds: ['ke_kindergarten'],
			info: '',
		},
		{
			id: 'ke_schools',
			label: 'Schools',
			defaultVisibility: false,
			legend: { type: 'dot', color: colors.accent2},
			layerIds: ['ke_schools'],
			info: '',
		},
				{
			id: 'ke_colleges',
			label: 'Colleges',
			defaultVisibility: false,
			legend: { type: 'dot', color: colors.accent3},
			layerIds: ['ke_colleges'],
			info: '',
		},
				{
			id: 'ke_universities',
			label: 'Universities',
			defaultVisibility: false,
			legend: { type: 'dot', color: colors.accent4},
			layerIds: ['ke_universities'],
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
	description:'',
    info: 'Population density, demographic statistics and Night Lights.',
    controls: [
	{
        id: 'popAndMovement',
        label: 'Population and Movement',
        info: 'Displays where the people of Kenya live and the patterns in their movement.',
        subcontrols: [
		{
			id: 'arc',
			label: 'Population Density (Heatmap)',
			defaultVisibility: false,
			legend: 'none',
			layerIds: ['arc-population-density'],
			info: 'Source: Arc 2016',
		},
		{
			id: 'fb-population',
			label: 'Population Density (HD)',
			defaultVisibility: false,
			legend: 'none',
			layerIds: ['fb-population-density'],
			info: 'Source: Facebook',
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
        info: 'Descriptive statistics of the households located in each region.',
        subcontrols: [	
		// Add layers here
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
    description:'',
	info:
      'Mobile Coverage Data © Collins Bartholomew and GSMA 2020',
	controls: [
	  {
        id: 'allCarrier',
        label: 'All Carriers',
        info: 'Coverage from all carriers as self reported by the carriers in survey responses.',
        subcontrols: [
          {
            id: 'ke_mobile_2g',
            label: 'Kenya 2G Coverage',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['ke_mobile_2g'],
            info: '',
          }, 
		  {
            id: 'all3g',
            label: 'Kenya 3G Coverage',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['ke_mobile_3g'],
            info: '',
          }, 
        ],
      },
      {
        id: 'airtel',
        label: 'AirTel',
        info: 'Coverage on the AirTel Network.',
        subcontrols: [
          {
            id: 'airtel2g',
            label: 'AirTel 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['mobile_data_airtel_2g'],
            info: '',
          }, 
		  {
            id: 'airtel3g',
            label: 'AirTel 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['mobile_data_airtel_3g'],
            info: '',
          }, 
		  {
            id: 'airtel4g',
            label: 'AirTel 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['mobile_data_airtel_4g'],
            info: '',
          }, 
        ],
      },
      {
        id: 'orange',
        label: 'Orange',
        info: 'Coverage on the Orange (now Telkom) Network',
        subcontrols: [
          {
            id: 'orange2g',
            label: 'Orange 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['mobile_data_orange_2g'],
            info: '',
          },
          {
            id: 'orange3g',
            label: 'Orange 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['mobile_data_orange_3g'],
            info: '',
          },
          {
            id: 'orange4g',
            label: 'Orange 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['mobile_data_orange_4g'],
            info: '',
          },
        ],
      },
	  {
        id: 'safaricom',
        label: 'Safaricom',
        info: 'Coverage on the Safaricom Network',
        subcontrols: [
          {
            id: 'safaricom2g',
            label: 'Safaricom 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['mobile_data_safaricom_2g'],
            info: '',
          },
          {
            id: 'safaricom3g',
            label: 'Safaricom 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['mobile_data_safaricom_3g'],
            info: '',
          },
          {
            id: 'safaricom4g',
            label: 'Safaricom 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['mobile_data_safaricom_4g'],
            info: '',
          },
        ],
      },
	  {
        id: 'yu',
        label: 'YuMobile',
        info: 'Coverage on the YuMobile Network',
        subcontrols: [
          {
            id: 'yu2g',
            label: 'YuMobile 2G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['mobile_data_yu_2g'],
            info: '',
          },
          {
            id: 'yu3g',
            label: 'YuMobile 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['mobile_data_yu_3g'],
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'health',
    label: 'Health',
    icon: Health,
	description:'',
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
	description:'',
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
    ],
  },
    {
    id: 'economicHealth',
    label: 'Economic Health',
    icon: EconHealth,
	description:'',
    info: 'Assets and ownership.',
    controls: [
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
	description:'',
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
