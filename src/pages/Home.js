import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import NavigationBar from '../components/NavigationBar'

const PageContainer = styled.main`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`

export default function Home({ config }) {
  return (
    <PageContainer>
      <NavigationBar siteName={config.siteName} />
      <h1>🚧 Catalyst Access Insights Platform</h1>
    </PageContainer>
  )
}

Home.propTypes = {
  config: PropTypes.shape({
    siteName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    'country-code': PropTypes.string.isRequired,
  }),
}
