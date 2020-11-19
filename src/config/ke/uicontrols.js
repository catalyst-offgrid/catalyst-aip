import { AdminBoundaries, Energy, Population, Public } from '../../icons'
import theme from '../theme'
const { colors } = theme

export default [
  {
    id: 'admin',
    label: 'Administrative Boundaries',
    icon: AdminBoundaries,
    description:
      'Official administritative boundaries from the Government of Kenya.',
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
    description:
      'Location of electricity grid, transmission lines, fuels & technologies used.',
    controls: [
      {
        id: 'lighting',
        label: 'Lighting',
        info: '',
        subcontrols: [
          {
            id: 'Main Electricity', // matches .csv column name
            label: 'Main Electricity',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 50, max: 80 },
              domain: [0, 100],
              unit: '%',
            },
            layerIds: ['Main Electricity'],
            info: '',
          },
          {
            id: 'Low-Quality Stopgap Total', // matches .csv column name
            label: 'Low-Quality Stopgap Total',
            defaultVisibility: false,
            legend: {
              type: 'gradient',
              defaultRange: { min: 50, max: 80 },
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
            label: 'Paraffin Pressure Lamp',
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
            label: 'Paraffin Lantern',
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
            label: 'Paraffin Tin Lamp',
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
            label: 'Solar',
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
            label: 'Torch / Spotlight (Solar-Charged)',
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
            label: 'Torch / Spotlight (Dry Cells))',
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
              defaultRange: { min: 0, max: 50 },
              domain: [0, 50],
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
            info: '',
          },
          {
            id: 'transmission_lines_11kv',
            label: 'Transmission Lines 11kv',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.highlight },
            layerIds: ['transmission_lines_11kv'],
            info: '',
          },
          {
            id: 'transmission_lines_66kv',
            label: 'Transmission Lines 66kv',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.highlight },
            layerIds: ['transmission_lines_66kv'],
            info: '',
          },
          {
            id: 'transmission_lines_220kv',
            label: 'Transmission Lines 220kv',
            defaultVisibility: false,
            legend: { type: 'line', color: colors.highlight },
            layerIds: ['transmission_lines_220kv'],
            info: '',
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
            label: 'Mini-grids under development',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.highlight },
            layerIds: ['mini-grids_under_development'],
            info: '',
          },
          {
            id: 'existing_mini-grids',
            label: 'Existing mini-grids',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.highlight },
            layerIds: ['existing_mini-grids'],
            info: '',
          },
          {
            id: 'proposed_kosap_mini-grids',
            label: 'Proposed kosap mini-grids',
            defaultVisibility: false,
            legend: { type: 'dot', color: colors.highlight },
            layerIds: ['proposed_kosap_mini-grids'],
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'facilities',
    label: 'Public Facilities and Institutions',
    icon: Public,
    description:
      'Locations of Financial Services, Schools, Doctors, Hospitals and other Health Institutions.',
    controls: [
      {
        id: 'finance',
        label: 'Financial Services',
        info: 'Locations of Banks, Micro-finances and SACCOs.',
        subcontrols: [
          {
            id: 'banks (OSM)',
            label: 'Banks',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#679289' },
            layerIds: ['banks'],
            info: '',
          },
          {
            id: 'mfi',
            label: 'MFIs',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#C8D6AF' },
            layerIds: ['mfi'],
            info: '',
          },
          {
            id: 'sacco',
            label: 'SACCOs',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#1D7874' },
            layerIds: ['sacco'],
            info: '',
          },
        ],
      },
      {
        id: 'health',
        label: 'Health Facilities',
        info: '',
        subcontrols: [
          {
            id: 'health_type1',
            label: 'Type 1',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#6A9FB4' },
            layerIds: ['health_type1'],
            info: '',
          },
          {
            id: 'health_type2',
            label: 'Type 2',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#6A9FB4' },
            layerIds: ['health_type2'],
            info: '',
          },
          {
            id: 'health_type3',
            label: 'Type 3',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#6A9FB4' },
            layerIds: ['health_type3'],
            info: '',
          },
          {
            id: 'health_type4',
            label: 'Type 4',
            defaultVisibility: false,
            legend: { type: 'dot', color: '#6A9FB4' },
            layerIds: ['health_type4'],
            info: '',
          },
        ],
      },
      {
        id: 'education',
        label: 'Education Facilities',
        defaultVisibility: false,
        legend: { type: 'dot', color: '#DB93B0' },
        layerIds: ['education'],
        info: '',
      },
    ],
  },
  {
    id: 'demographics',
    label: 'Demographics',
    icon: Population,
    description: 'Population density, Night Lights and Mobile Phone Coverage.',
    controls: [
      {
        id: 'arc',
        label: 'Population Density (ARC 2016)',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['arc-population-density'],
        info: '',
      },
      {
        id: 'fb-population',
        label: 'FB Population Density',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['fb-population-density'],
        info: '',
      },
      {
        id: 'compress',
        label: 'Night Lights',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['compress'],
        info: '',
      },
    ],
  },
]
