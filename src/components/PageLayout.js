import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import NavigationBar from './NavigationBar'
import CATALYST_BLUE from '../../img/CATALYST_BLUE.png'

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

  margin: ${({ noMargin }) => (noMargin ? 0 : `0 auto`)};
  padding: ${({ noMargin, theme }) =>
    noMargin ? 0 : `${2 * theme.space[3]}px ${theme.space[5]}px`};

  overflow: auto;
`

export default function PageLayout({ siteAcronym, theme, noMargin, children }) {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <NavigationBar siteAcronym={siteAcronym} theme={theme} />
        <MainContent noMargin={noMargin} tabIndex='0'>
          {children}
        </MainContent>
      </PageContainer>
    </ThemeProvider>
  )
}

PageLayout.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  noMargin: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export const Introduction = styled.div`
  grid-column: 1 / span 5;
`

export const InfoBlock = styled.div`
  grid-column: 1 / span 8;
`

export const Tagline = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[2]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
`

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[5]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.heading};

  margin-top: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.body};

  margin-top: ${({ theme }) => theme.space[4]}px;
  margin-bottom: ${({ theme }) => theme.space[3] + theme.space[4]}px;
`

const LogoContainer = styled.figure`
  grid-column: 1 / span 5;
  align-self: end;
  margin: 5;

  display: flex;
  flex-direction: column;
`

const Caption = styled.figcaption`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[3]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.body};
  text-transform: uppercase;

  margin: ${({ theme }) => theme.space[3]}px 0;
`

export const Logo = ({ withTagline }) => (
  <LogoContainer>
    {withTagline && <Caption>An Innovation Of</Caption>}
    <img alt='CATALYST Off Grid Advisors' src={CATALYST_BLUE} width={300} />
  </LogoContainer>
)

Logo.propTypes = {
  withTagline: PropTypes.bool,
}
