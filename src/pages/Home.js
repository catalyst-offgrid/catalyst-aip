import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Map from '../components/Map'
import Source from '../components/Source'
import Layer from '../components/Layer'

import sources from '../config/sources'
import layers from '../config/layers'

const PageContainer = styled.main`
  height: 100%;
  overflow: hidden;
`

export default function Home({ config }) {
  return (
    <PageContainer>
      <Header siteName={config.siteName} />
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
                  <Layer key={layer.id} id={layer.id} spec={layer} />
                ))}
            </Source>
          ))
        )}
      </Map>
    </PageContainer>
  )
}

Home.propTypes = {
  config: PropTypes.shape({
    siteName: PropTypes.string.isRequired,
  }),
}
