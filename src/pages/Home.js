import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Credits from '../components/Credits'

import INNOVATION_LOGO from '../../img/INNOVATION_LOGO.png'

import {
  HomePageLayout,
  Introduction,
  Tagline,
  PageTitle,
  Paragraph,
  Logo,
} from '../components/PageLayout'

const Actions = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.space[3]}px;
`

const PartnersBlock = styled.div`
  grid-column: 1 / span 4;
`

const PrimaryButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  min-width: 200px;
  padding: ${({ theme }) => `${theme.space[3]}px ${theme.space[4]}px`};
  border: ${({ theme }) => `4px solid ${theme.colors.primary}`};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
`

const Image = styled.figure`
  grid-area: 1 / 6 / 3 / span 7;
  margin: -140px -70px -140px 0;
  height: 115vh;

  background-image: ${({ url }) => `url(${url})`};
  background-size: auto 100%;
  background-position: center;

  clip-path: polygon(35% 0%, 115% 0%, 100% 100%, 35% 100%, 15% 60%);
  z-index: -1;
`

const CatalystLogo = styled.div`
  position: absolute;
  margin: 15px;
  margin-right: 30px;
  right: 0;
  bottom: 0;
`

export default function Home({ siteAcronym, siteName, imageUrl, theme }) {
  return (
    <HomePageLayout siteAcronym={siteAcronym} theme={theme}>
      <Logo />
      <Image url={imageUrl} />
      <Introduction>
        <div>
          <Tagline>
            <br />
            Welcome to the
          </Tagline>
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
        <Paragraph as='div' style={{ alignSelf: 'flexEnd' }}>
          In partnership with <Credits />
        </Paragraph>
      </Introduction>
      <CatalystLogo>
        <img src={INNOVATION_LOGO} />
      </CatalystLogo>
    </HomePageLayout>
  )
}

Home.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
