import PropTypes from 'prop-types'
import React, { useReducer, useState } from 'react'

import PageLayout from '../components/PageLayout'
import Drawer from '../components/Drawer'
import Map from '../components/Map'
import Source from '../components/Source'
import Layer from '../components/Layer'
import CsvLayers from '../components/CsvLayers'
import BasemapLayers from '../components/BasemapLayers'

import { Vega } from 'react-vega'
import fuelsHeatmap from '../assets/mtf-graphs/module_1/cooking_fuel_detail/fuels_heatmap'

import GraphControl from '../components/GraphControl'

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
} from '../icons'

import LayerControl from '../components/LayerControl'
import MtfDrawer from '../components/MtfDrawer'
import VisualizationSelector from '../components/VisualizationSelector'
import styled from 'styled-components'

import vegaData from '../assets/mtf-graphs'

/**
 * Searches for the given layer id in the controls and subcontrols.
 * Returns the first control id that contains the layer id.
 * @param {String} layerId the id of a layer that should be controlled
 */
function getControlIdForLayer(layerId, uicontrols) {
  let id
  uicontrols.map((group) => {
    group.controls.map((control) => {
      if (control.subcontrols) {
        control.subcontrols.find((subcontrol) => {
          if (subcontrol.layerIds.includes(layerId)) {
            id = subcontrol.id
            return true
          }
          return false
        })
      }

      if (control.layerIds && control.layerIds.includes(layerId)) {
        id = control.id
        return true
      }
      return false
    })
  })

  if (!id)
    console.warn(`Layer "${layerId}" is not assigned to any control group.`)
  return id
}

const HelpMessage = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[2]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  margin: 30px;
  padding: 30px;

  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => `${theme.space[2]}px`};
`

/**
 * Converts the uicontrols config structure into the initital
 * ui state object
 */
function init(uicontrols) {
  return uicontrols.reduce((obj, cur) => {
    return (
      cur.controls.map((control) => {
        if (control.subcontrols) {
          return control.subcontrols.map(
            (subcontrol) =>
              (obj[subcontrol.id] = {
                visibility: subcontrol.defaultVisibility,
                domain: subcontrol.legend.domain,
                range: subcontrol.legend.defaultRange,
              })
          )
        }
        return (obj[control.id] = {
          visibility: control.defaultVisibility,
          domain: control.legend.domain,
          range: control.legend.defaultRange,
        })
      }),
      obj
    )
  }, {})
}

function reducer(state, action) {
  switch (action.type) {
    case 'toggleLayer':
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          visibility: !state[action.payload].visibility,
        },
      }
    case 'setSlider':
      return {
        ...state,
        [action.payload.controlId]: {
          ...state[action.payload.controlId],
          range: action.payload.range,
        },
      }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

const mtfUiControls = [
  {
    id: 'admin',
    label: 'Module 1',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'cooking_fuel_detail',
        label: 'Cooking Fuel Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Primary_vs_Secondary_Fuel_Types',
            label: 'Primary vs Secondary Fuel Types',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },

          {
            id: 'Primary_Cooking_Fuel_vs_Primary_Cookstove',
            label: 'Primary Cooking Fuel vs Primary Cookstove',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },

          {
            id: 'Primary_Stove_Type',
            label: 'Primary Stove Type',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
      {
        id: 'energy_access_summary',
        label: 'Energy Access Summary',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Primary_Sources_of_Electricity_by_Tier',
            label: 'Primary Sources of Electricity by Tier',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Primary_Sources_of_Cooking_Fuel_by_Electricity_Tier',
            label: 'Primary Sources of Cooking Fuel by Electricity_Tier',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Primary_Sources_of_Household_Lighting',
            label: 'Primary Sources of Household Lighting',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
      {
        id: 'grid_hh_detail',
        label: 'Grid Household Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Grid_Electricity_Access_by_Tier',
            label: 'Grid Electricity Access by Tier',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
      {
        id: 'stopgap_household_detail',
        label: 'Stopgap Household Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Primary_Source_of_Lighting_Prior_to_Solar',
            label: 'Primary Source of Lighting Prior to Solar',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
    ],
  },
  {
    id: 'admin',
    label: 'Module 2',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'cooking_existing_expenditures',
        label: 'Existing expenditures on energy for cooking',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Amount_Spent_on_Fuel_for_Stoves',
            label: 'Amount Spent on Fuel for Stoves',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Amount_Paid_for_Cookstoves',
            label: 'Amount Paid for Cookstoves',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
      {
        id: 'section_l_part_1',
        label: 'Consumption / expenditure on other goods & services',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Amount_Spent_on_Mobile_Phone_Top_up_per_Month',
            label: 'Amount Spent on Mobile Phone Top up per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Amount_Spent_on_House_Rent_per_Month',
            label: 'Amount Spent on House Rent per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },

      {
        id: 'lighting_existing_expenditures',
        label: 'Existing expenditures on energy for lighting & appliances',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Days_Used_Lamp_or_Candle_per_Month',
            label: 'Days Used Lamp or Candle per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Hours_Used_Lamp_or_Candle_per_Day',
            label: 'Hours Used Lamp or Candle per Day',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Weekly_Expenditure_on_Lamps_or_Candles',
            label: 'Weekly Expenditure on Lamps or Candles',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },

      {
        id: 'cooking_wtp',
        label: 'Existing expenditures on energy for improved cookstoves',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          // {
          //   id: 'k2k3_charcoal',
          //   label: 'K2K3 Charcoal',
          //   defaultVisibility: false,
          //   legend: 'none',
          //   info: '',
          // },
          {
            id: 'Willingness_to_Pay_over_12_months_for_a_Fuelwood_Cookstove',
            label: 'Willingness to Pay over 12 months for a Fuelwood Cookstove',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
      // {
      //   id: 'elec_grid_willing_to_pay',
      //   label: '(Elec/Grid) Willingness to Pay',
      //   defaultVisibility: false,
      //   legend: 'none',
      //   subcontrols: [
      //     {
      //       id: 'wtp_d6',
      //       label: 'wtp_d6',
      //       defaultVisibility: false,
      //       legend: 'none',
      //       info: '',
      //     },
      //     {
      //       id: 'wtp_d7',
      //       label: 'wtp_d7',
      //       defaultVisibility: false,
      //       legend: 'none',
      //       info: '',
      //     },
      //     {
      //       id: 'wtp_e7',
      //       label: 'wtp_e7',
      //       defaultVisibility: false,
      //       legend: 'none',
      //       info: '',
      //     },
      //     {
      //       id: 'wtp_e8',
      //       label: 'wtp_e8',
      //       defaultVisibility: false,
      //       legend: 'none',
      //       info: '',
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 'admin',
    label: 'Module 3',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'Number_of_Phones_the_Household_Owns',
        label: 'Number of Phones the Household Owns',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Module 4',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'cooking_wtp',
        label: 'Existing expenditures on energy for improved cookstoves',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Number_of_Rooms_the_Household_Occupies',
            label: 'Number of Rooms the ousehold_Occupies',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Wall_Dwelling_Materials',
            label: 'Wall Dwelling Materials',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Floor_vs_Wall_Dwelling_Material',
            label: 'Floor vs Wall Dwelling Material',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
    ],
  },
]

const VegaContainer = styled.section`
  grid-column: 4 / span 9;
`
export default function Mtf({ siteAcronym, siteName, config, theme }) {
  const { sources, layers, csv } = config
  const [state, dispatch] = useReducer(reducer, mtfUiControls, init)
  const [selectedGraph, setSelectedGraph] = useState('')

  const toggleLayer = (controlId) => {
    setSelectedGraph(controlId)
    dispatch({ type: 'toggleLayer', payload: controlId })
  }
  const changeSlider = (payload) => {
    dispatch({ type: 'setSlider', payload })
  }
  const clearAll = () => {
    dispatch({ type: 'reset', payload: mtfUiControls })
  }

  const hasSelectedLayers = Object.values(state).some(
    (control) => control.visibility
  )

  return (
    <PageLayout siteAcronym={siteAcronym} theme={theme} noMargin>
      <MtfDrawer
        siteName={siteName}
        country={config.country}
        cc={config.countryCode}
        clearAll={clearAll}
        hasSelectedLayers={hasSelectedLayers}
      >
        <GraphControl
          uiState={state}
          uicontrols={mtfUiControls}
          toggleLayer={toggleLayer}
          changeSlider={changeSlider}
          selectedGraph={selectedGraph}
        />
        {selectedGraph}
      </MtfDrawer>

      <VegaContainer>
        {/* <VisualizationSelector /> */}
        {selectedGraph === '' ? (
          <HelpMessage>
            Please select a graph using the navigation bar on the left.
          </HelpMessage>
        ) : (
          <Vega
            height={250}
            style={{ height: '100%', width: '100%', padding: '50px' }}
            spec={vegaData[selectedGraph]}
          />
        )}
      </VegaContainer>
    </PageLayout>
  )
}

Mtf.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  config: PropTypes.shape({
    country: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    center: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    zoom: PropTypes.number.isRequired,
    uicontrols: PropTypes.array.isRequired,
    sources: PropTypes.object.isRequired,
    layers: PropTypes.array.isRequired,
    csv: PropTypes.string.isRequired,
  }),
  theme: PropTypes.object.isRequired,
}
