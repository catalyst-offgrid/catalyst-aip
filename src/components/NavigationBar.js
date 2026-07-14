import PropTypes from 'prop-types'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import CATALYST_LOGO from '../../img/CATALYST_LOGO.png'

import { Home, Layers, Info, EconHealth } from '../icons'

const Container = styled.nav`
  min-width: ${({ theme }) => `${theme.space[5]}px`};
  width: ${({ theme }) => `${theme.space[5]}px`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.figure`
  margin: ${({ theme }) => `${theme.space[3]}px 0 ${theme.space[2]}px`};
`

const Name = styled.div`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;
`

const NavList = styled.ul`
  list-style-type: none;
  margin: ${({ theme }) => `${theme.space[4] + theme.space[3]}px 0`};
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.space[2]}px`};
`

const NavItem = styled.li`
  background-color: ${({ isMatch, theme }) =>
    isMatch ? theme.colors.highlight : 'transparent'};
  border-radius: ${({ theme }) => theme.radii[2]}px;
  width: 48px;
  height: 48px;

  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ isMatch, theme }) =>
      isMatch ? theme.colors.highlight : 'rgba(255, 255, 255, 0.16)'};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radii[2]}px;
  }
`

export default function NavigationBar({ siteAcronym, theme }) {
  let { path } = useRouteMatch()

  return (
    <Container>
      <Logo>
        <img alt='Catalyst Energy Advisors' src={CATALYST_LOGO} width={40} />
      </Logo>
      <Name>{siteAcronym}</Name>
      <NavList>
        <NavItem isMatch={path === '/'}>
          <Link to='/' aria-label='Go to Home page' data-cy='link-home'>
            <Home color={theme.colors.background} />
          </Link>
        </NavItem>
        <NavItem isMatch={path === '/select'}>
          <Link
            to='/select'
            aria-label='Explore the Map'
            data-cy='link-explore'
          >
            <Layers color={theme.colors.background} />
          </Link>
        </NavItem>

        <NavItem isMatch={path === '/mtf'}>
          <Link
            to='/mtf'
            aria-label='Explore the MTF Module'
            data-cy='link-mtf'
          >
            <EconHealth color={theme.colors.background} />
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
