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
        label: 'Cooking Fuels Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'fuels_heatmap',
            label: 'Fuels Heatmap',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },

          {
            id: 'heatmap_fuel_stove',
            label: 'heatmap_fuel_stove',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },

          {
            id: 'primary_stove',
            label: 'primary_stove',
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
            id: 'electricity_access_tiers2',
            label: 'electricity_access_tiers2',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'primary_cooking',
            label: 'primary_cooking',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'primary_lighting',
            label: 'primary_lighting',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
      {
        id: 'grid_hh_detail',
        label: 'Grid HH Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'avg_grid_availability',
            label: 'Average Grid Availability',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'grid_acc_tier',
            label: 'grid_acc_tier',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
      {
        id: 'solar_based_device_detail',
        label: 'Solar-based Device Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'solar_prior',
            label: 'solar_prior',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },

      {
        id: 'demo_graph',
        label: 'Demo Graphs',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'g117',
            label: 'g117',
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
        label: '(Cooking) Existing Expenditures',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'i_4_obtain',
            label: 'Obtain (Cookstove)',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'i_41_a',
            label: 'i_41_a',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'i_5_cost',
            label: 'i_5_cost',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
      {
        id: 'section_l_part_1',
        label: 'Section L Part 1: 1-12',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'l15',
            label: 'l15',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },

      {
        id: 'kerosene_existing_expenditures',
        label: '(Kerosene) Existing Expenditures',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'f8',
            label: 'f8',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'f9',
            label: 'f9',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'f11',
            label: 'f11',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },

      {
        id: 'cooking_wtp',
        label: '(Cooking) WTP',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'k2k3_charcoal',
            label: 'K2K3 Charcoal',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'k6k7_fuelwood',
            label: 'k6k7_fuelwood',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
      {
        id: 'elec_grid_willing_to_pay',
        label: '(Elec/Grid) Willingness to Pay',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'wtp_d6',
            label: 'wtp_d6',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'wtp_d7',
            label: 'wtp_d7',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'wtp_e7',
            label: 'wtp_e7',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'wtp_e8',
            label: 'wtp_e8',
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
    label: 'Module 3',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'c160',
        label: 'c160',
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
        id: 'b9',
        label: 'b9',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'b10_b11_b12',
        label: 'b10_b11_b12',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'b10',
        label: 'b10',
        defaultVisibility: false,
        legend: 'none',
        info: '',
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
