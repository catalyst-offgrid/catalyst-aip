import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import PageLayout from '../components/PageLayout'
import theme from '../config/theme'

import CATALYST_BLUE from '../../img/CATALYST_BLUE.png'

const { colors, space } = theme

const Introduction = styled.div`
  grid-column: 1 / span 5;
`

const Tagline = styled.span`
  color: ${colors.primary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`

const PageTitle = styled.h1`
  color: ${colors.primary};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[5]}pt;
  font-weight: ${theme.fontWeights.heading};

  margin-top: ${space[3]}px;
  margin-bottom: ${space[4]}px;
`

const Paragraph = styled.p`
  color: ${colors.text};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.body};

  margin-top: ${space[4]}px;
  margin-bottom: ${space[3] + space[4]}px;
`

const Actions = styled.div`
  display: inline-flex;
  gap: ${space[3]}px;
`

const PrimaryButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  min-width: 240px;
  padding: ${space[3]}px ${space[4]}px;
  border: 4px solid ${colors.primary};
  border-radius: 4px;

  background-color: ${colors.primary};
  color: ${colors.background};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.bold};
`

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${colors.background};
  color: ${colors.primary};
`

const Caption = styled.figcaption`
  color: ${colors.primary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.body};
  text-transform: uppercase;

  margin: ${space[3]}px 0;
`

const Logo = styled.figure`
  grid-column: 1 / span 5;
  align-self: end;
  margin: 0;

  display: flex;
  flex-direction: column;
`

const Image = styled.figure`
  grid-area: 1 / 6 / 3 / span 7;
  margin: -140px -70px -140px 0;
  height: 100vh;

  background-image: url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3043&q=80');
  background-size: auto 100%;
  background-position: center;

  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
`

export default function Home({ config }) {
  return (
    <PageLayout siteAcronym={config.siteAcronym}>
      <Introduction>
        <Tagline>Welcome to the</Tagline>
        <PageTitle>{config.siteName}</PageTitle>
        <Paragraph>
          A business intelligence tool for enterprises looking to serve the last
          mile gap in electrification.
        </Paragraph>
        <Actions>
          <PrimaryButton to='/explore' aria-label='Explore the Map'>
            Start Exploring
          </PrimaryButton>
          <SecondaryButton to='/info' aria-label='Read more about this project'>
            Learn more
          </SecondaryButton>
        </Actions>
      </Introduction>
      <Logo>
        <Caption>An Innovation Of</Caption>
        <img alt='CATALYST Off Grid Advisors' src={CATALYST_BLUE} width={400} />
      </Logo>

      <Image />
    </PageLayout>
  )
}

Home.propTypes = {
  config: PropTypes.shape({
    siteAcronym: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    'country-code': PropTypes.string.isRequired,
  }),
}
