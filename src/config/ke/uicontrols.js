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
        info: 'Source: Kenya Independent Electoral and Boundaries Commission (IEBC)',
      },
      {
        id: 'sub-counties',
        label: 'Sub-Counties',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['sub-counties'],
        info: 'Source: Kenya Independent Electoral and Boundaries Commission (IEBC)',
      },
      {
        id: 'wards',
        label: 'Wards',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['wards'],
        info: 'Note: Requires higher zoom level. Source: Kenya Independent Electoral and Boundaries Commission (IEBC)',
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
      {
        // Legend removed/not specified.
        id: 'KOSAP Counties', // matches .csv column name
        label: 'KOSAP Counties',
        defaultVisibility: false,
        legend: {
          domain: [0, 1],
          unit: '',
        },
        layerIds: ['KOSAP Counties'],
        info: 'Source: Kenya Ministry of Energy',
      },
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
            info:
              'Description: Percentage of households in an area whose primary lighting source is the national grid. Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Low-Quality Stopgap Total', // matches .csv column name
            label: 'Low-Quality Stopgap (Total)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 75 },
              domain: [0, 75],
              unit: '%',
            },
            layerIds: ['Low-Quality Stopgap Total'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a stopgap solution (e.g., kerosene, candles, dry-cell batteries, etc.). Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Kerosene (Total)', // matches .csv column name
            label: 'Kerosene (Total)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 42 },
              domain: [0, 42],
              unit: '%',
            },
            layerIds: ['Kerosene (Total)'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is kerosene (irrespective of lamp type used). Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Paraffin Pressure Lamp', // matches .csv column name
            label: 'Kerosene Pressure Lamp',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1 },
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Paraffin Pressure Lamp'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a paraffin kerosene pressure lamp. Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Paraffin Lantern', // matches .csv column name
            label: 'Kerosene Lantern',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 16 },
              domain: [0, 16],
              unit: '%',
            },
            layerIds: ['Paraffin Lantern'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a kerosene lantern. Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Paraffin Tin Lamp', // matches .csv column name
            label: 'Kerosene Tin Lamp',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 35 },
              domain: [0, 35],
              unit: '%',
            },
            layerIds: ['Paraffin Tin Lamp'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a kerosene tin lamp (which also includes plastic or bottle lamps). Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Gas Lamp', // matches .csv column name
            label: 'Gas Lamp',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 4 },
              domain: [0, 4],
              unit: '%',
            },
            layerIds: ['Gas Lamp'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a gas lamp (likely fueled by biogas, LPG, or natural gas). Source: 2019 Kenya Population and Housing Census',
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
            info:
              'Description: Percentage of households in an area whose primary lighting source is wood. Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Solar (Total)', // matches .csv column name
            label: 'Solar (Total)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 65 },
              domain: [0, 65],
              unit: '%',
            },
            layerIds: ['Solar (Total)'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a solar device (e.g., solar lantern, solar ligthing system, solar home system). Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Solar', // matches .csv column name
            label: 'Solar System',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 55 },
              domain: [0, 55],
              unit: '%',
            },
            layerIds: ['Solar'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a solar system (not including solar lanterns). Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Torch / Spotlight (Solar-Charged)', // matches .csv column name
            label: 'Solar Lantern',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 31 },
              domain: [0, 31],
              unit: '%',
            },
            layerIds: ['Torch / Spotlight (Solar-Charged)'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a solar lantern. Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Torch / Spotlight (Dry Cells))', // matches .csv column name
            label: 'Dry-Cell Powered Torch',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 45 },
              domain: [0, 45],
              unit: '%',
            },
            layerIds: ['Torch / Spotlight (Dry Cells))'],
            info:
              'Description: Percentage of households in an area whose primary lighting source is a torch (flashlight) powered by dry-cell batteries. Source: 2019 Kenya Population and Housing Census',
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
              defaultRange: { min: 0, max: 5 },
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Cooking - Electricity'],
            info:
              'Description: Percentage of households in an area whose primary cooking fuel is electricity. Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Cooking - Charcoal', // matches .csv column name
            label: 'Charcoal',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 32 },
              domain: [0, 32],
              unit: '%',
            },
            layerIds: ['Cooking - Charcoal'],
            info:
              'Description: Percentage of households in an area whose primary cooking fuel is charcoal. Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Cooking - Gas (LPG)', // matches .csv column name
            label: 'Gas (LPG)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 70 },
              domain: [0, 70],
              unit: '%',
            },
            layerIds: ['Cooking - Gas (LPG)'],
            info:
              'Description: Percentage of households in an area whose primary cooking fuel is liquefied petrloleum gas (LPG). Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Cooking - Biogas', // matches .csv column name
            label: 'Biogas',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2 },
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Cooking - Biogas'],
            info:
              'Description: Percentage of households in an area whose primary cooking fuel is biogas (i.e, natural gas produced by a biodigester system). Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Cooking - Firewood', // matches .csv column name
            label: 'Firewood',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 90 },
              domain: [0, 90],
              unit: '%',
            },
            layerIds: ['Cooking - Firewood'],
            info:
              'Description: Percentage of households in an area whose primary cooking fuel is firewood. Source: 2019 Kenya Population and Housing Census',
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
            label: 'Gridfinder MV/HV Lines',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.highlight },
            layerIds: ['gridfinder'],
            info:
              'Source: GridFinder predictive algorithm based on night lights imagery, estimating the location of high- and medium-voltage transmission lines.',
          },
          {
            id: 'ke_all_transmission',
            label: 'All Grid T&D Lines',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent3 },
            layerIds: ['ke_all_transmission'],
            info: 'Source: KPLC',
          },
          {
            id: 'transmission_lines_11kv',
            label: 'Grid T&D Lines - 11kV',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent9 },
            layerIds: ['transmission_lines_11kv'],
            info: 'Source: KPLC',
          },
          {
            id: 'transmission_lines_33kv',
            label: 'Grid T&D Lines - 33kV',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent8 },
            layerIds: ['transmission_lines_33kv'],
            info: 'Source: KPLC',
          },
          {
            id: 'transmission_lines_66kv',
            label: 'Grid T&D Lines - 66kV',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent10 },
            layerIds: ['transmission_lines_66kv'],
            info: 'Source: KPLC',
          },
          {
            id: 'transmission_lines_132kv',
            label: 'Grid T&D Lines - 132kV',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent7 },
            layerIds: ['transmission_lines_132kv'],
            info: 'Source: KPLC',
          },
          {
            id: 'transmission_lines_220kv',
            label: 'Grid T&D Lines - 220kV',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent11 },
            layerIds: ['transmission_lines_220kv'],
            info: 'Source: KPLC',
          },
          {
            id: 'unidentified_grid',
            label: 'Unidentified Grid Network',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.accent1 },
            layerIds: ['unidentified_grid'],
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
            info:
              'Source: GIS analysis funded by the World Bank and undertaken in 2017 as part of KOSAP project preparation.',
          },
          {
            id: 'existing_mini-grids',
            label: 'Existing Mini-Grids',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['existing_mini-grids'],
            info:
              'Source: GIS analysis funded by the World Bank and undertaken in 2017 as part of KOSAP project preparation.',
          },
          {
            id: 'proposed_kosap_mini-grids',
            label: 'Proposed KOSAP Mini-Grids',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['proposed_kosap_mini-grids'],
            info:
              'Source: GIS analysis funded by the World Bank and undertaken in 2017 as part of KOSAP project preparation.',
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
      {
        id: 'finance',
        label: 'Financial Services',
        info: 'Locations of Banks, Micro-finances and SACCOs.',
        subcontrols: [
          {
            id: 'banks',
            label: 'Banks',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['banks'],
            info: 'Source: Open Street Maps (OSM)',
          },
          {
            id: 'mfi',
            label: 'MFIs',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent6 },
            layerIds: ['mfi'],
            info: 'Source: FinAccess Geospatial Mapping 2015',
          },
          {
            id: 'sacco',
            label: 'SACCOs',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['sacco'],
            info: 'Source: FinAccess Geospatial Mapping 2015',
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
            id: 'health_type1',
            label: 'District & Sub-District Hospitals',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['health_type1'],
            info: 'Source: Government of Kenya',
          },
          {
            id: 'health_type2',
            label: 'Provincial Hospitals',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent7 },
            layerIds: ['health_type2'],
            info: 'Source: Government of Kenya',
          },
          {
            id: 'health_type3',
            label: 'Health Centers',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['health_type3'],
            info: 'Source: Government of Kenya',
          },
          {
            id: 'health_type4',
            label: 'Dispensaries',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['health_type4'],
            info: 'Source: Government of Kenya',
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
            id: 'all_education',
            label: 'All Education Facilities',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.charmpink },
            layerIds: ['all_education'],
            info: 'Source: Open Street Maps (OSM)',
          },
          {
            id: 'ke_kindergarten',
            label: 'Primary Schools',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent1 },
            layerIds: ['ke_kindergarten'],
            info: 'Source: Kenya Ministry of Education',
          },
          {
            id: 'ke_schools',
            label: 'Secondary Schools',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent2 },
            layerIds: ['ke_schools'],
            info: 'Source: Kenya Ministry of Education',
          },
          {
            id: 'ke_colleges',
            label: 'Colleges',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['ke_colleges'],
            info: 'Source: Open Street Maps (OSM)',
          },
          {
            id: 'ke_universities',
            label: 'Universities',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['ke_universities'],
            info: 'Source: Open Street Maps (OSM)',
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
          {
            id: 'arc',
            label: 'Population Density (Low-Res Heatmap)',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['arc-population-density'],
            info: 'Source: Arc 2016',
          },
          {
            id: 'fb-population',
            label: 'Population Density (30M Resolution)',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['fb-population-density'],
            info: 'Source: Facebook Data For Good',
          },
          {
            id: 'Total Households', // matches .csv column name
            label: 'Number of Households',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1507000 },
              domain: [0, 1507000],
              unit: '',
            },
            layerIds: ['Total Households'],
            info: 'Source: 2019 Kenya Population and Housing Census',
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
            id: 'Under 18 Percent', // matches .csv column name
            label: 'Under 18',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 65 },
              domain: [0, 65],
              unit: '%',
            },
            layerIds: ['Under 18 Percent'],
            info: 'Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Over 60 Percent', // matches .csv column name
            label: 'Over 60',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10 },
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Over 60 Percent'],
            info: 'Source: 2019 Kenya Population and Housing Census',
          },
          {
            id: 'Over 70 Percent', // matches .csv column name
            label: 'Over 70',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5 },
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Over 70 Percent'],
            info: 'Source: 2019 Kenya Population and Housing Census',
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
              defaultRange: { min: 0, max: 7 },
              domain: [0, 7],
              unit: '',
            },
            layerIds: ['Average Household Size'],
            info: 'Source: 2019 Kenya Population and Housing Census',
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
        id: 'ke_roads',
        label: 'Road Network',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['ke_roads'],
        info: 'Source: ',
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
        id: 'allCarrier',
        label: 'All Carriers',
        info:
          'Description: Coverage from all carriers as self reported by the carriers in survey responses. Source: Collins Batholomew and GSMA 2020',
        subcontrols: [
          {
            id: 'ke_mobile_2g',
            label: 'Kenya 2G Coverage',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['ke_mobile_2g'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'all3g',
            label: 'Kenya 3G Coverage',
            defaultVisibility: false,
            legend: 'none',
            layerIds: ['ke_mobile_3g'],
            info: 'Source: Collins Batholomew and GSMA 2020',
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
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'airtel3g',
            label: 'AirTel 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['mobile_data_airtel_3g'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'airtel4g',
            label: 'AirTel 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['mobile_data_airtel_4g'],
            info: 'Source: Collins Batholomew and GSMA 2020',
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
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'orange3g',
            label: 'Orange 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['mobile_data_orange_3g'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'orange4g',
            label: 'Orange 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['mobile_data_orange_4g'],
            info: 'Source: Collins Batholomew and GSMA 2020',
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
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'safaricom3g',
            label: 'Safaricom 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['mobile_data_safaricom_3g'],
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'safaricom4g',
            label: 'Safaricom 4G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent3 },
            layerIds: ['mobile_data_safaricom_4g'],
            info: 'Source: Collins Batholomew and GSMA 2020',
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
            info: 'Source: Collins Batholomew and GSMA 2020',
          },
          {
            id: 'yu3g',
            label: 'YuMobile 3G',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.accent4 },
            layerIds: ['mobile_data_yu_3g'],
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
        id: 'wasteDisposal',
        label: 'Mode of Human Waste Disposal',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          {
            id: 'Main Sewer - Human Waste Disposal',
            label: 'Sewers',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60 },
              domain: [0, 60],
              unit: '%',
            },
            layerIds: ['Main Sewer - Human Waste Disposal'],
            info: '',
          },
          {
            id: 'Septic Tank - Human Waste Disposal', // matches .csv column name
            label: 'Septic Tank',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 35 },
              domain: [0, 35],
              unit: '%',
            },
            layerIds: ['Septic Tank - Human Waste Disposal'],
            info: '',
          },
          {
            id: 'Cesspool - Human Waste Disposal', // matches .csv column name
            label: 'Cesspool',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5 },
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Cesspool - Human Waste Disposal'],
            info: '',
          },
          {
            id: 'VIP Latrine - Human Waste Disposal', // matches .csv column name
            label: 'VIP Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25 },
              domain: [0, 25],
              unit: '%',
            },
            layerIds: ['VIP Latrine - Human Waste Disposal'],
            info: '',
          },
          {
            id: 'Pit Latrine Covered - Human Waste Disposal', // matches .csv column name
            label: 'Pit Latrine Covered',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 80 },
              domain: [0, 80],
              unit: '%',
            },
            layerIds: ['Pit Latrine Covered - Human Waste Disposal'],
            info: '',
          },
          {
            id: 'Pit Latrine Uncovered - Human Waste Disposal', // matches .csv column name
            label: 'Pit Latrine Uncovered',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 30 },
              domain: [0, 30],
              unit: '%',
            },
            layerIds: ['Pit Latrine Uncovered - Human Waste Disposal'],
            info: '',
          },
          {
            id: 'Bucket Latrine - Human Waste Disposal', // matches .csv column name
            label: 'Bucket Latrine',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 15 },
              domain: [0, 15],
              unit: '%',
            },
            layerIds: ['Bucket Latrine - Human Waste Disposal'],
            info: '',
          },
          {
            id: 'Open/ Bush - Human Waste Disposal', // matches .csv column name
            label: 'Open/Bush',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 70 },
              domain: [0, 70],
              unit: '%',
            },
            layerIds: ['Open/ Bush - Human Waste Disposal'],
            info: '',
          },
          {
            id: 'Bio-Septic Tank/Biodigester - Human Waste Disposal', // matches .csv column name
            label: 'Bio-Septic Tank',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1 },
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Bio-Septic Tank/Biodigester - Human Waste Disposal'],
            info: '',
          },
        ],
      },
      {
        id: 'drinkingWater',
        label: 'Source of Drinking Water',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
          {
            id: 'Pond - Drinking Water Source', // matches .csv column name
            label: 'Pond',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20 },
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Pond - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Dam/Lake - Drinking Water Source', // matches .csv column name
            label: 'Dam/Lake',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 30 },
              domain: [0, 30],
              unit: '%',
            },
            layerIds: ['Dam/Lake - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Stream/River - Drinking Water Source', // matches .csv column name
            label: 'Stream/River',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60 },
              domain: [0, 60],
              unit: '%',
            },
            layerIds: ['Stream/River - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Protected Spring - Drinking Water Source', // matches .csv column name
            label: 'Protected Spring',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 55 },
              domain: [0, 55],
              unit: '%',
            },
            layerIds: ['Protected Spring - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Unprotected Spring - Drinking Water Source', // matches .csv column name
            label: 'Unprotected Spring',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 11 },
              domain: [0, 11],
              unit: '%',
            },
            layerIds: ['Unprotected Spring - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Protected Well - Drinking Water Source', // matches .csv column name
            label: 'Protected Well',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25 },
              domain: [0, 25],
              unit: '%',
            },
            layerIds: ['Protected Well - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Unprotected Well - Drinking Water Source', // matches .csv column name
            label: 'Unprotected Well',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20 },
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Unprotected Well - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Borehole/Tube Well - Drinking Water Source', // matches .csv column name
            label: 'Borehole/Tube Well',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 35 },
              domain: [0, 35],
              unit: '%',
            },
            layerIds: ['Borehole/Tube Well - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Piped into Dwelling - Drinking Water Source', // matches .csv column name
            label: 'Piped into Dwelling',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25 },
              domain: [0, 25],
              unit: '%',
            },
            layerIds: ['Piped into Dwelling - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Piped to Yard/Plot - Drinking Water Source', // matches .csv column name
            label: 'Piped to Yard/Plot',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 41 },
              domain: [0, 41],
              unit: '%',
            },
            layerIds: ['Piped to Yard/Plot - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Bottled Water - Drinking Water Source', // matches .csv column name
            label: 'Bottled Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 15 },
              domain: [0, 15],
              unit: '%',
            },
            layerIds: ['Bottled Water - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Rain/Harvested Water - Drinking Water Source', // matches .csv column name
            label: 'Rain/Harvested Water',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20 },
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Rain/Harvested Water - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Water Vendor - Drinking Water Source', // matches .csv column name
            label: 'Water Vendor',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 45 },
              domain: [0, 45],
              unit: '%',
            },
            layerIds: ['Water Vendor - Drinking Water Source'],
            info: '',
          },
          {
            id: 'Public Tap/Standpipe - Drinking Water Source', // matches .csv column name
            label: 'Public Tap/Standpipe',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 40 },
              domain: [0, 40],
              unit: '%',
            },
            layerIds: ['Public Tap/Standpipe - Drinking Water Source'],
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
          {
            id: 'Total Births - 12 Months', // matches .csv column name
            label: 'Total Births (1 Year)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 136000 },
              domain: [0, 136000],
              unit: '',
            },
            layerIds: ['Total Births - 12 Months'],
            info: '',
          },
          {
            id: 'Total Births - 5 Years', // matches .csv column name
            label: 'Total Births (5 Years)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 506000 },
              domain: [0, 506000],
              unit: '',
            },
            layerIds: ['Total Births - 5 Years'],
            info: '',
          },
        ],
      },
      {
        id: 'Disability',
        label: 'Disability',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
          {
            id: 'Total Disability Percent', // matches .csv column name
            label: 'Disabled Population',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 6 },
              domain: [0, 6],
              unit: '%',
            },
            layerIds: ['Total Disability Percent'],
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
          {
            id: 'Radio', // matches .csv column name
            label: 'Radio',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 75 },
              domain: [0, 75],
              unit: '%',
            },
            layerIds: ['Radio'],
            info: '',
          },
          {
            id: 'Computer/Tablet', // matches .csv column name
            label: 'Computer/Tablet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25 },
              domain: [0, 25],
              unit: '%',
            },
            layerIds: ['Computer/Tablet'],
            info: '',
          },
          {
            id: 'Functional TV', // matches .csv column name
            label: 'Functional TV',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 70 },
              domain: [0, 70],
              unit: '%',
            },
            layerIds: ['Functional TV'],
            info: '',
          },
          {
            id: 'Analogue TV', // matches .csv column name
            label: 'Analogue TV',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10 },
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Analogue TV'],
            info: '',
          },
          {
            id: 'Internet', // matches .csv column name
            label: 'Internet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 45 },
              domain: [0, 45],
              unit: '%',
            },
            layerIds: ['Internet'],
            info: '',
          },
          {
            id: 'Refrigerator', // matches .csv column name
            label: 'Refrigerator',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 25 },
              domain: [0, 25],
              unit: '%',
            },
            layerIds: ['Refrigerator'],
            info: '',
          },
          {
            id: 'Phone Ownership', // matches .csv column name
            label: 'Mobile Phone',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 70 },
              domain: [0, 70],
              unit: '%',
            },
            layerIds: ['Phone'],
            info: '',
          },
        ],
      },
      {
        id: 'vehicles',
        label: 'Vehicles',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
          {
            id: 'Bicycle', // matches .csv column name
            label: 'Bicycle',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 35 },
              domain: [0, 35],
              unit: '%',
            },
            layerIds: ['Bicycle'],
            info: '',
          },
          {
            id: 'Motorcycle', // matches .csv column name
            label: 'Motorcycle',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20 },
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Motorcycle'],
            info: '',
          },
          {
            id: 'Car', // matches .csv column name
            label: 'Car',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 15 },
              domain: [0, 15],
              unit: '%',
            },
            layerIds: ['Car'],
            info: '',
          },
          {
            id: 'Truck', // matches .csv column name
            label: 'Truck',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2 },
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Truck'],
            info: '',
          },
          {
            id: 'Tuk Tuk', // matches .csv column name
            label: 'Tuk Tuk',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3 },
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Tuk Tuk'],
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
    info: 'Economic Health',
    controls: [
      {
        id: 'unemployment',
        label: 'Unemployment',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          //insert unemployment layers here
          {
            id: 'Working', // matches .csv column name
            label: 'Employed',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 90 },
              domain: [0, 90],
              unit: '%',
            },
            layerIds: ['Working'],
            info: '',
          },
          {
            id: 'Seeking Work', // matches .csv column name
            label: 'Seeking Work',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 40 },
              domain: [0, 40],
              unit: '%',
            },
            layerIds: ['Seeking Work'],
            info: '',
          },
          {
            id: 'Outside the Labor Force', // matches .csv column name
            label: 'Outside the Labor Force',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 26 },
              domain: [0, 26],
              unit: '%',
            },
            layerIds: ['Outside the Labor Force'],
            info: '',
          },
        ],
      },
      {
        id: 'roof',
        label: 'Roof Material',
        info: 'Source: 2019 Kenya Population and Housing Census',
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
          {
            id: 'Grass/Twigs - Roofing', // matches .csv column name
            label: 'Grass/Twigs',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 51 },
              domain: [0, 51],
              unit: '%',
            },
            layerIds: ['Grass/Twigs - Roofing'],
            info: '',
          },
          {
            id: 'Makuti Thatch - Roofing', // matches .csv column name
            label: 'Makuti Thatch',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 26 },
              domain: [0, 26],
              unit: '%',
            },
            layerIds: ['Makuti Thatch - Roofing'],
            info: '',
          },
          {
            id: 'Dung /Mud - Roofing', // matches .csv column name
            label: 'Dung/Mud',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10 },
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Dung /Mud - Roofing'],
            info: '',
          },
          {
            id: 'Iron Sheets - Roofing', // matches .csv column name
            label: 'Iron Sheets',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 100 },
              domain: [0, 100],
              unit: '%',
            },
            layerIds: ['Iron Sheets - Roofing'],
            info: '',
          },
          {
            id: 'Tin Cans - Roofing', // matches .csv column name
            label: 'Tin Cans',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1 },
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Tin Cans - Roofing'],
            info: '',
          },
          {
            id: 'Asbestos Sheet - Roofing', // matches .csv column name
            label: 'Asbestos Sheet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3 },
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Asbestos Sheet - Roofing'],
            info: '',
          },
          {
            id: 'Concrete/Cement - Roofing', // matches .csv column name
            label: 'Concrete/Cement',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 40 },
              domain: [0, 40],
              unit: '%',
            },
            layerIds: ['Concrete/Cement - Roofing'],
            info: '',
          },
          {
            id: 'Tiles - Roofing', // matches .csv column name
            label: 'Tiles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5 },
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Tiles - Roofing'],
            info: '',
          },
          {
            id: 'Canvas/ Tents - Roofing', // matches .csv column name
            label: 'Canvas/Tents',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2 },
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Canvas/ Tents - Roofing'],
            info: '',
          },
          {
            id: 'Decra/Versatile - Roofing', // matches .csv column name
            label: 'Decra/Versatile',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2 },
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Decra/Versatile - Roofing'],
            info: '',
          },
          {
            id: 'Cartons/Cardboard - Roofing', // matches .csv column name
            label: 'Cartons/Cardboard',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 15 },
              domain: [0, 15],
              unit: '%',
            },
            layerIds: ['Cartons/Cardboard - Roofing'],
            info: '',
          },
          {
            id: 'Shingles - Roofing', // matches .csv column name
            label: 'Shingles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1 },
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Shingles - Roofing'],
            info: '',
          },
        ],
      },
      {
        id: 'wall_material',
        label: 'Wall Material',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
          {
            id: 'Cane/Palm/Trunks - Wall Material', // matches .csv column name
            label: 'Cane/Palm/Trunks',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 20 },
              domain: [0, 20],
              unit: '%',
            },
            layerIds: ['Cane/Palm/Trunks - Wall Material'],
            info: '',
          },
          {
            id: 'Grass/Reeds - Wall Material', // matches .csv column name
            label: 'Grass/Reeds',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 45 },
              domain: [0, 45],
              unit: '%',
            },
            layerIds: ['Grass/Reeds - Wall Material'],
            info: '',
          },
          {
            id: 'Mud/Cow Dung - Wall Material', // matches .csv column name
            label: 'Mud/Cow Dung',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 75 },
              domain: [0, 75],
              unit: '%',
            },
            layerIds: ['Mud/Cow Dung - Wall Material'],
            info: '',
          },
          {
            id: 'Stone with Mud - Wall Material', // matches .csv column name
            label: 'Stone with Mud',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 15 },
              domain: [0, 15],
              unit: '%',
            },
            layerIds: ['Stone with Mud - Wall Material'],
            info: '',
          },
          {
            id: 'Covered Adobe - Wall Material', // matches .csv column name
            label: 'Covered Adobe',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 17 },
              domain: [0, 17],
              unit: '%',
            },
            layerIds: ['Covered Adobe - Wall Material'],
            info: '',
          },
          {
            id: 'Uncovered Adobe - Wall Material', // matches .csv column name
            label: 'Uncovered Adobe',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 8 },
              domain: [0, 8],
              unit: '%',
            },
            layerIds: ['Uncovered Adobe - Wall Material'],
            info: '',
          },
          {
            id: 'Plywood/Cardboard - Wall Material', // matches .csv column name
            label: 'Plywood/Cardboard',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2 },
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Plywood/Cardboard - Wall Material'],
            info: '',
          },
          {
            id: 'Off Cuts/Reused Wood/Wood Planks - Wall Material', // matches .csv column name
            label: 'Reused Wood/Wood Planks',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10 },
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Off Cuts/Reused Wood/Wood Planks - Wall Material'],
            info: '',
          },
          {
            id: 'Iron Sheets - Wall Material', // matches .csv column name
            label: 'Iron Sheets',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 35 },
              domain: [0, 35],
              unit: '%',
            },
            layerIds: ['Iron Sheets - Wall Material'],
            info: '',
          },
          {
            id: 'Concrete/Concrete Blocks/Precast Wall - Wall Material', // matches .csv column name
            label: 'Concrete/Precast Wall',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 41 },
              domain: [0, 41],
              unit: '%',
            },
            layerIds: ['Concrete/Concrete Blocks/Precast Wall - Wall Material'],
            info: '',
          },
          {
            id: 'Stone with Lime/Cement - Wall Material', // matches .csv column name
            label: 'Stone with Lime/Cement',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 41 },
              domain: [0, 41],
              unit: '%',
            },
            layerIds: ['Stone with Lime/Cement - Wall Material'],
            info: '',
          },
          {
            id: 'Bricks - Wall Material', // matches .csv column name
            label: 'Bricks',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60 },
              domain: [0, 60],
              unit: '%',
            },
            layerIds: ['Bricks - Wall Material'],
            info: '',
          },
          {
            id: 'Canvas/Tents - Wall Material', // matches .csv column name
            label: 'Canvas/Tents',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3 },
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Canvas/Tents - Wall Material'],
            info: '',
          },
          {
            id: 'Nylon/Cartons - Wall Material', // matches .csv column name
            label: 'Nylon/Cartons',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10 },
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Nylon/Cartons - Wall Material'],
            info: '',
          },
          {
            id: 'Timber - Wall Material', // matches .csv column name
            label: 'Timber',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60 },
              domain: [0, 60],
              unit: '%',
            },
            layerIds: ['Timber - Wall Material'],
            info: '',
          },
          {
            id: 'Prefabricated Panels - Wall Material', // matches .csv column name
            label: 'Prefabricated Panels',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1 },
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Prefabricated Panels - Wall Material'],
            info: '',
          },
        ],
      },
      {
        id: 'floor_material',
        label: 'Floor Material',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
          {
            id: 'Earth/Sand - Floor Material', // matches .csv column name
            label: 'Earth/Sand',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 85 },
              domain: [0, 85],
              unit: '%',
            },
            layerIds: ['Earth/Sand - Floor Material'],
            info: '',
          },
          {
            id: 'Dung - Floor Material', // matches .csv column name
            label: 'Dung',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60 },
              domain: [0, 60],
              unit: '%',
            },
            layerIds: ['Dung - Floor Material'],
            info: '',
          },
          {
            id: 'Wood Planks/Shingles/Timber - Floor Material', // matches .csv column name
            label: 'Wood Planks/Shingles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 3 },
              domain: [0, 3],
              unit: '%',
            },
            layerIds: ['Wood Planks/Shingles/Timber - Floor Material'],
            info: '',
          },
          {
            id: 'Palm/Bamboo - Floor Material', // matches .csv column name
            label: 'Palm/Bamboo',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1 },
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Palm/Bamboo - Floor Material'],
            info: '',
          },
          {
            id: 'Parquet or Polished Wood - Floor Material', // matches .csv column name
            label: 'Parquet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2 },
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Parquet or Polished Wood - Floor Material'],
            info: '',
          },
          {
            id: 'Vinyl or Asphalt Strips - Floor Material', // matches .csv column name
            label: 'Vinyl/Asphalt Strips',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1 },
              domain: [0, 1],
              unit: '%',
            },
            layerIds: ['Vinyl or Asphalt Strips - Floor Material'],
            info: '',
          },
          {
            id: 'Ceramic Tiles - Floor Material', // matches .csv column name
            label: 'Ceramic Tiles',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 26 },
              domain: [0, 26],
              unit: '%',
            },
            layerIds: ['Ceramic Tiles - Floor Material'],
            info: '',
          },
          {
            id: 'Concrete/Cement/Terrazo - Floor Material', // matches .csv column name
            label: 'Concrete/Terrazo',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 65 },
              domain: [0, 65],
              unit: '%',
            },
            layerIds: ['Concrete/Cement/Terrazo - Floor Material'],
            info: '',
          },
          {
            id: 'Wall to Wall Carpet - Floor Material', // matches .csv column name
            label: 'Wall to Wall Carpet',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5 },
              domain: [0, 5],
              unit: '%',
            },
            layerIds: ['Wall to Wall Carpet - Floor Material'],
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
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          {
            id: 'Farming', // matches .csv column name
            label: 'Farming',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 85 },
              domain: [0, 85],
              unit: '%',
            },
            layerIds: ['Farming'],
            info: '',
          },
          {
            id: 'Crop Production', // matches .csv column name
            label: 'Crop Production',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 80 },
              domain: [0, 80],
              unit: '%',
            },
            layerIds: ['Crop Production'],
            info: '',
          },
          {
            id: 'Livestock Production', // matches .csv column name
            label: 'Livestock Production',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 70 },
              domain: [0, 70],
              unit: '%',
            },
            layerIds: ['Livestock Production'],
            info: '',
          },
          {
            id: 'Aquaculture', // matches .csv column name
            label: 'Aquaculture',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2 },
              domain: [0, 2],
              unit: '%',
            },
            layerIds: ['Aquaculture'],
            info: '',
          },
          {
            id: 'Fishing', // matches .csv column name
            label: 'Fishing',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 10 },
              domain: [0, 10],
              unit: '%',
            },
            layerIds: ['Fishing'],
            info: '',
          },
          {
            id: 'Irrigation', // matches .csv column name
            label: 'Irrigation',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 22 },
              domain: [0, 22],
              unit: '%',
            },
            layerIds: ['Irrigation'],
            info: '',
          },
        ],
      },
      {
        id: 'livestock_fish',
        label: 'Livestock & Fish',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          // Add layers here
          {
            id: 'Exotic Cattle Dairy - Livestock & Fish', // matches .csv column name
            label: 'Exotic Cattle Dairy',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 340000 },
              domain: [0, 340000],
              unit: '',
            },
            layerIds: ['Exotic Cattle Dairy - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Exotic Cattle Beef - Livestock & Fish', // matches .csv column name
            label: 'Exotic Cattle Beef',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 100000 },
              domain: [0, 100000],
              unit: '',
            },
            layerIds: ['Exotic Cattle Beef - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Indigenous Cattle - Livestock & Fish', // matches .csv column name
            label: 'Indigenous Cattle',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1500000 },
              domain: [0, 1500000],
              unit: '',
            },
            layerIds: ['Indigenous Cattle - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Sheep - Livestock & Fish', // matches .csv column name
            label: 'Sheep',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2800000 },
              domain: [0, 2800000],
              unit: '',
            },
            layerIds: ['Sheep - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Goats - Livestock & Fish', // matches .csv column name
            label: 'Goats',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 5000000 },
              domain: [0, 5000000],
              unit: '',
            },
            layerIds: ['Goats - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Camels - Livestock & Fish', // matches .csv column name
            label: 'Camels',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2000000 },
              domain: [0, 2000000],
              unit: '',
            },
            layerIds: ['Camels - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Donkeys - Livestock & Fish', // matches .csv column name
            label: 'Donkeys',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 170000 },
              domain: [0, 170000],
              unit: '',
            },
            layerIds: ['Donkeys - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Pigs - Livestock & Fish', // matches .csv column name
            label: 'Pigs',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1500000 },
              domain: [0, 1500000],
              unit: '',
            },
            layerIds: ['Pigs - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Indigenous Chicken - Livestock & Fish', // matches .csv column name
            label: 'Indigenous Chicken',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1600000 },
              domain: [0, 1600000],
              unit: '',
            },
            layerIds: ['Indigenous Chicken - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Exotic Chicken - Livestock & Fish', // matches .csv column name
            label: 'Exotic Chicken',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 1900000 },
              domain: [0, 1900000],
              unit: '',
            },
            layerIds: ['Exotic Chicken - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Beehives - Livestock & Fish', // matches .csv column name
            label: 'Beehives',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 230000 },
              domain: [0, 230000],
              unit: '',
            },
            layerIds: ['Beehives - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Rabbits - Livestock & Fish', // matches .csv column name
            label: 'Rabbits',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50000 },
              domain: [0, 50000],
              unit: '',
            },
            layerIds: ['Rabbits - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Fish Ponds - Livestock & Fish', // matches .csv column name
            label: 'Fish Ponds',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 12000 },
              domain: [0, 12000],
              unit: '',
            },
            layerIds: ['Fish Ponds - Livestock & Fish'],
            info: '',
          },
          {
            id: 'Fish Cages - Livestock & Fish', // matches .csv column name
            label: 'Fish Cages',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 2000 },
              domain: [0, 2000],
              unit: '',
            },
            layerIds: ['Fish Cages - Livestock & Fish'],
            info: '',
          },
        ],
      },
      {
        id: 'permanent_crops',
        label: 'Permanent Crop Growth',
        info: 'Source: 2019 Kenya Population and Housing Census',
        subcontrols: [
          {
            id: 'Tea - Permanent Crop Growth', // matches .csv column name
            label: 'Tea',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 70000 },
              domain: [0, 70000],
              unit: '',
            },
            layerIds: ['Tea - Permanent Crop Growth'],
            info: '',
          },
          // Add layers here
          {
            id: 'Coffee - Permanent Crop Growth', // matches .csv column name
            label: 'Coffee',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 60000 },
              domain: [0, 60000],
              unit: '',
            },
            layerIds: ['Coffee - Permanent Crop Growth'],
            info: '',
          },
          {
            id: 'Avocado - Permanent Crop Growth', // matches .csv column name
            label: 'Avocado',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 90000 },
              domain: [0, 90000],
              unit: '',
            },
            layerIds: ['Avocado - Permanent Crop Growth'],
            info: '',
          },
          {
            id: 'Citrus - Permanent Crop Growth', // matches .csv column name
            label: 'Citrus',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 30000 },
              domain: [0, 30000],
              unit: '',
            },
            layerIds: ['Citrus - Permanent Crop Growth'],
            info: '',
          },
          {
            id: 'Mango - Permanent Crop Growth', // matches .csv column name
            label: 'Mango',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 80000 },
              domain: [0, 80000],
              unit: '',
            },
            layerIds: ['Mango - Permanent Crop Growth'],
            info: '',
          },
          {
            id: 'Coconut - Permanent Crop Growth', // matches .csv column name
            label: 'Coconut',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 50000 },
              domain: [0, 50000],
              unit: '',
            },
            layerIds: ['Coconut - Permanent Crop Growth'],
            info: '',
          },
          {
            id: 'Macadamia Cashew Nut - Permanent Crop Growth', // matches .csv column name
            label: 'Macadamia/Cashew Nut',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 30000 },
              domain: [0, 30000],
              unit: '',
            },
            layerIds: ['Macadamia Cashew Nut - Permanent Crop Growth'],
            info: '',
          },
          {
            id: 'Khat (Miraa) - Permanent Crop Growth', // matches .csv column name
            label: 'Khat (Miraa)',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 0, max: 90000 },
              domain: [0, 90000],
              unit: '',
            },
            layerIds: ['Khat (Miraa) - Permanent Crop Growth'],
            info: '',
          },
        ],
      },
    ],
  },
]
