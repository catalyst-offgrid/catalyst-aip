import PropTypes from 'prop-types'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import CATALYST_LOGO from '../../img/CATALYST_LOGO.png'

import { Home, Population, Layers, Info } from '../icons'

const Container = styled.nav`
  min-width: ${({ theme }) => `${theme.space[5]}px`};
  width: ${({ theme }) => `${theme.space[5]}px`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`

const Logo = styled.figure`
  margin: ${({ theme }) => `${theme.space[3]}px`};
  margin-bottom: ${({ theme }) => `${theme.space[2]}px`};
`

const Name = styled.div`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[3]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  text-transform: uppercase;
  text-align: center;
`

const NavList = styled.ul`
  list-style-type: none;
  margin: 48px 0;
  padding: 0;
`

const NavItem = styled.li`
  text-align: center;
  background-color: ${({ isMatch, theme }) =>
    isMatch ? `${theme.colors.highlight}` : `${theme.colors.primary}`};
  border-radius: 4px;
  width: 48px;
  height: 48px;
  margin: 0 auto;
`

export default function NavigationBar({ siteAcronym, theme }) {
  let { path } = useRouteMatch()

  return (
    <Container>
      <Logo>
        <img alt='CATALYST Off Grid Advisors' src={CATALYST_LOGO} width={40} />
      </Logo>
      <Name>{siteAcronym}</Name>
      <NavList>
        <NavItem isMatch={path === '/'}>
          <Link to='/' aria-label='Go to Home page' data-cy='link-home'>
            <Home color={theme.colors.background} />
          </Link>
        </NavItem>
        <NavItem isMatch={path === '/countries'}>
          <Link
            to='/countries'
            aria-label='Choose country'
            data-cy='link-countries'
          >
            <Layers color={theme.colors.background} />
          </Link>
        </NavItem>
        <NavItem isMatch={path === '/info'}>
          <Link
            to='/info'
            aria-label='Read more about this project'
            data-cy='link-info'
          >
            <Info color={theme.colors.background} />
          </Link>
        </NavItem>
      </NavList>
    </Container>
  )
}

NavigationBar.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
