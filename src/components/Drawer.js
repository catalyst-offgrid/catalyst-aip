import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import LayerControl from './LayerControl'
import theme from '../config/theme'

const Container = styled.section`
  max-width: ${theme.space[5]}px;
  height: 100%;
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
