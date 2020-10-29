import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import PageLayout, {
  Introduction,
  Tagline,
  PageTitle,
  Paragraph,
  Logo,
} from '../components/PageLayout'
import theme from '../config/theme'

const { colors, space } = theme

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

const Image = styled.figure`
  grid-area: 1 / 6 / 3 / span 7;
  margin: -140px -70px -140px 0;
  height: 100vh;

  background-image: ${({ url }) => `url(${url})`};
  background-size: auto 100%;
  background-position: center;

  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  z-index: -1;
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
          <PrimaryButton
            to='/explore'
            aria-label='Explore the Map'
            data-cy='explore-button'
          >
            Start Exploring
          </PrimaryButton>
          <SecondaryButton
            to='/info'
            aria-label='Read more about this project'
            data-cy='info-button'
          >
            Learn more
          </SecondaryButton>
        </Actions>
      </Introduction>
      <Logo withTagline />
      <Image url={config.imageUrl} />
    </PageLayout>
  )
}

Home.propTypes = {
  config: PropTypes.shape({
    siteAcronym: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
}
