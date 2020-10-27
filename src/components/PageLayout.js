import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import NavigationBar from './NavigationBar'
import theme from '../config/theme'
import CATALYST_BLUE from '../../img/CATALYST_BLUE.png'

const { space, colors } = theme

const PageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`

const MainContent = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  margin: ${({ noMargin }) => (noMargin ? 0 : `${space[5]}px auto`)};
  padding: ${({ noMargin }) => (noMargin ? 0 : `${space[5]}px`)};

  overflow: scroll;
`

export default function PageLayout({ siteAcronym, noMargin, children }) {
  return (
    <PageContainer>
      <NavigationBar siteAcronym={siteAcronym} />
      <MainContent noMargin={noMargin}>{children}</MainContent>
    </PageContainer>
  )
}

PageLayout.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  noMargin: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export const Introduction = styled.div`
  grid-column: 1 / span 5;
`

export const Tagline = styled.span`
  color: ${colors.primary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`

export const PageTitle = styled.h1`
  color: ${colors.primary};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[5]}pt;
  font-weight: ${theme.fontWeights.heading};

  margin-top: ${space[3]}px;
  margin-bottom: ${space[4]}px;
`

export const Paragraph = styled.p`
  color: ${colors.text};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.body};

  margin-top: ${space[4]}px;
  margin-bottom: ${space[3] + space[4]}px;
`

const LogoContainer = styled.figure`
  grid-column: 1 / span 5;
  align-self: end;
  margin: 0;

  display: flex;
  flex-direction: column;
`

const Caption = styled.figcaption`
  color: ${colors.primary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.body};
  text-transform: uppercase;

  margin: ${space[3]}px 0;
`

export const Logo = ({ withTagline }) => (
  <LogoContainer>
    {withTagline && <Caption>An Innovation Of</Caption>}
    <img alt='CATALYST Off Grid Advisors' src={CATALYST_BLUE} width={400} />
  </LogoContainer>
)

Logo.propTypes = {
  withTagline: PropTypes.bool,
}
