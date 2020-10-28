import PropTypes from 'prop-types'
import React from 'react'

import PageLayout, {
  InfoBlock,
  Tagline,
  PageTitle,
  Paragraph,
  Logo,
} from '../components/PageLayout'

export default function Info({ config }) {
  return (
    <PageLayout siteAcronym={config.siteAcronym}>
      <InfoBlock>
        <Tagline>About</Tagline>
        <PageTitle>The tool</PageTitle>
        <Paragraph>
          The Catalyst Access Insights Platform (AIP) is an open access,
          interactive, online platform that allows for overview of
          electrification investment scenarios for Kenya.
        </Paragraph>
        <Paragraph>
          Users can explore and overlay 42 different layers to meet the access
          goals (e.g. wind potential, electricity networks, location of health
          facilities) to help illustrate useful contextual information about the
          country.
        </Paragraph>
        <Paragraph>
          For any inquiries and potential collaboration please contact the
          development team:
        </Paragraph>
        <Paragraph>Catalyst Off Grid Advisors</Paragraph>
        {/* TODO: Add point of contact  */}
      </InfoBlock>
      <Logo />
    </PageLayout>
  )
}

Info.propTypes = {
  config: PropTypes.shape({
    siteAcronym: PropTypes.string.isRequired,
  }),
}
