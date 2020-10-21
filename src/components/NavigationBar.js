import PropTypes from 'prop-types'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import styled from 'styled-components'

import { Home, Layers, Info } from '../icons'
import theme from '../config/theme'

const Container = styled.section`
  width: ${theme.space[5]}px;
  height: 100%;
  background-color: ${theme.colors.blue};
`

const Name = styled.div`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.heading};
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
  background-color: ${(props) =>
    props.isMatch ? `${theme.colors.yellow}` : `${theme.colors.blue}`};
  border-radius: 4px;
  width: 48px;
  height: 48px;
  margin: 0 auto;
`

export default function NavigationBar({ siteName }) {
  let { path } = useRouteMatch()

  return (
    <Container>
      <nav>
        <Name>{siteName}</Name>
        <NavList>
          <NavItem isMatch={path === '/'}>
            <Link to='/'>
              <Home color={theme.colors.white} />
            </Link>
          </NavItem>
          <NavItem isMatch={path === '/explore'}>
            <Link to='/explore'>
              <Layers color={theme.colors.white} />
            </Link>
          </NavItem>
          <NavItem isMatch={path === '/info'}>
            <Link to='/info'>
              <Info color={theme.colors.white} />
            </Link>
          </NavItem>
        </NavList>
      </nav>
    </Container>
  )
}

NavigationBar.propTypes = {
  siteName: PropTypes.string.isRequired,
}
