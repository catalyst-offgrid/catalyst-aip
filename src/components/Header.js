import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import theme from '../config/theme'

const HeaderContainer = styled.header`
  padding: ${theme.space[3]}px;
`

export default function Header({ siteName, headline }) {
  return (
    <HeaderContainer>
      <span>{siteName}</span>
      <h1>
        <span role='img' aria-label='flag-ke'>
          🇰🇪
        </span>{' '}
        {headline}
      </h1>
      <p>
        m ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
        incididunt ut labore et dolore magna aliqua.Ut enim ad min quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
}
