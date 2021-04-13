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
        <Tagline></Tagline>
        <PageTitle>About AIP</PageTitle>
        <Paragraph>
          The Access Insights Platform (AIP) is an interactive, open-source data aggregation and
          visualization platform that provides key insights on factors related
          to household and community level supply and demand of electricity,
          demographics, socio-economics trends, and other factors relevant to last-mile distrubiton eneterprises. The AIP utilizes predictive
          algorithms to visually depict population density and key infrastructure
          (e.g., electricity grids) and allows users to visualize mobile network coverage and the locations of health facilities, financial
          institutions (banks, MFIs, SACCOs), and other key infrastructure.
        </Paragraph>
        <Paragraph>
          AIP’s objective is to help businesses make well-informed strategic
          decisions in the markets in which they operate or intend to reach in
          the future, helping you understand opportunities and risks in
          geographically defined areas.
        </Paragraph>
       
        <Paragraph>
          For any inquiries and potential collaboration please contact the
          development team{' '}
          <a href='mailto:aip@catalystoffgrid.com'>
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
