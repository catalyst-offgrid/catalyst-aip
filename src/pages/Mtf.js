import PropTypes from 'prop-types'
import React, { useReducer, useEffect, useState } from 'react'

import PageLayout from '../components/PageLayout'
import Drawer from '../components/Drawer'
import Map from '../components/Map'
import Source from '../components/Source'
import Layer from '../components/Layer'
import CsvLayers from '../components/CsvLayers'
import BasemapLayers from '../components/BasemapLayers'

import { Vega } from 'react-vega'

import GraphControl from '../components/GraphControl'

import LayerControl from '../components/LayerControl'
import MtfDrawer from '../components/MtfDrawer'
import VisualizationSelector from '../components/VisualizationSelector'
import styled from 'styled-components'

// import vegaData from '../assets/mtf-graphs'

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

const VegaContainer = styled.section`
  grid-area: content;
`
export default function Mtf({
  siteAcronym,
  siteName,
  config,
  theme,
  mtfUiControls,
}) {
  const { sources, layers, csv } = config
  const [state, dispatch] = useReducer(reducer, mtfUiControls, init)
  const [selectedGraph, setSelectedGraph] = useState('')
  const [selectedGraphData, setSelectedGraphData] = useState()

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

  useEffect(() => {
    console.log('Fetching new graph')

    if (selectedGraph === '') return

    fetch(
      `https://raw.githubusercontent.com/JosephSemrai/mtf-graph-test/main/${selectedGraph}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('Async MTF graph retrieval: ', data)
        setSelectedGraphData(data)
      })
      .catch((e) => alert('Failed to load: ', JSON.stringify(e)))
  }, [selectedGraph])

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
      </MtfDrawer>

      <VegaContainer>
        {/* <VisualizationSelector /> */}
        {!selectedGraph ? (
          <HelpMessage>
            Please select a graph using the navigation bar on the left.
          </HelpMessage>
        ) : (
          <Vega
            height={250}
            style={{ height: '100%', width: '100%', padding: '50px' }}
            spec={selectedGraphData}
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
