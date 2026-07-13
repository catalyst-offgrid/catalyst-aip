import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Credits from '../components/Credits'

import INNOVATION_LOGO from '../../img/INNOVATION_CATALYST_ENERGY_white.png'

import {
  HomePageLayout,
  Introduction,
  Hero,
  HeroLogo,
  Tagline,
  PageTitle,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  CaptionNoItalics,
} from '../components/PageLayout'

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
`

const PartnersBlock = styled.div`
  min-width: 0;
`

export default function Home({ siteAcronym, siteName, imageUrl, theme }) {
  return (
    <HomePageLayout siteAcronym={siteAcronym} theme={theme}>
      <Hero url={imageUrl}>
        <HeroLogo
          alt='An innovation of Catalyst Energy Advisors'
          src={INNOVATION_LOGO}
        />
      </Hero>
      <Introduction>
        <div>
          <Tagline>Welcome to the</Tagline>
          <PageTitle>{siteName}</PageTitle>
          <Paragraph>
            AIP is a business intelligence tool for last mile distribution. As
            an open source, interactive platform it democratizes data by making
            it easy for practitioners to inform strategy and operations.
          </Paragraph>
          <Actions>
            <PrimaryButton
              to='/select'
              aria-label='Explore the Map'
              data-cy='explore-button'
            >
              Start Exploring
            </PrimaryButton>
            <SecondaryButton
              to='/info'
              aria-label='Read some more about this project'
              data-cy='info-button'
            >
              Learn more
            </SecondaryButton>
          </Actions>
        </div>
        <PartnersBlock>
          <CaptionNoItalics>In partnership with</CaptionNoItalics>
          <Credits />
        </PartnersBlock>
      </Introduction>
    </HomePageLayout>
  )
}

Home.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
