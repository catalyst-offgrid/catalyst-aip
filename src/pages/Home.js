import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Map from '../components/Map'

const PageContainer = styled.main`
  height: 100%;
  overflow: hidden;
`

export default function Home({ config }) {
  return (
    <PageContainer>
      <Header siteName={config.siteName} />
      <Map />
    </PageContainer>
  )
}

Home.propTypes = {
  config: PropTypes.shape({
    siteName: PropTypes.string.isRequired,
  }),
}
