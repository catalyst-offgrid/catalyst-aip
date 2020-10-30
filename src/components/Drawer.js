import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const Container = styled.section`
  grid-column: 1 / span 3;

  height: 100%;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.24);
  z-index: 1;
  overflow-y: scroll;
`

export default function Drawer({ siteName, country, cc, children }) {
  return (
    <Container>
      <Header siteName={siteName} country={country} cc={cc} />
      {children}
    </Container>
  )
}

Drawer.propTypes = {
  siteName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  children: PropTypes.element,
}
