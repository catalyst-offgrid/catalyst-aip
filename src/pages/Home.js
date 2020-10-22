import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import NavigationBar from '../components/NavigationBar'
import theme from '../config/theme'

import CATALYST_BLUE from '../CATALYST_BLUE.png'

const { colors, space } = theme

const PageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`

const MainContent = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: max-content;
  gap: ${space[4]}px;
  margin: ${space[5]}px auto;
  padding: ${space[5]}px;
`
const Introduction = styled.div`
  grid-column: 1 / span 5;
`

const PageTitle = styled.h1`
  color: ${colors.primary};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[5]}pt;
  font-weight: ${theme.fontWeights.heading};
`

const Paragraph = styled.p`
  color: ${colors.text};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.body};

  margin-bottom: ${space[5]}px;
`

const Actions = styled.div`
  display: inline-flex;
  gap: ${space[3]}px;
`

const PrimaryButton = styled.button`
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

const Logo = styled.figure`
  grid-column: 1 / span 5;
  align-self: end;
  margin: 0;
`

export default function Home({ config }) {
  return (
    <PageContainer>
      <NavigationBar siteName={config.siteName} />
      <MainContent>
        <Introduction>
          <PageTitle>Catalyst Access Insights Platform</PageTitle>
          <Paragraph>
            Explore least cost electrification strategies around the world,
            interacting with country contextual data and different investment
            scenarios.
          </Paragraph>
          <Actions>
            <PrimaryButton>Start Exploring</PrimaryButton>
            <SecondaryButton>Learn more</SecondaryButton>
          </Actions>
        </Introduction>
        <Logo>
          <img
            alt='CATALYST Off Grid Advisors'
            src={CATALYST_BLUE}
            width={400}
          />
        </Logo>
      </MainContent>
    </PageContainer>
  )
}

Home.propTypes = {
  config: PropTypes.shape({
    siteName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    'country-code': PropTypes.string.isRequired,
  }),
}
