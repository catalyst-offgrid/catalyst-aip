import PropTypes from 'prop-types'
import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import CATALYST_ENERGY from '../../img/CATALYST_ENERGY_ADVISORS.png'
import AIP_LOGO from '../../img/AIP_logo.png'

const PageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`

/**
 * App pages (map, MTF) pass noMargin and get an edge-to-edge
 * 'sidebar content' grid; document pages (Info) get a centered
 * reading column.
 */
const MainContent = styled.main`
  width: 100%;
  overflow: auto;

  ${({ noMargin, theme }) =>
    noMargin
      ? css`
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          grid-template-areas: 'sidebar content';
          height: 100%;
        `
      : css`
          display: block;
          padding: clamp(${theme.space[3]}px, 4vw, ${theme.space[5]}px);
        `}
`

const MainContentHome = styled.main`
  width: 100%;
  height: 100%;
  overflow: auto;

  display: grid;
  grid-template-columns: minmax(0, 46fr) minmax(0, 54fr);
  grid-template-rows: minmax(0, 1fr);
  grid-template-areas: 'intro hero';

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-areas:
      'hero'
      'intro';
    overflow-y: auto;
  }
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

export const HomePageLayout = ({ siteAcronym, theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <NavigationBar siteAcronym={siteAcronym} theme={theme} />
        <MainContentHome tabIndex='0'>{children}</MainContentHome>
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

HomePageLayout.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

/**
 * Left content column of the hero pages. Fluid padding, vertically
 * balanced, always in normal flow (no negative margins).
 */
export const Introduction = styled.div`
  grid-area: intro;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]}px;
  padding: clamp(24px, 4.5vw, 64px);
  min-width: 0;
`

/**
 * Right-hand hero image panel with a single confident diagonal edge
 * and a subtle brand-tinted overlay for depth. Becomes a top banner
 * on narrow screens.
 */
export const Hero = styled.figure`
  grid-area: hero;
  margin: 0;
  position: relative;
  min-height: 0;

  background-image: ${({ url }) =>
    `linear-gradient(215deg, rgba(48, 76, 162, 0.35) 0%, rgba(48, 76, 162, 0) 40%, rgba(249, 142, 8, 0.18) 100%), url(${url})`};
  background-size: cover;
  background-position: center;

  clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);

  @media (max-width: 900px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
    height: clamp(180px, 30vh, 280px);
  }
`

/** White-text partner logo overlaid on the hero photo */
export const HeroLogo = styled.img`
  position: absolute;
  right: clamp(16px, 3vw, 40px);
  bottom: clamp(16px, 3vw, 40px);
  width: min(510px, 42vw);

  @media (max-width: 900px) {
    width: min(300px, 60vw);
    bottom: 24%;
  }
`

export const InfoBlock = styled.div`
  max-width: 72ch;
`

export const Tagline = styled.span`
  color: ${({ theme }) => theme.colors.highlightText};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.14em;

  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;

  &::before {
    content: '';
    width: 28px;
    height: 2px;
    background: ${({ theme }) => theme.colors.highlight};
  }
`

export const SecondaryTagline = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(34px, 5vw, 58px);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.05;
  letter-spacing: -0.02em;

  margin-top: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  font-weight: ${({ theme }) => theme.fontWeights.body};
  line-height: 1.65;
  max-width: 52ch;

  margin-top: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`

/** Shared CTA buttons for the hero/selector pages */
export const PrimaryButton = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 14px 28px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii[2]}px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  transition: transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const Caption = styled.figcaption`
  color: ${({ theme }) => theme.colors.highlightText};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.14em;

  margin: ${({ theme }) => theme.space[3]}px 0;
`

export const CaptionNoItalics = styled.figcaption`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.14em;

  margin: ${({ theme }) => theme.space[3]}px 0;
`

export const UnorderedList = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  font-weight: ${({ theme }) => theme.fontWeights.body};
  line-height: 1.65;

  li + li {
    margin-top: ${({ theme }) => theme.space[3]}px;
  }
`

const LogoImg = styled.img`
  width: min(400px, 100%);
  height: auto;
`

const CatalystLogoImg = styled.img`
  max-width: min(350px, 100%);
  height: auto;
`

export const Logo = ({ withTagline }) => (
  <>
    {withTagline && <Caption>An Innovation Of</Caption>}
    <LogoImg alt='AIP Logo' src={AIP_LOGO} />
  </>
)

export const CatalystLogo = ({ withTagline }) => (
  <>
    {withTagline && <Caption>An Innovation Of</Caption>}
    <CatalystLogoImg
      alt='Catalyst Energy Advisors Logo'
      src={CATALYST_ENERGY}
    />
  </>
)

Logo.propTypes = {
  withTagline: PropTypes.bool,
}

CatalystLogo.propTypes = {
  withTagline: PropTypes.bool,
}
