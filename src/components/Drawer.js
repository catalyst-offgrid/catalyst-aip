import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import LayerControl from './LayerControl'
import theme from '../config/theme'

const Container = styled.section`
  max-width: ${theme.space[5]}px;
  height: 100%;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.24);
  z-index: 1;
  overflow-y: scroll;
`

export default function Drawer({
  siteName,
  headline,
  layerVisibility,
  toggleLayer,
}) {
  return (
    <Container>
      <Header siteName={siteName} headline={headline} />
      <LayerControl
        toggleLayer={toggleLayer}
        layerVisibility={layerVisibility}
      />
    </Container>
  )
}

Drawer.propTypes = {
  siteName: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  layerVisibility: PropTypes.object,
  toggleLayer: PropTypes.func.isRequired,
}
