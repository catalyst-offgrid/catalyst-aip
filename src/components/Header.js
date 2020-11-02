import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  padding: ${({ theme }) => `${theme.space[4]}px ${theme.space[3]}px`};
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[4]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  margin: 0;

  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => `${theme.space[2]}px`};
`

const Tagline = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[0]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
`

const Flag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[3]}pt;
`

export default function Header({ siteName, country, cc }) {
  const ASCII_OFFSET = 127397
  const chars = [...cc.toUpperCase()].map((c) => c.charCodeAt() + ASCII_OFFSET)
  const flag = String.fromCodePoint(...chars)

  return (
    <HeaderContainer>
      <Tagline>{siteName}</Tagline>
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
  siteName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
}
