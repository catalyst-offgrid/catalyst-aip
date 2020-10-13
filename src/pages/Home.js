import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Map from '../components/Map'
import Source from '../components/Source'
import Layer from '../components/Layer'
import Basemap from '../components/Basemap'

import groups from '../config/groups'
import sources from '../config/sources'
import layers from '../config/layers'

const PageContainer = styled.main`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`

function getDefaultVisibility() {
  return groups.reduce((obj, cur) => {
    return (
      Object.entries(cur.sub).map(
        ([subId, sub]) => (obj[subId] = sub.defaultVisibility)
      ),
      obj
    )
  }, {})
}

function getSubIdForLayer(layerId) {
  let subId
  groups.find((group) => {
    const entry = Object.entries(group.sub).find(([, sub]) =>
      sub.layerIds.includes(layerId)
    )
    if (entry) subId = entry[0]
    return entry
  })
  if (!subId) console.warn(`Layer "${layerId}" is not assigned to any group.`)
  return subId
}

function isLayerVisible(layerId, layerVisibility) {
  const subId = getSubIdForLayer(layerId)
  if (!subId) {
    /**
     * Layer "${layerId}" is not assigned to any group. Will always be visible by default.
     */
    return true
  }
  return layerVisibility[subId]
}

export default function Home({ config }) {
  const [layerVisibility, setLayerVisibility] = useState(
    () => getDefaultVisibility() // lazy initialization of default state
  )

  return (
    <PageContainer>
      <Header
        siteName={config.siteName}
        layerVisibility={layerVisibility}
        setLayerVisibility={setLayerVisibility}
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
                  />
                ))}
            </Source>
          ))
        )}
        <Basemap id='road' isVisible={layerVisibility['road']} />
      </Map>
    </PageContainer>
  )
}

Home.propTypes = {
  config: PropTypes.shape({
    siteName: PropTypes.string.isRequired,
  }),
}
