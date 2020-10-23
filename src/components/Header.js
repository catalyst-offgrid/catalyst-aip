import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import theme from '../config/theme'

const { colors, space } = theme

const HeaderContainer = styled.header`
  padding: ${space[4]}px ${space[3]}px;
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  color: ${colors.primary};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[4]}pt;
  font-weight: ${theme.fontWeights.heading};
  margin: 0;

  display: inline-flex;
  align-items: center;
  gap: ${space[2]}px;
`

const Tagline = styled.label`
  color: ${colors.primary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[0]}pt;
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`

const Flag = styled.span`
  font-size: ${theme.fontSizes[3]}pt;
`

export default function Header({ country, cc }) {
  const ASCII_OFFSET = 127397
  const chars = [...cc.toUpperCase()].map((c) => c.charCodeAt() + ASCII_OFFSET)
  const flag = String.fromCodePoint(...chars)

  return (
    <HeaderContainer>
      <Tagline>Country</Tagline>
      <Heading>
        <Flag role='img' aria-label={`flag-${cc}`}>
          {flag}
        </Flag>
        {country}
      </Heading>
    </HeaderContainer>
  )
}

Header.propTypes = {
  country: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
}
