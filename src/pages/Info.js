import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Credits from '../components/Credits'

import PageLayout, {
  InfoBlock,
  Tagline,
  PageTitle,
  Paragraph,
  CatalystLogo,
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
          The Access Insights Platform (AIP) is an interactive, open-source data
          aggregation and visualization platform that provides key insights on
          factors related to household and community level supply and demand of
          electricity, demographics, socio-economics trends, and other factors
          relevant to last-mile distrubiton enterprises. The geospatial module
          utilizes predictive algorithms to visually depict population density
          and key infrastructure (e.g., electricity grids) and allows users to
          visualize mobile network coverage and the locations of health
          facilities, financial institutions (banks, MFIs, SACCOs), and other
          key infrastructure. Separately, AIP's MTF module offers users the
          opportunity to interact with the powerful Multi-Tier framework survey
          datasets which cover household access to electricity and clean cooking
          and go beyond the binary approach to look at access as a spectrum of
          service levels experienced by households.
        </Paragraph>
        <Paragraph>
          AIP’s primary objective is to help enterprises make well-informed strategic
          decisions in the markets in which they operate or intend to operate in
          the future, helping them understand opportunities and risks in
          geographically defined areas. It is also intended to support governments and 
          development partners identify shortcomings and maximize the impacts of their programs. 
          AIP is sector agnostic, with a focus on democratizing data for practitioners that are 
          focused on last mile service delivery. It was inspired by and complements other data 
          visualization and analytic platforms that are available to practitioners and policymakers. 
          We encourage visitors to AIP to also explore these offerings: 
        </Paragraph>

        <Paragraph>
          <a href="https://www.atlasai.co/">Atlas AI</a> brings together world class machine learning 
          talent and deep domain expertise to develop software that allows customers to plan and monitor
          high stakes investments including infrastructure development initiatives and market expansion programs.
        </Paragraph>

        <Paragraph>
          <a href="https://fraym.io/">Fraym</a> was built to help fast-growing companies, development 
          organizations, and governments succeed in places where data has been traditionally hard to access. 
          Using the latest geospatial technology, Fraym delivers unprecedented, localized information about 
          population characteristics and behaviors.
        </Paragraph>

         <Paragraph>
          <a href="https://www.energyaccessexplorer.org/">Energy Access Explorer</a> is an online, open-source, interactive 
          platform that synthesizes and analyzes more than 25 geographic data sets (per geography) on both energy 
          supply and demand. It is a multi-criteria analysis tool that uses location-specific resource availability
          and infrastructure data to represent energy supply. It also incorporates demographic data and data on 
          social and productive uses to visualize demand for energy services. Together, these supply and demand
          indicators enable more comprehensive energy planning. Spatial analysis tools, including multi-criteria 
          analysis, overlays, filters and buffer zones, help users identify and prioritize areas where energy access 
          can be expanded.
        </Paragraph>

         <Paragraph>
          <a href="https://electrifynow.energydata.info/">Global Electrification Platform</a> is an open access, interactive, 
          online platform that allows for an overview of electrification investment scenarios for a selection of countries. 
          The scenarios present pathways for achieving universal electricity access, split into an intermediate strategy 
          for 2025 and full electrification by 2030.
        </Paragraph>

       <Paragraph>
          <a href="https://www.kenya-atlas.org/interactive/index.html">Socio-Economic Atlas of Kenya</a> features high-resolution 
          spatial depictions and analyses of data collected in the 2009 Kenya Population and Housing Census. The combination of 
          geographic and socio-economic data enables policymakers at all levels, development experts, and other interested readers 
          to gain a spatial understanding of dynamics affecting Kenya.
        </Paragraph>

        <Paragraph>
          <a href="https://www.villagedata.io/">Village Data Analytics</a> is an earth observation 
          and AI-powered custom software that enables data-driven investment, business and policy decisions in rural villages in 
            Africa and Asia.
        </Paragraph>


        <Paragraph>
          For any inquiries and potential collaboration, including dataset
          contributions, please contact the development team at{' '}
          <a href='mailto:aip@catalystoffgrid.com'>
            Catalyst Off-Grid Advisors
          </a>
        </Paragraph>
        </InfoBlock>

      <CatalystLogo withTagline />

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
