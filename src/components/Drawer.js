import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import LayerControl from './LayerControl'

const Container = styled.section`
  grid-column: 1 / span 3;

  height: 100%;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.24);
  z-index: 1;
  overflow-y: scroll;
`

export default function Drawer({
  siteName,
  country,
  cc,
  layerVisibility,
  toggleLayer,
}) {
  return (
    <Container>
      <Header siteName={siteName} country={country} cc={cc} />
      <LayerControl
        toggleLayer={toggleLayer}
        layerVisibility={layerVisibility}
      />
    </Container>
  )
}

Drawer.propTypes = {
  siteName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  layerVisibility: PropTypes.object,
  toggleLayer: PropTypes.func.isRequired,
}
