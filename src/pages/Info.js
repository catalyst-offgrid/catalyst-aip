import PropTypes from 'prop-types'
import React from 'react'

import PageLayout from '../components/PageLayout'

export default function Info({ config }) {
  return (
    <PageLayout siteAcronym={config.siteAcronym}>
      <h1>🚧 The tool</h1>
    </PageLayout>
  )
}

Info.propTypes = {
  config: PropTypes.shape({
    siteAcronym: PropTypes.string.isRequired,
  }),
}
