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

const Actions = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.space[3]}px;
`

const PrimaryButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  min-width: 240px;
  padding: ${({ theme }) => `${theme.space[3]}px ${theme.space[4]}px`};
  border: ${({ theme }) => `4px solid ${theme.colors.primary}`};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[3]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
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

export default function Home({ siteAcronym, siteName, imageUrl, theme }) {
  return (
    <PageLayout siteAcronym={siteAcronym} theme={theme}>
      <Introduction>
        <Tagline>Welcome to the</Tagline>
        <PageTitle>{siteName}</PageTitle>
        <Paragraph>
          AIP is an open-source platform for data analysis, visualizations, and
          tools that are directly applicable to last-mile service delivery in
          emerging markets.
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
            aria-label='Read some more about this project'
            data-cy='info-button'
          >
            Learn more
          </SecondaryButton>
        </Actions>
      </Introduction>
      <Logo withTagline />
      <Image url={imageUrl} />
    </PageLayout>
  )
}

Home.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
