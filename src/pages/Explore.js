import PropTypes from 'prop-types'
import React, { useReducer } from 'react'

import PageLayout from '../components/PageLayout'
import Drawer from '../components/Drawer'
import Map from '../components/Map'
import Source from '../components/Source'
import Layer from '../components/Layer'
import CsvLayers from '../components/CsvLayers'
import BasemapLayers from '../components/BasemapLayers'

import uicontrols from '../config/uicontrols'
import sources from '../config/sources'
import layers from '../config/layers'
import LayerControl from '../components/LayerControl'

/**
 * Searches for the given layer id in the controls and subcontrols.
 * Returns the first control id that contains the layer id.
 * @param {String} layerId the id of a layer that should be controlled
 */
function getControlIdForLayer(layerId) {
  let controlId
  Object.values(uicontrols).find((group) => {
    const entry = Object.entries(group.controls).find(
      ([, control]) =>
        (control.layerIds && control.layerIds.includes(layerId)) ||
        (control.subcontrol &&
          Object.entries(control.subcontrol).find(([, subcontrol]) =>
            subcontrol.layerIds.includes(layerId)
          ))
    )
    if (entry) controlId = entry[0]
    return entry
  })
  if (!controlId)
    console.warn(`Layer "${layerId}" is not assigned to any control group.`)
  return controlId
}

/**
 * Converts the uicontrols config structure into the initital
 * ui state object
 */
function init(config) {
  return Object.values(config).reduce((obj, cur) => {
    return (
      Object.entries(cur.controls).map(([controlId, control]) => {
        if (control.subcontrols) {
          return Object.entries(control.subcontrols).map(
            ([subcontrolId, subcontrol]) =>
              (obj[subcontrolId] = {
                visibility: subcontrol.defaultVisibility,
                domain: subcontrol.domain,
                range: subcontrol.defaultRange,
              })
          )
        }
        return (obj[controlId] = {
          visibility: control.defaultVisibility,
          domain: control.domain,
          range: control.defaultRange,
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

export default function Explore({ config }) {
  const [state, dispatch] = useReducer(reducer, uicontrols, init)

  const toggleLayer = (controlId) => {
    dispatch({ type: 'toggleLayer', payload: controlId })
  }
  const changeSlider = (payload) => {
    dispatch({ type: 'setSlider', payload })
  }

  return (
    <PageLayout siteAcronym={config.siteAcronym} noMargin>
      <Drawer
        siteName={config.siteName}
        country={config.country}
        cc={config.countryCode}
      >
        <LayerControl
          uiState={state}
          toggleLayer={toggleLayer}
          changeSlider={changeSlider}
        />
      </Drawer>
      <Map>
        {Object.entries(sources).map(([type, list]) =>
          list.map((source) => (
            <Source
              key={source.id}
              id={source.id}
              type={type}
              tilesetid={source.tilesetid}
            >
              {layers
                .filter((layer) => layer.source === source.id)
                .map((layer) => {
                  const controlId = getControlIdForLayer(layer.id)
                  return (
                    <Layer
                      key={layer.id}
                      id={layer.id}
                      isVisible={state[controlId].visibility}
                      spec={layer}
                    />
                  )
                })}
            </Source>
          ))
        )}

        <CsvLayers id='csv' uiState={state} />

        <BasemapLayers
          id='transport'
          isVisible={state['road'].visibility}
          layerIds={
            Object.entries(uicontrols).find(([id]) => id === 'transport')[1]
              .controls['road'].layerIds
          }
        />
        <BasemapLayers
          id='admin'
          isVisible={state['counties'].visibility}
          layerIds={
            Object.entries(uicontrols).find(([id]) => id === 'admin')[1]
              .controls['counties'].layerIds
          }
        />
      </Map>
    </PageLayout>
  )
}

Explore.propTypes = {
  config: PropTypes.shape({
    siteAcronym: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
  }),
}
