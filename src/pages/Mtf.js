import PropTypes from 'prop-types'
import React, { useReducer } from 'react'

import PageLayout from '../components/PageLayout'
import Drawer from '../components/Drawer'
import Map from '../components/Map'
import Source from '../components/Source'
import Layer from '../components/Layer'
import CsvLayers from '../components/CsvLayers'
import BasemapLayers from '../components/BasemapLayers'

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
        id: 'counties',
        label: 'Energy Access Summary',
        defaultVisibility: false,
        legend: 'none',
        // layerIds: ['counties', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: 'Counties',
      },
      {
        id: 'sub-counties',
        label: 'Grid HH Detail',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['sub-counties'],
        info: 'Sub Counties',
      },
      {
        id: 'wards',
        label: 'Solar-based Device Detail',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['wards'],
        info: 'Wards',
      },
      {
        id: 'wards',
        label: 'Stopgap HH Detail',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['wards'],
        info: 'Wards',
      },
      {
        id: 'wards',
        label: 'Cooking Fuel Detail',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['wards'],
        info: 'Wards',
      },
      {
        id: 'wards',
        label: 'Primary Source Info',
        defaultVisibility: false,
        legend: 'none',
        layerIds: ['wards'],
        info: 'Wards',
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
        id: 'counties',
        label: 'Energy Access Summary',
        defaultVisibility: false,
        legend: 'none',
        // layerIds: ['counties', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: 'Counties',
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
        id: 'counties',
        label: 'Energy Access Summary',
        defaultVisibility: false,
        legend: 'none',
        // layerIds: ['counties', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: 'Counties',
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
        id: 'counties',
        label: 'Energy Access Summary',
        defaultVisibility: false,
        legend: 'none',
        // layerIds: ['counties', 'admin-1-boundary', 'admin-1-boundary-bg'],
        info: 'Counties',
      },
    ],
  },
]

export default function Mtf({ siteAcronym, siteName, config, theme }) {
  const { sources, layers, csv } = config
  const [state, dispatch] = useReducer(reducer, mtfUiControls, init)

  const toggleLayer = (controlId) => {
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
        <LayerControl
          uiState={state}
          uicontrols={mtfUiControls}
          toggleLayer={toggleLayer}
          changeSlider={changeSlider}
        />
      </MtfDrawer>
      <VisualizationSelector />
      {/* <Map zoom={config.zoom} center={config.center}>
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
                  const controlId = getControlIdForLayer(
                    layer.id,
                    mtfUiControls
                  )
                  return (
                    <Layer
                      key={layer.id}
                      id={layer.id}
                      isVisible={state[controlId].visibility}
                      spec={layer}
                      before='road-label' // This is a layer id from the basemap. It might not exist in other basemaps styles!
                    />
                  )
                })}
            </Source>
          ))
        )}

        <CsvLayers id='csv' csv={csv} uiState={state} theme={theme} />

        <BasemapLayers
          id='admin'
          isVisible={state['counties'].visibility}
          layerIds={
            mtfUiControls
              .find((group) => group.id === 'admin')
              .controls.find((control) => control.id === 'counties').layerIds
          }
        />
      </Map> */}
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
