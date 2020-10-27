import PropTypes from 'prop-types'
import React, { useState } from 'react'

import PageLayout from '../components/PageLayout'
import Drawer from '../components/Drawer'
import Map from '../components/Map'
import Source from '../components/Source'
import Layer from '../components/Layer'
import CsvLayers from '../components/CsvLayers'
import Basemap from '../components/Basemap'

import uicontrols from '../config/uicontrols'
import sources from '../config/sources'
import layers from '../config/layers'

function getDefaultVisibility() {
  return uicontrols.reduce((obj, cur) => {
    return (
      Object.entries(cur.controls).map(([controlId, control]) => {
        if (control.subcontrols) {
          return Object.entries(control.subcontrols).map(
            ([subcontrolId, subcontrol]) =>
              (obj[subcontrolId] = subcontrol.defaultVisibility)
          )
        }
        return (obj[controlId] = control.defaultVisibility)
      }),
      obj
    )
  }, {})
}

function getControlIdForLayer(layerId) {
  let controlId
  uicontrols.find((group) => {
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

function isLayerVisible(layerId, layerVisibility) {
  const controlId = getControlIdForLayer(layerId)
  if (!controlId) {
    /**
     * Layer "${layerId}" is not assigned to any group. Will always be visible by default.
     */
    return false
  }
  return layerVisibility[controlId]
}

export default function Explore({ config }) {
  const [layerVisibility, setLayerVisibility] = useState(
    () => getDefaultVisibility() // lazy initialization of default state
  )

  const toggleLayer = (controlId) => {
    setLayerVisibility((layerVisibility) => {
      return { ...layerVisibility, [controlId]: !layerVisibility[controlId] }
    })
  }

  const [sliderValue, setSliderValue] = useState({
    'population-mask': { min: 0, max: 300 },
    'Kerosene (Total)': { min: 0, max: 50 },
  })
  const changeSlider = (value) => {
    setSliderValue(value)
  }

  return (
    <PageLayout siteAcronym={config.siteAcronym} noMargin>
      <Drawer
        siteName={config.siteName}
        country={config.country}
        cc={config.countryCode}
        layerVisibility={layerVisibility}
        toggleLayer={toggleLayer}
        changeSlider={changeSlider}
        sliderValue={sliderValue}
      />
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
                .map((layer) => (
                  <Layer
                    key={layer.id}
                    id={layer.id}
                    isVisible={isLayerVisible(layer.id, layerVisibility)}
                    spec={layer}
                    sliderValue={sliderValue[layer.id]}
                  />
                ))}
            </Source>
          ))
        )}
        <CsvLayers
          id='csv'
          layerVisibility={layerVisibility}
          sliderValue={sliderValue['Kerosene (Total)']}
        />
        <Basemap id='road' isVisible={layerVisibility['road']} />
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
