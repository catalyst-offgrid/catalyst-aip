import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Credits from '../components/Credits'

import PageLayout, {
  InfoBlock,
  Tagline,
  PageTitle,
  Paragraph,
  Logo,
} from '../components/PageLayout'

const PartnersBlock = styled.div`
  grid-column: 2 / span 1;
`

export default function Info({ siteAcronym, theme }) {
  return (
    <PageLayout siteAcronym={siteAcronym} theme={theme}>
      <InfoBlock>
        <Tagline>About</Tagline>
        <PageTitle>The tool</PageTitle>
        <Paragraph>
          The Access Insights Platform (AIP) is an interactive, open-source data
          visualization platform that provides key insights on factors related
          to household and community level supply and demand of electricity,
          demographics, and socio-economics trends. The AIP utilizes predictive
          algorithms to visually depict population density, key infrastructure
          (roads, electricity grids) and visualize hyper-localized mobile
          network connectivity. It also maps health facilities, financial
          institutions (banks, MFIs, SACCOs), and other infrastructure relevant
          to last-mile distribution businesses.
        </Paragraph>
        <Paragraph>
          AIP’s objective is to help businesses make well-informed strategic
          decisions in the markets in which they operate or intend to reach in
          the future, helping you understand opportunities and risks in
          geographically defined areas.
        </Paragraph>
        <Paragraph>
          Household survey datasets (e.g. censuses, Living Standards Measurement
          Surveys, Demographic and Health Surveys, Financial Inclusion Surveys)
          will be identified and prioritized. Data will be cleaned, parsed,
          analyzed (using code, where possible), and will then be uploaded onto
          the web-based platform. This data will be able to reveal detailed,
          localized insights. Specific data layers and their level of
          granularity will depend on the source data.
        </Paragraph>
        <Paragraph>
          For any inquiries and potential collaboration please contact the
          development and support team{' '}
          <a href='mailto:development@catalystoffgrid.com'>
            Catalyst Off-Grid Advisors
          </a>
        </Paragraph>
        {/* TODO: Add point of contact  */}
      </InfoBlock>

      <Logo withTagline />

      <PartnersBlock>
        <Paragraph as='div'>
          In partnership with <Credits />
        </Paragraph>
      </PartnersBlock>
    </PageLayout>
  )
}

Info.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
