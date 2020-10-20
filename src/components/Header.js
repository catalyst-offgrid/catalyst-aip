import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import theme from '../config/theme'

const HeaderContainer = styled.header`
  padding: ${theme.space[4]}px ${theme.space[3]}px;
`

const Heading = styled.h1`
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[4]}pt;
  font-weight: ${theme.fontWeights.heading};
  margin: 0;

  display: inline-flex;
  align-items: center;
  gap: ${theme.space[2]}px;
`

const Tagline = styled.label`
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[0]}pt;
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`

const Flag = styled.span`
  font-size: ${theme.fontSizes[3]}pt;
`

export default function Header({ siteName, headline }) {
  return (
    <HeaderContainer>
      <Tagline>{siteName}</Tagline>
      <Heading>
        <Flag role='img' aria-label='flag-ke'>
          🇰🇪
        </Flag>
        {headline}
      </Heading>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
}
